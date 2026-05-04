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
    explanation: "Datensparsamkeit: personenbezogene Daten müssen auf das notwendige Minimum beschränkt sein. Es darf nur erhoben werden, was wirklich gebraucht wird."
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
    explanation: "Zweckbindung: Daten dürfen nur für den konkreten Zweck verwendet werden, für den sie gesammelt wurden. Eine Weitergabe oder Nutzung für andere Zwecke ist ohne neue Rechtsgrundlage unzulässig."
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
    explanation: "Eine Einwilligung muss freiwillig (ohne Druck), spezifisch (für einen Zweck), informiert und eindeutig abgegeben werden. Schweigen oder vorangekreuzte Kästchen gelten NICHT als Einwilligung."
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
    explanation: "Eine Einwilligung kann jederzeit und ohne Angabe von Gründen widerrufen werden. Die Verarbeitung vor dem Widerruf bleibt rechtmäßig, danach muss sie eingestellt werden."
  },

  // ── Betroffenenrechte ─────────────────────────────────────────────────────
  {
    id: 10,
    topic: "Betroffenenrechte",
    question: "Was bedeutet das Recht auf Vergessenwerden?",
    answers: [
      "Historische Ereignisse werden aus dem Internet gelöscht",
      "Eine Person kann verlangen, dass ihre gespeicherten Daten gelöscht werden",
      "Unternehmen müssen alle Daten nach 30 Tagen löschen",
      "Backups werden automatisch überschrieben"
    ],
    correct: 1,
    explanation: "Das Recht auf Löschung erlaubt Betroffenen, die Löschung ihrer Daten zu verlangen - z. B. wenn der Zweck entfallen ist oder die Einwilligung widerrufen wurde."
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
    explanation: "Jede Person darf verlangen zu erfahren, ob und welche Daten über sie gespeichert sind, zu welchem Zweck und wer diese erhalten hat."
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
    explanation: "Die Antwort muss innerhalb eines Monats erfolgen. Bei besonders komplexen oder vielen Anfragen kann die Frist auf bis zu drei Monate verlängert werden - die betroffene Person muss aber informiert werden."
  },
  {
    id: 13,
    topic: "Betroffenenrechte",
    question: "Was bedeutet das Recht auf Datenübertragbarkeit?",
    answers: [
      "Daten müssen kostenlos per Post zugeschickt werden",
      "Eigene Daten in einem gängigen, maschinenlesbaren Format erhalten und an einen anderen Anbieter weitergeben können",
      "Daten müssen auf USB-Stick übergeben werden",
      "Gilt für alle Arten der Datenverarbeitung"
    ],
    correct: 1,
    explanation: "Betroffene können ihre Daten in einem strukturierten, gängigen Format (z. B. JSON, CSV) erhalten. Das gilt bei Verarbeitung auf Basis von Einwilligung oder Vertrag."
  },

  // ── Datenschutzpflichten ──────────────────────────────────────────────────
  {
    id: 14,
    topic: "Datenpannen",
    question: "Was muss passieren, wenn in einem Unternehmen Daten gestohlen oder verloren gehen?",
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
    question: "Wann müssen auch die betroffenen Personen direkt über eine Datenpanne informiert werden?",
    answers: [
      "Immer, bei jeder Datenpanne",
      "Wenn ein hohes Risiko besteht, z. B. wenn Identitätsdiebstahl oder finanzielle Schäden möglich sind",
      "Nie - nur die Behörde wird informiert",
      "Wenn mehr als 100 Personen betroffen sind"
    ],
    correct: 1,
    explanation: "Die direkte Benachrichtigung der Betroffenen ist nur bei voraussichtlich hohem Risiko erforderlich - z. B. wenn Passwörter, Gesundheitsdaten oder Bankdaten betroffen sind."
  },
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
    explanation: "Privacy by Design: Datenschutz ist von Anfang an Teil des Designs. Als Entwickler sollte man Datenschutzmaßnahmen nicht als Nachgedanken behandeln, sondern schon bei der Architektur berücksichtigen."
  },
  {
    id: 17,
    topic: "Datenschutzpflichten",
    question: "Was bedeutet Privacy by Default?",
    answers: [
      "Standardmäßig werden alle Daten mit Dritten geteilt",
      "Die Standard-Einstellungen eines Systems sind so gesetzt, dass möglichst wenige Daten verarbeitet werden",
      "Benutzer müssen Datenschutz selbst aktiv einschalten",
      "Alle Daten werden standardmäßig nach einem Monat gelöscht"
    ],
    correct: 1,
    explanation: "Privacy by Default: die Voreinstellungen müssen datenschutzfreundlich sein. Eine App sollte z. B. nicht standardmäßig den Standort teilen oder alle optionalen Felder vorausfüllen."
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
    explanation: "Eine Datenschutz-Folgenabschätzung ist erforderlich, wenn eine Verarbeitung voraussichtlich ein hohes Risiko bedeutet - z. B. bei Videoüberwachung, Profiling oder Gesundheitsdaten in großem Umfang."
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
    explanation: "Ein Datenschutzbeauftragter ist Pflicht bei Behörden, bei umfangreicher Verarbeitung besonderer Datenkategorien (z. B. Gesundheitsdaten) und bei systematischer Beobachtung von Personen. Er berät, haftet aber nicht persönlich."
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
    explanation: "Die österreichische Datenschutzbehörde (DSB) ist die nationale Aufsichtsbehörde. Sie nimmt Beschwerden von Bürgerinnen und Bürgern entgegen und kann Sanktionen verhängen."
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
    explanation: "Das DSG 2018 ergänzt die DSGVO in Österreich. Es regelt nationale Öffnungsklauseln, benennt die Datenschutzbehörde und enthält spezifisch österreichische Bestimmungen."
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
    explanation: "Besonders schutzwürdige Daten: Gesundheitsdaten, genetische und biometrische Daten, politische Meinungen, religiöse Überzeugungen, Gewerkschaftszugehörigkeit und Daten zum Sexualleben."
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
    explanation: "Bei schwerwiegenden Verstößen (z. B. unzulässige Datenverarbeitung, Verletzung der Betroffenenrechte) drohen Strafen bis zu 20 Mio. Euro oder 4 % des weltweiten Jahresumsatzes - je nachdem, was höher ist."
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
    explanation: "Pseudonymisierung: Identifikatoren werden durch Codes ersetzt, aber eine Re-Identifikation ist mit Zusatzdaten möglich - die DSGVO gilt weiter. Anonymisierung: keine Re-Identifikation mehr möglich - die DSGVO gilt nicht mehr."
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
    explanation: "Das Urheberrecht entsteht automatisch und formlos mit der Schöpfung des Werkes. Es ist keine Registrierung, kein Copyright-Vermerk und keine Behördenmeldung erforderlich."
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
    explanation: "GPL ist eine Copyleft-Lizenz: Wer GPL-Software verändert oder weitergibt, muss den Quellcode unter derselben Lizenz zugänglich machen."
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
    explanation: "MIT ist eine permissive Lizenz: Fast alles ist erlaubt, solange der ursprüngliche Copyright-Hinweis erhalten bleibt. Es gibt keine Pflicht, eigene Änderungen zu veröffentlichen."
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
    explanation: "Creative Commons bietet standardisierte Lizenzen für kreative Inhalte (Texte, Bilder, Videos, Musik). Für Software empfiehlt CC selbst, spezialisierte Software-Lizenzen wie MIT oder GPL zu verwenden."
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
    explanation: "Social Engineering nutzt menschliche Schwächen aus - Vertrauen, Hilfsbereitschaft, Angst. Beispiele: sich als IT-Support ausgeben oder einen verseuchten USB-Stick absichtlich 'verlieren'."
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
    explanation: "SQL-Injection gehört zu den häufigsten Sicherheitslücken. Wenn Benutzereingaben nicht bereinigt werden, können Angreifer SQL-Code einschleusen und z. B. alle Passwörter auslesen oder Daten löschen."
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
    explanation: "HTTPS verschlüsselt die Kommunikation mit TLS. So können Passwörter, Formulardaten oder Zahlungsinformationen nicht von Dritten mitgelesen werden."
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

  // ── OOP Grundlagen ────────────────────────────────────────────────────────
  {
    id: 43,
    topic: "OOP Grundlagen",
    question: "Was ist objektorientierte Programmierung (OOP)?",
    answers: [
      "Programmierung ohne Variablen und Schleifen",
      "Ein Paradigma, bei dem Code in Klassen und Objekten strukturiert wird",
      "Nur für große Unternehmen geeignet",
      "Eine Methode zur Datenbankentwicklung"
    ],
    correct: 1,
    explanation: "OOP organisiert Code in Objekte mit Eigenschaften (Daten) und Methoden (Verhalten). Bekannte OOP-Sprachen: Java, C#, Python, JavaScript."
  },
  {
    id: 44,
    topic: "OOP Grundlagen",
    question: "Was ist eine Klasse in der OOP?",
    answers: [
      "Ein einzelnes Datenelement",
      "Eine Vorlage (Bauplan) für Objekte, die Eigenschaften und Methoden definiert",
      "Ein Kommentar im Quellcode",
      "Ein Datenbankfeld"
    ],
    correct: 1,
    explanation: "Eine Klasse ist der Bauplan; ein Objekt ist die konkrete Instanz. Beispiel: Klasse 'Auto' definiert Eigenschaften wie Farbe und Methoden wie fahren(). Jedes konkrete Auto-Objekt ist eine Instanz dieser Klasse."
  },
  {
    id: 45,
    topic: "OOP Grundlagen",
    question: "Was ist Vererbung in der OOP?",
    answers: [
      "Eine Klasse übernimmt Eigenschaften und Methoden einer anderen Klasse",
      "Daten werden automatisch aus einer Datenbank geladen",
      "Eine Funktion ruft eine andere Funktion auf",
      "Eine Variable wird einer anderen zugewiesen"
    ],
    correct: 0,
    explanation: "Vererbung ermöglicht Wiederverwendung von Code. Eine Unterklasse erbt alle Eigenschaften und Methoden der Oberklasse und kann sie ergänzen oder überschreiben."
  },
  {
    id: 46,
    topic: "OOP Grundlagen",
    question: "Was bedeutet Kapselung (Encapsulation) in der OOP?",
    answers: [
      "Code wird in eine ZIP-Datei verpackt",
      "Interne Details einer Klasse werden verborgen; Zugriff nur über definierte Methoden",
      "Eine Klasse erbt von einer anderen",
      "Methoden werden wiederholt in einer Schleife aufgerufen"
    ],
    correct: 1,
    explanation: "Kapselung schützt den internen Zustand eines Objekts. Private Attribute sind von außen nicht direkt zugänglich - nur über Getter- und Setter-Methoden. Das verhindert ungewollte Änderungen."
  },
  {
    id: 47,
    topic: "OOP Grundlagen",
    question: "Was ist ein Interface (Schnittstelle) in der Programmierung?",
    answers: [
      "Das optische Design einer App",
      "Ein Vertrag, der vorschreibt, welche Methoden eine Klasse implementieren muss",
      "Eine Verbindung zwischen zwei Datenbanken",
      "Ein Kommentar im Quellcode"
    ],
    correct: 1,
    explanation: "Ein Interface definiert, welche Methoden eine Klasse bereitstellen muss, ohne deren Implementierung festzulegen. Es ermöglicht einheitliche Nutzung unterschiedlicher Klassen."
  },

  // ── Softwareentwicklung ───────────────────────────────────────────────────
  {
    id: 48,
    topic: "Softwareentwicklung",
    question: "Was ist eine API?",
    answers: [
      "Ein Betriebssystem",
      "Eine Schnittstelle, über die Programme miteinander kommunizieren und Daten austauschen",
      "Eine Programmiersprache",
      "Ein Dateiformat"
    ],
    correct: 1,
    explanation: "API steht für Application Programming Interface. Über eine API können Programme auf Funktionen anderer Programme oder Dienste zugreifen - z. B. eine Wetter-App, die Daten von einem Wetterdienst abruft."
  },
  {
    id: 49,
    topic: "Softwareentwicklung",
    question: "Was ist der Unterschied zwischen Frontend und Backend?",
    answers: [
      "Kein Unterschied",
      "Frontend ist die sichtbare Benutzeroberfläche; Backend läuft auf dem Server und verwaltet Logik und Daten",
      "Frontend ist nur für mobile Apps; Backend für Desktop",
      "Frontend ist immer schneller als Backend"
    ],
    correct: 1,
    explanation: "Frontend (HTML, CSS, JS im Browser): was der Benutzer sieht. Backend (Server): Programmlogik, Datenbankzugriffe - unsichtbar für den Benutzer."
  },
  {
    id: 50,
    topic: "Softwareentwicklung",
    question: "Was ist ein Framework?",
    answers: [
      "Ein Fehler im Code",
      "Eine vorgefertigte Struktur, die die Entwicklung erleichtert (z. B. React, Angular, Django, Spring)",
      "Ein Testverfahren",
      "Ein Dateiformat für Konfigurationsdateien"
    ],
    correct: 1,
    explanation: "Ein Framework gibt eine Grundstruktur vor und stellt häufig benötigte Funktionen bereit. Entwickler füllen das Framework mit eigener Logik, statt alles von Grund auf zu schreiben."
  },
  {
    id: 51,
    topic: "Softwareentwicklung",
    question: "Was ist der Unterschied zwischen einer kompilierten und einer interpretierten Sprache?",
    answers: [
      "Es gibt keinen Unterschied in der Ausführung",
      "Kompilierte Sprachen werden vorab in Maschinencode übersetzt; interpretierte werden zur Laufzeit Zeile für Zeile ausgeführt",
      "Interpretierte Sprachen sind immer schneller",
      "Kompilierte Sprachen brauchen keine IDE"
    ],
    correct: 1,
    explanation: "Kompiliert (z. B. C, C++, Java): Code wird vorab übersetzt - meist schneller. Interpretiert (z. B. Python, JavaScript): Code wird zur Laufzeit ausgeführt - flexibler, aber oft langsamer."
  },
  {
    id: 52,
    topic: "Softwareentwicklung",
    question: "Was ist ein Algorithmus?",
    answers: [
      "Eine Programmiersprache",
      "Eine endliche, präzise Folge von Schritten zur Lösung eines Problems",
      "Ein Datenbankformat",
      "Ein Framework für Web-Entwicklung"
    ],
    correct: 1,
    explanation: "Ein Algorithmus ist eine schrittweise Anleitung zur Lösung eines Problems. Jede Software besteht aus Algorithmen - z. B. Sortieralgorithmen, Suchalgorithmen oder Verschlüsselungsalgorithmen."
  },
  {
    id: 53,
    topic: "Softwareentwicklung",
    question: "Was bedeutet \"Refactoring\" in der Softwareentwicklung?",
    answers: [
      "Eine neue Funktion hinzufügen",
      "Bestehenden Code umstrukturieren, ohne sein äußeres Verhalten zu ändern",
      "Software auf neue Hardware portieren",
      "Fehler beheben (Debugging)"
    ],
    correct: 1,
    explanation: "Refactoring verbessert die Codequalität, Lesbarkeit und Wartbarkeit - ohne dabei die Funktionalität zu verändern. Danach sollten alle Tests weiterhin bestehen."
  },

  // ── Versionskontrolle & Methoden ──────────────────────────────────────────
  {
    id: 54,
    topic: "Versionskontrolle",
    question: "Was ist Git?",
    answers: [
      "Eine Programmiersprache",
      "Ein verteiltes Versionskontrollsystem zur Verwaltung und Nachverfolgung von Quellcode-Änderungen",
      "Eine Datenbank",
      "Ein Test-Framework"
    ],
    correct: 1,
    explanation: "Git ermöglicht es, Änderungen am Code zu verfolgen, frühere Versionen wiederherzustellen und mit mehreren Entwicklern gleichzeitig zu arbeiten. Plattformen wie GitHub oder GitLab bauen auf Git auf."
  },
  {
    id: 55,
    topic: "Versionskontrolle",
    question: "Was bedeutet ein Commit in Git?",
    answers: [
      "Einen Branch löschen",
      "Eine gespeicherte Version des Codes mit einer Beschreibung der Änderungen im Repository ablegen",
      "Code auf den Server hochladen (push)",
      "Einen Zusammenführungskonflikt lösen"
    ],
    correct: 1,
    explanation: "Ein Commit ist ein Snapshot des Codes zu einem bestimmten Zeitpunkt. Jeder Commit hat eine eindeutige ID und eine Nachricht, die beschreibt, was geändert wurde."
  },
  {
    id: 56,
    topic: "Versionskontrolle",
    question: "Was ist ein Branch (Zweig) in Git?",
    answers: [
      "Eine Sicherungskopie des gesamten Projekts auf einem anderen Server",
      "Eine parallele Entwicklungslinie, auf der unabhängig vom Hauptcode gearbeitet werden kann",
      "Eine Liste aller bisherigen Commits",
      "Ein automatischer Test"
    ],
    correct: 1,
    explanation: "Ein Branch ermöglicht parallele Entwicklung. Neue Features oder Bugfixes werden in einem eigenen Branch entwickelt und erst nach Fertigstellung in den Hauptbranch (main/master) gemergt."
  },
  {
    id: 57,
    topic: "Agile Entwicklung",
    question: "Was ist agile Softwareentwicklung?",
    answers: [
      "Softwareentwicklung ohne jegliche Planung",
      "Iterative, flexible Entwicklung mit regelmäßigem Kundenfeedback statt einem starren Langzeitplan",
      "Entwicklung ausschließlich für mobile Geräte",
      "Entwicklung mit streng fixen Meilensteinen über mehrere Jahre"
    ],
    correct: 1,
    explanation: "Agile Entwicklung arbeitet in kurzen Zyklen (Iterationen), reagiert flexibel auf Änderungen und bindet Kunden regelmäßig ein. Das Gegenteil ist das Wasserfallmodell mit streng linearen Phasen."
  },
  {
    id: 58,
    topic: "Agile Entwicklung",
    question: "Was ist Scrum?",
    answers: [
      "Eine Programmiersprache für Backend-Entwicklung",
      "Ein agiles Framework mit festen Rollen, Ereignissen und Artefakten zur Strukturierung der Softwareentwicklung",
      "Ein Datenbankmanagement-System",
      "Ein Testverfahren für Sicherheitslücken"
    ],
    correct: 1,
    explanation: "Scrum ist ein agiles Framework. Zentrale Rollen: Product Owner, Scrum Master, Entwicklungsteam. Zentrale Ereignisse: Sprint Planning, Daily Scrum, Sprint Review, Retrospektive."
  },
  {
    id: 59,
    topic: "Agile Entwicklung",
    question: "Was ist ein Sprint in Scrum?",
    answers: [
      "Ein kritischer Fehler im Code",
      "Ein kurzer, fixer Entwicklungszyklus (meist 1-4 Wochen), in dem ein fertiges Produktinkrement erstellt wird",
      "Ein automatisierter Test",
      "Ein Meeting am Ende des Projekts"
    ],
    correct: 1,
    explanation: "Ein Sprint ist das Herzstück von Scrum: ein zeitlich begrenzter Zyklus, nach dem ein funktionierendes Ergebnis vorliegen soll."
  },
  {
    id: 60,
    topic: "Softwarequalität",
    question: "Was ist ein Unit Test?",
    answers: [
      "Ein Test des gesamten Systems durch Endnutzer",
      "Ein automatisierter Test einer einzelnen Funktion oder Methode in Isolation",
      "Ein manueller Benutzertest",
      "Ein Leistungstest für die ganze Anwendung"
    ],
    correct: 1,
    explanation: "Unit Tests prüfen einzelne Code-Einheiten automatisch auf korrekte Funktion. Sie laufen schnell, finden Bugs früh und dokumentieren das erwartete Verhalten."
  },
  {
    id: 61,
    topic: "Softwarequalität",
    question: "Was bedeutet Debugging?",
    answers: [
      "Neuen Code schreiben",
      "Fehler (Bugs) im Code systematisch suchen und beheben",
      "Software veröffentlichen",
      "Code mit Kommentaren versehen"
    ],
    correct: 1,
    explanation: "Debugging: Fehler im Code finden. Dazu setzt man Breakpoints, analysiert Fehlermeldungen, überprüft Variablenwerte zur Laufzeit und verfolgt den Programmablauf."
  },
  {
    id: 62,
    topic: "Softwarequalität",
    question: "Was ist ein Code-Review?",
    answers: [
      "Ein Test des Systems durch Endnutzer",
      "Die systematische Überprüfung von Code durch andere Entwickler vor dem Einbau in das Projekt",
      "Eine automatische Fehlerkorrektur durch die IDE",
      "Ein Leistungstest"
    ],
    correct: 1,
    explanation: "Code-Reviews verbessern die Qualität: Andere Entwickler prüfen den Code auf Fehler, Sicherheitsprobleme und schlechte Praktiken. Außerdem verteilt sich Wissen im Team."
  },

  // ── Datenbanken & Web ─────────────────────────────────────────────────────
  {
    id: 63,
    topic: "Datenbanken",
    question: "Was ist eine relationale Datenbank?",
    answers: [
      "Eine Datenbank für Beziehungsstatusangaben",
      "Eine Datenbank, in der Daten in strukturierten Tabellen mit Beziehungen gespeichert werden (z. B. MySQL, PostgreSQL)",
      "Eine unstrukturierte Datenbank wie MongoDB",
      "Eine Datenbank ausschließlich für Bilder und Videos"
    ],
    correct: 1,
    explanation: "Relationale Datenbanken speichern Daten in Tabellen. Tabellen können über Schlüssel verknüpft werden. Abfragen erfolgen mit SQL."
  },
  {
    id: 64,
    topic: "Datenbanken",
    question: "Was ist ein Primärschlüssel (PRIMARY KEY) in einer Datenbank?",
    answers: [
      "Das wichtigste Passwort der Datenbank",
      "Ein eindeutiger Bezeichner, der jeden Datensatz in einer Tabelle identifiziert",
      "Der erste Eintrag in der Tabelle",
      "Ein Verschlüsselungsschlüssel für die Datenbank"
    ],
    correct: 1,
    explanation: "Der Primärschlüssel ist ein Feld, dessen Wert in der Tabelle eindeutig ist. Er ermöglicht, jeden Datensatz eindeutig zu identifizieren und darf keinen NULL-Wert haben."
  },
  {
    id: 65,
    topic: "Datenbanken",
    question: "Wofür steht SQL und wofür wird es verwendet?",
    answers: [
      "Software Quality Language - für Qualitätsprüfung",
      "Structured Query Language - für Abfrage und Verwaltung relationaler Datenbanken",
      "System Query Layout - für Netzwerkkonfiguration",
      "Secure Query Logic - für verschlüsselte Datenbankzugriffe"
    ],
    correct: 1,
    explanation: "SQL ist die Standardsprache für relationale Datenbanken. Mit SQL kann man Daten abfragen (SELECT), einfügen (INSERT), ändern (UPDATE) und löschen (DELETE)."
  },
  {
    id: 66,
    topic: "Web & HTTP",
    question: "Was bedeutet der HTTP-Statuscode 404?",
    answers: [
      "Anfrage erfolgreich verarbeitet",
      "Die angeforderte Ressource wurde nicht gefunden",
      "Interner Serverfehler",
      "Weiterleitung zu einer anderen URL"
    ],
    correct: 1,
    explanation: "HTTP-Statuscodes: 2xx = Erfolg (200 OK), 3xx = Weiterleitung, 4xx = Client-Fehler (404 Not Found, 403 Forbidden), 5xx = Server-Fehler (500 Internal Server Error)."
  },
  {
    id: 67,
    topic: "Web & HTTP",
    question: "Was ist der Unterschied zwischen den HTTP-Methoden GET und POST?",
    answers: [
      "Kein Unterschied",
      "GET ruft Daten ab (Parameter in der URL sichtbar); POST sendet Daten (z. B. Formulare, nicht in URL sichtbar)",
      "POST ist immer schneller als GET",
      "GET kann nur Text übertragen"
    ],
    correct: 1,
    explanation: "GET: Daten im URL-Query-String - geeignet für Suchen, nicht für Passwörter. POST: Daten im Request-Body - geeignet für Formulare, Uploads und sensible Daten."
  },
  {
    id: 68,
    topic: "Web & HTTP",
    question: "Was ist ein Cookie im Web?",
    answers: [
      "Eine Datei, die ausschließlich auf dem Server gespeichert wird",
      "Eine kleine Datei, die der Webserver im Browser des Nutzers speichert (z. B. für Sessions oder Einstellungen)",
      "Ein Verschlüsselungsverfahren",
      "Ein Web-Framework"
    ],
    correct: 1,
    explanation: "Cookies speichern kleine Datenmengen im Browser. Typische Einsätze: Session-IDs (Login merken), Spracheinstellungen, Tracking. Cookies können ein Ablaufdatum haben."
  },
  {
    id: 69,
    topic: "Web & HTTP",
    question: "Was ist eine REST API?",
    answers: [
      "Eine Ruhepause im Entwicklungsprozess",
      "Eine Schnittstelle, die über HTTP-Methoden (GET, POST, PUT, DELETE) Daten zwischen Systemen austauscht",
      "Eine Datenbank-Abfragesprache",
      "Ein Framework für mobile Apps"
    ],
    correct: 1,
    explanation: "REST (Representational State Transfer) ist ein Architekturstil für Web-APIs. REST-APIs verwenden HTTP-Methoden und geben Daten meist im JSON-Format zurück."
  },

  // ── E-Commerce & ePrivacy ─────────────────────────────────────────────────
  {
    id: 70,
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
    id: 71,
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
    id: 72,
    topic: "ePrivacy & Cookies",
    question: "Welche Cookies dürfen ohne Einwilligung des Nutzers gesetzt werden?",
    answers: [
      "Alle Cookies, solange ein Cookie-Banner angezeigt wird",
      "Nur technisch notwendige Cookies (z. B. für Login-Sessions oder den Warenkorb)",
      "Alle Cookies von der eigenen Domain",
      "Kein Cookie darf ohne Einwilligung gesetzt werden"
    ],
    correct: 1,
    explanation: "Technisch notwendige Cookies benötigen keine Einwilligung - z. B. Session-Cookies für den Warenkorb. Analyse-, Tracking- und Marketing-Cookies erfordern eine aktive Einwilligung."
  },
  {
    id: 73,
    topic: "ePrivacy & Cookies",
    question: "Was muss ein gültiger Cookie-Consent-Banner ermöglichen?",
    answers: [
      "Nur die Zustimmung zu allen Cookies auf einmal",
      "Informierte, freiwillige Zustimmung und eine genauso einfache Ablehnung",
      "Automatische Zustimmung nach 30 Sekunden ohne Aktion",
      "Zustimmung durch Weitersurfen auf der Website"
    ],
    correct: 1,
    explanation: "Ablehnen muss genauso einfach sein wie Zustimmen. Ein riesiger 'Alle akzeptieren'-Button neben einem winzigen 'Ablehnen'-Link ist nicht DSGVO-konform."
  }

];
