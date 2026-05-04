// questions.js — DSGVO & LAP Applikationsentwickler Quiz
// Zum Erweitern: Objekt mit id, question, answers[], correct (0-basierter Index), explanation hinzufügen.

const QUESTIONS = [
  // ── DSGVO Grundlagen ──────────────────────────────────────────────────────
  {
    id: 1,
    topic: "DSGVO Grundlagen",
    question: "Was ist die Datenschutz-Grundverordnung (DSGVO)?",
    answers: [
      "Ein österreichisches Bundesgesetz zum Datenschutz",
      "Eine EU-Verordnung, die den Datenschutz in der gesamten EU einheitlich regelt",
      "Ein internationales Abkommen zwischen EU und USA",
      "Eine ISO-Norm für IT-Sicherheit"
    ],
    correct: 1,
    explanation: "Die DSGVO (Verordnung (EU) 2016/679) ist eine EU-Verordnung, die seit 25. Mai 2018 in allen Mitgliedstaaten unmittelbar gilt."
  },
  {
    id: 2,
    topic: "DSGVO Grundlagen",
    question: "Seit wann ist die DSGVO in der EU verbindlich anwendbar?",
    answers: [
      "25. Mai 2016",
      "1. Januar 2018",
      "25. Mai 2018",
      "31. Dezember 2019"
    ],
    correct: 2,
    explanation: "Die DSGVO trat am 24. Mai 2016 in Kraft, galt aber erst ab dem 25. Mai 2018 verbindlich."
  },
  {
    id: 3,
    topic: "DSGVO Grundlagen",
    question: "Was versteht man laut DSGVO unter \"personenbezogenen Daten\"?",
    answers: [
      "Nur Name und Adresse einer natürlichen Person",
      "Alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen",
      "Daten, die ausschließlich im Internet gespeichert werden",
      "Geschäftsdaten juristischer Personen"
    ],
    correct: 1,
    explanation: "Art. 4 Nr. 1 DSGVO: Personenbezogene Daten sind alle Informationen über eine identifizierte oder identifizierbare natürliche Person (z. B. Name, IP-Adresse, Standortdaten)."
  },
  {
    id: 4,
    topic: "DSGVO Grundlagen",
    question: "Welches Prinzip schreibt vor, dass nur so viele Daten erhoben werden dürfen, wie für den Zweck notwendig sind?",
    answers: [
      "Transparenzprinzip",
      "Datensparsamkeit (Datenminimierung)",
      "Integrität",
      "Rechenschaftspflicht"
    ],
    correct: 1,
    explanation: "Art. 5 Abs. 1 lit. c DSGVO: Datensparsamkeit bedeutet, dass personenbezogene Daten dem Zweck angemessen, erheblich sowie auf das notwendige Maß beschränkt sein müssen."
  },
  {
    id: 5,
    topic: "DSGVO Grundlagen",
    question: "Welche der folgenden Grundsätze der Verarbeitung ist NICHT in Art. 5 DSGVO enthalten?",
    answers: [
      "Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz",
      "Zweckbindung",
      "Gewinnmaximierung",
      "Speicherbegrenzung"
    ],
    correct: 2,
    explanation: "Art. 5 DSGVO nennt u. a.: Rechtmäßigkeit, Zweckbindung, Datenminimierung, Richtigkeit, Speicherbegrenzung, Integrität & Vertraulichkeit, Rechenschaftspflicht. Gewinnmaximierung ist kein Datenschutzgrundsatz."
  },
  {
    id: 6,
    topic: "DSGVO Grundlagen",
    question: "Wer ist laut DSGVO der \"Verantwortliche\"?",
    answers: [
      "Die Datenschutzbehörde",
      "Die natürliche oder juristische Person, die über Zwecke und Mittel der Verarbeitung entscheidet",
      "Der Auftragsverarbeiter",
      "Der Datenschutzbeauftragte"
    ],
    correct: 1,
    explanation: "Art. 4 Nr. 7 DSGVO: Der Verantwortliche bestimmt allein oder gemeinsam mit anderen die Zwecke und Mittel der Verarbeitung personenbezogener Daten."
  },

  // ── Rechtsgrundlagen ──────────────────────────────────────────────────────
  {
    id: 7,
    topic: "Rechtsgrundlagen",
    question: "Welche der folgenden ist KEINE gültige Rechtsgrundlage für die Datenverarbeitung laut Art. 6 DSGVO?",
    answers: [
      "Einwilligung der betroffenen Person",
      "Erfüllung eines Vertrages",
      "Kommerzielle Interessen Dritter ohne Interessenabwägung",
      "Erfüllung einer rechtlichen Verpflichtung"
    ],
    correct: 2,
    explanation: "Art. 6 DSGVO listet sechs Rechtsgrundlagen. Rein kommerzielle Interessen Dritter ohne Interessenabwägung (Art. 6 Abs. 1 lit. f) sind keine eigenständige Grundlage."
  },
  {
    id: 8,
    topic: "Rechtsgrundlagen",
    question: "Welche Anforderungen stellt die DSGVO an eine wirksame Einwilligung?",
    answers: [
      "Mündlich, konkludent oder durch Schweigen möglich",
      "Freiwillig, spezifisch, informiert und unmissverständlich",
      "Nur schriftlich und notariell beglaubigt",
      "Einmalig für alle künftigen Verarbeitungen"
    ],
    correct: 1,
    explanation: "Art. 7 i. V. m. Art. 4 Nr. 11 DSGVO: Eine Einwilligung muss freiwillig, für einen bestimmten Zweck, informiert und unmissverständlich abgegeben werden. Schweigen gilt NICHT als Einwilligung."
  },
  {
    id: 9,
    topic: "Rechtsgrundlagen",
    question: "Kann eine einmal gegebene Einwilligung laut DSGVO widerrufen werden?",
    answers: [
      "Nein, eine erteilte Einwilligung ist endgültig",
      "Ja, jederzeit, ohne dass die Rechtmäßigkeit der bisherigen Verarbeitung berührt wird",
      "Ja, aber nur innerhalb von 30 Tagen",
      "Nur wenn ein Gericht dies anordnet"
    ],
    correct: 1,
    explanation: "Art. 7 Abs. 3 DSGVO: Die betroffene Person kann ihre Einwilligung jederzeit widerrufen. Der Widerruf berührt nicht die Rechtmäßigkeit der Verarbeitung vor dem Widerruf."
  },

  // ── Betroffenenrechte ─────────────────────────────────────────────────────
  {
    id: 10,
    topic: "Betroffenenrechte",
    question: "Was bedeutet das \"Recht auf Vergessenwerden\" laut DSGVO?",
    answers: [
      "Das Recht, dass historische Ereignisse gelöscht werden",
      "Das Recht der betroffenen Person, die Löschung ihrer personenbezogenen Daten zu verlangen",
      "Das Recht auf Anonymisierung aller öffentlichen Daten",
      "Das Recht, Auskünfte zu verweigern"
    ],
    correct: 1,
    explanation: "Art. 17 DSGVO: Das Recht auf Löschung (\"Recht auf Vergessenwerden\") ermöglicht es Betroffenen, unter bestimmten Voraussetzungen die Löschung ihrer Daten zu verlangen."
  },
  {
    id: 11,
    topic: "Betroffenenrechte",
    question: "Innerhalb welcher Frist muss ein Verantwortlicher auf ein Auskunftsersuchen (Art. 15 DSGVO) reagieren?",
    answers: [
      "Sofort, spätestens innerhalb von 24 Stunden",
      "Innerhalb von einem Monat, verlängerbar um weitere zwei Monate",
      "Innerhalb von sechs Monaten",
      "Keine gesetzliche Frist"
    ],
    correct: 1,
    explanation: "Art. 12 Abs. 3 DSGVO: Antwort binnen eines Monats; bei Komplexität oder vielen Anfragen Verlängerung um weitere zwei Monate möglich (mit Begründung)."
  },
  {
    id: 12,
    topic: "Betroffenenrechte",
    question: "Was umfasst das Recht auf Datenübertragbarkeit (Art. 20 DSGVO)?",
    answers: [
      "Das Recht, Daten in jedem beliebigen Format zu erhalten",
      "Das Recht, die eigenen Daten in einem strukturierten, gängigen, maschinenlesbaren Format zu erhalten und an einen anderen Verantwortlichen zu übertragen",
      "Das Recht, Daten auf Papier ausgedruckt zu erhalten",
      "Gilt für alle Arten der Verarbeitung"
    ],
    correct: 1,
    explanation: "Art. 20 DSGVO: Gilt nur bei automatisierter Verarbeitung auf Basis von Einwilligung oder Vertrag. Format muss strukturiert, gängig und maschinenlesbar sein (z. B. JSON, CSV)."
  },
  {
    id: 13,
    topic: "Betroffenenrechte",
    question: "Wann darf das Recht auf Widerspruch (Art. 21 DSGVO) ausgeübt werden?",
    answers: [
      "Immer und ohne Begründung gegen jede Verarbeitung",
      "Bei Verarbeitung auf Basis berechtigter Interessen oder für Direktwerbung",
      "Nur bei automatisierter Entscheidungsfindung",
      "Nur vor der ersten Datenerhebung"
    ],
    correct: 1,
    explanation: "Art. 21 DSGVO: Widerspruch ist möglich bei Verarbeitung gem. Art. 6 Abs. 1 lit. e oder f. Bei Direktwerbung ist der Widerspruch immer ohne Angabe von Gründen möglich."
  },

  // ── Datenschutzbeauftragter (DSB) ─────────────────────────────────────────
  {
    id: 14,
    topic: "Datenschutzbeauftragter",
    question: "Wann ist ein Datenschutzbeauftragter (DSB) laut DSGVO zwingend zu benennen?",
    answers: [
      "Bei jedem Unternehmen mit mehr als 5 Mitarbeitern",
      "Bei Behörden, bei umfangreicher Verarbeitung sensibler Daten oder bei systematischer Überwachung",
      "Nur im öffentlichen Sektor",
      "Nur bei internationalen Konzernen"
    ],
    correct: 1,
    explanation: "Art. 37 DSGVO: DSB ist Pflicht für öffentliche Stellen, bei umfangreicher Verarbeitung besonderer Kategorien (Art. 9) sowie bei systematischer, umfangreicher Beobachtung."
  },
  {
    id: 15,
    topic: "Datenschutzbeauftragter",
    question: "Welche Aufgabe hat der Datenschutzbeauftragte NICHT?",
    answers: [
      "Unterrichtung und Beratung des Verantwortlichen",
      "Überwachung der Einhaltung der DSGVO",
      "Persönliche Haftung für Datenschutzverstöße des Unternehmens",
      "Zusammenarbeit mit der Aufsichtsbehörde"
    ],
    correct: 2,
    explanation: "Art. 39 DSGVO: Der DSB berät, überwacht und ist Ansprechpartner. Er haftet jedoch nicht persönlich für Verstöße — Verantwortlicher bleibt das Unternehmen."
  },

  // ── Datenpannen & Meldepflicht ────────────────────────────────────────────
  {
    id: 16,
    topic: "Datenpannen",
    question: "Innerhalb welcher Frist muss eine Datenpanne der Aufsichtsbehörde gemeldet werden?",
    answers: [
      "Sofort, innerhalb von 12 Stunden",
      "Innerhalb von 72 Stunden nach Bekanntwerden",
      "Innerhalb von 30 Tagen",
      "Nur wenn die Behörde aktiv nachfragt"
    ],
    correct: 1,
    explanation: "Art. 33 DSGVO: Bei einer Verletzung des Schutzes personenbezogener Daten muss der Verantwortliche die Aufsichtsbehörde unverzüglich und möglichst innerhalb von 72 Stunden benachrichtigen."
  },
  {
    id: 17,
    topic: "Datenpannen",
    question: "Wann müssen auch die betroffenen Personen selbst über eine Datenpanne informiert werden?",
    answers: [
      "Immer, bei jeder Datenpanne",
      "Wenn die Panne voraussichtlich ein hohes Risiko für die Rechte und Freiheiten der Betroffenen zur Folge hat",
      "Nur wenn mehr als 1.000 Personen betroffen sind",
      "Nie — das ist Aufgabe der Aufsichtsbehörde"
    ],
    correct: 1,
    explanation: "Art. 34 DSGVO: Die Benachrichtigung der Betroffenen ist nur bei voraussichtlich hohem Risiko erforderlich (z. B. Identitätsdiebstahl, finanzielle Schäden)."
  },

  // ── Datenschutz-Folgenabschätzung (DSFA) ──────────────────────────────────
  {
    id: 18,
    topic: "DSFA",
    question: "Wann ist eine Datenschutz-Folgenabschätzung (DSFA) gemäß Art. 35 DSGVO durchzuführen?",
    answers: [
      "Bei jeder neuen App-Entwicklung",
      "Wenn die Verarbeitung voraussichtlich ein hohes Risiko für die Rechte und Freiheiten natürlicher Personen zur Folge hat",
      "Nur bei Verarbeitung von mehr als 10.000 Datensätzen",
      "Ausschließlich im öffentlichen Sektor"
    ],
    correct: 1,
    explanation: "Art. 35 DSGVO: DSFA ist erforderlich bei voraussichtlich hohem Risiko, z. B. systematische Überwachung, Verarbeitung besonderer Datenkategorien in großem Umfang, Profiling."
  },

  // ── Privacy by Design & Default ───────────────────────────────────────────
  {
    id: 19,
    topic: "Privacy by Design",
    question: "Was bedeutet \"Privacy by Design\" laut Art. 25 DSGVO?",
    answers: [
      "Datenschutz wird nachträglich in bestehende Systeme eingebaut",
      "Datenschutzmaßnahmen werden bereits bei der Entwicklung von Systemen und Prozessen berücksichtigt",
      "Nur externe Systeme müssen Datenschutz einhalten",
      "Anonymisierung aller Daten nach der Erhebung"
    ],
    correct: 1,
    explanation: "Art. 25 Abs. 1 DSGVO: Datenschutz durch Technikgestaltung — Datenschutzmaßnahmen müssen zum Zeitpunkt der Festlegung der Mittel und bei der Verarbeitung selbst integriert sein."
  },
  {
    id: 20,
    topic: "Privacy by Design",
    question: "Was bedeutet \"Privacy by Default\" (Datenschutz durch datenschutzfreundliche Voreinstellungen)?",
    answers: [
      "Standardmäßig werden alle Daten mit Dritten geteilt",
      "Die Voreinstellungen eines Systems sollen nur die für den jeweiligen Zweck notwendigen Daten verarbeiten",
      "Benutzer müssen Datenschutz manuell aktivieren",
      "Alle Daten werden standardmäßig verschlüsselt gespeichert"
    ],
    correct: 1,
    explanation: "Art. 25 Abs. 2 DSGVO: Voreinstellungen müssen datenschutzfreundlich sein — standardmäßig dürfen nicht mehr Daten verarbeitet werden, als für den Zweck notwendig ist."
  },

  // ── Auftragsverarbeitung ──────────────────────────────────────────────────
  {
    id: 21,
    topic: "Auftragsverarbeitung",
    question: "Was ist bei der Auftragsverarbeitung (Art. 28 DSGVO) zwingend erforderlich?",
    answers: [
      "Mündliche Absprache zwischen Verantwortlichem und Auftragsverarbeiter",
      "Ein schriftlicher Auftragsverarbeitungsvertrag (AVV)",
      "Genehmigung durch die Datenschutzbehörde",
      "Nur eine interne Richtlinie des Verantwortlichen"
    ],
    correct: 1,
    explanation: "Art. 28 Abs. 3 DSGVO: Die Verarbeitung durch einen Auftragsverarbeiter erfolgt auf der Grundlage eines Vertrags oder Rechtsakts (AVV), der schriftlich (auch elektronisch) abzufassen ist."
  },
  {
    id: 22,
    topic: "Auftragsverarbeitung",
    question: "Ein Cloud-Anbieter verarbeitet Kundendaten im Auftrag eines Unternehmens. Wie ist der Cloud-Anbieter datenschutzrechtlich einzustufen?",
    answers: [
      "Als eigenständiger Verantwortlicher",
      "Als Auftragsverarbeiter",
      "Als gemeinsam Verantwortlicher",
      "Er unterliegt keiner DSGVO-Pflicht"
    ],
    correct: 1,
    explanation: "Verarbeitet der Cloud-Anbieter Daten ausschließlich nach Weisung des Kunden, ist er Auftragsverarbeiter (Art. 4 Nr. 8 DSGVO) und ein AVV ist erforderlich."
  },

  // ── Drittstaatentransfer ───────────────────────────────────────────────────
  {
    id: 23,
    topic: "Drittstaatentransfer",
    question: "Welches Instrument ermöglicht den rechtmäßigen Transfer personenbezogener Daten in ein Drittland ohne Angemessenheitsbeschluss?",
    answers: [
      "Einwilligung ist immer ausreichend",
      "Standardvertragsklauseln (SCC) der EU-Kommission",
      "Ein einfaches Datenschutzgesetz des Drittlandes",
      "Übermittlung ist generell verboten"
    ],
    correct: 1,
    explanation: "Art. 46 DSGVO: Standardvertragsklauseln (SCC), verbindliche interne Datenschutzvorschriften (BCR) oder anerkannte Verhaltenskodizes sind geeignete Garantien für Drittstaatentransfers."
  },
  {
    id: 24,
    topic: "Drittstaatentransfer",
    question: "Was ist ein Angemessenheitsbeschluss der EU-Kommission?",
    answers: [
      "Ein Beschluss, der festlegt, dass ein Drittland ein angemessenes Datenschutzniveau bietet",
      "Eine Strafe der EU-Kommission gegen ein Unternehmen",
      "Ein Vertrag zwischen zwei EU-Mitgliedstaaten",
      "Eine technische Norm für Verschlüsselung"
    ],
    correct: 0,
    explanation: "Art. 45 DSGVO: Mit einem Angemessenheitsbeschluss stellt die Kommission fest, dass ein Drittland gleichwertigen Datenschutz bietet (z. B. Japan, UK). Dann sind keine weiteren Garantien nötig."
  },

  // ── Bußgelder & Sanktionen ────────────────────────────────────────────────
  {
    id: 25,
    topic: "Bußgelder",
    question: "Wie hoch ist die maximale Geldbuße bei schwerwiegenden DSGVO-Verstößen (z. B. Verletzung der Grundsätze)?",
    answers: [
      "Bis zu 500.000 Euro",
      "Bis zu 2 % des weltweiten Jahresumsatzes",
      "Bis zu 20 Millionen Euro oder 4 % des weltweiten Jahresumsatzes (je nachdem, was höher ist)",
      "Bis zu 10 Millionen Euro, maximal aber 2 % des Umsatzes"
    ],
    correct: 2,
    explanation: "Art. 83 Abs. 5 DSGVO: Für schwerwiegende Verstöße (z. B. Grundsätze, Einwilligungsregeln, Betroffenenrechte) drohen bis zu 20 Mio. € oder 4 % des weltweiten Jahresumsatzes."
  },
  {
    id: 26,
    topic: "Bußgelder",
    question: "Welche österreichische Behörde ist für die Aufsicht über die Einhaltung der DSGVO in Österreich zuständig?",
    answers: [
      "Bundesministerium für Digitalisierung",
      "Datenschutzbehörde (DSB)",
      "Bundeskanzleramt",
      "Wirtschaftskammer Österreich (WKO)"
    ],
    correct: 1,
    explanation: "Die österreichische Datenschutzbehörde (DSB) ist die nationale Aufsichtsbehörde. Sie bearbeitet Beschwerden und verhängt Sanktionen nach der DSGVO und dem DSG 2018."
  },

  // ── Verarbeitungsverzeichnis ──────────────────────────────────────────────
  {
    id: 27,
    topic: "Verarbeitungsverzeichnis",
    question: "Was ist das Verzeichnis von Verarbeitungstätigkeiten (Art. 30 DSGVO)?",
    answers: [
      "Ein öffentliches Register aller Datenbanken eines Unternehmens",
      "Eine interne Dokumentation aller Verarbeitungstätigkeiten mit Angaben zu Zweck, Kategorien und Löschfristen",
      "Ein Protokoll aller Datenpannen",
      "Eine Liste aller Einwilligungen der Betroffenen"
    ],
    correct: 1,
    explanation: "Art. 30 DSGVO: Das Verarbeitungsverzeichnis ist eine interne Pflichtdokumentation und enthält u. a. Name des Verantwortlichen, Zweck, Datenkategorien, Empfänger und Löschfristen."
  },
  {
    id: 28,
    topic: "Verarbeitungsverzeichnis",
    question: "Welche Unternehmen sind von der Pflicht zum Verarbeitungsverzeichnis ausgenommen?",
    answers: [
      "Unternehmen mit weniger als 50 Mitarbeitern",
      "Unternehmen mit weniger als 250 Mitarbeitern, sofern bestimmte Voraussetzungen erfüllt sind",
      "Alle kleinen und mittleren Unternehmen (KMU)",
      "Nur gemeinnützige Organisationen"
    ],
    correct: 1,
    explanation: "Art. 30 Abs. 5 DSGVO: Unternehmen mit weniger als 250 Mitarbeitern sind unter bestimmten Bedingungen ausgenommen (sofern keine regelmäßige Verarbeitung, keine besonderen Kategorien und kein Risiko)."
  },

  // ── Besondere Datenkategorien ─────────────────────────────────────────────
  {
    id: 29,
    topic: "Besondere Datenkategorien",
    question: "Welche Datenkategorien genießen nach Art. 9 DSGVO besonderen Schutz?",
    answers: [
      "Name, Adresse, Telefonnummer",
      "Gesundheitsdaten, biometrische Daten, religiöse Überzeugungen, politische Meinungen",
      "IP-Adressen und Cookies",
      "Kaufhistorie und Präferenzen"
    ],
    correct: 1,
    explanation: "Art. 9 DSGVO schützt besonders sensible Daten wie Gesundheitsdaten, genetische/biometrische Daten, Rasse/Ethnizität, politische Meinungen, religiöse/weltanschauliche Überzeugungen, Gewerkschaftszugehörigkeit, Sexualleben."
  },

  // ── Urheberrecht ──────────────────────────────────────────────────────────
  {
    id: 30,
    topic: "Urheberrecht",
    question: "Was schützt das Urheberrecht in Österreich (UrhG)?",
    answers: [
      "Ideen und Konzepte",
      "Persönliche geistige Schöpfungen (Werke) wie Software, Texte, Musik, Bilder",
      "Technische Erfindungen (Patente)",
      "Unternehmensbezeichnungen (Marken)"
    ],
    correct: 1,
    explanation: "Das österreichische UrhG schützt Werke der Literatur, Tonkunst, bildenden Kunst und Filmkunst sowie Computerprogramme — aber nicht bloße Ideen oder Konzepte."
  },
  {
    id: 31,
    topic: "Urheberrecht",
    question: "Wann entsteht das Urheberrecht an einem Werk?",
    answers: [
      "Nach Registrierung beim Patentamt",
      "Automatisch mit der Schöpfung des Werkes, ohne Registrierung",
      "Erst nach Veröffentlichung",
      "Nach 6 Monaten Wartezeit"
    ],
    correct: 1,
    explanation: "Im österreichischen und europäischen Urheberrecht entsteht das Urheberrecht automatisch mit der Schöpfung des Werkes — keine Registrierung oder formelle Anmeldung erforderlich."
  },
  {
    id: 32,
    topic: "Urheberrecht",
    question: "Wie lange dauert der Urheberrechtsschutz an einem Werk nach österreichischem Recht?",
    answers: [
      "20 Jahre nach Schöpfung",
      "50 Jahre nach Veröffentlichung",
      "70 Jahre nach dem Tod des Urhebers",
      "Unbegrenzt"
    ],
    correct: 2,
    explanation: "§ 60 UrhG: Das Urheberrecht erlischt 70 Jahre nach dem Tod des Urhebers (post mortem auctoris). Dies entspricht der EU-Richtlinie 2006/116/EG."
  },
  {
    id: 33,
    topic: "Urheberrecht",
    question: "Wie ist Software (Computerprogramme) urheberrechtlich geschützt?",
    answers: [
      "Wie ein literarisches Werk",
      "Wie ein Patent",
      "Wie eine Datenbank",
      "Durch ein eigenes Softwareschutzgesetz"
    ],
    correct: 0,
    explanation: "Computerprogramme werden laut EU-Richtlinie 2009/24/EG und § 40a UrhG wie literarische Werke geschützt. Voraussetzung ist eine individuelle geistige Schöpfung."
  },

  // ── Open Source & Lizenzen ────────────────────────────────────────────────
  {
    id: 34,
    topic: "Softwarelizenzen",
    question: "Was ist ein charakteristisches Merkmal der GNU General Public License (GPL)?",
    answers: [
      "Der Quellcode darf nicht weitergegeben werden",
      "Copyleft: Abgeleitete Werke müssen ebenfalls unter der GPL veröffentlicht werden",
      "Kommerzielle Nutzung ist verboten",
      "Keine Haftungsbeschränkung"
    ],
    correct: 1,
    explanation: "Die GPL ist eine Copyleft-Lizenz: Wer GPL-Software verbreitet oder verändert, muss den Quellcode unter der GPL zugänglich machen. Dies gilt auch für Modifikationen und abgeleitete Werke."
  },
  {
    id: 35,
    topic: "Softwarelizenzen",
    question: "Was erlaubt die MIT-Lizenz im Vergleich zur GPL?",
    answers: [
      "Nur nicht-kommerzielle Nutzung",
      "Nutzung, Änderung und Verteilung auch in proprietären/kommerziellen Projekten ohne Copyleft-Pflicht",
      "Nutzung nur mit Genehmigung des Autors",
      "Nur akademische Nutzung"
    ],
    correct: 1,
    explanation: "Die MIT-Lizenz ist eine permissive Open-Source-Lizenz ohne Copyleft. Software darf in proprietäre Projekte integriert werden, solange der Copyright-Hinweis beibehalten wird."
  },
  {
    id: 36,
    topic: "Softwarelizenzen",
    question: "Was ist der Hauptunterschied zwischen der Apache 2.0 Lizenz und der MIT-Lizenz?",
    answers: [
      "Apache 2.0 erlaubt keine kommerzielle Nutzung",
      "Apache 2.0 enthält eine explizite Patentlizenz und -klage-Schutzklausel",
      "MIT erfordert Offenlegung des Quellcodes",
      "Kein wesentlicher Unterschied"
    ],
    correct: 1,
    explanation: "Apache 2.0 beinhaltet eine ausdrückliche Gewährung von Patentrechten und eine Klausel, die den Lizenznehmer schützt, wenn der Lizenzgeber Patentansprüche geltend macht."
  },
  {
    id: 37,
    topic: "Softwarelizenzen",
    question: "Was bedeutet \"Copyleft\" bei Open-Source-Lizenzen?",
    answers: [
      "Die Software ist kostenlos nutzbar",
      "Abgeleitete Werke müssen unter derselben oder einer kompatiblen Lizenz veröffentlicht werden",
      "Der Quellcode gehört der Öffentlichkeit",
      "Das Urheberrecht ist aufgehoben"
    ],
    correct: 1,
    explanation: "Copyleft (wie bei GPL, LGPL, AGPL) verpflichtet dazu, Modifikationen und abgeleitete Werke unter der gleichen Lizenz zu veröffentlichen — es überträgt die Offenheitspflicht."
  },
  {
    id: 38,
    topic: "Softwarelizenzen",
    question: "Was ist Creative Commons (CC)?",
    answers: [
      "Eine Open-Source-Lizenz für Software",
      "Ein Lizenzsystem für kreative Werke (Texte, Bilder, Musik), nicht für Software",
      "Eine EU-Datenschutzbehörde",
      "Ein Softwareentwicklungsframework"
    ],
    correct: 1,
    explanation: "Creative Commons bietet standardisierte Lizenzen für kreative Werke. Für Software wird CC selbst nicht empfohlen — dafür gibt es spezialisierte Lizenzen wie MIT, GPL oder Apache."
  },

  // ── IT-Sicherheit & Datensicherheit ──────────────────────────────────────
  {
    id: 39,
    topic: "IT-Sicherheit",
    question: "Was versteht man unter \"Pseudonymisierung\" laut DSGVO?",
    answers: [
      "Vollständige Löschung personenbezogener Daten",
      "Verarbeitung personenbezogener Daten so, dass sie ohne Zusatzinformationen keiner Person mehr zugeordnet werden können",
      "Verschlüsselung mit öffentlichem Schlüssel",
      "Anonymisierung durch Aggregation"
    ],
    correct: 1,
    explanation: "Art. 4 Nr. 5 DSGVO: Pseudonymisierung ersetzt direkte Identifikatoren durch Pseudonyme. Da mit Zusatzinformation eine Re-Identifikation möglich ist, bleiben es personenbezogene Daten."
  },
  {
    id: 40,
    topic: "IT-Sicherheit",
    question: "Was ist der Unterschied zwischen Pseudonymisierung und Anonymisierung?",
    answers: [
      "Kein Unterschied",
      "Anonymisierte Daten können nicht re-identifiziert werden; pseudonymisierte Daten schon (mit Zusatzinformation)",
      "Pseudonymisierung ist stärker als Anonymisierung",
      "Anonymisierung ist nur bei Gesundheitsdaten relevant"
    ],
    correct: 1,
    explanation: "Anonymisierte Daten fallen nicht mehr unter die DSGVO, da kein Personenbezug herstellbar ist. Pseudonymisierte Daten bleiben personenbezogen, da Re-Identifikation mit Zusatzdaten möglich ist."
  },
  {
    id: 41,
    topic: "IT-Sicherheit",
    question: "Was ist das Schutzziel \"Vertraulichkeit\" in der IT-Sicherheit?",
    answers: [
      "Daten sind immer verfügbar",
      "Nur autorisierte Personen haben Zugriff auf Daten",
      "Daten werden nicht unbemerkt verändert",
      "Aktionen können einem Benutzer zugeordnet werden"
    ],
    correct: 1,
    explanation: "Die drei IT-Sicherheitsziele sind: Vertraulichkeit (nur Berechtigte haben Zugang), Integrität (Daten unverändert) und Verfügbarkeit (Zugang wenn benötigt)."
  },
  {
    id: 42,
    topic: "IT-Sicherheit",
    question: "Was ist Social Engineering?",
    answers: [
      "Softwareentwicklung nach agilen Methoden",
      "Manipulation von Menschen, um an vertrauliche Informationen oder Zugang zu Systemen zu gelangen",
      "Netzwerkinfrastruktur-Planung",
      "Ein Scrum-Framework für Teams"
    ],
    correct: 1,
    explanation: "Beim Social Engineering werden Menschen (nicht Systeme) durch psychologische Manipulation ausgetrickst — häufige Methoden sind Phishing, Pretexting und Vishing."
  },
  {
    id: 43,
    topic: "IT-Sicherheit",
    question: "Was versteht man unter einem \"SQL-Injection\"-Angriff?",
    answers: [
      "Einschleusen von SQL-Befehlen über Benutzereingaben, um unbefugten Datenbankzugriff zu erlangen",
      "Physischer Zugriff auf einen Datenbankserver",
      "Eine Methode zur Datenbankoptimierung",
      "Ein Protokoll zur Datenübertragung"
    ],
    correct: 0,
    explanation: "SQL-Injection ist eine der häufigsten Sicherheitslücken (OWASP Top 10). Angreifer schleusen SQL-Code in Eingabefelder ein, um Datenbankabfragen zu manipulieren."
  },
  {
    id: 44,
    topic: "IT-Sicherheit",
    question: "Was ist HTTPS und warum ist es für den Datenschutz relevant?",
    answers: [
      "Ein Email-Protokoll",
      "HTTP mit TLS-Verschlüsselung — schützt Daten während der Übertragung vor Abhören",
      "Ein Datenbank-Zugriffsprotokoll",
      "Ein Authentifizierungsstandard"
    ],
    correct: 1,
    explanation: "HTTPS (HTTP Secure) verwendet TLS-Verschlüsselung, um Daten zwischen Browser und Server verschlüsselt zu übertragen. Laut DSGVO Art. 32 sind geeignete technische Maßnahmen zum Schutz Pflicht."
  },

  // ── ECG / E-Commerce & Österreich ─────────────────────────────────────────
  {
    id: 45,
    topic: "E-Commerce & Österreich",
    question: "Was regelt das österreichische E-Commerce-Gesetz (ECG)?",
    answers: [
      "Den Datenschutz bei sozialen Netzwerken",
      "Informationspflichten, Vertragsabschluss und Verantwortlichkeit bei Online-Diensten",
      "Den Schutz von Computerprogrammen",
      "Die Besteuerung digitaler Dienstleistungen"
    ],
    correct: 1,
    explanation: "Das ECG (BGBl. I Nr. 152/2001) setzt die EU-Richtlinie 2000/31/EG um und regelt u. a. Informationspflichten von Diensteanbietern, Vertragsabschluss im Internet und die Haftung von Hostinganbietern."
  },
  {
    id: 46,
    topic: "E-Commerce & Österreich",
    question: "Welche Pflichtangaben müssen laut ECG im Impressum einer österreichischen Website stehen?",
    answers: [
      "Nur der Name des Unternehmens",
      "Name/Firma, Rechtsform, Anschrift, E-Mail, Firmenbuchnummer (wenn vorhanden), Aufsichtsbehörde",
      "Nur E-Mail und Telefonnummer",
      "USt-ID und IBAN"
    ],
    correct: 1,
    explanation: "§ 5 ECG: Diensteanbieter müssen Name/Firma, Anschrift, E-Mail sowie weitere Angaben (Firmenbuch, Gewerbe, Aufsicht) leicht zugänglich bereitstellen."
  },

  // ── ePrivacy / Cookie ─────────────────────────────────────────────────────
  {
    id: 47,
    topic: "ePrivacy & Cookies",
    question: "Wann dürfen Cookies laut ePrivacy-Richtlinie und österreichischem Recht ohne Einwilligung gesetzt werden?",
    answers: [
      "Immer, wenn ein Cookie-Banner angezeigt wird",
      "Nur bei technisch notwendigen Cookies (z. B. Session-Cookies, Warenkorb)",
      "Bei allen First-Party-Cookies",
      "Nie — jedes Cookie benötigt Einwilligung"
    ],
    correct: 1,
    explanation: "Technisch notwendige Cookies (die für die Grundfunktion der Website unbedingt erforderlich sind) benötigen keine Einwilligung. Analyse-, Marketing- und Tracking-Cookies hingegen schon."
  },
  {
    id: 48,
    topic: "ePrivacy & Cookies",
    question: "Was muss ein rechtsgültiger Cookie-Consent-Banner in Österreich ermöglichen?",
    answers: [
      "Nur die Zustimmung zu allen Cookies",
      "Informierte, freiwillige Zustimmung und ebenso einfache Ablehnung wie Zustimmung",
      "Ablehnung nach 30 Tagen automatisch",
      "Einwilligung durch Weitersurfen"
    ],
    correct: 1,
    explanation: "Nach DSGVO und ePrivacy-Richtlinie müssen Ablehnen und Zustimmen gleich einfach sein. \"Cookie-Walls\" (Zugang nur bei Zustimmung) sind in Österreich grundsätzlich unzulässig."
  },

  // ── Vertragsrecht & Haftung digital ──────────────────────────────────────
  {
    id: 49,
    topic: "Vertragsrecht digital",
    question: "Wann kommt ein Vertrag im Online-Shop laut österreichischem ABGB/ECG zustande?",
    answers: [
      "Bereits mit Einlegen in den Warenkorb",
      "Wenn der Kunde bestellt (Antrag) und der Anbieter die Bestellung bestätigt (Annahme)",
      "Erst mit Lieferung der Ware",
      "Erst nach Zahlung"
    ],
    correct: 1,
    explanation: "Ein Vertrag kommt durch übereinstimmende Willenserklärungen (Antrag + Annahme) zustande. Die automatische Bestellbestätigung per E-Mail ist in der Regel noch keine verbindliche Annahme — das hängt von der Formulierung ab."
  },
  {
    id: 50,
    topic: "DSGVO Österreich",
    question: "Welches österreichische Gesetz ergänzt die DSGVO auf nationaler Ebene?",
    answers: [
      "Datenschutzgesetz 2018 (DSG 2018)",
      "E-Government-Gesetz",
      "Telekommunikationsgesetz (TKG)",
      "Bundesgesetz über elektronische Signaturen (SigG)"
    ],
    correct: 0,
    explanation: "Das österreichische Datenschutzgesetz 2018 (DSG 2018, BGBl. I Nr. 165/1999 idF BGBl. I Nr. 24/2018) regelt nationale Öffnungsklauseln der DSGVO und benennt die Datenschutzbehörde als Aufsichtsbehörde."
  }
];
