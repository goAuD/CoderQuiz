"""Run the displayed SQL in disposable memory databases, never in a real server."""
from contextlib import closing
import json
from pathlib import Path
import sqlite3
import unittest
import xml.etree.ElementTree as ET


BANK = json.loads((Path(__file__).resolve().parents[1] / 'examples/lap-databases-1.json').read_text(encoding='utf-8'))
QUESTIONS = {q['id']: q for q in BANK['questions']}


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
        self.assertEqual(len(examples), 9)
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

    def test_xml_reading_sample_is_a_document_with_two_topic_elements(self):
        xml = QUESTIONS['lap-LAP-16-02-4']['code']
        document = ET.fromstring(xml)
        self.assertEqual(document.tag, 'topics')
        self.assertEqual([(topic.get('id'), topic.findtext('title')) for topic in document.findall('topic')], [('16', 'SQL'), ('17', 'Tests')])


if __name__ == '__main__':
    unittest.main()
