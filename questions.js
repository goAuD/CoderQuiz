// questions.js
// Zum Erweitern: Objekt mit id, question, answers[], correct (0-basiert), explanation hinzufügen.

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
    explanation: "Die DSGVO ist eine EU-Verordnung, die seit 25. Mai 2018 in allen Mitgliedstaaten unmittelbar gilt und den Schutz personenbezogener Daten vereinheitlicht."
  },
  {
    id: 2,
    topic: "DSGVO Grundlagen",
    question: "Seit wann ist die DSGVO verbindlich anzuwenden?",
    answers: [
      "1. Januar 2016",
      "25. Mai 2018",
      "1. Januar 2020",
      "31. Dezember 2022"
    ],
    correct: 1,
    explanation: "Die DSGVO trat zwar schon 2016 in Kraft, ist aber erst seit dem 25. Mai 2018 verbindlich anzuwenden."
  },
  {
    id: 3,
    topic: "DSGVO Grundlagen",
    question: "Was sind personenbezogene Daten?",
    answers: [
      "Nur Name und Adresse einer Person",
      "Alle Informationen, die eine natürliche Person identifizieren oder identifizierbar machen",
      "Ausschließlich digital gespeicherte Daten",
      "Nur Daten, die im Internet veröffentlicht wurden"
    ],
    correct: 1,
    explanation: "Personenbezogene Daten sind alle Informationen zu einer identifizierbaren natürlichen Person - z. B. Name, IP-Adresse, Foto oder Standortdaten."
  },
  {
    id: 4,
    topic: "DSGVO Grundlagen",
    question: "Was bedeutet der Grundsatz der Datensparsamkeit?",
    answers: [
      "Es werden so viele Daten wie möglich gesammelt",
      "Es werden nur so viele Daten erhoben, wie für den jeweiligen Zweck notwendig sind",
      "Alle Daten werden nach einem Jahr automatisch gelöscht",
      "Daten werden nur verschlüsselt gespeichert"
    ],
    correct: 1,
    explanation: "Datensparsamkeit: Es darf nur erhoben werden, was wirklich gebraucht wird. Für Entwickler bedeutet das: keine unnötigen Felder im Formular, keine unbegrenzten Logs."
  },
  {
    id: 5,
    topic: "DSGVO Grundlagen",
    question: "Was bedeutet Zweckbindung im Datenschutz?",
    answers: [
      "Daten müssen an einem bestimmten Ort gespeichert werden",
      "Daten dürfen nur für den Zweck verwendet werden, für den sie erhoben wurden",
      "Alle Datenverarbeitungen sind erlaubt",
      "Daten dürfen nur innerhalb der EU verwendet werden"
    ],
    correct: 1,
    explanation: "Zweckbindung: Daten dürfen nur für den konkreten Zweck genutzt werden, für den sie gesammelt wurden. Wer für den Newsletter erhebt, darf die Daten nicht für Werbung anderer Zwecke nutzen."
  },
  {
    id: 6,
    topic: "DSGVO Grundlagen",
    question: "Was ist der Unterschied zwischen Verantwortlichem und Auftragsverarbeiter?",
    answers: [
      "Kein Unterschied - beide sind gleichgestellt",
      "Der Verantwortliche bestimmt Zweck und Mittel der Verarbeitung; der Auftragsverarbeiter verarbeitet nur auf Weisung",
      "Der Auftragsverarbeiter haftet allein für alle Datenschutzverstöße",
      "Der Verantwortliche ist immer eine staatliche Behörde"
    ],
    correct: 1,
    explanation: "Der Verantwortliche entscheidet WARUM und WIE Daten verarbeitet werden. Der Auftragsverarbeiter (z. B. ein Cloud-Anbieter) verarbeitet nur nach Weisung. Ein Auftragsverarbeitungsvertrag (AVV) ist Pflicht."
  },
  {
    id: 7,
    topic: "DSGVO Grundlagen",
    question: "Welche der folgenden ist eine gültige Rechtsgrundlage für die Datenverarbeitung?",
    answers: [
      "Eigenes wirtschaftliches Interesse ohne weitere Prüfung",
      "Freiwillige Einwilligung der betroffenen Person",
      "Technische Möglichkeit der Speicherung",
      "Neugier des Unternehmens"
    ],
    correct: 1,
    explanation: "Ohne Rechtsgrundlage ist keine Verarbeitung erlaubt. Gültige Grundlagen sind z. B. Einwilligung, Vertragserfüllung, rechtliche Verpflichtung oder berechtigtes Interesse nach sorgfältiger Abwägung."
  },
  {
    id: 8,
    topic: "DSGVO Grundlagen",
    question: "Welche Anforderungen muss eine Einwilligung erfüllen?",
    answers: [
      "Mündlich oder durch Schweigen ist ausreichend",
      "Freiwillig, für einen konkreten Zweck, informiert und eindeutig",
      "Einmalig und für alle künftigen Datenverarbeitungen gültig",
      "Nur schriftlich und notariell beglaubigt"
    ],
    correct: 1,
    explanation: "Eine Einwilligung muss freiwillig, spezifisch, informiert und eindeutig abgegeben werden. Vorausgefüllte Checkboxen oder Schweigen gelten NICHT als Einwilligung."
  },
  {
    id: 9,
    topic: "DSGVO Grundlagen",
    question: "Kann eine einmal gegebene Einwilligung widerrufen werden?",
    answers: [
      "Nein, eine erteilte Einwilligung ist endgültig",
      "Ja, jederzeit - die bisherige Verarbeitung bleibt aber rechtmäßig",
      "Ja, aber nur innerhalb von 14 Tagen",
      "Nur wenn ein Gericht dies anordnet"
    ],
    correct: 1,
    explanation: "Eine Einwilligung kann jederzeit widerrufen werden. Danach muss die Verarbeitung eingestellt werden. Für Entwickler bedeutet das: eine Opt-out-Funktion muss technisch vorhanden sein."
  },

  // ── Betroffenenrechte ─────────────────────────────────────────────────────
  {
    id: 10,
    topic: "Betroffenenrechte",
    question: "Was bedeutet das Recht auf Vergessenwerden für eine Anwendung?",
    answers: [
      "Historische Ereignisse werden aus dem Internet gelöscht",
      "Nutzer können verlangen, dass ihre Daten aus dem System gelöscht werden",
      "Unternehmen müssen alle Daten nach 30 Tagen löschen",
      "Betrifft nur Suchmaschinen, nicht normale Apps"
    ],
    correct: 1,
    explanation: "Das Recht auf Löschung bedeutet für Entwickler: die App muss eine vollständige Löschung aller personenbezogenen Daten eines Nutzers technisch ermöglichen - inkl. Backups und Logs (soweit keine Aufbewahrungspflicht)."
  },
  {
    id: 11,
    topic: "Betroffenenrechte",
    question: "Was beinhaltet das Auskunftsrecht?",
    answers: [
      "Das Recht, fremde Daten einzusehen",
      "Das Recht zu erfahren, welche Daten über die eigene Person gespeichert sind",
      "Das Recht auf kostenlose Rechtsberatung",
      "Das Recht auf Einsicht in interne Unternehmensunterlagen"
    ],
    correct: 1,
    explanation: "Jede Person darf verlangen zu erfahren, welche Daten über sie gespeichert sind, zu welchem Zweck und wer diese erhalten hat. Entwickler müssen sicherstellen, dass diese Auskunft technisch möglich ist."
  },
  {
    id: 12,
    topic: "Betroffenenrechte",
    question: "Wie lange hat ein Unternehmen Zeit, auf eine Auskunftsanfrage zu antworten?",
    answers: [
      "Sofort, innerhalb von 24 Stunden",
      "Innerhalb von einem Monat (bei komplexen Fällen bis zu drei Monate)",
      "Innerhalb von sechs Monaten",
      "Es gibt keine gesetzliche Frist"
    ],
    correct: 1,
    explanation: "Die Antwort muss innerhalb eines Monats erfolgen. Bei besonders komplexen Anfragen kann die Frist auf bis zu drei Monate verlängert werden - die betroffene Person muss aber informiert werden."
  },
  {
    id: 13,
    topic: "Betroffenenrechte",
    question: "Was bedeutet das Recht auf Datenübertragbarkeit für Entwickler?",
    answers: [
      "Nutzer müssen ihre Daten per Post erhalten können",
      "Nutzer können ihre Daten in einem maschinenlesbaren Format (z. B. JSON, CSV) exportieren und weitergeben",
      "Entwickler müssen alle Daten auf USB-Stick ausgeben",
      "Gilt nur für Banken und Gesundheitsdienstleister"
    ],
    correct: 1,
    explanation: "Anwendungen müssen einen Daten-Export in einem gängigen, maschinenlesbaren Format ermöglichen - z. B. JSON oder CSV. Das gilt bei Verarbeitung auf Basis von Einwilligung oder Vertrag."
  },

  // ── Datenpannen ───────────────────────────────────────────────────────────
  {
    id: 14,
    topic: "Datenpannen",
    question: "Was muss passieren, wenn in einem Unternehmen Nutzerdaten durch einen Angriff oder Fehler nach außen gelangen?",
    answers: [
      "Nichts, das ist eine interne Angelegenheit",
      "Die Datenschutzbehörde muss innerhalb von 72 Stunden informiert werden (wenn ein Risiko besteht)",
      "Die Polizei muss sofort gerufen werden",
      "Die Meldung muss erst nach einem Monat erfolgen"
    ],
    correct: 1,
    explanation: "Bei einer Datenpanne muss die Aufsichtsbehörde unverzüglich, möglichst innerhalb von 72 Stunden, benachrichtigt werden - sofern ein Risiko für die Betroffenen besteht."
  },
  {
    id: 15,
    topic: "Datenpannen",
    question: "Wann müssen auch die betroffenen Nutzer direkt über eine Datenpanne informiert werden?",
    answers: [
      "Immer, bei jeder Datenpanne",
      "Wenn ein hohes Risiko besteht, z. B. wenn Passwörter oder Gesundheitsdaten betroffen sind",
      "Nie - nur die Behörde wird informiert",
      "Wenn mehr als 100 Personen betroffen sind"
    ],
    correct: 1,
    explanation: "Die direkte Benachrichtigung der Betroffenen ist nur bei voraussichtlich hohem Risiko nötig - z. B. wenn Passwörter, Gesundheitsdaten oder Bankdaten abgeflossen sind."
  },

  // ── Datenschutzpflichten ──────────────────────────────────────────────────
  {
    id: 16,
    topic: "Datenschutzpflichten",
    question: "Was bedeutet Privacy by Design in der Softwareentwicklung?",
    answers: [
      "Datenschutz wird am Ende des Projekts nachträglich eingebaut",
      "Datenschutz wird schon bei der Planung und Entwicklung eines Systems mitgedacht und eingebaut",
      "Nur externe Systeme müssen Datenschutz einhalten",
      "Datenschutz gilt nur für fertige, ausgelieferte Produkte"
    ],
    correct: 1,
    explanation: "Privacy by Design: Datenschutz ist von Anfang an Teil des Designs. Entwickler sollen z. B. bei der Datenbankstruktur, den API-Endpunkten und Formularen schon an Datensparsamkeit und Sicherheit denken."
  },
  {
    id: 17,
    topic: "Datenschutzpflichten",
    question: "Was bedeutet Privacy by Default?",
    answers: [
      "Standardmäßig werden alle Daten mit Dritten geteilt",
      "Die Standard-Einstellungen einer App sind so gesetzt, dass möglichst wenige Daten verarbeitet werden",
      "Benutzer müssen Datenschutz selbst aktiv einschalten",
      "Alle Daten werden standardmäßig nach einem Monat gelöscht"
    ],
    correct: 1,
    explanation: "Privacy by Default: Apps sollen standardmäßig datenschutzfreundlich sein. Z. B. soll der Standort nicht automatisch geteilt werden, und optionale Felder sollen nicht vorausgefüllt sein."
  },
  {
    id: 18,
    topic: "Datenschutzpflichten",
    question: "Wann muss vor einer Datenverarbeitung eine Datenschutz-Folgenabschätzung durchgeführt werden?",
    answers: [
      "Bei jeder neuen App-Entwicklung",
      "Wenn die geplante Verarbeitung voraussichtlich ein hohes Risiko für die Betroffenen bedeutet",
      "Nur bei Behörden",
      "Wenn mehr als 10.000 Datensätze verarbeitet werden"
    ],
    correct: 1,
    explanation: "Eine Datenschutz-Folgenabschätzung ist erforderlich bei hohem Risiko - z. B. bei Videoüberwachung, Profiling, Gesundheitsdaten in großem Umfang oder biometrischen Daten."
  },
  {
    id: 19,
    topic: "Datenschutzpflichten",
    question: "Was ist das Verarbeitungsverzeichnis?",
    answers: [
      "Ein öffentliches Register aller Datenbanken eines Unternehmens",
      "Eine interne Dokumentation aller Datenverarbeitungsvorgänge im Unternehmen",
      "Ein Protokoll aller Kundenbeschwerden",
      "Eine Liste aller eingesetzten IT-Systeme"
    ],
    correct: 1,
    explanation: "Das Verarbeitungsverzeichnis ist ein internes Pflichtdokument, das alle Datenverarbeitungen beschreibt - inklusive Zweck, Datenkategorien, Empfänger und Löschfristen."
  },
  {
    id: 20,
    topic: "Datenschutzpflichten",
    question: "Wann ist ein Datenschutzbeauftragter verpflichtend zu bestellen?",
    answers: [
      "In jedem Unternehmen ab dem ersten Mitarbeiter",
      "Bei Behörden sowie bei umfangreicher Verarbeitung sensibler Daten oder systematischer Beobachtung",
      "Nur in Krankenhäusern und Banken",
      "Niemals - der Datenschutzbeauftragte ist immer freiwillig"
    ],
    correct: 1,
    explanation: "Ein Datenschutzbeauftragter ist Pflicht bei Behörden, bei umfangreicher Verarbeitung besonderer Datenkategorien (z. B. Gesundheitsdaten) und bei systematischer Beobachtung von Personen."
  },

  // ── Datenschutz Österreich ────────────────────────────────────────────────
  {
    id: 21,
    topic: "Datenschutz Österreich",
    question: "Welche Behörde ist in Österreich für Datenschutzbeschwerden zuständig?",
    answers: [
      "Bundeskanzleramt",
      "Datenschutzbehörde (DSB)",
      "Bundesministerium für Digitalisierung",
      "Wirtschaftskammer Österreich (WKO)"
    ],
    correct: 1,
    explanation: "Die österreichische Datenschutzbehörde (DSB) ist die nationale Aufsichtsbehörde. Sie nimmt Beschwerden entgegen und kann Sanktionen verhängen."
  },
  {
    id: 22,
    topic: "Datenschutz Österreich",
    question: "Was ist das österreichische Datenschutzgesetz 2018 (DSG 2018)?",
    answers: [
      "Es ersetzt die DSGVO vollständig in Österreich",
      "Es ergänzt die DSGVO auf nationaler Ebene und regelt österreichische Besonderheiten",
      "Es gilt nur für öffentliche Unternehmen",
      "Es ist identisch mit dem deutschen Datenschutzgesetz"
    ],
    correct: 1,
    explanation: "Das DSG 2018 ergänzt die DSGVO in Österreich. Es regelt nationale Öffnungsklauseln und benennt die Datenschutzbehörde als zuständige Aufsichtsbehörde."
  },
  {
    id: 23,
    topic: "Datenschutz Österreich",
    question: "Welche Daten gelten als besonders sensibel und brauchen erhöhten Schutz?",
    answers: [
      "Name, Adresse und Telefonnummer",
      "Gesundheitsdaten, biometrische Daten, religiöse Überzeugungen, politische Meinungen",
      "E-Mail-Adresse und Geburtsdatum",
      "Einkaufshistorie und Surfgewohnheiten"
    ],
    correct: 1,
    explanation: "Besonders schutzwürdige Daten: Gesundheitsdaten, genetische und biometrische Daten, politische Meinungen, religiöse Überzeugungen, Gewerkschaftszugehörigkeit. Sie dürfen nur in Ausnahmefällen verarbeitet werden."
  },
  {
    id: 24,
    topic: "Datenschutz Österreich",
    question: "Wie hoch kann eine Strafe bei schwerwiegenden DSGVO-Verstößen maximal sein?",
    answers: [
      "Bis zu 50.000 Euro",
      "Bis zu 500.000 Euro",
      "Bis zu 20 Millionen Euro oder 4 % des weltweiten Jahresumsatzes",
      "Bis zu 1 Million Euro"
    ],
    correct: 2,
    explanation: "Bei schwerwiegenden Verstößen drohen Strafen bis zu 20 Mio. Euro oder 4 % des weltweiten Jahresumsatzes - je nachdem, was höher ist. Das gilt auch für kleine Unternehmen und Start-ups."
  },
  {
    id: 25,
    topic: "Datenschutz Österreich",
    question: "Was ist der Unterschied zwischen Pseudonymisierung und Anonymisierung?",
    answers: [
      "Kein Unterschied - beide Begriffe bedeuten dasselbe",
      "Anonymisierte Daten sind nicht mehr einer Person zuzuordnen; pseudonymisierte Daten schon (mit Zusatzinformation)",
      "Pseudonymisierung ist ein stärkerer Schutz als Anonymisierung",
      "Anonymisierung gilt nur bei Gesundheitsdaten"
    ],
    correct: 1,
    explanation: "Pseudonymisierung: Re-Identifikation mit Zusatzdaten möglich - die DSGVO gilt weiter. Anonymisierung: keine Re-Identifikation mehr möglich - die DSGVO gilt nicht mehr. Für Testdaten sollte echte Anonymisierung angestrebt werden."
  },

  // ── Urheberrecht ──────────────────────────────────────────────────────────
  {
    id: 26,
    topic: "Urheberrecht",
    question: "Was schützt das Urheberrecht in Österreich?",
    answers: [
      "Ideen und Konzepte",
      "Persönliche geistige Schöpfungen wie Software, Texte, Musik und Bilder",
      "Technische Erfindungen (das sind Patente)",
      "Firmennamen und Logos (das sind Marken)"
    ],
    correct: 1,
    explanation: "Das österreichische UrhG schützt Werke der Literatur, Musik, bildenden Kunst sowie Computerprogramme. Bloße Ideen sind nicht geschützt - nur deren konkrete Umsetzung."
  },
  {
    id: 27,
    topic: "Urheberrecht",
    question: "Wann entsteht das Urheberrecht an einem Werk?",
    answers: [
      "Nach einer Registrierung beim Patentamt",
      "Automatisch mit der Schöpfung des Werkes - ohne Anmeldung oder Registrierung",
      "Erst nach Veröffentlichung des Werkes",
      "Nach einer Wartezeit von 6 Monaten"
    ],
    correct: 1,
    explanation: "Das Urheberrecht entsteht automatisch mit der Schöpfung. Kein Copyright-Vermerk, keine Registrierung notwendig - das gilt auch für selbstgeschriebenen Code."
  },
  {
    id: 28,
    topic: "Urheberrecht",
    question: "Wie lange ist ein Werk in Österreich urheberrechtlich geschützt?",
    answers: [
      "20 Jahre ab der Erstellung",
      "50 Jahre ab Veröffentlichung",
      "70 Jahre nach dem Tod des Urhebers",
      "Unbegrenzt"
    ],
    correct: 2,
    explanation: "In Österreich und der EU endet der Urheberrechtsschutz 70 Jahre nach dem Tod der Urheberin oder des Urhebers. Danach wird das Werk gemeinfrei."
  },
  {
    id: 29,
    topic: "Urheberrecht",
    question: "Wie wird Software urheberrechtlich behandelt?",
    answers: [
      "Wie ein Patent - es braucht eine Anmeldung",
      "Wie ein literarisches Werk - automatisch ab der Erstellung",
      "Wie ein Markenzeichen",
      "Software ist urheberrechtlich nicht geschützt"
    ],
    correct: 1,
    explanation: "Computerprogramme sind nach österreichischem UrhG wie literarische Werke geschützt. Der Schutz entsteht automatisch, sobald das Programm eine individuelle Schöpfungshöhe erreicht."
  },

  // ── Softwarelizenzen ──────────────────────────────────────────────────────
  {
    id: 30,
    topic: "Softwarelizenzen",
    question: "Was bedeutet Open Source?",
    answers: [
      "Software ist kostenlos nutzbar",
      "Der Quellcode ist öffentlich zugänglich und darf genutzt, verändert und weiterverteilt werden",
      "Software hat keine Lizenz",
      "Software darf nur von Entwicklern genutzt werden"
    ],
    correct: 1,
    explanation: "Open Source: Quellcode ist öffentlich und steht unter einer Lizenz, die Nutzung, Änderung und Weitergabe erlaubt. Kostenlos und Open Source sind nicht dasselbe."
  },
  {
    id: 31,
    topic: "Softwarelizenzen",
    question: "Was ist das typische Merkmal der GPL-Lizenz?",
    answers: [
      "Quellcode muss geheim bleiben",
      "Copyleft: Änderungen und abgeleitete Werke müssen ebenfalls unter der GPL veröffentlicht werden",
      "Kommerzielle Nutzung ist verboten",
      "Die Software darf nur kostenlos angeboten werden"
    ],
    correct: 1,
    explanation: "GPL ist eine Copyleft-Lizenz: Wer GPL-Software in sein Projekt einbindet, muss das gesamte Projekt unter GPL veröffentlichen. Das ist für proprietäre Produkte oft problematisch."
  },
  {
    id: 32,
    topic: "Softwarelizenzen",
    question: "Was erlaubt die MIT-Lizenz?",
    answers: [
      "Nur nicht-kommerzielle Nutzung",
      "Nutzung, Änderung und Weitergabe - auch in kommerziellen Projekten - ohne Copyleft-Pflicht",
      "Nutzung nur mit schriftlicher Genehmigung des Autors",
      "Quellcode muss immer offengelegt werden"
    ],
    correct: 1,
    explanation: "MIT ist eine permissive Lizenz: Fast alles ist erlaubt, solange der ursprüngliche Copyright-Hinweis erhalten bleibt. Keine Pflicht, eigene Änderungen zu veröffentlichen."
  },
  {
    id: 33,
    topic: "Softwarelizenzen",
    question: "Was bedeutet Copyleft bei Open-Source-Lizenzen?",
    answers: [
      "Die Software ist gratis nutzbar",
      "Änderungen und Weiterentwicklungen müssen unter derselben oder einer kompatiblen Lizenz weitergegeben werden",
      "Der Quellcode gehört der Allgemeinheit ohne jede Einschränkung",
      "Das Urheberrecht ist aufgehoben"
    ],
    correct: 1,
    explanation: "Copyleft sichert, dass einmal freie Software auch in Ableitungen frei bleibt. GPL ist das bekannteste Beispiel: wer GPL-Code nutzt, muss das eigene Werk auch unter GPL stellen."
  },
  {
    id: 34,
    topic: "Softwarelizenzen",
    question: "Was ist der Unterschied zwischen Freeware und Open Source?",
    answers: [
      "Kein Unterschied - beide Begriffe bedeuten dasselbe",
      "Freeware ist kostenlos, aber der Quellcode ist nicht zugänglich; bei Open Source ist der Quellcode zugänglich",
      "Freeware ist immer auch Open Source",
      "Open Source ist immer kostenlos"
    ],
    correct: 1,
    explanation: "Freeware = kostenlos nutzbar, Quellcode oft nicht zugänglich. Open Source = Quellcode zugänglich und veränderbar - muss aber nicht kostenlos sein."
  },
  {
    id: 35,
    topic: "Softwarelizenzen",
    question: "Was ist Creative Commons (CC)?",
    answers: [
      "Eine Open-Source-Lizenz speziell für Software",
      "Ein Lizenzsystem für kreative Werke wie Texte, Bilder und Musik - nicht für Software",
      "Eine EU-Datenschutzbehörde",
      "Ein Softwareentwicklungs-Framework"
    ],
    correct: 1,
    explanation: "Creative Commons ist für kreative Inhalte gedacht. Für Software selbst empfiehlt CC, spezialisierte Software-Lizenzen wie MIT oder GPL zu verwenden."
  },

  // ── IT-Sicherheit ─────────────────────────────────────────────────────────
  {
    id: 36,
    topic: "IT-Sicherheit",
    question: "Was sind die drei Schutzziele der IT-Sicherheit (CIA-Triade)?",
    answers: [
      "Code, Implementation, Analyse",
      "Vertraulichkeit, Integrität, Verfügbarkeit",
      "Kontrolle, Installation, Audit",
      "Codierung, Identifikation, Autorisierung"
    ],
    correct: 1,
    explanation: "Vertraulichkeit: nur Berechtigte haben Zugriff. Integrität: Daten werden nicht unbemerkt verändert. Verfügbarkeit: System ist erreichbar, wenn man es braucht."
  },
  {
    id: 37,
    topic: "IT-Sicherheit",
    question: "Was ist Phishing?",
    answers: [
      "Eine Methode zur Datenbankoptimierung",
      "Betrügerische Nachrichten, die darauf abzielen, Passwörter oder sensible Daten zu stehlen",
      "Ein Verschlüsselungsverfahren",
      "Ein Protokoll zur sicheren Datenübertragung"
    ],
    correct: 1,
    explanation: "Beim Phishing werden gefälschte E-Mails, Websites oder Nachrichten verwendet, um Opfer zur Herausgabe von Passwörtern oder Kreditkartendaten zu verleiten."
  },
  {
    id: 38,
    topic: "IT-Sicherheit",
    question: "Was versteht man unter Social Engineering?",
    answers: [
      "Softwareentwicklung in agilen Teams",
      "Manipulation von Menschen, um unbefugten Zugang zu Informationen oder Systemen zu erlangen",
      "Netzwerkplanung in Unternehmen",
      "Eine agile Projektmanagement-Methode"
    ],
    correct: 1,
    explanation: "Social Engineering nutzt menschliche Schwächen aus - Vertrauen, Hilfsbereitschaft, Angst. Beispiele: sich am Telefon als IT-Support ausgeben oder einen verseuchten USB-Stick absichtlich 'verlieren'."
  },
  {
    id: 39,
    topic: "IT-Sicherheit",
    question: "Was ist ein SQL-Injection-Angriff?",
    answers: [
      "Physischer Einbruch in einen Serverraum",
      "Einschleusen von SQL-Befehlen über Eingabefelder, um unbefugten Datenbankzugriff zu erlangen",
      "Ein Fehler bei der Datenbankinstallation",
      "Eine Optimierungsmethode für SQL-Abfragen"
    ],
    correct: 1,
    explanation: "SQL-Injection: Wenn Benutzereingaben ungefiltert in SQL-Abfragen einfließen, können Angreifer die Datenbankabfrage manipulieren und z. B. alle Passwörter auslesen."
  },
  {
    id: 40,
    topic: "IT-Sicherheit",
    question: "Was ist HTTPS und wozu dient es?",
    answers: [
      "Ein E-Mail-Protokoll",
      "HTTP mit Verschlüsselung (TLS) - schützt Daten bei der Übertragung zwischen Browser und Server",
      "Ein Protokoll für Datenbankzugriffe",
      "Ein Authentifizierungsstandard für APIs"
    ],
    correct: 1,
    explanation: "HTTPS verschlüsselt die Kommunikation mit TLS. So können Passwörter oder Zahlungsdaten nicht von Dritten mitgelesen werden. Die DSGVO verpflichtet zu angemessenen technischen Schutzmaßnahmen."
  },
  {
    id: 41,
    topic: "IT-Sicherheit",
    question: "Was ist ein Penetrationstest?",
    answers: [
      "Ein Leistungstest für Datenbankabfragen",
      "Ein autorisierter, simulierter Angriff auf ein System, um Sicherheitslücken zu finden",
      "Ein Test für neue Software-Features",
      "Eine Methode zur Passworterstellung"
    ],
    correct: 1,
    explanation: "Beim Penetrationstest greift ein beauftragtes Team ein System gezielt an, um Schwachstellen zu finden - bevor echte Angreifer es tun."
  },
  {
    id: 42,
    topic: "IT-Sicherheit",
    question: "Warum müssen Benutzereingaben in einer Anwendung validiert werden?",
    answers: [
      "Nur aus optischen Gründen",
      "Um Angriffe wie SQL-Injection oder Cross-Site-Scripting (XSS) zu verhindern",
      "Nur aus Performance-Gründen",
      "Das ist bei modernen Frameworks nicht mehr notwendig"
    ],
    correct: 1,
    explanation: "Nicht validierte Eingaben sind ein häufiges Einfallstor. SQL-Injection, XSS und andere Angriffe nutzen aus, wenn Eingaben ungefiltert weiterverarbeitet werden."
  },

  // ── DSGVO in der Entwicklungspraxis ──────────────────────────────────────
  {
    id: 43,
    topic: "DSGVO in der Praxis",
    question: "Eine Web-App speichert IP-Adressen in den Server-Logs. Was gilt dabei aus Datenschutzsicht?",
    answers: [
      "IP-Adressen sind keine personenbezogenen Daten",
      "IP-Adressen sind personenbezogene Daten und unterliegen der DSGVO",
      "Nur statische IP-Adressen sind personenbezogen",
      "Server-Logs sind grundsätzlich vom Datenschutz ausgenommen"
    ],
    correct: 1,
    explanation: "IP-Adressen - auch dynamische - gelten als personenbezogene Daten, weil eine Re-Identifikation (z. B. über den Internet-Anbieter) möglich ist. Logs mit IP-Adressen dürfen nur so lange aufbewahrt werden, wie es notwendig ist."
  },
  {
    id: 44,
    topic: "DSGVO in der Praxis",
    question: "Ein Entwickler möchte Google Analytics in eine Website einbinden. Was ist datenschutzrechtlich zu beachten?",
    answers: [
      "Google Analytics darf ohne Weiteres eingebunden werden",
      "Es braucht eine Einwilligung des Nutzers, da Daten an Google (USA) übertragen werden",
      "Google Analytics ist in der EU vollständig verboten",
      "Ein Cookie-Banner ohne Opt-out-Möglichkeit ist ausreichend"
    ],
    correct: 1,
    explanation: "Google Analytics überträgt personenbezogene Daten an US-Server. Das erfordert eine aktive Einwilligung (Opt-in) und einen Auftragsverarbeitungsvertrag mit Google. Ablehnen muss genauso einfach wie Zustimmen sein."
  },
  {
    id: 45,
    topic: "DSGVO in der Praxis",
    question: "Welche Felder dürfen bei einem Registrierungsformular als Pflichtfelder markiert werden?",
    answers: [
      "Alle Felder, die das Unternehmen interessieren",
      "Nur Felder, die für den jeweiligen Zweck wirklich notwendig sind (Datensparsamkeit)",
      "Name, Adresse, Telefon und E-Mail sind immer Pflicht",
      "Pflichtfelder sind im Datenschutz nicht geregelt"
    ],
    correct: 1,
    explanation: "Datensparsamkeit gilt auch beim Formulardesign: Nur wirklich notwendige Felder dürfen Pflicht sein. Ein Newsletter braucht z. B. keine Adresse oder Telefonnummer als Pflichtfeld."
  },
  {
    id: 46,
    topic: "DSGVO in der Praxis",
    question: "Wie müssen Passwörter in einer datenschutzkonformen Anwendung gespeichert werden?",
    answers: [
      "Verschlüsselt mit AES, damit sie entschlüsselt werden können",
      "Als sicherer Hash (z. B. bcrypt, Argon2) - niemals im Klartext oder reversibel verschlüsselt",
      "Im Klartext ist erlaubt, wenn die Datenbank selbst verschlüsselt ist",
      "Passwörter dürfen gar nicht gespeichert werden"
    ],
    correct: 1,
    explanation: "Passwörter müssen mit einem sicheren Hashverfahren (bcrypt, Argon2) gespeichert werden - niemals im Klartext. Die DSGVO fordert angemessene technische Schutzmaßnahmen, Klartext-Passwörter wären ein grober Verstoß."
  },
  {
    id: 47,
    topic: "DSGVO in der Praxis",
    question: "Darf ein Entwickler echte Kundendaten für das Testen und die Entwicklung verwenden?",
    answers: [
      "Ja, immer - Testumgebungen sind vom Datenschutz ausgenommen",
      "Nein - für Tests sollten anonymisierte oder synthetische Testdaten verwendet werden",
      "Ja, wenn der Zugriff auf das Entwicklerteam beschränkt ist",
      "Nur mit schriftlicher Einwilligung jedes einzelnen Kunden"
    ],
    correct: 1,
    explanation: "Testumgebungen haben oft weniger Sicherheit als Produktionssysteme. Echte Kundendaten dort einzusetzen verstößt gegen Datensparsamkeit und Zweckbindung. Stattdessen: anonymisierte oder synthetisch generierte Testdaten verwenden."
  },
  {
    id: 48,
    topic: "DSGVO in der Praxis",
    question: "Ein Nutzer löscht seinen Account. Was muss eine datenschutzkonforme App tun?",
    answers: [
      "Nur das Passwort löschen, der Rest bleibt",
      "Alle personenbezogenen Daten löschen, soweit keine gesetzliche Aufbewahrungspflicht besteht",
      "Die Daten für 10 Jahre aufbewahren",
      "Den Account nur deaktivieren, nicht die Daten löschen"
    ],
    correct: 1,
    explanation: "Das Recht auf Löschung muss technisch vollständig umgesetzt werden: alle personenbezogenen Daten müssen entfernt werden - auch aus Backups, Logs und Drittdiensten - außer es besteht eine gesetzliche Aufbewahrungspflicht."
  },
  {
    id: 49,
    topic: "DSGVO in der Praxis",
    question: "Was ist beim Newsletter-Versand datenschutzrechtlich erforderlich?",
    answers: [
      "Einmalige Eintragung in ein Formular reicht aus",
      "Double-Opt-In: Der Nutzer bestätigt die Anmeldung durch einen Link in einer Bestätigungs-E-Mail",
      "Ein Cookie-Banner auf der Website ist ausreichend",
      "Keine besonderen Anforderungen"
    ],
    correct: 1,
    explanation: "Double-Opt-In ist der empfohlene Standard: Der Nutzer trägt sich ein und bestätigt dann über eine E-Mail. Das dient als Nachweis der Einwilligung und schützt vor missbräuchlichen Eintragungen."
  },
  {
    id: 50,
    topic: "DSGVO in der Praxis",
    question: "Eine App sendet Nutzerdaten an einen US-amerikanischen Cloud-Anbieter. Was ist erforderlich?",
    answers: [
      "Nichts Besonderes - die USA haben gleichwertigen Datenschutz",
      "Eine geeignete Garantie (z. B. Standardvertragsklauseln) oder ein gültiger Angemessenheitsbeschluss",
      "Es ist vollständig verboten, Daten in die USA zu übertragen",
      "Ein österreichischer Notar muss zustimmen"
    ],
    correct: 1,
    explanation: "Datenübertragungen in Länder außerhalb der EU brauchen eine Absicherung - z. B. Standardvertragsklauseln (SCC) der EU-Kommission. Das gilt für AWS, Google Cloud, Azure und viele andere US-Dienste."
  },
  {
    id: 51,
    topic: "DSGVO in der Praxis",
    question: "Ein Entwickler bindet ein Drittanbieter-SDK (z. B. Facebook Pixel, Crashlytics) ein. Wer ist für die dadurch entstehende Datenverarbeitung verantwortlich?",
    answers: [
      "Nur der SDK-Anbieter ist verantwortlich",
      "Der App-Entwickler ist mitverantwortlich und muss Nutzer darüber informieren",
      "Niemand - SDKs sind vom Datenschutz ausgenommen",
      "Nur wenn der SDK-Anbieter in der EU sitzt"
    ],
    correct: 1,
    explanation: "Wer ein SDK einbindet, das Daten sammelt, ist mitverantwortlich. Nutzer müssen in der Datenschutzerklärung darüber informiert werden, und ggf. ist ein AVV mit dem SDK-Anbieter erforderlich."
  },
  {
    id: 52,
    topic: "DSGVO in der Praxis",
    question: "Eine App soll Gesichtserkennung zur Authentifizierung nutzen. Was ist besonders zu beachten?",
    answers: [
      "Nichts Besonderes - es reicht eine normale Datenschutzerklärung",
      "Biometrische Daten sind besonders sensibel - es braucht eine explizite Einwilligung und besondere Sicherheitsmaßnahmen",
      "Gesichtserkennung ist in der EU vollständig verboten",
      "Nur wenn die Daten in die Cloud übertragen werden"
    ],
    correct: 1,
    explanation: "Biometrische Daten gehören zu den besonders schutzwürdigen Datenkategorien. Sie dürfen nur auf Basis einer ausdrücklichen Einwilligung und mit besonders hohen Sicherheitsstandards verarbeitet werden."
  },
  {
    id: 53,
    topic: "DSGVO in der Praxis",
    question: "Eine App sammelt den Standort des Nutzers. Wann ist das erlaubt?",
    answers: [
      "Immer, wenn es für die App-Funktion praktisch sinnvoll ist",
      "Nur wenn eine gültige Rechtsgrundlage vorliegt und der Nutzer informiert wurde",
      "Standortdaten sind keine personenbezogenen Daten",
      "Nur bei Navigations-Apps"
    ],
    correct: 1,
    explanation: "Standortdaten sind personenbezogene Daten. Die Erhebung braucht eine Rechtsgrundlage - meist Einwilligung. Nutzer müssen wissen, wann und wofür der Standort genutzt wird."
  },
  {
    id: 54,
    topic: "DSGVO in der Praxis",
    question: "Ein Entwickler entdeckt, dass die eigene Anwendung eine Sicherheitslücke hat, durch die Nutzerdaten abgerufen werden könnten. Was muss getan werden?",
    answers: [
      "Die Lücke intern dokumentieren und beim nächsten regulären Update schließen",
      "Die Lücke sofort schließen; wenn Daten bereits abgeflossen sind, muss eine Datenpanne gemeldet werden",
      "Nichts - solange noch kein Angriff stattgefunden hat, besteht keine Meldepflicht",
      "Die Nutzer per Social Media informieren"
    ],
    correct: 1,
    explanation: "Bekannte Sicherheitslücken müssen sofort behoben werden. Wenn bereits Daten abgeflossen sind oder ein hohes Risiko besteht, muss die Datenschutzbehörde innerhalb von 72 Stunden informiert werden."
  },
  {
    id: 55,
    topic: "DSGVO in der Praxis",
    question: "Eine App richtet sich an Kinder unter 14 Jahren. Was gilt besonders?",
    answers: [
      "Für Kinder gelten die gleichen Regeln wie für Erwachsene",
      "Elterliche Einwilligung ist erforderlich; manipulative Design-Muster (Dark Patterns) sind besonders problematisch",
      "Für Kinder braucht man keine Datenschutzerklärung",
      "Apps für Kinder sind in der EU grundsätzlich verboten"
    ],
    correct: 1,
    explanation: "Bei Kindern unter 14 Jahren (in Österreich) ist die Einwilligung der Eltern oder des Erziehungsberechtigten erforderlich. Manipulative UI-Muster oder Profiling sind hier besonders kritisch."
  },
  {
    id: 56,
    topic: "DSGVO in der Praxis",
    question: "Dürfen personenbezogene Daten (z. B. echte E-Mails oder Kundennamen) in einem Git-Repository gespeichert werden?",
    answers: [
      "Ja, wenn das Repository privat ist",
      "Nein - Zweckbindung und Datensparsamkeit gelten auch für Repositories; echte Daten haben dort nichts verloren",
      "Ja, wenn die Commit-Messages keine Namen enthalten",
      "Nur in öffentlichen Repositories ist es verboten"
    ],
    correct: 1,
    explanation: "Konfigurationsdateien mit echten Zugangsdaten, Testdateien mit Kundendaten oder Dumps - all das darf nicht ins Repository. Auch private Repos können kompromittiert werden, und Git-History ist schwer vollständig zu löschen."
  },
  {
    id: 57,
    topic: "DSGVO in der Praxis",
    question: "Wann muss eine mobile App eine Datenschutzerklärung haben?",
    answers: [
      "Nur wenn sie mehr als 100.000 Downloads hat",
      "Immer, wenn die App personenbezogene Daten verarbeitet",
      "Nur bei kostenpflichtigen Apps",
      "Nur bei Apps für Unternehmen"
    ],
    correct: 1,
    explanation: "Sobald eine App personenbezogene Daten verarbeitet - also z. B. einen Account anlegt, Logs führt oder Standort abfragt - ist eine Datenschutzerklärung Pflicht. Das gilt für praktisch jede App."
  },
  {
    id: 58,
    topic: "DSGVO in der Praxis",
    question: "Was ist ein 'Dark Pattern' im Datenschutzkontext?",
    answers: [
      "Ein Designstil mit dunklem Farbschema (Dark Mode)",
      "Eine manipulative UI-Gestaltung, die Nutzer dazu bringt, mehr Daten preiszugeben als gewollt",
      "Ein Sicherheitsverfahren für Passwörter",
      "Eine Debugging-Methode"
    ],
    correct: 1,
    explanation: "Dark Patterns sind manipulative Gestaltungen: z. B. ein riesiger 'Alle akzeptieren'-Button, aber ein kaum sichtbares 'Ablehnen', oder eine vorausgefüllte Einwilligungscheckbox. Die DSGVO verbietet solche Praktiken."
  },
  {
    id: 59,
    topic: "DSGVO in der Praxis",
    question: "Was ist bei der Datenbankplanung für eine Nutzer-Anwendung aus Datenschutzsicht wichtig?",
    answers: [
      "Nur die Performance der Datenbank ist relevant",
      "Zugriffsbeschränkungen, Verschlüsselung sensibler Felder, Löschkonzepte und Minimierung der gespeicherten Daten",
      "Datenschutz betrifft nur die Benutzeroberfläche, nicht die Datenbankstruktur",
      "Datenbanken brauchen keine Datenschutzmaßnahmen"
    ],
    correct: 1,
    explanation: "DSGVO beginnt beim Datenbankdesign: Welche Felder werden wirklich benötigt? Wer darf zugreifen? Wie lange werden Daten gespeichert? Wie werden sie gelöscht? Das sind Fragen, die Entwickler bereits beim Datenmodell klären müssen."
  },
  {
    id: 60,
    topic: "DSGVO in der Praxis",
    question: "Was versteht man unter einem Löschkonzept in einer Anwendung?",
    answers: [
      "Eine Funktion zum Löschen einzelner Dateien",
      "Eine Regelung, welche Daten wann und wie gelöscht oder anonymisiert werden",
      "Die Deinstallationsroutine einer App",
      "Ein Backup-System"
    ],
    correct: 1,
    explanation: "Ein Löschkonzept legt fest: Welche Daten werden nach welcher Frist gelöscht? Wie werden Löschanfragen von Nutzern verarbeitet? Wie werden Backups und Logs bereinigt? Das ist ein technisches und organisatorisches Pflichtthema."
  },
  {
    id: 61,
    topic: "DSGVO in der Praxis",
    question: "Ein Entwickler möchte Nutzerverhalten auf einer Website analysieren. Was ist ohne Einwilligung erlaubt?",
    answers: [
      "Google Analytics mit anonymisierten IPs ist immer einwilligungsfrei",
      "Server-seitiges Tracking mit wirklich anonymisierten und aggregierten Daten ohne persönliche Identifikatoren",
      "Alle Analytics-Tools, solange sie im Impressum aufgeführt sind",
      "Jedes Analytics ist ohne Einwilligung verboten"
    ],
    correct: 1,
    explanation: "Nur wirklich anonymisiertes, server-seitiges Tracking ohne Cookies und ohne persönliche Identifikatoren kann einwilligungsfrei sein. Sobald Cookies oder eindeutige IDs im Spiel sind, braucht es eine Einwilligung."
  },
  {
    id: 62,
    topic: "DSGVO in der Praxis",
    question: "Was ist beim Einsatz von Profiling (automatisierter Erstellung von Nutzerprofilen) datenschutzrechtlich zu beachten?",
    answers: [
      "Profiling ist immer erlaubt, wenn es technisch möglich ist",
      "Profiling auf Basis persönlicher Daten erfordert eine Rechtsgrundlage und muss in der Datenschutzerklärung transparent gemacht werden",
      "Profiling betrifft nur Werbung, nicht andere Bereiche",
      "Profiling ist in der EU generell verboten"
    ],
    correct: 1,
    explanation: "Profiling ist die automatisierte Verarbeitung personenbezogener Daten zur Bewertung bestimmter Aspekte einer Person. Es braucht eine Rechtsgrundlage, muss transparent gemacht werden, und Betroffene haben das Recht auf Widerspruch."
  },

  // ── E-Commerce & ePrivacy ─────────────────────────────────────────────────
  {
    id: 63,
    topic: "E-Commerce & Österreich",
    question: "Was regelt das österreichische E-Commerce-Gesetz (ECG)?",
    answers: [
      "Den Datenschutz bei sozialen Netzwerken",
      "Informationspflichten, Vertragsabschluss und Verantwortlichkeit bei Online-Diensten in Österreich",
      "Den urheberrechtlichen Schutz von Software",
      "Die Besteuerung digitaler Dienstleistungen"
    ],
    correct: 1,
    explanation: "Das ECG setzt die EU-Richtlinie über den elektronischen Geschäftsverkehr um. Es regelt u. a. Impressumspflichten, den Vertragsabschluss per Internet und die Haftung von Hosting-Anbietern."
  },
  {
    id: 64,
    topic: "E-Commerce & Österreich",
    question: "Was muss laut ECG im Impressum einer österreichischen Website stehen?",
    answers: [
      "Nur der Firmenname",
      "Name, Anschrift, E-Mail sowie weitere Pflichtangaben wie Firmenbuchnummer und zuständige Aufsichtsbehörde",
      "Nur E-Mail-Adresse und Telefonnummer",
      "IBAN und Steuernummer"
    ],
    correct: 1,
    explanation: "Das Impressum muss leicht zugänglich sein und enthält: Firma/Name, Anschrift, E-Mail und je nach Tätigkeit auch Firmenbuchnummer, Gewerbeangaben und Aufsichtsbehörde."
  },
  {
    id: 65,
    topic: "ePrivacy & Cookies",
    question: "Welche Cookies dürfen ohne Einwilligung des Nutzers gesetzt werden?",
    answers: [
      "Alle Cookies, solange ein Cookie-Banner angezeigt wird",
      "Nur technisch notwendige Cookies (z. B. für Login-Sessions oder den Warenkorb)",
      "Alle Cookies von der eigenen Domain",
      "Kein Cookie darf ohne Einwilligung gesetzt werden"
    ],
    correct: 1,
    explanation: "Technisch notwendige Cookies brauchen keine Einwilligung - z. B. Session-Cookies für den Warenkorb. Analyse-, Tracking- und Marketing-Cookies erfordern eine aktive Einwilligung."
  },
  {
    id: 66,
    topic: "ePrivacy & Cookies",
    question: "Was muss ein gültiger Cookie-Consent-Banner ermöglichen?",
    answers: [
      "Nur die Zustimmung zu allen Cookies auf einmal",
      "Informierte, freiwillige Zustimmung und eine genauso einfache Ablehnung",
      "Automatische Zustimmung nach 30 Sekunden ohne Aktion",
      "Zustimmung durch Weitersurfen auf der Website"
    ],
    correct: 1,
    explanation: "Ablehnen muss genauso einfach sein wie Zustimmen. Ein riesiger 'Alle akzeptieren'-Button neben einem versteckten 'Ablehnen'-Link ist ein Dark Pattern und nicht DSGVO-konform."
  }

];
