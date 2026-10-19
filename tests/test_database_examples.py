"""Run the displayed SQL in disposable memory databases, never in a real server."""
from contextlib import closing
import json
from pathlib import Path
import sqlite3
import unittest
import xml.etree.ElementTree as ET


EXAMPLES = Path(__file__).resolve().parents[1] / 'examples'
BANKS = [json.loads((EXAMPLES / f'lap-databases-{number}.json').read_text(encoding='utf-8')) for number in (1, 2, 3)]
QUESTIONS = {q['id']: q for bank in BANKS for q in bank['questions']}


def execute_example(database, code):
    """Keep SELECT results; each displayed statement ends on its own line."""
    statement = ''
    rows = []
    for line in code.splitlines(keepends=True):
        statement += line
        if sqlite3.complete_statement(statement):
            cursor = database.execute(statement)
            if cursor.description is not None:
                rows.extend([list(row) for row in cursor.fetchall()])
            statement = ''
    if statement.strip():
        raise AssertionError('The displayed SQL ends with an incomplete statement')
    return rows


class DatabaseExamplesTest(unittest.TestCase):
    def test_every_displayed_sql_example_has_the_documented_result(self):
        self.assertGreaterEqual(sqlite3.sqlite_version_info, (3, 16, 0))
        examples = [q for q in QUESTIONS.values() if q.get('codeLanguage') == 'sql']
        self.assertEqual(len(examples), 25)
        for question in examples:
            with self.subTest(question=question['id']):
                with closing(sqlite3.connect(':memory:', isolation_level=None)) as database:
                    self.assertEqual(execute_example(database, question['code']), question['expectedRows'])

    def test_optional_foreign_key_accepts_existing_parent_or_null_and_rejects_orphans(self):
        with closing(sqlite3.connect(':memory:', isolation_level=None)) as database:
            execute_example(database, QUESTIONS['lap-LAP-16-05-2']['code'])
            self.assertEqual(database.execute('PRAGMA foreign_keys').fetchone(), (1,))
            database.execute('INSERT INTO questions (id, topic_id) VALUES (1, 16), (2, NULL)')
            with self.assertRaises(sqlite3.IntegrityError):
                database.execute('INSERT INTO questions (id, topic_id) VALUES (3, 99)')
            with self.assertRaises(sqlite3.IntegrityError):
                database.execute('DELETE FROM topics WHERE id = 16')
            self.assertEqual(database.execute('SELECT topic_id FROM questions ORDER BY id').fetchall(), [(16,), (None,)])

    def test_range_check_accepts_boundaries_and_null_until_not_null_is_added(self):
        question = QUESTIONS['lap-LAP-16-05-3']
        with closing(sqlite3.connect(':memory:', isolation_level=None)) as database:
            execute_example(database, question['code'])
            for score in (0, 5, None):
                database.execute('INSERT INTO attempts (score) VALUES (?)', (score,))
            for score in (-1, 6):
                with self.subTest(score=score), self.assertRaises(sqlite3.IntegrityError):
                    database.execute('INSERT INTO attempts (score) VALUES (?)', (score,))
        # Check the additional rule suggested in the explanation against the same example.
        self.assertIn('score INTEGER CHECK', question['code'])
        required_score = question['code'].replace('score INTEGER CHECK', 'score INTEGER NOT NULL CHECK')
        with closing(sqlite3.connect(':memory:', isolation_level=None)) as database:
            with self.assertRaises(sqlite3.IntegrityError):
                execute_example(database, required_score)

    def test_explicit_text_primary_key_is_unique_and_required_but_title_can_repeat(self):
        with closing(sqlite3.connect(':memory:', isolation_level=None)) as database:
            execute_example(database, QUESTIONS['lap-LAP-16-05-4']['code'])
            database.execute("INSERT INTO questions (id, title) VALUES ('q2', 'SQL')")
            for key in ('q1', None):
                with self.subTest(key=key), self.assertRaises(sqlite3.IntegrityError):
                    database.execute('INSERT INTO questions (id, title) VALUES (?, ?)', (key, 'Another title'))
            self.assertEqual(database.execute('SELECT id, title FROM questions ORDER BY id').fetchall(), [('q1', 'SQL'), ('q2', 'SQL')])

    def test_unscoped_delete_is_rolled_back_with_all_rows_restored(self):
        with closing(sqlite3.connect(':memory:', isolation_level=None)) as database:
            rows = execute_example(database, QUESTIONS['lap-LAP-16-08-4']['code'])
            self.assertEqual(rows, [[0], [2]])
            self.assertFalse(database.in_transaction)
            self.assertEqual(database.execute('SELECT id FROM notes ORDER BY id').fetchall(), [(1,), (2,)])

    def test_composite_key_accepts_new_pairs_but_not_duplicates_or_null_parts(self):
        with closing(sqlite3.connect(':memory:', isolation_level=None)) as database:
            execute_example(database, QUESTIONS['lap-LAP-16-10-1']['code'])
            database.execute('INSERT INTO memberships VALUES (2, 10)')
            for pair in [(1, 10), (None, 12), (1, None)]:
                with self.subTest(pair=pair), self.assertRaises(sqlite3.IntegrityError):
                    database.execute('INSERT INTO memberships VALUES (?, ?)', pair)
            self.assertEqual(database.execute('SELECT student_id, course_id FROM memberships ORDER BY student_id, course_id').fetchall(), [(1, 10), (1, 11), (2, 10)])

    def test_set_null_keeps_child_but_still_rejects_a_nonexistent_manager(self):
        with closing(sqlite3.connect(':memory:', isolation_level=None)) as database:
            rows = execute_example(database, QUESTIONS['lap-LAP-16-10-2']['code'])
            self.assertEqual(rows, [[2, None]])
            with self.assertRaises(sqlite3.IntegrityError):
                database.execute('UPDATE employees SET manager_id = 99 WHERE id = 2')
            self.assertEqual(database.execute('SELECT id, manager_id FROM employees').fetchall(), [(2, None)])

    def test_junction_key_alone_does_not_verify_parent_existence(self):
        with closing(sqlite3.connect(':memory:', isolation_level=None)) as database:
            database.execute('PRAGMA foreign_keys = ON')
            execute_example(database, QUESTIONS['lap-LAP-16-10-5']['code'])
            # No parent tables or foreign keys exist in this deliberately incomplete model.
            database.execute("INSERT INTO enrollments VALUES (999, 888, '2026W')")
            with self.assertRaises(sqlite3.IntegrityError):
                database.execute("INSERT INTO enrollments VALUES (999, 888, '2027S')")

    def test_ordinary_index_allows_duplicates_while_unique_index_enforces_a_rule(self):
        with closing(sqlite3.connect(':memory:', isolation_level=None)) as database:
            execute_example(database, QUESTIONS['lap-LAP-16-11-5']['code'])
            with self.assertRaises(sqlite3.IntegrityError):
                database.execute('CREATE UNIQUE INDEX uq_contacts_email ON contacts(email)')
            database.execute('DELETE FROM contacts WHERE id = 2')
            database.execute('CREATE UNIQUE INDEX uq_contacts_email ON contacts(email)')
            with self.assertRaises(sqlite3.IntegrityError):
                database.execute("INSERT INTO contacts VALUES (3, 'team@example.test')")
            database.execute("INSERT INTO contacts VALUES (4, 'other@example.test')")

    def test_order_grain_avoids_join_multiplication_without_dropping_equal_amounts(self):
        with closing(sqlite3.connect(':memory:', isolation_level=None)) as database:
            self.assertEqual(execute_example(database, QUESTIONS['lap-LAP-16-17-4']['code']), [[9000]])
            self.assertEqual(database.execute('SELECT SUM(total_cents) FROM orders').fetchone(), (6000,))
            self.assertEqual(database.execute('SELECT SUM(DISTINCT total_cents) FROM orders').fetchone(), (3000,))
            database.execute('INSERT INTO orders VALUES (3, 3000)')
            self.assertEqual(database.execute('SELECT SUM(total_cents) FROM orders').fetchone(), (9000,))

    def test_complete_booking_schema_rejects_duplicates_orphans_and_referenced_parent_deletion(self):
        with closing(sqlite3.connect(':memory:', isolation_level=None)) as database:
            execute_example(database, QUESTIONS['lap-LAP-16-18-3']['code'])
            for pair in [(1, 10), (99, 10), (1, 99), (None, 10), (1, None)]:
                with self.subTest(pair=pair), self.assertRaises(sqlite3.IntegrityError):
                    database.execute('INSERT INTO bookings VALUES (?, ?)', pair)
            with self.assertRaises(sqlite3.IntegrityError):
                database.execute('DELETE FROM workshops WHERE id = 10')
            database.execute("INSERT INTO people VALUES (2, 'Noel')")
            database.execute('INSERT INTO bookings VALUES (2, 10)')
            self.assertEqual(database.execute('SELECT COUNT(*) FROM bookings').fetchone(), (3,))

    def test_reservation_constraints_accept_range_edges_and_reject_missing_or_out_of_range_values(self):
        with closing(sqlite3.connect(':memory:', isolation_level=None)) as database:
            execute_example(database, QUESTIONS['lap-LAP-16-18-4']['code'])
            database.execute('INSERT INTO reservations VALUES (2, 1), (3, 4)')
            for seats in [None, 0, 5]:
                with self.subTest(seats=seats), self.assertRaises(sqlite3.IntegrityError):
                    database.execute('INSERT INTO reservations VALUES (4, ?)', (seats,))
            with self.assertRaises(sqlite3.IntegrityError):
                database.execute('INSERT INTO reservations VALUES (1, 3)')

    def test_rollback_preserves_prior_commit_but_reverts_the_current_incomplete_transfer(self):
        with closing(sqlite3.connect(':memory:', isolation_level=None)) as database:
            execute_example(database, QUESTIONS['lap-LAP-16-19-3']['code'])
            self.assertFalse(database.in_transaction)
            database.execute('BEGIN')
            database.execute('UPDATE accounts SET balance_cents = balance_cents - 200 WHERE id = 1')
            database.execute('UPDATE accounts SET balance_cents = balance_cents + 200 WHERE id = 99')
            self.assertEqual(database.execute('SELECT changes()').fetchone(), (0,))
            self.assertTrue(database.in_transaction)
            self.assertEqual(database.execute('SELECT SUM(balance_cents) FROM accounts').fetchone(), (1300,))
            database.execute('ROLLBACK')
            self.assertEqual(database.execute('SELECT id, balance_cents FROM accounts ORDER BY id').fetchall(), [(1, 1000), (2, 500)])

    def test_xml_reading_sample_is_a_document_with_two_topic_elements(self):
        xml = QUESTIONS['lap-LAP-16-02-4']['code']
        document = ET.fromstring(xml)
        self.assertEqual(document.tag, 'topics')
        self.assertEqual([(topic.get('id'), topic.findtext('title')) for topic in document.findall('topic')], [('16', 'SQL'), ('17', 'Tests')])


if __name__ == '__main__':
    unittest.main()
