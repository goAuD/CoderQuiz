// questions.js
// To add questions: append an object with id, topic, question, answers[], correct (0-based index), explanation.
// Answers are shuffled at render time by app.js — correct position in the source array does not matter.
// To add Hungarian content: add a hu: { question, answers, explanation } key. Falls back to German if absent.

const QUESTIONS = [

  // ── DSGVO Grundlagen ──────────────────────────────────────────────────────
  {
    id: 1,
    topic: "DSGVO Grundlagen",
    question: "Was ist die Datenschutz-Grundverordnung (DSGVO)?",
    answers: [
      "Ein österreichisches Bundesgesetz zum Datenschutz",
      "Ein internationales Abkommen zwischen EU und USA",
      "Eine EU-Verordnung, die den Datenschutz in der gesamten EU einheitlich regelt",
      "Eine ISO-Norm für IT-Sicherheit"
    ],
    correct: 2,
    explanation: "Die DSGVO ist eine EU-Verordnung, die seit 25. Mai 2018 in allen Mitgliedstaaten unmittelbar gilt und den Schutz personenbezogener Daten vereinheitlicht.",
    hu: {
      question: "Mi az általános adatvédelmi rendelet (GDPR)?",
      answers: [
        "Egy osztrák szövetségi adatvédelmi törvény",
        "Az EU és az USA közötti nemzetközi megállapodás",
        "Egy EU-rendelet, amely az egész EU-ban egységesen szabályozza az adatvédelmet",
        "IT-biztonsági ISO-szabvány"
      ],
      explanation: "A GDPR egy EU-rendelet, amely 2018. május 25. óta közvetlen hatállyal alkalmazandó minden tagállamban, és egységesíti a személyes adatok védelmét."
    }
  },
  {
    id: 2,
    topic: "DSGVO Grundlagen",
    question: "Seit wann ist die DSGVO verbindlich anzuwenden?",
    answers: [
      "25. Mai 2018",
      "1. Januar 2016",
      "1. Januar 2020",
      "31. Dezember 2022"
    ],
    correct: 0,
    explanation: "Die DSGVO trat zwar schon 2016 in Kraft, ist aber erst seit dem 25. Mai 2018 verbindlich anzuwenden.",
    hu: {
      question: "Mióta kötelezően alkalmazandó a GDPR?",
      answers: [
        "2018. május 25.",
        "2016. január 1.",
        "2020. január 1.",
        "2022. december 31."
      ],
      explanation: "A GDPR ugyan már 2016-ban hatályba lépett, de kötelezően csak 2018. május 25. óta alkalmazandó."
    }
  },
  {
    id: 3,
    topic: "DSGVO Grundlagen",
    question: "Was sind personenbezogene Daten?",
    answers: [
      "Nur Name und Adresse einer Person",
      "Ausschließlich digital gespeicherte Daten",
      "Nur Daten, die im Internet veröffentlicht wurden",
      "Alle Informationen, die eine natürliche Person identifizieren oder identifizierbar machen"
    ],
    correct: 3,
    explanation: "Personenbezogene Daten sind alle Informationen zu einer identifizierbaren natürlichen Person - z. B. Name, IP-Adresse, Foto oder Standortdaten.",
    hu: {
      question: "Mik a személyes adatok?",
      answers: [
        "Csak egy személy neve és lakcíme",
        "Kizárólag digitálisan tárolt adatok",
        "Csak az interneten közzétett adatok",
        "Minden olyan adat, amely egy természetes személyt azonosít vagy azonosíthatóvá tesz"
      ],
      explanation: "A személyes adat minden olyan természetes személyre vonatkozó információ, amely alapján azonosítható - pl. név, IP-cím, fénykép vagy tartózkodási hely."
    }
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
    explanation: "Datensparsamkeit: Es darf nur erhoben werden, was wirklich gebraucht wird. Für Entwickler bedeutet das: keine unnötigen Felder im Formular, keine unbegrenzten Logs.",
    hu: {
      question: "Mit jelent az adattakarékosság elve?",
      answers: [
        "A lehető legtöbb adatot gyűjtik össze",
        "Csak annyi adatot gyűjtenek, amennyi az adott célhoz szükséges",
        "Minden adatot egy év után automatikusan törölnek",
        "Az adatokat csak titkosítva tárolják"
      ],
      explanation: "Adattakarékosság: csak azt szabad gyűjteni, amire valóban szükség van. Fejlesztőknek ez azt jelenti: ne legyen felesleges mező az űrlapon, és ne legyenek korlátlan naplók."
    }
  },
  {
    id: 5,
    topic: "DSGVO Grundlagen",
    question: "Was bedeutet Zweckbindung im Datenschutz?",
    answers: [
      "Daten müssen an einem bestimmten Ort gespeichert werden",
      "Alle Datenverarbeitungen sind erlaubt",
      "Daten dürfen nur für den Zweck verwendet werden, für den sie erhoben wurden",
      "Daten dürfen nur innerhalb der EU verwendet werden"
    ],
    correct: 2,
    explanation: "Zweckbindung: Daten dürfen nur für den konkreten Zweck genutzt werden, für den sie gesammelt wurden. Wer für den Newsletter erhebt, darf die Daten nicht für andere Werbezwecke nutzen.",
    hu: {
      question: "Mit jelent a célhoz kötöttség az adatvédelemben?",
      answers: [
        "Az adatokat meghatározott helyen kell tárolni",
        "Minden adatkezelési művelet megengedett",
        "Az adatok csak arra a célra használhatók, amelyre gyűjtötték őket",
        "Az adatok csak az EU-n belül használhatók"
      ],
      explanation: "Célhoz kötöttség: az adatokat csak arra a konkrét célra szabad felhasználni, amelyre gyűjtötték. Aki hírlevélhez gyűjti, nem használhatja más reklámcélra."
    }
  },
  {
    id: 6,
    topic: "DSGVO Grundlagen",
    question: "Was ist der Unterschied zwischen Verantwortlichem und Auftragsverarbeiter?",
    answers: [
      "Der Verantwortliche bestimmt Zweck und Mittel der Verarbeitung; der Auftragsverarbeiter verarbeitet nur auf Weisung",
      "Kein Unterschied - beide sind gleichgestellt",
      "Der Auftragsverarbeiter haftet allein für alle Datenschutzverstöße",
      "Der Verantwortliche ist immer eine staatliche Behörde"
    ],
    correct: 0,
    explanation: "Der Verantwortliche entscheidet WARUM und WIE Daten verarbeitet werden. Der Auftragsverarbeiter (z. B. ein Cloud-Anbieter) verarbeitet nur nach Weisung. Ein Auftragsverarbeitungsvertrag (AVV) ist Pflicht.",
    hu: {
      question: "Mi a különbség az adatkezelő és az adatfeldolgozó között?",
      answers: [
        "Az adatkezelő határozza meg az adatkezelés célját és módját; az adatfeldolgozó csak utasítás alapján dolgoz fel adatokat",
        "Nincs különbség - mindkettő egyenrangú",
        "Az adatfeldolgozó egyedül felel minden adatvédelmi jogsértésért",
        "Az adatkezelő mindig állami hatóság"
      ],
      explanation: "Az adatkezelő dönti el, MIÉRT és HOGYAN kezelik az adatokat. Az adatfeldolgozó (pl. egy felhőszolgáltató) csak utasítás alapján dolgoz fel adatokat. Adatfeldolgozási szerződés (AVV) kötelező."
    }
  },
  {
    id: 7,
    topic: "DSGVO Grundlagen",
    question: "Welche der folgenden ist eine gültige Rechtsgrundlage für die Datenverarbeitung?",
    answers: [
      "Eigenes wirtschaftliches Interesse ohne weitere Prüfung",
      "Technische Möglichkeit der Speicherung",
      "Neugier des Unternehmens",
      "Freiwillige Einwilligung der betroffenen Person"
    ],
    correct: 3,
    explanation: "Ohne Rechtsgrundlage ist keine Verarbeitung erlaubt. Gültige Grundlagen sind z. B. Einwilligung, Vertragserfüllung, rechtliche Verpflichtung oder berechtigtes Interesse nach sorgfältiger Abwägung.",
    hu: {
      question: "Melyik az alábbiak közül érvényes jogalap az adatkezeléshez?",
      answers: [
        "Saját gazdasági érdek további vizsgálat nélkül",
        "Az adatok tárolásának műszaki lehetősége",
        "A vállalkozás kíváncsisága",
        "Az érintett önkéntes hozzájárulása"
      ],
      explanation: "Jogalap nélkül nem lehet adatot kezelni. Érvényes jogalapok pl. a hozzájárulás, a szerződés teljesítése, jogi kötelezettség vagy jogos érdek alapos mérlegelés után."
    }
  },
  {
    id: 8,
    topic: "DSGVO Grundlagen",
    question: "Welche Anforderungen muss eine Einwilligung erfüllen?",
    answers: [
      "Mündlich oder durch Schweigen ist ausreichend",
      "Freiwillig, für einen konkreten Zweck, informiert und eindeutig",
      "Nur schriftlich und notariell beglaubigt",
      "Einmalig und für alle künftigen Datenverarbeitungen gültig"
    ],
    correct: 1,
    explanation: "Eine Einwilligung muss freiwillig, spezifisch, informiert und eindeutig abgegeben werden. Vorausgefüllte Checkboxen oder Schweigen gelten NICHT als Einwilligung.",
    hu: {
      question: "Milyen követelményeknek kell megfelelnie a hozzájárulásnak?",
      answers: [
        "Szóban vagy hallgatással is elegendő",
        "Önkéntes, konkrét célra vonatkozó, tájékoztatáson alapuló és egyértelmű",
        "Csak írásban és közjegyzőileg hitelesítve érvényes",
        "Egyszeri és minden jövőbeli adatkezelésre érvényes"
      ],
      explanation: "A hozzájárulásnak önkéntesnek, célhoz kötöttnek, tájékoztatáson alapulónak és egyértelműnek kell lennie. Az előre bepipált jelölőnégyzet vagy a hallgatás NEM minősül hozzájárulásnak."
    }
  },
  {
    id: 9,
    topic: "DSGVO Grundlagen",
    question: "Kann eine einmal gegebene Einwilligung widerrufen werden?",
    answers: [
      "Nein, eine erteilte Einwilligung ist endgültig",
      "Ja, aber nur innerhalb von 14 Tagen",
      "Ja, jederzeit - die bisherige Verarbeitung bleibt aber rechtmäßig",
      "Nur wenn ein Gericht dies anordnet"
    ],
    correct: 2,
    explanation: "Eine Einwilligung kann jederzeit widerrufen werden. Danach muss die Verarbeitung eingestellt werden. Für Entwickler bedeutet das: eine Opt-out-Funktion muss technisch vorhanden sein.",
    hu: {
      question: "Visszavonható-e az egyszer megadott hozzájárulás?",
      answers: [
        "Nem, a megadott hozzájárulás végleges",
        "Igen, de csak 14 napon belül",
        "Igen, bármikor - a korábbi adatkezelés azonban jogszerű marad",
        "Csak bírósági határozat alapján"
      ],
      explanation: "A hozzájárulás bármikor visszavonható. Ezután az adatkezelést le kell állítani. Fejlesztőknek ez azt jelenti: egy leiratkozási funkciónak műszakilag elérhetőnek kell lennie."
    }
  },

  // ── Betroffenenrechte ─────────────────────────────────────────────────────
  {
    id: 10,
    topic: "Betroffenenrechte",
    question: "Was bedeutet das Recht auf Vergessenwerden für eine Anwendung?",
    answers: [
      "Nutzer können verlangen, dass ihre Daten aus dem System gelöscht werden",
      "Historische Ereignisse werden aus dem Internet gelöscht",
      "Unternehmen müssen alle Daten nach 30 Tagen löschen",
      "Betrifft nur Suchmaschinen, nicht normale Apps"
    ],
    correct: 0,
    explanation: "Das Recht auf Löschung bedeutet für Entwickler: die App muss eine vollständige Löschung aller personenbezogenen Daten eines Nutzers technisch ermöglichen - inkl. Backups und Logs (soweit keine Aufbewahrungspflicht besteht).",
    hu: {
      question: "Mit jelent a törléshez való jog egy alkalmazás szempontjából?",
      answers: [
        "A felhasználók kérhetik adataik törlését a rendszerből",
        "A történelmi eseményeket törlik az internetről",
        "A vállalatoknak 30 napon belül minden adatot törölniük kell",
        "Csak keresőmotorokat érint, nem közönséges alkalmazásokat"
      ],
      explanation: "A törléshez való jog fejlesztői szempontból: az alkalmazásnak műszakilag lehetővé kell tennie egy felhasználó összes személyes adatának teljes törlését - beleértve a biztonsági mentéseket és naplókat is (kivéve ha megőrzési kötelezettség áll fenn)."
    }
  },
  {
    id: 11,
    topic: "Betroffenenrechte",
    question: "Was beinhaltet das Auskunftsrecht?",
    answers: [
      "Das Recht, fremde Daten einzusehen",
      "Das Recht auf kostenlose Rechtsberatung",
      "Das Recht auf Einsicht in interne Unternehmensunterlagen",
      "Das Recht zu erfahren, welche Daten über die eigene Person gespeichert sind"
    ],
    correct: 3,
    explanation: "Jede Person darf verlangen zu erfahren, welche Daten über sie gespeichert sind, zu welchem Zweck und wer diese erhalten hat. Entwickler müssen sicherstellen, dass diese Auskunft technisch möglich ist.",
    hu: {
      question: "Mit tartalmaz a hozzáférési jog?",
      answers: [
        "Más személyek adatainak megtekintési joga",
        "Ingyenes jogi tanácsadáshoz való jog",
        "Belső vállalati iratok megtekintési joga",
        "A jog, hogy megtudjuk, milyen adatokat tárolnak rólunk"
      ],
      explanation: "Minden személy kérheti, hogy tájékoztassák arról, milyen adatokat tárolnak róla, milyen célból, és ki kapta meg azokat. A fejlesztőknek biztosítaniuk kell, hogy ez a tájékoztatás műszakilag lehetséges legyen."
    }
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
    explanation: "Die Antwort muss innerhalb eines Monats erfolgen. Bei besonders komplexen Anfragen kann die Frist auf bis zu drei Monate verlängert werden - die betroffene Person muss aber informiert werden.",
    hu: {
      question: "Mennyi ideje van egy vállalatnak egy hozzáférési kérésre válaszolni?",
      answers: [
        "Azonnal, 24 órán belül",
        "Egy hónapon belül (összetett esetekben legfeljebb három hónap)",
        "Hat hónapon belül",
        "Nincs törvényes határidő"
      ],
      explanation: "A választ egy hónapon belül kell megadni. Különösen összetett kérések esetén a határidő legfeljebb három hónapra meghosszabbítható - az érintettet azonban tájékoztatni kell."
    }
  },
  {
    id: 13,
    topic: "Betroffenenrechte",
    question: "Was bedeutet das Recht auf Datenübertragbarkeit für Entwickler?",
    answers: [
      "Nutzer müssen ihre Daten per Post erhalten können",
      "Entwickler müssen alle Daten auf USB-Stick ausgeben",
      "Nutzer können ihre Daten in einem maschinenlesbaren Format (z. B. JSON, CSV) exportieren und weitergeben",
      "Gilt nur für Banken und Gesundheitsdienstleister"
    ],
    correct: 2,
    explanation: "Anwendungen müssen einen Daten-Export in einem gängigen, maschinenlesbaren Format ermöglichen - z. B. JSON oder CSV. Das gilt bei Verarbeitung auf Basis von Einwilligung oder Vertrag.",
    hu: {
      question: "Mit jelent az adathordozhatósághoz való jog a fejlesztők számára?",
      answers: [
        "A felhasználóknak postán kell megkapniuk adataikat",
        "A fejlesztőknek USB-meghajtón kell kiadniuk az adatokat",
        "A felhasználók géppel olvasható formátumban (pl. JSON, CSV) exportálhatják és továbbadhatják adataikat",
        "Csak bankokra és egészségügyi szolgáltatókra vonatkozik"
      ],
      explanation: "Az alkalmazásoknak lehetővé kell tenniük az adatok exportálását elterjedt, géppel olvasható formátumban - pl. JSON vagy CSV. Ez hozzájáruláson vagy szerződésen alapuló adatkezelésnél alkalmazandó."
    }
  },

  // ── Datenpannen ───────────────────────────────────────────────────────────
  {
    id: 14,
    topic: "Datenpannen",
    question: "Was muss passieren, wenn in einem Unternehmen Nutzerdaten durch einen Angriff oder Fehler nach außen gelangen?",
    answers: [
      "Die Datenschutzbehörde muss innerhalb von 72 Stunden informiert werden (wenn ein Risiko besteht)",
      "Nichts, das ist eine interne Angelegenheit",
      "Die Polizei muss sofort gerufen werden",
      "Die Meldung muss erst nach einem Monat erfolgen"
    ],
    correct: 0,
    explanation: "Bei einer Datenpanne muss die Aufsichtsbehörde unverzüglich, möglichst innerhalb von 72 Stunden, benachrichtigt werden - sofern ein Risiko für die Betroffenen besteht.",
    hu: {
      question: "Mi a teendő, ha egy vállalatnál felhasználói adatok kiszivárognak támadás vagy hiba miatt?",
      answers: [
        "Az adatvédelmi hatóságot 72 órán belül értesíteni kell (ha kockázat áll fenn)",
        "Semmi, ez belső ügy",
        "Azonnal rendőrséget kell hívni",
        "A bejelentést csak egy hónap elteltével kell megtenni"
      ],
      explanation: "Adatvédelmi incidens esetén a felügyeleti hatóságot haladéktalanul, lehetőleg 72 órán belül értesíteni kell - amennyiben kockázat áll fenn az érintettekre nézve."
    }
  },
  {
    id: 15,
    topic: "Datenpannen",
    question: "Wann müssen auch die betroffenen Nutzer direkt über eine Datenpanne informiert werden?",
    answers: [
      "Immer, bei jeder Datenpanne",
      "Nie - nur die Behörde wird informiert",
      "Wenn mehr als 100 Personen betroffen sind",
      "Wenn ein hohes Risiko besteht, z. B. wenn Passwörter oder Gesundheitsdaten betroffen sind"
    ],
    correct: 3,
    explanation: "Die direkte Benachrichtigung der Betroffenen ist nur bei voraussichtlich hohem Risiko nötig - z. B. wenn Passwörter, Gesundheitsdaten oder Bankdaten abgeflossen sind.",
    hu: {
      question: "Mikor kell az érintett felhasználókat közvetlenül értesíteni az adatvédelmi incidensről?",
      answers: [
        "Mindig, minden adatvédelmi incidens esetén",
        "Soha - csak a hatóságot kell értesíteni",
        "Ha több mint 100 érintett van",
        "Ha magas kockázat áll fenn, pl. jelszavak vagy egészségügyi adatok érintettségénél"
      ],
      explanation: "Az érintetteket közvetlenül értesíteni csak várhatóan magas kockázat esetén szükséges - pl. ha jelszavak, egészségügyi adatok vagy bankadatok szivárogtak ki."
    }
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
    explanation: "Privacy by Design: Datenschutz ist von Anfang an Teil des Designs. Entwickler sollen z. B. bei der Datenbankstruktur, den API-Endpunkten und Formularen schon an Datensparsamkeit und Sicherheit denken.",
    hu: {
      question: "Mit jelent a beépített adatvédelem (Privacy by Design) a szoftverfejlesztésben?",
      answers: [
        "Az adatvédelmet a projekt végén utólag építik be",
        "Az adatvédelmet már a tervezés és fejlesztés során figyelembe veszik és beépítik",
        "Csak külső rendszereknek kell megfelelniük az adatvédelmi előírásoknak",
        "Az adatvédelem csak a kész, kiszállított termékekre vonatkozik"
      ],
      explanation: "Privacy by Design: az adatvédelem a tervezés elejétől fogva részét képezi. A fejlesztőknek pl. az adatbázis-struktúránál, az API-végpontoknál és az űrlapoknál már az adattakarékosságra és biztonságra kell gondolniuk."
    }
  },
  {
    id: 17,
    topic: "Datenschutzpflichten",
    question: "Was bedeutet Privacy by Default?",
    answers: [
      "Standardmäßig werden alle Daten mit Dritten geteilt",
      "Benutzer müssen Datenschutz selbst aktiv einschalten",
      "Die Standard-Einstellungen einer App sind so gesetzt, dass möglichst wenige Daten verarbeitet werden",
      "Alle Daten werden standardmäßig nach einem Monat gelöscht"
    ],
    correct: 2,
    explanation: "Privacy by Default: Apps sollen standardmäßig datenschutzfreundlich sein. Z. B. soll der Standort nicht automatisch geteilt werden, und optionale Felder sollen nicht vorausgefüllt sein.",
    hu: {
      question: "Mit jelent az alapértelmezett adatvédelem (Privacy by Default)?",
      answers: [
        "Alapértelmezés szerint minden adatot harmadik felekkel osztanak meg",
        "A felhasználóknak maguknak kell aktívan bekapcsolniuk az adatvédelmet",
        "Az alkalmazás alapbeállításai úgy vannak konfigurálva, hogy a lehető legkevesebb adatot kezeljék",
        "Minden adatot alapértelmezés szerint egy hónap után törölnek"
      ],
      explanation: "Privacy by Default: az alkalmazásoknak alapértelmezés szerint adatvédelmi szempontból barátiaknak kell lenniük. Pl. a helymeghatározást nem szabad automatikusan megosztani, és az opcionális mezőket nem szabad előre kitölteni."
    }
  },
  {
    id: 18,
    topic: "Datenschutzpflichten",
    question: "Wann muss vor einer Datenverarbeitung eine Datenschutz-Folgenabschätzung durchgeführt werden?",
    answers: [
      "Wenn die geplante Verarbeitung voraussichtlich ein hohes Risiko für die Betroffenen bedeutet",
      "Bei jeder neuen App-Entwicklung",
      "Nur bei Behörden",
      "Wenn mehr als 10.000 Datensätze verarbeitet werden"
    ],
    correct: 0,
    explanation: "Eine Datenschutz-Folgenabschätzung ist erforderlich bei hohem Risiko - z. B. bei Videoüberwachung, Profiling, Gesundheitsdaten in großem Umfang oder biometrischen Daten.",
    hu: {
      question: "Mikor szükséges adatvédelmi hatásvizsgálatot elvégezni?",
      answers: [
        "Ha a tervezett adatkezelés várhatóan magas kockázatot jelent az érintettekre nézve",
        "Minden új alkalmazás fejlesztésekor",
        "Csak hatóságoknál",
        "Ha 10 000-nél több adatrekordot kezelnek"
      ],
      explanation: "Adatvédelmi hatásvizsgálat magas kockázat esetén kötelező - pl. videomegfigyelésnél, profilalkotásnál, nagy mennyiségű egészségügyi adatnál vagy biometrikus adatoknál."
    }
  },
  {
    id: 19,
    topic: "Datenschutzpflichten",
    question: "Was ist das Verarbeitungsverzeichnis?",
    answers: [
      "Ein öffentliches Register aller Datenbanken eines Unternehmens",
      "Ein Protokoll aller Kundenbeschwerden",
      "Eine Liste aller eingesetzten IT-Systeme",
      "Eine interne Dokumentation aller Datenverarbeitungsvorgänge im Unternehmen"
    ],
    correct: 3,
    explanation: "Das Verarbeitungsverzeichnis ist ein internes Pflichtdokument, das alle Datenverarbeitungen beschreibt - inklusive Zweck, Datenkategorien, Empfänger und Löschfristen.",
    hu: {
      question: "Mi az adatkezelési tevékenységek nyilvántartása?",
      answers: [
        "Egy vállalat összes adatbázisának nyilvános regisztere",
        "Az összes ügyfélpanasz naplója",
        "Az összes IT-rendszer listája",
        "A vállalaton belüli összes adatkezelési tevékenység belső dokumentációja"
      ],
      explanation: "Az adatkezelési nyilvántartás kötelező belső dokumentum, amely leírja az összes adatkezelési tevékenységet - beleértve a célt, az adatkategóriákat, a címzetteket és a törlési határidőket."
    }
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
    explanation: "Ein Datenschutzbeauftragter ist Pflicht bei Behörden, bei umfangreicher Verarbeitung besonderer Datenkategorien (z. B. Gesundheitsdaten) und bei systematischer Beobachtung von Personen.",
    hu: {
      question: "Mikor kötelező adatvédelmi tisztviselőt kinevezni?",
      answers: [
        "Minden vállalatnál az első munkavállaló megjelenésétől",
        "Hatóságoknál, valamint érzékeny adatok nagyszabású kezelésekor vagy szisztematikus megfigyelésnél",
        "Csak kórházakban és bankokban",
        "Soha - az adatvédelmi tisztviselő mindig önkéntes"
      ],
      explanation: "Adatvédelmi tisztviselő kinevezése kötelező hatóságoknál, különleges adatkategóriák (pl. egészségügyi adatok) nagyszabású kezelésekor, és személyek szisztematikus megfigyelésekor."
    }
  },

  // ── Datenschutz Österreich ────────────────────────────────────────────────
  {
    id: 21,
    topic: "Datenschutz Österreich",
    question: "Welche Behörde ist in Österreich für Datenschutzbeschwerden zuständig?",
    answers: [
      "Bundeskanzleramt",
      "Bundesministerium für Digitalisierung",
      "Datenschutzbehörde (DSB)",
      "Wirtschaftskammer Österreich (WKO)"
    ],
    correct: 2,
    explanation: "Die österreichische Datenschutzbehörde (DSB) ist die nationale Aufsichtsbehörde. Sie nimmt Beschwerden entgegen und kann Sanktionen verhängen.",
    hu: {
      question: "Melyik hatóság illetékes Ausztriában az adatvédelmi panaszok esetén?",
      answers: [
        "Szövetségi Kancellária",
        "Digitalizációs Szövetségi Minisztérium",
        "Adatvédelmi Hatóság (DSB)",
        "Gazdasági Kamara (WKO)"
      ],
      explanation: "Az osztrák Adatvédelmi Hatóság (DSB) a nemzeti felügyeleti hatóság. Panaszokat fogad be és szankciókat szabhat ki."
    }
  },
  {
    id: 22,
    topic: "Datenschutz Österreich",
    question: "Was ist das österreichische Datenschutzgesetz 2018 (DSG 2018)?",
    answers: [
      "Es ergänzt die DSGVO auf nationaler Ebene und regelt österreichische Besonderheiten",
      "Es ersetzt die DSGVO vollständig in Österreich",
      "Es gilt nur für öffentliche Unternehmen",
      "Es ist identisch mit dem deutschen Datenschutzgesetz"
    ],
    correct: 0,
    explanation: "Das DSG 2018 ergänzt die DSGVO in Österreich. Es regelt nationale Öffnungsklauseln und benennt die Datenschutzbehörde als zuständige Aufsichtsbehörde.",
    hu: {
      question: "Mi az osztrák 2018-as adatvédelmi törvény (DSG 2018)?",
      answers: [
        "Kiegészíti a GDPR-t nemzeti szinten és szabályozza az osztrák sajátosságokat",
        "Teljes mértékben helyettesíti a GDPR-t Ausztriában",
        "Csak közintézményekre vonatkozik",
        "Azonos a német adatvédelmi törvénnyel"
      ],
      explanation: "A DSG 2018 kiegészíti a GDPR-t Ausztriában. Szabályozza a nemzeti nyitórendelkezéseket és az Adatvédelmi Hatóságot jelöli ki illetékes felügyeleti hatóságként."
    }
  },
  {
    id: 23,
    topic: "Datenschutz Österreich",
    question: "Welche Daten gelten als besonders sensibel und brauchen erhöhten Schutz?",
    answers: [
      "Name, Adresse und Telefonnummer",
      "E-Mail-Adresse und Geburtsdatum",
      "Einkaufshistorie und Surfgewohnheiten",
      "Gesundheitsdaten, biometrische Daten, religiöse Überzeugungen, politische Meinungen"
    ],
    correct: 3,
    explanation: "Besonders schutzwürdige Daten: Gesundheitsdaten, genetische und biometrische Daten, politische Meinungen, religiöse Überzeugungen, Gewerkschaftszugehörigkeit. Sie dürfen nur in Ausnahmefällen verarbeitet werden.",
    hu: {
      question: "Mely adatok minősülnek különösen érzékenynek és igényelnek fokozott védelmet?",
      answers: [
        "Név, lakcím és telefonszám",
        "E-mail-cím és születési dátum",
        "Vásárlási előzmények és böngészési szokások",
        "Egészségügyi adatok, biometrikus adatok, vallási meggyőződés, politikai vélemény"
      ],
      explanation: "Különösen védendő adatok: egészségügyi, genetikai és biometrikus adatok, politikai vélemények, vallási meggyőződés, szakszervezeti tagság. Ezeket csak kivételes esetekben szabad kezelni."
    }
  },
  {
    id: 24,
    topic: "Datenschutz Österreich",
    question: "Wie hoch kann eine Strafe bei schwerwiegenden DSGVO-Verstößen maximal sein?",
    answers: [
      "Bis zu 50.000 Euro",
      "Bis zu 20 Millionen Euro oder 4 % des weltweiten Jahresumsatzes",
      "Bis zu 500.000 Euro",
      "Bis zu 1 Million Euro"
    ],
    correct: 1,
    explanation: "Bei schwerwiegenden Verstößen drohen Strafen bis zu 20 Mio. Euro oder 4 % des weltweiten Jahresumsatzes - je nachdem, was höher ist. Das gilt auch für kleine Unternehmen und Start-ups.",
    hu: {
      question: "Mekkora lehet a maximális bírság súlyos GDPR-jogsértés esetén?",
      answers: [
        "Legfeljebb 50 000 euró",
        "Legfeljebb 20 millió euró vagy a globális éves árbevétel 4%-a",
        "Legfeljebb 500 000 euró",
        "Legfeljebb 1 millió euró"
      ],
      explanation: "Súlyos jogsértés esetén akár 20 millió eurós vagy a globális éves árbevétel 4%-ának megfelelő bírság is kiszabható - attól függően, melyik a magasabb. Ez kis vállalkozásokra és startupokra is vonatkozik."
    }
  },
  {
    id: 25,
    topic: "Datenschutz Österreich",
    question: "Was ist der Unterschied zwischen Pseudonymisierung und Anonymisierung?",
    answers: [
      "Kein Unterschied - beide Begriffe bedeuten dasselbe",
      "Pseudonymisierung ist ein stärkerer Schutz als Anonymisierung",
      "Anonymisierte Daten sind nicht mehr einer Person zuzuordnen; pseudonymisierte Daten schon (mit Zusatzinformation)",
      "Anonymisierung gilt nur bei Gesundheitsdaten"
    ],
    correct: 2,
    explanation: "Pseudonymisierung: Re-Identifikation mit Zusatzdaten möglich - die DSGVO gilt weiter. Anonymisierung: keine Re-Identifikation mehr möglich - die DSGVO gilt nicht mehr. Für Testdaten sollte echte Anonymisierung angestrebt werden.",
    hu: {
      question: "Mi a különbség az álnevesítés és az anonimizálás között?",
      answers: [
        "Nincs különbség - mindkét fogalom ugyanazt jelenti",
        "Az álnevesítés erősebb védelmet nyújt, mint az anonimizálás",
        "Az anonimizált adatok nem rendelhetők személyhez; az álnevesített adatok igen (kiegészítő információval)",
        "Az anonimizálás csak egészségügyi adatokra vonatkozik"
      ],
      explanation: "Álnevesítés: kiegészítő adatokkal a visszaazonosítás lehetséges - a GDPR továbbra is alkalmazandó. Anonimizálás: visszaazonosítás már nem lehetséges - a GDPR nem alkalmazandó. Tesztadatoknál valódi anonimizálásra kell törekedni."
    }
  },

  // ── Urheberrecht ──────────────────────────────────────────────────────────
  {
    id: 26,
    topic: "Urheberrecht",
    question: "Was schützt das Urheberrecht in Österreich?",
    answers: [
      "Persönliche geistige Schöpfungen wie Software, Texte, Musik und Bilder",
      "Ideen und Konzepte",
      "Technische Erfindungen (das sind Patente)",
      "Firmennamen und Logos (das sind Marken)"
    ],
    correct: 0,
    explanation: "Das österreichische UrhG schützt Werke der Literatur, Musik, bildenden Kunst sowie Computerprogramme. Bloße Ideen sind nicht geschützt - nur deren konkrete Umsetzung.",
    hu: {
      question: "Mit véd a szerzői jog Ausztriában?",
      answers: [
        "Személyes szellemi alkotásokat, mint szoftver, szöveg, zene és képek",
        "Ötleteket és koncepciókat",
        "Műszaki találmányokat (ezek a szabadalmak)",
        "Cégneveket és logókat (ezek a védjegyek)"
      ],
      explanation: "Az osztrák szerzői jogi törvény (UrhG) védi az irodalmi, zenei, képzőművészeti alkotásokat, valamint a számítógépes programokat. A puszta ötletek nem védettek - csak azok konkrét megvalósítása."
    }
  },
  {
    id: 27,
    topic: "Urheberrecht",
    question: "Wann entsteht das Urheberrecht an einem Werk?",
    answers: [
      "Nach einer Registrierung beim Patentamt",
      "Erst nach Veröffentlichung des Werkes",
      "Nach einer Wartezeit von 6 Monaten",
      "Automatisch mit der Schöpfung des Werkes - ohne Anmeldung oder Registrierung"
    ],
    correct: 3,
    explanation: "Das Urheberrecht entsteht automatisch mit der Schöpfung. Kein Copyright-Vermerk, keine Registrierung notwendig - das gilt auch für selbstgeschriebenen Code.",
    hu: {
      question: "Mikor keletkezik a szerzői jog egy alkotásra?",
      answers: [
        "A szabadalmi hivatalnál való bejegyzés után",
        "Az alkotás közzétételét követően",
        "Hat hónapos várakozási idő után",
        "Automatikusan az alkotás létrehozásakor - bejelentés vagy nyilvántartásba vétel nélkül"
      ],
      explanation: "A szerzői jog automatikusan keletkezik az alkotással. Nem szükséges szerzői jogi jelzés vagy nyilvántartásba vétel - ez az önállóan megírt kódra is vonatkozik."
    }
  },
  {
    id: 28,
    topic: "Urheberrecht",
    question: "Wie lange ist ein Werk in Österreich urheberrechtlich geschützt?",
    answers: [
      "20 Jahre ab der Erstellung",
      "70 Jahre nach dem Tod des Urhebers",
      "50 Jahre ab Veröffentlichung",
      "Unbegrenzt"
    ],
    correct: 1,
    explanation: "In Österreich und der EU endet der Urheberrechtsschutz 70 Jahre nach dem Tod der Urheberin oder des Urhebers. Danach wird das Werk gemeinfrei.",
    hu: {
      question: "Meddig áll fenn egy alkotás szerzői jogi védelme Ausztriában?",
      answers: [
        "20 évig az elkészítéstől",
        "A szerző halálától számított 70 évig",
        "50 évig a közzétételtől",
        "Határozatlan ideig"
      ],
      explanation: "Ausztriában és az EU-ban a szerzői jogi védelem a szerző halálát követő 70 év elteltével szűnik meg. Ezután a mű közkinccsé válik."
    }
  },
  {
    id: 29,
    topic: "Urheberrecht",
    question: "Wie wird Software urheberrechtlich behandelt?",
    answers: [
      "Wie ein Patent - es braucht eine Anmeldung",
      "Wie ein Markenzeichen",
      "Wie ein literarisches Werk - automatisch ab der Erstellung",
      "Software ist urheberrechtlich nicht geschützt"
    ],
    correct: 2,
    explanation: "Computerprogramme sind nach österreichischem UrhG wie literarische Werke geschützt. Der Schutz entsteht automatisch, sobald das Programm eine individuelle Schöpfungshöhe erreicht.",
    hu: {
      question: "Hogyan kezelik a szoftvert szerzői jogi szempontból?",
      answers: [
        "Mint szabadalmat - bejegyzés szükséges",
        "Mint védjegyet",
        "Mint irodalmi alkotást - automatikusan a létrehozástól",
        "A szoftver szerzői jogilag nem védett"
      ],
      explanation: "A számítógépes programok az osztrák UrhG szerint irodalmi alkotásokként védetté válnak. A védelem automatikusan keletkezik, amint a program eléri az egyéni alkotói szintet."
    }
  },

  // ── Softwarelizenzen ──────────────────────────────────────────────────────
  {
    id: 30,
    topic: "Softwarelizenzen",
    question: "Was bedeutet Open Source?",
    answers: [
      "Der Quellcode ist öffentlich zugänglich und darf genutzt, verändert und weiterverteilt werden",
      "Software ist kostenlos nutzbar",
      "Software hat keine Lizenz",
      "Software darf nur von Entwicklern genutzt werden"
    ],
    correct: 0,
    explanation: "Open Source: Quellcode ist öffentlich und steht unter einer Lizenz, die Nutzung, Änderung und Weitergabe erlaubt. Kostenlos und Open Source sind nicht dasselbe.",
    hu: {
      question: "Mit jelent a nyílt forráskód (Open Source)?",
      answers: [
        "A forráskód nyilvánosan elérhető, és felhasználható, módosítható és terjeszthető",
        "A szoftver ingyenesen használható",
        "A szoftvernek nincs licence",
        "A szoftvert csak fejlesztők használhatják"
      ],
      explanation: "Nyílt forráskód: a forráskód nyilvános és olyan licence alatt áll, amely engedélyezi a felhasználást, módosítást és terjesztést. Az ingyenes és a nyílt forráskód nem ugyanaz."
    }
  },
  {
    id: 31,
    revision: 1,
    topic: "Softwarelizenzen",
    question: "Was ist das typische Merkmal der GPL-Lizenz?",
    answers: [
      "Quellcode muss geheim bleiben",
      "Kommerzielle Nutzung ist verboten",
      "Die Software darf nur kostenlos angeboten werden",
      "Bei Weitergabe eines GPL-pflichtigen abgeleiteten Werks gelten GPL- und Quellcodepflichten"
    ],
    correct: 3,
    explanation: "Die GPL erlaubt private Nutzung und Änderungen ohne Veröffentlichung. Wird ein erfasstes abgeleitetes Werk weitergegeben, sind die GPL-Bedingungen und die Bereitstellung des zugehörigen Quellcodes einzuhalten. Bloßes gemeinsames Ausliefern unabhängiger Programme macht nicht automatisch alle zu GPL-Software.",
    hu: {
      question: "Mi a GPL-licence jellegzetes tulajdonsága?",
      answers: [
        "A forráskódnak titkosnak kell maradnia",
        "Kereskedelmi felhasználás tilos",
        "A szoftvert csak ingyenesen szabad kínálni",
        "GPL-köteles származékos mű terjesztésekor a GPL és a forráskód átadásának feltételeit kell követni"
      ],
      explanation: "A GPL megengedi a saját célú használatot és módosítást közzététel nélkül. A hatálya alá tartozó származékos mű terjesztésekor be kell tartani a GPL feltételeit, köztük a kapcsolódó forráskód rendelkezésre bocsátását. Független programok együttes csomagolása önmagában nem teszi mindegyiket GPL-kötelessé."
    }
  },
  {
    id: 32,
    revision: 1,
    topic: "Softwarelizenzen",
    question: "Was erlaubt die MIT-Lizenz?",
    answers: [
      "Nur nicht-kommerzielle Nutzung",
      "Nutzung, Änderung und Weitergabe - auch in kommerziellen Projekten - ohne Copyleft-Pflicht",
      "Nutzung nur mit schriftlicher Genehmigung des Autors",
      "Quellcode muss immer offengelegt werden"
    ],
    correct: 1,
    explanation: "Die MIT-Lizenz erlaubt Nutzung, Änderung und Weitergabe auch kommerziell. In Kopien oder wesentlichen Teilen der Software müssen der Copyright-Hinweis und der Erlaubnistext der Lizenz erhalten bleiben. Eigene Änderungen müssen nicht veröffentlicht werden.",
    hu: {
      question: "Mit enged meg az MIT-licence?",
      answers: [
        "Csak nem kereskedelmi felhasználást",
        "Felhasználást, módosítást és terjesztést - kereskedelmi projektekben is - copyleft-kötelezettség nélkül",
        "Felhasználást csak a szerző írásos engedélyével",
        "A forráskódot mindig közzé kell tenni"
      ],
      explanation: "Az MIT-licenc kereskedelmi felhasználást, módosítást és terjesztést is enged. A szoftver másolataiban vagy lényeges részeiben meg kell őrizni a szerzői jogi megjelölést és a licenc engedélyező szövegét. A saját módosításokat nem kötelező közzétenni."
    }
  },
  {
    id: 33,
    revision: 1,
    topic: "Softwarelizenzen",
    question: "Was bedeutet Copyleft bei Open-Source-Lizenzen?",
    answers: [
      "Die Software ist gratis nutzbar",
      "Der Quellcode gehört der Allgemeinheit ohne jede Einschränkung",
      "Bei Weitergabe bleiben die von der Lizenz erfassten Ableitungen unter ihren Copyleft-Bedingungen",
      "Das Urheberrecht ist aufgehoben"
    ],
    correct: 2,
    explanation: "Copyleft erhält Freiheiten bei der Weitergabe erfasster Ableitungen. Welche Teile betroffen sind, hängt von der Lizenz ab. Die bloße private Nutzung von GPL-Software verpflichtet nicht dazu, ein eigenes Projekt zu veröffentlichen.",
    hu: {
      question: "Mit jelent a copyleft a nyílt forráskódú licencekben?",
      answers: [
        "A szoftver ingyenesen használható",
        "A forráskód minden korlátozás nélkül a köz tulajdona",
        "Terjesztéskor a licenc hatálya alá tartozó származékos művekre is érvényesek a copyleft feltételei",
        "A szerzői jog megszűnik"
      ],
      explanation: "A copyleft a hatálya alá tartozó származékos művek továbbadásakor is megőrzi a szoftverhez kapcsolódó szabadságokat. Az érintett részek köre a licenctől függ. A GPL-szoftver puszta saját célú használata nem kötelez saját projekt közzétételére."
    }
  },
  {
    id: 34,
    revision: 1,
    topic: "Softwarelizenzen",
    question: "Was ist der Unterschied zwischen Freeware und Open Source?",
    answers: [
      "Freeware beschreibt meist kostenlose Nutzung; Open Source verlangt Lizenzrechte zum Einsehen, Ändern und Weitergeben des Quellcodes",
      "Kein Unterschied - beide Begriffe bedeuten dasselbe",
      "Freeware ist immer auch Open Source",
      "Open Source ist immer kostenlos"
    ],
    correct: 0,
    explanation: "Freeware ist kein einheitlicher Lizenzstandard: Der Begriff allein garantiert keine Rechte am Quellcode. Open Source beschreibt Lizenzfreiheiten und ist nicht auf kostenlose Angebote beschränkt. Öffentlich lesbarer Code allein genügt ebenfalls nicht.",
    hu: {
      question: "Mi a különbség a freeware és a nyílt forráskód között?",
      answers: [
        "A freeware többnyire ingyenes használatot jelöl; a nyílt forráskódhoz a kód megismerését, módosítását és terjesztését engedő licenc tartozik",
        "Nincs különbség - mindkét fogalom ugyanazt jelenti",
        "A freeware mindig nyílt forráskódú is",
        "A nyílt forráskód mindig ingyenes"
      ],
      explanation: "A freeware nem egységes licencszabvány: a megnevezés önmagában nem biztosít jogokat a forráskódhoz. A nyílt forráskód a licenc által biztosított szabadságokról szól, és nem kizárólag ingyenes ajánlatokra vonatkozik. A nyilvánosan olvasható kód önmagában még nem elegendő."
    }
  },
  {
    id: 35,
    topic: "Softwarelizenzen",
    question: "Was ist Creative Commons (CC)?",
    answers: [
      "Eine Open-Source-Lizenz speziell für Software",
      "Eine EU-Datenschutzbehörde",
      "Ein Softwareentwicklungs-Framework",
      "Ein Lizenzsystem für kreative Werke wie Texte, Bilder und Musik - nicht für Software"
    ],
    correct: 3,
    explanation: "Creative Commons ist für kreative Inhalte gedacht. Für Software selbst empfiehlt CC, spezialisierte Software-Lizenzen wie MIT oder GPL zu verwenden.",
    hu: {
      question: "Mi a Creative Commons (CC)?",
      answers: [
        "Szoftverspecifikus nyílt forráskódú licence",
        "EU adatvédelmi hatóság",
        "Szoftverfejlesztési keretrendszer",
        "Licencrendszer kreatív alkotásokhoz, mint szövegek, képek és zene - nem szoftverhez"
      ],
      explanation: "A Creative Commons kreatív tartalmakhoz készült. Maga a CC javasolja, hogy szoftverekhez speciális szoftverlicenceket, pl. MIT-et vagy GPL-t használjanak."
    }
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
    explanation: "Vertraulichkeit: nur Berechtigte haben Zugriff. Integrität: Daten werden nicht unbemerkt verändert. Verfügbarkeit: System ist erreichbar, wenn man es braucht.",
    hu: {
      question: "Melyek az IT-biztonság három védelmi célkitűzése (CIA-triász)?",
      answers: [
        "Kód, Implementáció, Analízis",
        "Bizalmasság, Sértetlenség, Rendelkezésre állás",
        "Kontroll, Telepítés, Audit",
        "Kódolás, Azonosítás, Engedélyezés"
      ],
      explanation: "Bizalmasság: csak az illetékesek férhetnek hozzá. Sértetlenség: az adatokat észrevétlenül nem módosítják. Rendelkezésre állás: a rendszer elérhető, amikor szükség van rá."
    }
  },
  {
    id: 37,
    topic: "IT-Sicherheit",
    question: "Was ist Phishing?",
    answers: [
      "Eine Methode zur Datenbankoptimierung",
      "Ein Verschlüsselungsverfahren",
      "Betrügerische Nachrichten, die darauf abzielen, Passwörter oder sensible Daten zu stehlen",
      "Ein Protokoll zur sicheren Datenübertragung"
    ],
    correct: 2,
    explanation: "Beim Phishing werden gefälschte E-Mails, Websites oder Nachrichten verwendet, um Opfer zur Herausgabe von Passwörtern oder Kreditkartendaten zu verleiten.",
    hu: {
      question: "Mi az adathalászat (phishing)?",
      answers: [
        "Adatbázis-optimalizálási módszer",
        "Titkosítási eljárás",
        "Olyan megtévesztő üzenetek, amelyek célja jelszavak vagy érzékeny adatok ellopása",
        "Biztonságos adatátviteli protokoll"
      ],
      explanation: "Az adathalászat során hamis e-maileket, weboldalakat vagy üzeneteket használnak arra, hogy az áldozatot jelszavak vagy bankkártyaadatok megadására vegyék rá."
    }
  },
  {
    id: 38,
    topic: "IT-Sicherheit",
    question: "Was versteht man unter Social Engineering?",
    answers: [
      "Manipulation von Menschen, um unbefugten Zugang zu Informationen oder Systemen zu erlangen",
      "Softwareentwicklung in agilen Teams",
      "Netzwerkplanung in Unternehmen",
      "Eine agile Projektmanagement-Methode"
    ],
    correct: 0,
    explanation: "Social Engineering nutzt menschliche Schwächen aus - Vertrauen, Hilfsbereitschaft, Angst. Beispiele: sich am Telefon als IT-Support ausgeben oder einen verseuchten USB-Stick absichtlich 'verlieren'.",
    hu: {
      question: "Mit jelent a social engineering (szociális manipuláció)?",
      answers: [
        "Emberek manipulálása az információkhoz vagy rendszerekhez való jogosulatlan hozzáférés megszerzése céljából",
        "Szoftverfejlesztés agilis csapatokban",
        "Hálózattervezés vállalatoknál",
        "Agilis projektmenedzsment-módszer"
      ],
      explanation: "A social engineering az emberi gyengeségeket használja ki - bizalom, segítőkészség, félelem. Példák: IT-támogatóként való telefonos megszemélyesítés, vagy fertőzött USB-meghajtó szándékos 'elveszítése'."
    }
  },
  {
    id: 39,
    revision: 1,
    topic: "IT-Sicherheit",
    question: "Was ist ein SQL-Injection-Angriff?",
    answers: [
      "Physischer Einbruch in einen Serverraum",
      "Ein Fehler bei der Datenbankinstallation",
      "Eine Optimierungsmethode für SQL-Abfragen",
      "Einschleusen von SQL-Befehlen über Eingabefelder, um unbefugten Datenbankzugriff zu erlangen"
    ],
    correct: 3,
    explanation: "SQL-Injection entsteht, wenn nicht vertrauenswürdige Daten als Teil des SQL-Codes interpretiert werden, etwa durch das Zusammenbauen einer Abfrage aus Zeichenketten. Parametrisierte Abfragen trennen Werte vom SQL-Code. Eingabevalidierung ergänzt diesen Schutz.",
    hu: {
      question: "Mi az SQL-injekciós támadás?",
      answers: [
        "Fizikai betörés egy szerverterembe",
        "Adatbázis-telepítési hiba",
        "SQL-lekérdezések optimalizálási módszere",
        "SQL-parancsok beviteli mezőkön keresztüli beillesztése jogosulatlan adatbázis-hozzáférés megszerzéséhez"
      ],
      explanation: "SQL-injekció akkor keletkezik, amikor nem megbízható adatokat SQL-kódként értelmez a rendszer, például szövegrészekből összefűzött lekérdezésben. A paraméterezett lekérdezés elválasztja az értékeket az SQL-kódtól. A bemenet ellenőrzése ezt a védelmet egészíti ki."
    }
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
    explanation: "HTTPS verschlüsselt die Kommunikation mit TLS. So können Passwörter oder Zahlungsdaten nicht von Dritten mitgelesen werden. Die DSGVO verpflichtet zu angemessenen technischen Schutzmaßnahmen.",
    hu: {
      question: "Mi a HTTPS, és mire való?",
      answers: [
        "E-mail protokoll",
        "HTTP titkosítással (TLS) - védi az adatokat a böngésző és a szerver közötti átvitel során",
        "Adatbázis-hozzáférési protokoll",
        "API-hitelesítési szabvány"
      ],
      explanation: "A HTTPS TLS-sel titkosítja a kommunikációt. Így jelszavak vagy fizetési adatok nem olvashatók ki harmadik felek által. A GDPR kötelezővé teszi a megfelelő műszaki védelmi intézkedéseket."
    }
  },
  {
    id: 41,
    topic: "IT-Sicherheit",
    question: "Was ist ein Penetrationstest?",
    answers: [
      "Ein Leistungstest für Datenbankabfragen",
      "Ein Test für neue Software-Features",
      "Ein autorisierter, simulierter Angriff auf ein System, um Sicherheitslücken zu finden",
      "Eine Methode zur Passworterstellung"
    ],
    correct: 2,
    explanation: "Beim Penetrationstest greift ein beauftragtes Team ein System gezielt an, um Schwachstellen zu finden - bevor echte Angreifer es tun.",
    hu: {
      question: "Mi a penetrációs teszt?",
      answers: [
        "Adatbázis-lekérdezések teljesítménytesztje",
        "Új szoftverfunkciók tesztje",
        "Felhatalmazott, szimulált támadás egy rendszer ellen biztonsági rések feltárásához",
        "Jelszó-létrehozási módszer"
      ],
      explanation: "A penetrációs teszt során egy megbízott csapat célzottan támad meg egy rendszert, hogy megtalálja a gyengeségeket - mielőtt valódi támadók megteszik."
    }
  },
  {
    id: 42,
    revision: 1,
    topic: "IT-Sicherheit",
    question: "Warum müssen Benutzereingaben in einer Anwendung validiert werden?",
    answers: [
      "Damit Datentyp, Format, Wertebereich und fachliche Regeln der Eingaben geprüft werden",
      "Nur aus optischen Gründen",
      "Nur aus Performance-Gründen",
      "Das ist bei modernen Frameworks nicht mehr notwendig"
    ],
    correct: 0,
    explanation: "Validierung prüft zum Beispiel, ob eine Menge eine zulässige positive Ganzzahl ist. Auf dem Server ist sie unabhängig von Browserprüfungen nötig. Gegen SQL-Injection dienen parametrisierte Abfragen; gegen XSS helfen sichere Ausgabeverfahren und zum Ausgabekontext passende Kodierung.",
    hu: {
      question: "Miért kell érvényesíteni a felhasználói beviteleket egy alkalmazásban?",
      answers: [
        "A bemenet adattípusának, formátumának, értéktartományának és üzleti szabályainak ellenőrzéséhez",
        "Csak esztétikai okokból",
        "Csak teljesítményi okokból",
        "Modern keretrendszereknél erre már nincs szükség"
      ],
      explanation: "A validálás például ellenőrzi, hogy a mennyiség megengedett pozitív egész szám-e. A szerveren a böngészős ellenőrzéstől függetlenül szükséges. SQL-injekció ellen paraméterezett lekérdezések, XSS ellen biztonságos megjelenítési módok és a kimeneti környezethez illő kódolás szükséges."
    }
  },

  // ── DSGVO in der Entwicklungspraxis ──────────────────────────────────────
  {
    id: 43,
    topic: "DSGVO in der Praxis",
    question: "Eine Web-App speichert IP-Adressen in den Server-Logs. Was gilt dabei aus Datenschutzsicht?",
    answers: [
      "IP-Adressen sind keine personenbezogenen Daten",
      "Nur statische IP-Adressen sind personenbezogen",
      "Server-Logs sind grundsätzlich vom Datenschutz ausgenommen",
      "IP-Adressen sind personenbezogene Daten und unterliegen der DSGVO"
    ],
    correct: 3,
    explanation: "IP-Adressen - auch dynamische - gelten als personenbezogene Daten, weil eine Re-Identifikation möglich ist. Logs mit IP-Adressen dürfen nur so lange aufbewahrt werden, wie es notwendig ist.",
    hu: {
      question: "Egy webalkalmazás IP-címeket tárol a szervernaplókban. Mi vonatkozik erre adatvédelmi szempontból?",
      answers: [
        "Az IP-cím nem személyes adat",
        "Csak a statikus IP-cím tekinthető személyesnek",
        "A szervernaplók alapvetően mentesek az adatvédelem alól",
        "Az IP-cím személyes adat és a GDPR hatálya alá tartozik"
      ],
      explanation: "Az IP-cím - még a dinamikus is - személyes adatnak minősül, mivel visszaazonosítás lehetséges. Az IP-címeket tartalmazó naplókat csak addig szabad megőrizni, ameddig szükséges."
    }
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
    explanation: "Google Analytics überträgt personenbezogene Daten an US-Server. Das erfordert eine aktive Einwilligung (Opt-in) und einen Auftragsverarbeitungsvertrag mit Google. Ablehnen muss genauso einfach wie Zustimmen sein.",
    hu: {
      question: "Egy fejlesztő be akarja illeszteni a Google Analytics-et egy weboldalba. Mit kell figyelembe venni adatvédelmi szempontból?",
      answers: [
        "A Google Analytics minden további nélkül beilleszthető",
        "Szükség van a felhasználó hozzájárulására, mivel adatokat küldenek a Google-nek (USA)",
        "A Google Analytics teljes mértékben tiltott az EU-ban",
        "Egy cookie-értesítő opt-out lehetőség nélkül elegendő"
      ],
      explanation: "A Google Analytics személyes adatokat továbbít az USA-beli szerverekre. Ehhez aktív hozzájárulás (opt-in) és adatfeldolgozási szerződés szükséges a Google-lal. Az elutasításnak ugyanolyan egyszerűnek kell lennie, mint a jóváhagyásnak."
    }
  },
  {
    id: 45,
    topic: "DSGVO in der Praxis",
    question: "Welche Felder dürfen bei einem Registrierungsformular als Pflichtfelder markiert werden?",
    answers: [
      "Alle Felder, die das Unternehmen interessieren",
      "Name, Adresse, Telefon und E-Mail sind immer Pflicht",
      "Nur Felder, die für den jeweiligen Zweck wirklich notwendig sind (Datensparsamkeit)",
      "Pflichtfelder sind im Datenschutz nicht geregelt"
    ],
    correct: 2,
    explanation: "Datensparsamkeit gilt auch beim Formulardesign: Nur wirklich notwendige Felder dürfen Pflicht sein. Ein Newsletter braucht z. B. keine Adresse oder Telefonnummer als Pflichtfeld.",
    hu: {
      question: "Mely mezők jelölhetők kötelezőként egy regisztrációs űrlapon?",
      answers: [
        "Minden mező, ami a vállalatot érdekli",
        "A név, cím, telefon és e-mail mindig kötelező",
        "Csak az adott célhoz valóban szükséges mezők (adattakarékosság)",
        "A kötelező mezőket az adatvédelem nem szabályozza"
      ],
      explanation: "Az adattakarékosság az űrlapok tervezésénél is érvényes: csak a valóban szükséges mezők lehetnek kötelezők. Egy hírlevélhez pl. nem kell kötelező mezőként cím vagy telefonszám."
    }
  },
  {
    id: 46,
    topic: "DSGVO in der Praxis",
    question: "Wie müssen Passwörter in einer datenschutzkonformen Anwendung gespeichert werden?",
    answers: [
      "Als sicherer Hash (z. B. bcrypt, Argon2) - niemals im Klartext oder reversibel verschlüsselt",
      "Verschlüsselt mit AES, damit sie entschlüsselt werden können",
      "Im Klartext ist erlaubt, wenn die Datenbank selbst verschlüsselt ist",
      "Passwörter dürfen gar nicht gespeichert werden"
    ],
    correct: 0,
    explanation: "Passwörter müssen mit einem sicheren Hashverfahren (bcrypt, Argon2) gespeichert werden - niemals im Klartext. Die DSGVO fordert angemessene technische Schutzmaßnahmen, Klartext-Passwörter wären ein grober Verstoß.",
    hu: {
      question: "Hogyan kell tárolni a jelszavakat egy adatvédelmi szempontból megfelelő alkalmazásban?",
      answers: [
        "Biztonságos hash-sel (pl. bcrypt, Argon2) - soha nem nyílt szövegben vagy visszafordítható titkosítással",
        "AES-sel titkosítva, hogy visszafejthetők legyenek",
        "Nyílt szövegben megengedett, ha maga az adatbázis titkosított",
        "A jelszavakat egyáltalán nem szabad tárolni"
      ],
      explanation: "A jelszavakat biztonságos hash-eljárással (bcrypt, Argon2) kell tárolni - soha nem nyílt szövegben. A GDPR megfelelő műszaki védelmi intézkedéseket követel meg; a nyílt szöveges jelszavak súlyos jogsértést jelentenének."
    }
  },
  {
    id: 47,
    topic: "DSGVO in der Praxis",
    question: "Darf ein Entwickler echte Kundendaten für das Testen und die Entwicklung verwenden?",
    answers: [
      "Ja, immer - Testumgebungen sind vom Datenschutz ausgenommen",
      "Ja, wenn der Zugriff auf das Entwicklerteam beschränkt ist",
      "Nur mit schriftlicher Einwilligung jedes einzelnen Kunden",
      "Nein - für Tests sollten anonymisierte oder synthetische Testdaten verwendet werden"
    ],
    correct: 3,
    explanation: "Testumgebungen haben oft weniger Sicherheit als Produktionssysteme. Echte Kundendaten dort einzusetzen verstößt gegen Datensparsamkeit und Zweckbindung. Stattdessen: anonymisierte oder synthetisch generierte Testdaten verwenden.",
    hu: {
      question: "Használhat-e egy fejlesztő valódi ügyféladatokat teszteléshez és fejlesztéshez?",
      answers: [
        "Igen, mindig - a tesztkörnyezetek mentesek az adatvédelem alól",
        "Igen, ha a hozzáférés a fejlesztőcsapatra korlátozott",
        "Csak minden egyes ügyfél írásbeli hozzájárulásával",
        "Nem - teszteléshez anonimizált vagy szintetikus tesztadatokat kell használni"
      ],
      explanation: "A tesztkörnyezetek gyakran kevésbé biztonságosak, mint az éles rendszerek. Valódi ügyféladatok ott való felhasználása sérti az adattakarékosság és a célhoz kötöttség elvét. Ehelyett: anonimizált vagy szintetikusan generált tesztadatokat kell használni."
    }
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
    explanation: "Das Recht auf Löschung muss technisch vollständig umgesetzt werden: alle personenbezogenen Daten müssen entfernt werden - auch aus Backups, Logs und Drittdiensten - außer es besteht eine gesetzliche Aufbewahrungspflicht.",
    hu: {
      question: "Egy felhasználó törli fiókját. Mit kell tennie egy adatvédelmi szempontból megfelelő alkalmazásnak?",
      answers: [
        "Csak a jelszót törli, a többi adat megmarad",
        "Minden személyes adatot töröl, kivéve ha törvényes megőrzési kötelezettség áll fenn",
        "Az adatokat 10 évig megőrzi",
        "A fiókot csak deaktiválja, az adatokat nem törli"
      ],
      explanation: "A törléshez való jogot műszakilag teljes körűen kell megvalósítani: minden személyes adatot el kell távolítani - beleértve a biztonsági mentéseket, naplókat és harmadik feles szolgáltatásokat is - kivéve ha törvényes megőrzési kötelezettség áll fenn."
    }
  },
  {
    id: 49,
    revision: 1,
    topic: "DSGVO in der Praxis",
    question: "Welches Verfahren hilft, eine Newsletter-Anmeldung per E-Mail zu bestätigen und den Einwilligungsnachweis zu unterstützen?",
    answers: [
      "Einmalige Eintragung in ein Formular reicht aus",
      "Ein Cookie-Banner auf der Website ist ausreichend",
      "Double-Opt-In: Der Nutzer bestätigt die Anmeldung durch einen Link in einer Bestätigungs-E-Mail",
      "Keine besonderen Anforderungen"
    ],
    correct: 2,
    explanation: "Beim Double-Opt-In folgt auf das Anmeldeformular eine Bestätigungs-E-Mail. Erst nach der Bestätigung wird die Anmeldung aktiviert. Der Ablauf kann den Nachweis unterstützen; zusätzlich müssen unter anderem Inhalt und Zeitpunkt der Einwilligung dokumentiert werden. Ein Klick ersetzt keine wirksame, informierte Einwilligung.",
    hu: {
      question: "Melyik eljárás segít e-mailben megerősíteni a hírlevél-feliratkozást és alátámasztani a hozzájárulást?",
      answers: [
        "Egyszeri regisztráció egy űrlapon elegendő",
        "Egy cookie-értesítő a weboldalon elegendő",
        "Kettős opt-in: a felhasználó egy megerősítő e-mailben lévő linkre kattintva erősíti meg a feliratkozást",
        "Nincsenek különleges követelmények"
      ],
      explanation: "Kettős megerősítésnél a feliratkozási űrlapot egy megerősítő e-mail követi. A feliratkozás csak a megerősítés után válik aktívvá. Az eljárás segítheti a bizonyítást; emellett többek között a hozzájárulás tartalmát és időpontját is dokumentálni kell. Egy kattintás nem helyettesíti az érvényes, tájékozott hozzájárulást."
    }
  },
  {
    id: 50,
    topic: "DSGVO in der Praxis",
    question: "Eine App sendet Nutzerdaten an einen US-amerikanischen Cloud-Anbieter. Was ist erforderlich?",
    answers: [
      "Eine geeignete Garantie (z. B. Standardvertragsklauseln) oder ein gültiger Angemessenheitsbeschluss",
      "Nichts Besonderes - die USA haben gleichwertigen Datenschutz",
      "Es ist vollständig verboten, Daten in die USA zu übertragen",
      "Ein österreichischer Notar muss zustimmen"
    ],
    correct: 0,
    explanation: "Datenübertragungen in Länder außerhalb der EU brauchen eine Absicherung - z. B. Standardvertragsklauseln (SCC) der EU-Kommission. Das gilt für AWS, Google Cloud, Azure und viele andere US-Dienste.",
    hu: {
      question: "Egy alkalmazás felhasználói adatokat küld egy USA-beli felhőszolgáltatónak. Mi szükséges ehhez?",
      answers: [
        "Megfelelő garancia (pl. standard szerződési záradékok) vagy érvényes megfelelőségi határozat",
        "Semmi különleges - az USA egyenértékű adatvédelmet biztosít",
        "Teljesen tilos adatot az USA-ba továbbítani",
        "Egy osztrák közjegyző jóváhagyása szükséges"
      ],
      explanation: "Az EU-n kívüli országokba történő adattovábbításhoz biztosíték szükséges - pl. az EU Bizottság standard szerződési záradékai (SCC). Ez az AWS, a Google Cloud, az Azure és sok más USA-beli szolgáltatóra vonatkozik."
    }
  },
  {
    id: 51,
    revision: 1,
    topic: "DSGVO in der Praxis",
    question: "Ein App-Betreiber entscheidet sich für ein datenverarbeitendes Drittanbieter-SDK. Was muss er vor dem Einsatz klären?",
    answers: [
      "Nur die technische Kompatibilität; Datenschutz ist allein Sache des SDK-Anbieters",
      "Keine Datenschutzfragen, weil SDKs ausgenommen sind",
      "Datenschutzfragen nur bei SDK-Anbietern mit Sitz in der EU",
      "Zwecke, Datenflüsse, Rechtsgrundlage und Rollen; die Einbindung entbindet ihn nicht von seinen Datenschutzpflichten"
    ],
    correct: 3,
    explanation: "Wer Zwecke und Mittel der Verarbeitung bestimmt, ist Verantwortlicher. Ein SDK-Anbieter kann je nach tatsächlicher Verarbeitung Auftragsverarbeiter, eigener oder gemeinsam Verantwortlicher sein. Daraus folgen unterschiedliche Pflichten; die Rolle entsteht nicht automatisch allein durch die Einbindung eines SDKs.",
    hu: {
      question: "Az alkalmazás üzemeltetője adatokat kezelő külső SDK használata mellett dönt. Mit kell a bevezetés előtt tisztáznia?",
      answers: [
        "Csak a technikai kompatibilitást; az adatvédelem kizárólag az SDK szolgáltatójának dolga",
        "Semmilyen adatvédelmi kérdést, mert az SDK-k kivételt képeznek",
        "Adatvédelmi kérdéseket csak EU-s székhelyű SDK-szolgáltatónál",
        "A célokat, adatfolyamokat, jogalapot és szerepeket; a beépítés nem mentesíti saját adatvédelmi kötelezettségei alól"
      ],
      explanation: "Aki az adatkezelés céljait és eszközeit meghatározza, adatkezelő. Az SDK szolgáltatója a tényleges adatkezeléstől függően lehet adatfeldolgozó, önálló vagy közös adatkezelő. Ehhez eltérő kötelezettségek tartoznak; a szerepet nem önmagában az SDK beépítése dönti el."
    }
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
    explanation: "Biometrische Daten gehören zu den besonders schutzwürdigen Datenkategorien. Sie dürfen nur auf Basis einer ausdrücklichen Einwilligung und mit besonders hohen Sicherheitsstandards verarbeitet werden.",
    hu: {
      question: "Egy alkalmazás arcfelismerést akar használni hitelesítéshez. Mit kell különösen figyelembe venni?",
      answers: [
        "Semmi különöset - elegendő egy egyszerű adatvédelmi tájékoztató",
        "A biometrikus adatok különösen érzékenyek - kifejezett hozzájárulás és különleges biztonsági intézkedések szükségesek",
        "Az arcfelismerés teljes mértékben tiltott az EU-ban",
        "Csak ha az adatokat a felhőbe továbbítják"
      ],
      explanation: "A biometrikus adatok a különösen védendő adatkategóriákhoz tartoznak. Csak kifejezett hozzájárulás alapján és különösen magas biztonsági szabványokkal szabad kezelni őket."
    }
  },
  {
    id: 53,
    topic: "DSGVO in der Praxis",
    question: "Eine App sammelt den Standort des Nutzers. Wann ist das erlaubt?",
    answers: [
      "Immer, wenn es für die App-Funktion praktisch sinnvoll ist",
      "Standortdaten sind keine personenbezogenen Daten",
      "Nur wenn eine gültige Rechtsgrundlage vorliegt und der Nutzer informiert wurde",
      "Nur bei Navigations-Apps"
    ],
    correct: 2,
    explanation: "Standortdaten sind personenbezogene Daten. Die Erhebung braucht eine Rechtsgrundlage - meist Einwilligung. Nutzer müssen wissen, wann und wofür der Standort genutzt wird.",
    hu: {
      question: "Egy alkalmazás gyűjti a felhasználó tartózkodási helyét. Mikor megengedett ez?",
      answers: [
        "Mindig, ha az alkalmazás funkcionalitása szempontjából praktikusan ésszerű",
        "A helyadat nem személyes adat",
        "Csak ha érvényes jogalap áll fenn és a felhasználót tájékoztatták",
        "Csak navigációs alkalmazásoknál"
      ],
      explanation: "A helyadatok személyes adatok. A gyűjtéshez jogalap szükséges - általában hozzájárulás. A felhasználóknak tudniuk kell, mikor és mire használják a helyadatot."
    }
  },
  {
    id: 54,
    revision: 1,
    topic: "DSGVO in der Praxis",
    question: "Ein Entwickler entdeckt eine Sicherheitslücke in der eigenen App, durch die Nutzerdaten abgerufen werden könnten. Was muss getan werden?",
    answers: [
      "Die Lücke eindämmen und beheben; eine mögliche Verletzung personenbezogener Daten untersuchen, dokumentieren und Meldepflichten prüfen",
      "Die Lücke intern dokumentieren und beim nächsten regulären Update schließen",
      "Nichts - solange noch kein Angriff stattgefunden hat, besteht keine Meldepflicht",
      "Die Nutzer per Social Media informieren"
    ],
    correct: 0,
    explanation: "Eine Schwachstelle allein ist noch keine nachgewiesene Datenschutzverletzung. Bei einer Verletzung meldet der Verantwortliche sie ohne unangemessene Verzögerung, möglichst binnen 72 Stunden ab Kenntnis, an die Behörde, außer ein Risiko für Betroffene ist unwahrscheinlich. Die Benachrichtigung Betroffener bei hohem Risiko ist eine gesonderte Prüfung.",
    hu: {
      question: "Egy fejlesztő biztonsági rést fedez fel saját alkalmazásában, amelyen keresztül felhasználói adatokhoz lehetne hozzáférni. Mi a teendő?",
      answers: [
        "A rést korlátozni és javítani; kivizsgálni és dokumentálni az esetleges adatvédelmi incidenst, majd ellenőrizni a bejelentési kötelezettségeket",
        "A rést belső dokumentálás után a következő rendszeres frissítésnél kell lezárni",
        "Semmi - amíg nem történt tényleges támadás, nincs bejelentési kötelezettség",
        "A felhasználókat közösségi médián kell tájékoztatni"
      ],
      explanation: "Egy sérülékenység önmagában még nem bizonyított adatvédelmi incidens. Incidens esetén az adatkezelő indokolatlan késedelem nélkül, lehetőség szerint a tudomásszerzéstől számított 72 órán belül értesíti a hatóságot, kivéve, ha az érintetteket fenyegető kockázat valószínűtlen. Magas kockázatnál külön kell vizsgálni az érintettek tájékoztatását."
    }
  },
  {
    id: 55,
    topic: "DSGVO in der Praxis",
    question: "Eine App richtet sich an Kinder unter 14 Jahren. Was gilt besonders?",
    answers: [
      "Für Kinder gelten die gleichen Regeln wie für Erwachsene",
      "Für Kinder braucht man keine Datenschutzerklärung",
      "Apps für Kinder sind in der EU grundsätzlich verboten",
      "Elterliche Einwilligung ist erforderlich; manipulative Design-Muster sind besonders problematisch"
    ],
    correct: 3,
    explanation: "Bei Kindern unter 14 Jahren (in Österreich) ist die Einwilligung der Eltern oder des Erziehungsberechtigten erforderlich. Manipulative UI-Muster oder Profiling sind hier besonders kritisch.",
    hu: {
      question: "Egy alkalmazás 14 év alatti gyerekeknek szól. Mi érvényes különösen?",
      answers: [
        "Gyerekekre ugyanolyan szabályok vonatkoznak, mint felnőttekre",
        "Gyerekeknek nincs szükségük adatvédelmi tájékoztatóra",
        "Az EU-ban a gyerekeknek szóló alkalmazások alapvetően tiltottak",
        "Szülői hozzájárulás szükséges; a manipulatív tervezési minták különösen problematikusak"
      ],
      explanation: "14 év alatti gyerekeknél (Ausztriában) a szülő vagy törvényes képviselő hozzájárulása szükséges. A manipulatív felhasználói felület minták vagy a profilalkotás itt különösen kritikus."
    }
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
    explanation: "Konfigurationsdateien mit echten Zugangsdaten, Testdateien mit Kundendaten oder Dumps - all das darf nicht ins Repository. Auch private Repos können kompromittiert werden, und Git-History ist schwer vollständig zu löschen.",
    hu: {
      question: "Tárolhatók-e személyes adatok (pl. valódi e-mailek vagy ügyfélnevek) egy Git-tárolóban?",
      answers: [
        "Igen, ha a tároló privát",
        "Nem - a célhoz kötöttség és az adattakarékosság a tárolókra is vonatkozik; valódi adatoknak ott nincs helyük",
        "Igen, ha a commit-üzenetek nem tartalmaznak neveket",
        "Csak nyilvános tárolókban tiltott"
      ],
      explanation: "Valódi hozzáférési adatokat tartalmazó konfigurációs fájlok, ügyfél adatokat tartalmazó tesztfájlok vagy adatmentések - semmi ilyesmi nem kerülhet a tárolóba. Privát tárolók is feltörhetők, és a Git-előzmények nehezen törölhetők teljesen."
    }
  },
  {
    id: 57,
    topic: "DSGVO in der Praxis",
    question: "Wann muss eine mobile App eine Datenschutzerklärung haben?",
    answers: [
      "Nur wenn sie mehr als 100.000 Downloads hat",
      "Nur bei kostenpflichtigen Apps",
      "Immer, wenn die App personenbezogene Daten verarbeitet",
      "Nur bei Apps für Unternehmen"
    ],
    correct: 2,
    explanation: "Sobald eine App personenbezogene Daten verarbeitet - also z. B. einen Account anlegt, Logs führt oder den Standort abfragt - ist eine Datenschutzerklärung Pflicht. Das gilt für praktisch jede App.",
    hu: {
      question: "Mikor kell egy mobilalkalmazásnak adatvédelmi tájékoztatóval rendelkeznie?",
      answers: [
        "Csak ha több mint 100 000 letöltése van",
        "Csak fizetős alkalmazásoknál",
        "Mindig, ha az alkalmazás személyes adatokat kezel",
        "Csak üzleti alkalmazásoknál"
      ],
      explanation: "Amint egy alkalmazás személyes adatokat kezel - pl. fiókot hoz létre, naplókat vezet vagy helyadatot kér le - adatvédelmi tájékoztató kötelező. Ez gyakorlatilag minden alkalmazásra vonatkozik."
    }
  },
  {
    id: 58,
    topic: "DSGVO in der Praxis",
    question: "Was ist ein 'Dark Pattern' im Datenschutzkontext?",
    answers: [
      "Eine manipulative UI-Gestaltung, die Nutzer dazu bringt, mehr Daten preiszugeben als gewollt",
      "Ein Designstil mit dunklem Farbschema (Dark Mode)",
      "Ein Sicherheitsverfahren für Passwörter",
      "Eine Debugging-Methode"
    ],
    correct: 0,
    explanation: "Dark Patterns sind manipulative Gestaltungen: z. B. ein riesiger 'Alle akzeptieren'-Button, aber ein kaum sichtbares 'Ablehnen', oder eine vorausgefüllte Einwilligungscheckbox. Die DSGVO verbietet solche Praktiken.",
    hu: {
      question: "Mi a 'dark pattern' az adatvédelem kontextusában?",
      answers: [
        "Manipulatív felhasználói felület tervezés, amely a felhasználókat a kívánatnál több adat megadására készteti",
        "Sötét színsémával rendelkező tervezési stílus (sötét mód)",
        "Jelszavak biztonsági eljárása",
        "Hibakeresési módszer"
      ],
      explanation: "A dark pattern-ek manipulatív tervezési megoldások: pl. egy hatalmas 'Mindet elfogadom' gomb, de alig látható 'Elutasítás', vagy előre bepipált beleegyező jelölőnégyzet. A GDPR tiltja ezeket a gyakorlatokat."
    }
  },
  {
    id: 59,
    topic: "DSGVO in der Praxis",
    question: "Was ist bei der Datenbankplanung für eine Nutzer-Anwendung aus Datenschutzsicht wichtig?",
    answers: [
      "Nur die Performance der Datenbank ist relevant",
      "Datenschutz betrifft nur die Benutzeroberfläche, nicht die Datenbankstruktur",
      "Datenbanken brauchen keine Datenschutzmaßnahmen",
      "Zugriffsbeschränkungen, Verschlüsselung sensibler Felder, Löschkonzepte und Minimierung der gespeicherten Daten"
    ],
    correct: 3,
    explanation: "DSGVO beginnt beim Datenbankdesign: Welche Felder werden wirklich benötigt? Wer darf zugreifen? Wie lange werden Daten gespeichert? Wie werden sie gelöscht? Das sind Fragen, die Entwickler bereits beim Datenmodell klären müssen.",
    hu: {
      question: "Mi fontos adatvédelmi szempontból egy felhasználói alkalmazás adatbázis-tervezésénél?",
      answers: [
        "Csak az adatbázis teljesítménye számít",
        "Az adatvédelem csak a felhasználói felületet érinti, nem az adatbázis-struktúrát",
        "Az adatbázisoknak nincs szükségük adatvédelmi intézkedésekre",
        "Hozzáférési korlátozások, érzékeny mezők titkosítása, törlési koncepciók és a tárolt adatok minimalizálása"
      ],
      explanation: "A GDPR az adatbázis-tervezésnél kezdődik: Melyek a valóban szükséges mezők? Kinek van hozzáférése? Meddig tárolják az adatokat? Hogyan törlik őket? Ezeket a fejlesztőknek már az adatmodellnél tisztázniuk kell."
    }
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
    explanation: "Ein Löschkonzept legt fest: Welche Daten werden nach welcher Frist gelöscht? Wie werden Löschanfragen von Nutzern verarbeitet? Wie werden Backups und Logs bereinigt? Das ist ein technisches und organisatorisches Pflichtthema.",
    hu: {
      question: "Mit értünk törlési koncepció alatt egy alkalmazásban?",
      answers: [
        "Egyes fájlok törlési funkciója",
        "Szabályozás arról, hogy mely adatokat mikor és hogyan kell törölni vagy anonimizálni",
        "Egy alkalmazás eltávolítási folyamata",
        "Biztonsági mentési rendszer"
      ],
      explanation: "A törlési koncepció meghatározza: mely adatokat kell milyen határidő után törölni? Hogyan dolgozzák fel a felhasználók törlési kéréseit? Hogyan tisztítják meg a biztonsági mentéseket és naplókat? Ez kötelező műszaki és szervezeti témakör."
    }
  },
  {
    id: 61,
    topic: "DSGVO in der Praxis",
    question: "Ein Entwickler möchte Nutzerverhalten analysieren. Was ist ohne Einwilligung erlaubt?",
    answers: [
      "Google Analytics mit anonymisierten IPs ist immer einwilligungsfrei",
      "Alle Analytics-Tools, solange sie im Impressum aufgeführt sind",
      "Server-seitiges Tracking mit wirklich anonymisierten und aggregierten Daten ohne persönliche Identifikatoren",
      "Jedes Analytics ist ohne Einwilligung verboten"
    ],
    correct: 2,
    explanation: "Nur wirklich anonymisiertes, server-seitiges Tracking ohne Cookies und ohne persönliche Identifikatoren kann einwilligungsfrei sein. Sobald Cookies oder eindeutige IDs im Spiel sind, braucht es eine Einwilligung.",
    hu: {
      question: "Egy fejlesztő felhasználói viselkedést szeretne elemezni. Mi megengedett hozzájárulás nélkül?",
      answers: [
        "A Google Analytics anonimizált IP-vel mindig hozzájárulás-mentes",
        "Minden analytics-eszköz, amely szerepel az impresszumban",
        "Szerver oldali nyomkövetés valóban anonimizált és aggregált adatokkal, személyes azonosítók nélkül",
        "Minden analytics-eszköz használata hozzájárulás nélkül tiltott"
      ],
      explanation: "Csak a valóban anonimizált, szerver oldali nyomkövetés sütik és személyes azonosítók nélkül lehet hozzájárulás-mentes. Amint sütik vagy egyedi azonosítók is szerepet játszanak, hozzájárulás szükséges."
    }
  },
  {
    id: 62,
    topic: "DSGVO in der Praxis",
    question: "Was ist beim Einsatz von Profiling (automatisierter Erstellung von Nutzerprofilen) zu beachten?",
    answers: [
      "Profiling auf Basis persönlicher Daten erfordert eine Rechtsgrundlage und muss in der Datenschutzerklärung transparent gemacht werden",
      "Profiling ist immer erlaubt, wenn es technisch möglich ist",
      "Profiling betrifft nur Werbung, nicht andere Bereiche",
      "Profiling ist in der EU generell verboten"
    ],
    correct: 0,
    explanation: "Profiling ist die automatisierte Verarbeitung personenbezogener Daten zur Bewertung einer Person. Es braucht eine Rechtsgrundlage, muss transparent gemacht werden, und Betroffene haben das Recht auf Widerspruch.",
    hu: {
      question: "Mit kell figyelembe venni a profilalkotás (automatizált felhasználói profilok készítése) alkalmazásánál?",
      answers: [
        "A személyes adatokon alapuló profilalkotás jogalapot igényel és az adatvédelmi tájékoztatóban átláthatóan közölni kell",
        "A profilalkotás mindig megengedett, ha műszakilag lehetséges",
        "A profilalkotás csak a reklámot érinti, más területeket nem",
        "A profilalkotás az EU-ban általánosan tiltott"
      ],
      explanation: "A profilalkotás személyes adatok automatizált feldolgozása egy személy értékelése céljából. Jogalapot igényel, átláthatóvá kell tenni, és az érintetteknek joguk van tiltakozni ellene."
    }
  },

  // ── E-Commerce & ePrivacy ─────────────────────────────────────────────────
  {
    id: 63,
    topic: "E-Commerce & Österreich",
    question: "Was regelt das österreichische E-Commerce-Gesetz (ECG)?",
    answers: [
      "Den Datenschutz bei sozialen Netzwerken",
      "Den urheberrechtlichen Schutz von Software",
      "Die Besteuerung digitaler Dienstleistungen",
      "Informationspflichten, Vertragsabschluss und Verantwortlichkeit bei Online-Diensten in Österreich"
    ],
    correct: 3,
    explanation: "Das ECG setzt die EU-Richtlinie über den elektronischen Geschäftsverkehr um. Es regelt u. a. Impressumspflichten, den Vertragsabschluss per Internet und die Haftung von Hosting-Anbietern.",
    hu: {
      question: "Mit szabályoz az osztrák e-kereskedelmi törvény (ECG)?",
      answers: [
        "Az adatvédelmet a közösségi hálózatokon",
        "A szoftver szerzői jogi védelmét",
        "A digitális szolgáltatások adóztatását",
        "Tájékoztatási kötelezettségeket, szerződéskötést és felelősséget az online szolgáltatásoknál Ausztriában"
      ],
      explanation: "Az ECG az elektronikus kereskedelemről szóló EU-irányelvet ülteti át. Szabályozza többek között az impresszumkötelezettséget, az internetes szerződéskötést és a tárhelyszolgáltatók felelősségét."
    }
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
    explanation: "Das Impressum muss leicht zugänglich sein und enthält: Firma/Name, Anschrift, E-Mail und je nach Tätigkeit auch Firmenbuchnummer, Gewerbeangaben und Aufsichtsbehörde.",
    hu: {
      question: "Minek kell szerepelnie az ECG szerint egy osztrák webhely impresszumában?",
      answers: [
        "Csak a cégnév",
        "Név, cím, e-mail, valamint egyéb kötelező adatok, mint cégjegyzékszám és az illetékes felügyeleti hatóság",
        "Csak e-mail-cím és telefonszám",
        "IBAN és adószám"
      ],
      explanation: "Az impresszumnak könnyen hozzáférhetőnek kell lennie és tartalmaznia kell: cégnév/név, cím, e-mail, tevékenységtől függően cégjegyzékszám, iparengedély-adatok és felügyeleti hatóság."
    }
  },
  {
    id: 65,
    topic: "ePrivacy & Cookies",
    question: "Welche Cookies dürfen ohne Einwilligung des Nutzers gesetzt werden?",
    answers: [
      "Alle Cookies, solange ein Cookie-Banner angezeigt wird",
      "Alle Cookies von der eigenen Domain",
      "Nur technisch notwendige Cookies (z. B. für Login-Sessions oder den Warenkorb)",
      "Kein Cookie darf ohne Einwilligung gesetzt werden"
    ],
    correct: 2,
    explanation: "Technisch notwendige Cookies brauchen keine Einwilligung - z. B. Session-Cookies für den Warenkorb. Analyse-, Tracking- und Marketing-Cookies erfordern eine aktive Einwilligung.",
    hu: {
      question: "Mely sütik helyezhetők el a felhasználó hozzájárulása nélkül?",
      answers: [
        "Minden süti, ha megjelenik egy cookie-értesítő",
        "Minden süti a saját domainről",
        "Csak a műszakilag szükséges sütik (pl. bejelentkezési munkamenethez vagy kosárhoz)",
        "Egyetlen süti sem helyezhető el hozzájárulás nélkül"
      ],
      explanation: "A műszakilag szükséges sütikhez nincs szükség hozzájárulásra - pl. a kosárhoz való munkamenet-sütik. Az elemzési, nyomkövetési és marketing-sütikhez aktív hozzájárulás szükséges."
    }
  },
  {
    id: 66,
    topic: "ePrivacy & Cookies",
    question: "Was muss ein gültiger Cookie-Consent-Banner ermöglichen?",
    answers: [
      "Informierte, freiwillige Zustimmung und eine genauso einfache Ablehnung",
      "Nur die Zustimmung zu allen Cookies auf einmal",
      "Automatische Zustimmung nach 30 Sekunden ohne Aktion",
      "Zustimmung durch Weitersurfen auf der Website"
    ],
    correct: 0,
    explanation: "Ablehnen muss genauso einfach sein wie Zustimmen. Ein riesiger 'Alle akzeptieren'-Button neben einem versteckten 'Ablehnen'-Link ist ein Dark Pattern und nicht DSGVO-konform.",
    hu: {
      question: "Mit kell lehetővé tennie egy érvényes cookie-beleegyezési értesítőnek?",
      answers: [
        "Tájékoztatott, önkéntes hozzájárulást és ugyanolyan egyszerű elutasítást",
        "Csak az összes sütihez való egyszeri hozzájárulást",
        "Automatikus hozzájárulást 30 másodperccel inakció után",
        "Hozzájárulást a weboldalon való további böngészéssel"
      ],
      explanation: "Az elutasításnak ugyanolyan egyszerűnek kell lennie, mint a jóváhagyásnak. Egy hatalmas 'Mindet elfogadom' gomb egy alig látható 'Elutasítás' link mellett dark pattern, és nem felel meg a GDPR-nak."
    }
  },

  // ── DSGVO Grundlagen (Erweiterung) ────────────────────────────────────────
  {
    id: 67,
    topic: "DSGVO Grundlagen",
    question: "Was bedeutet der Grundsatz der Zweckbindung?",
    answers: [
      "Daten dürfen nach der Erhebung für beliebige andere Zwecke verwendet werden",
      "Daten dürfen nur für den Zweck verwendet werden, für den sie ursprünglich erhoben wurden",
      "Der Verarbeitungszweck muss nur auf Nachfrage mitgeteilt werden",
      "Zweckbindung gilt ausschließlich für besonders sensible Daten"
    ],
    correct: 1,
    explanation: "Zweckbindung: Daten, die z. B. für Rechnungsstellung erhoben wurden, dürfen nicht ohne Weiteres für Werbung verwendet werden. Für jede neue Nutzung braucht es eine eigene Rechtsgrundlage.",
    hu: {
      question: "Mit jelent a célhoz kötöttség elve?",
      answers: [
        "Az adatokat a gyűjtés után bármely más célra fel lehet használni",
        "Az adatokat csak arra a célra szabad felhasználni, amelyre eredetileg gyűjtötték",
        "A kezelési célt csak kérésre kell közölni",
        "A célhoz kötöttség kizárólag különösen érzékeny adatokra vonatkozik"
      ],
      explanation: "Célhoz kötöttség: a számlázáshoz gyűjtött adatokat pl. nem szabad minden további nélkül reklámozásra felhasználni. Minden új felhasználáshoz önálló jogalapra van szükség."
    }
  },
  {
    id: 68,
    topic: "DSGVO Grundlagen",
    question: "Welche Rechtsgrundlagen erlaubt Art. 6 DSGVO für die Datenverarbeitung?",
    answers: [
      "Einwilligung, Vertrag, rechtliche Verpflichtung, lebenswichtige Interessen, öffentliche Aufgabe, berechtigtes Interesse",
      "Nur Einwilligung und Vertrag",
      "Einwilligung, Vertrag und gesetzliche Pflicht",
      "Für jede Verarbeitung ist immer eine Einwilligung erforderlich"
    ],
    correct: 0,
    explanation: "Art. 6 DSGVO nennt sechs Rechtsgrundlagen. In der Praxis am häufigsten: Einwilligung (a), Vertrag (b), gesetzliche Pflicht (c) und berechtigtes Interesse (f). Mindestens eine muss immer vorliegen.",
    hu: {
      question: "Melyik jogalapokat engedélyezi a GDPR 6. cikke az adatkezeléshez?",
      answers: [
        "Hozzájárulás, szerződés, jogi kötelezettség, létfontosságú érdekek, közfeladat, jogos érdek",
        "Csak hozzájárulás és szerződés",
        "Hozzájárulás, szerződés és törvényi kötelezettség",
        "Minden adatkezeléshez mindig hozzájárulás szükséges"
      ],
      explanation: "A GDPR 6. cikke hat jogalapot sorol fel. A gyakorlatban a leggyakoribbak: hozzájárulás (a), szerződés (b), jogi kötelezettség (c) és jogos érdek (f). Ezek közül legalább egynek mindig fenn kell állnia."
    }
  },
  {
    id: 69,
    topic: "DSGVO Grundlagen",
    question: "Was umfasst die Informationspflicht (Transparenzpflicht) gegenüber Betroffenen?",
    answers: [
      "Nur der Name und die Kontaktdaten des Verantwortlichen",
      "Nur eine Information im Fall einer Datenpanne",
      "Aktive und verständliche Information über Verarbeitungszweck, Verantwortlichen, Speicherdauer und Betroffenenrechte",
      "Transparenz ist nur gegenüber Behörden verpflichtend"
    ],
    correct: 2,
    explanation: "Nach Art. 13/14 DSGVO müssen Betroffene aktiv und klar informiert werden: wer verarbeitet, warum, wie lange, und welche Rechte sie haben. Das erfolgt typischerweise in der Datenschutzerklärung.",
    hu: {
      question: "Mit foglal magában a GDPR szerinti tájékoztatási kötelezettség (átláthatóság)?",
      answers: [
        "Csak az adatkezelő neve és elérhetőségei",
        "Csak adatvédelmi incidens esetén szükséges tájékoztatás",
        "Aktív és érthető tájékoztatás a kezelés céljáról, az adatkezelőről, a tárolás időtartamáról és az érintett jogairól",
        "Az átláthatóság csak hatóságokkal szemben kötelező"
      ],
      explanation: "A GDPR 13/14. cikke szerint az érintetteket aktívan és érthetően kell tájékoztatni: ki kezeli, miért, meddig, és milyen jogaik vannak. Ez jellemzően az adatvédelmi tájékoztatóban történik."
    }
  },
  {
    id: 70,
    topic: "DSGVO Grundlagen",
    question: "Was ist ein Auftragsverarbeiter (Processor) nach der DSGVO?",
    answers: [
      "Eine Behörde, die Datenschutzanfragen bearbeitet",
      "Eine natürliche oder juristische Person, die im Auftrag des Verantwortlichen personenbezogene Daten verarbeitet",
      "Eine Person, deren Daten verarbeitet werden",
      "Ein Softwareentwickler, der mit personenbezogenen Daten arbeitet"
    ],
    correct: 1,
    explanation: "Typische Auftragsverarbeiter: Cloud-Dienste, E-Mail-Anbieter, externe IT-Dienstleister. Mit ihnen muss ein Auftragsverarbeitungsvertrag (AVV) geschlossen werden - Art. 28 DSGVO.",
    hu: {
      question: "Mi az adatfeldolgozó (Processor) a GDPR szerint?",
      answers: [
        "Hatóság, amely adatvédelmi kérelmeket kezel",
        "Olyan természetes vagy jogi személy, amely az adatkezelő nevében személyes adatokat kezel",
        "Személy, akinek adatait kezelik",
        "Szoftverfejlesztő, aki személyes adatokkal dolgozik"
      ],
      explanation: "Tipikus adatfeldolgozók: felhőszolgáltatások, e-mail-szolgáltatók, külső IT-szolgáltatók. Velük adatfeldolgozási szerződést (AVV) kell kötni - GDPR 28. cikk."
    }
  },
  {
    id: 71,
    topic: "DSGVO Grundlagen",
    question: "Was muss eine gültige Einwilligung nach der DSGVO erfüllen?",
    answers: [
      "Sie kann durch ein vorausgefülltes Häkchen oder Stillschweigen erteilt werden",
      "Sie ist gültig, wenn sie in den AGB versteckt ist",
      "Freiwillig, informiert, für einen bestimmten Zweck und durch eine eindeutige Handlung - kein vorausgefülltes Häkchen",
      "Sie ist nur gültig, wenn sie notariell beglaubigt wurde"
    ],
    correct: 2,
    explanation: "Eine DSGVO-konforme Einwilligung ist: freiwillig (keine Kopplung), spezifisch (je Zweck einzeln), informiert (klar beschrieben) und durch aktive Handlung gegeben. Vorausgefüllte Häkchen und Opt-out-Lösungen sind ungültig.",
    hu: {
      question: "Mit kell teljesítenie egy érvényes hozzájárulásnak a GDPR szerint?",
      answers: [
        "Előre bepipált jelölőnégyzettel vagy hallgatással is megadható",
        "Érvényes, ha az ÁSZF-ben el van rejtve",
        "Önkéntes, tájékozott, meghatározott célra adott és egyértelmű cselekvéssel megerősített - nem előre bepipált jelölőnégyzet",
        "Csak akkor érvényes, ha közjegyző hitelesítette"
      ],
      explanation: "GDPR-konform hozzájárulás: önkéntes (nem köthető szolgáltatáshoz), specifikus (minden célhoz külön), tájékoztatott (érthetően leírva) és aktív cselekvéssel megadott. Az előre bepipált jelölőnégyzet és az opt-out megoldások érvénytelenek."
    }
  },

  // ── Betroffenenrechte (Erweiterung) ──────────────────────────────────────
  {
    id: 72,
    topic: "Betroffenenrechte",
    question: "Was beinhaltet das Recht auf Datenübertragbarkeit (Art. 20 DSGVO)?",
    answers: [
      "Das Recht, alle eigenen Daten löschen zu lassen",
      "Das Recht, die eigenen Daten in einem strukturierten, maschinenlesbaren Format zu erhalten und zu einem anderen Anbieter zu übertragen",
      "Das Recht, zu bestimmen, in welchem Land Daten gespeichert werden",
      "Das Recht, anderen Personen den Datenzugang zu verbieten"
    ],
    correct: 1,
    explanation: "Datenportabilität ermöglicht z. B. den Wechsel von einem sozialen Netzwerk zu einem anderen. Die Daten müssen in einem gängigen Format (z. B. JSON, CSV) bereitgestellt werden.",
    hu: {
      question: "Mit foglal magában az adathordozhatósághoz való jog (GDPR 20. cikk)?",
      answers: [
        "A jog, hogy minden saját adatát töröltesse",
        "A jog, hogy saját adatait strukturált, géppel olvasható formátumban megkapja és másik szolgáltatóhoz továbbíthassa",
        "A jog, hogy meghatározza, melyik országban tárolják adatait",
        "A jog, hogy megtiltsa más személyeknek az adathozzáférést"
      ],
      explanation: "Az adathordozhatóság lehetővé teszi pl. az egyik közösségi hálózatról a másikra való váltást. Az adatokat általánosan elfogadott formátumban (pl. JSON, CSV) kell rendelkezésre bocsátani."
    }
  },
  {
    id: 73,
    topic: "Betroffenenrechte",
    question: "Was bedeutet das Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)?",
    answers: [
      "Das Recht, alle eigenen Daten sofort löschen zu lassen",
      "Das Recht auf eine vereinfachte Datenschutzerklärung",
      "Das Recht, die Verarbeitung der eigenen Daten vorübergehend zu sperren - z. B. während die Richtigkeit der Daten geprüft wird",
      "Das Recht, die Weitergabe an Dritte dauerhaft zu untersagen"
    ],
    correct: 2,
    explanation: "Einschränkung der Verarbeitung: Die Daten bleiben gespeichert, dürfen aber nur eingeschränkt verwendet werden - z. B. wenn die Richtigkeit bestritten wird oder ein Löschantrag noch geprüft wird.",
    hu: {
      question: "Mit jelent az adatkezelés korlátozásához való jog (GDPR 18. cikk)?",
      answers: [
        "A jog, hogy minden saját adatát azonnal töröltesse",
        "A jog egyszerűsített adatvédelmi tájékoztatóhoz",
        "A jog, hogy saját adatai kezelését ideiglenesen letilthassa - pl. amíg az adatok pontosságát ellenőrzik",
        "A jog, hogy a harmadik feleknek való továbbítást véglegesen megtiltsa"
      ],
      explanation: "Az adatkezelés korlátozása: az adatok tárolva maradnak, de csak korlátozottan használhatók - pl. ha az adatok pontossága vitás, vagy a törlési kérelmet még vizsgálják."
    }
  },
  {
    id: 74,
    topic: "Betroffenenrechte",
    question: "Was beinhaltet das Recht auf Berichtigung (Art. 16 DSGVO)?",
    answers: [
      "Das Recht, fehlerhafte oder unvollständige personenbezogene Daten korrigieren zu lassen",
      "Das Recht, die Verarbeitung der eigenen Daten sofort zu beenden",
      "Das Recht auf Schadensersatz bei nachweislich fehlerhaften Daten",
      "Das Recht, eigene Daten nur in anonymisierter Form zu erhalten"
    ],
    correct: 0,
    explanation: "Betroffene können verlangen, dass unrichtige Daten sofort korrigiert werden - z. B. eine falsche Adresse oder ein falsches Geburtsdatum. Unternehmen müssen dem innerhalb eines Monats nachkommen.",
    hu: {
      question: "Mit foglal magában a helyesbítéshez való jog (GDPR 16. cikk)?",
      answers: [
        "A jog, hogy a hibás vagy hiányos személyes adatait kiigazíttassa",
        "A jog, hogy saját adatai kezelését azonnal befejezze",
        "A jog kártérítésre bizonyítottan hibás adatok esetén",
        "A jog, hogy adatait kizárólag anonimizált formában kapja meg"
      ],
      explanation: "Az érintett kérheti, hogy a helytelen adatokat azonnal helyesbítsék - pl. hibás cím vagy születési dátum esetén. A vállalkozásoknak egy hónapon belül eleget kell tenniük a kérésnek."
    }
  },

  // ── Datenpannen (Erweiterung) ─────────────────────────────────────────────
  {
    id: 75,
    topic: "Datenpannen",
    question: "Was muss bei einer Datenpanne intern dokumentiert werden - auch wenn keine Meldepflicht besteht?",
    answers: [
      "Nur Datenpannen mit mehr als 1.000 betroffenen Personen müssen dokumentiert werden",
      "Nur wenn Gesundheitsdaten betroffen sind",
      "Art des Vorfalls, Ursache, Auswirkungen und ergriffene Abhilfemaßnahmen",
      "Datenpannen ohne Meldepflicht müssen überhaupt nicht dokumentiert werden"
    ],
    correct: 2,
    explanation: "Alle Datenpannen - auch jene ohne Meldepflicht - sind intern zu dokumentieren (Art. 33 Abs. 5 DSGVO). Das interne Verzeichnis ermöglicht der Aufsichtsbehörde die spätere Prüfung der Entscheidung.",
    hu: {
      question: "Mit kell belső dokumentálásban rögzíteni egy adatvédelmi incidens esetén - még akkor is, ha nincs bejelentési kötelezettség?",
      answers: [
        "Csak az 1000 főnél több érintettet magában foglaló incidenseket kell dokumentálni",
        "Csak ha egészségügyi adatok érintettek",
        "Az incidens jellegét, okát, hatásait és a megtett javítási intézkedéseket",
        "A bejelentési kötelezettség nélküli incidenseket egyáltalán nem kell dokumentálni"
      ],
      explanation: "Minden adatvédelmi incidenst - még a bejelentési kötelezettség alá nem esőket is - belső nyilvántartásba kell venni (GDPR 33. cikk (5) bekezdés). Ez lehetővé teszi a felügyeleti hatóság számára a döntés utólagos ellenőrzését."
    }
  },
  {
    id: 76,
    topic: "Datenpannen",
    question: "Wann müssen bei einer Datenpanne zusätzlich auch die betroffenen Personen direkt informiert werden?",
    answers: [
      "Bei jeder Datenpanne, immer und sofort",
      "Nur wenn die Datenschutzbehörde es ausdrücklich anordnet",
      "Nur wenn mehr als 1.000 Personen betroffen sind",
      "Wenn die Datenpanne voraussichtlich ein hohes Risiko für die Rechte und Freiheiten der betroffenen Personen zur Folge hat"
    ],
    correct: 3,
    explanation: "Neben der Behördenmeldung (72 Stunden) müssen Betroffene nur bei voraussichtlich hohem Risiko direkt benachrichtigt werden - z. B. wenn Passwörter, Zahlungsdaten oder Gesundheitsdaten kompromittiert wurden.",
    hu: {
      question: "Mikor kell adatvédelmi incidens esetén az érintett személyeket közvetlenül is értesíteni?",
      answers: [
        "Minden adatvédelmi incidens esetén, mindig és azonnal",
        "Csak ha az adatvédelmi hatóság kifejezetten elrendeli",
        "Csak ha 1000-nél több személy érintett",
        "Ha az adatvédelmi incidens várhatóan magas kockázattal jár az érintett személyek jogaira és szabadságaira nézve"
      ],
      explanation: "A hatósági bejelentés (72 óra) mellett az érintetteket csak várhatóan magas kockázat esetén kell közvetlenül értesíteni - pl. ha jelszavak, fizetési adatok vagy egészségügyi adatok kerültek veszélybe."
    }
  },

  // ── Datenschutz Österreich (Erweiterung) ─────────────────────────────────
  {
    id: 77,
    topic: "Datenschutz Österreich",
    question: "Welches ist die niedrigere Bußgeldstufe der DSGVO für weniger schwerwiegende Verstöße?",
    answers: [
      "Bis zu 500.000 Euro oder 1 % des Jahresumsatzes",
      "Bis zu 10 Millionen Euro oder 2 % des weltweiten Jahresumsatzes",
      "Bis zu 5 Millionen Euro oder 1 % des Jahresumsatzes",
      "Bis zu 1 Million Euro als Pauschalbetrag"
    ],
    correct: 1,
    explanation: "Die DSGVO kennt zwei Stufen: bis zu 10 Mio. Euro / 2 % Jahresumsatz (z. B. bei fehlenden TOMs) und bis zu 20 Mio. Euro / 4 % (bei schwerwiegenden Verstößen wie fehlender Rechtsgrundlage).",
    hu: {
      question: "Melyik a GDPR alacsonyabb bírságszintje a kevésbé súlyos jogsértésekért?",
      answers: [
        "Legfeljebb 500 000 euró vagy az éves árbevétel 1%-a",
        "Legfeljebb 10 millió euró vagy a globális éves árbevétel 2%-a",
        "Legfeljebb 5 millió euró vagy az éves árbevétel 1%-a",
        "Legfeljebb 1 millió euró átalányösszeg"
      ],
      explanation: "A GDPR két szintet ismer: legfeljebb 10 millió euró / árbevétel 2%-a (pl. hiányzó TOM-ok esetén) és legfeljebb 20 millió euró / 4% (súlyos jogsértésekért, pl. jogalap hiánya esetén)."
    }
  },
  {
    id: 78,
    topic: "Datenschutz Österreich",
    question: "Welches Recht haben Betroffene, wenn ein DSGVO-Verstoß ihnen einen Schaden verursacht hat?",
    answers: [
      "Kein Recht - Schadenersatz ist nur bei vorsätzlichem Handeln möglich",
      "Nur ein Beschwerderecht bei der Aufsichtsbehörde",
      "Anspruch auf materiellen und immateriellen Schadenersatz gegenüber dem Verantwortlichen (Art. 82 DSGVO)",
      "Nur Anspruch auf kostenlose Datenlöschung"
    ],
    correct: 2,
    explanation: "Art. 82 DSGVO: Betroffene haben das Recht auf Schadenersatz - auch für immaterielle Schäden wie psychische Belastung oder Rufschädigung. Das macht DSGVO-Verstöße auch zivilrechtlich riskant.",
    hu: {
      question: "Milyen joga van az érintettnek, ha GDPR-jogsértés kárt okozott neki?",
      answers: [
        "Nincs joga - kártérítés csak szándékos cselekmény esetén lehetséges",
        "Csak panasztételi jog a felügyeleti hatóságnál",
        "Jog anyagi és nem vagyoni kártérítésre az adatkezelővel szemben (GDPR 82. cikk)",
        "Csak jog az ingyenes adattörlésre"
      ],
      explanation: "A GDPR 82. cikke: az érintetteknek kártérítési joguk van - nem vagyoni kárért is (pl. lelki megterhelés, hírnévkárosodás). Ez a GDPR-jogsértéseket polgári jogilag is kockázatossá teszi."
    }
  },

  // ── IT-Sicherheit (Erweiterung) ───────────────────────────────────────────
  {
    id: 79,
    revision: 1,
    topic: "IT-Sicherheit",
    question: "Was ist Cross-Site Scripting (XSS)?",
    answers: [
      "Ein Angriff, bei dem Schadcode (JavaScript) in eine Website eingeschleust wird und im Browser anderer Nutzer ausgeführt wird",
      "Ein Angriff auf die CSS-Stildateien einer Website",
      "Eine Methode zur Optimierung von JavaScript-Code",
      "Eine Technik zur sicheren Skriptübertragung zwischen Servern"
    ],
    correct: 0,
    explanation: "Bei XSS wird nicht vertrauenswürdiger Inhalt im Browser als aktiver Code ausgeführt. Für reinen Text ist textContent ein sicherer DOM-Ausgabepunkt. Andere Kontexte benötigen passende Ausgabekodierung; erlaubtes HTML benötigt geeignete Bereinigung. Eine CSP ergänzt diese Maßnahmen.",
    hu: {
      question: "Mi a cross-site scripting (XSS)?",
      answers: [
        "Olyan támadás, amelynek során rosszindulatú kódot (JavaScript) ágyaznak be egy weboldalba, amely más felhasználók böngészőjében fut le",
        "Támadás egy weboldal CSS-stílusfájljai ellen",
        "JavaScript-kód optimalizálási módszer",
        "Szkriptek biztonságos kiszolgálók közötti átvitelének technikája"
      ],
      explanation: "XSS esetén a nem megbízható tartalom aktív kódként fut le a böngészőben. Egyszerű szöveg megjelenítésére a textContent biztonságos DOM-megoldás. Más környezethez megfelelő kimeneti kódolás, engedélyezett HTML-hez megfelelő tisztítás szükséges. A CSP ezeket az intézkedéseket egészíti ki."
    }
  },
  {
    id: 80,
    topic: "IT-Sicherheit",
    question: "Was ist ein CSRF-Angriff (Cross-Site Request Forgery)?",
    answers: [
      "Eine Methode zur Umgehung von HTTPS-Verschlüsselung",
      "Ein Angriff, der SQL-Befehle in Formulare einschleust",
      "Ein Angriff, bei dem eine präparierte Seite den Browser eines angemeldeten Nutzers dazu bringt, ungewollte Aktionen auf einer anderen Website auszuführen",
      "Eine Technik zum Auslesen von Session-Cookies"
    ],
    correct: 2,
    explanation: "CSRF: Das Opfer besucht eine Seite des Angreifers, die im Hintergrund eine Anfrage an eine Site sendet, bei der das Opfer eingeloggt ist. Schutz: CSRF-Token in Formularen, SameSite-Cookie-Attribut.",
    hu: {
      question: "Mi a CSRF-támadás (Cross-Site Request Forgery)?",
      answers: [
        "A HTTPS-titkosítás megkerülésének módszere",
        "Olyan támadás, amely SQL-parancsokat illeszt be az űrlapokba",
        "Olyan támadás, amelynek során egy előkészített oldal ráveszi a bejelentkezett felhasználó böngészőjét, hogy nem kívánt műveleteket hajtson végre egy másik weboldalon",
        "Munkamenet-sütik kiolvasásának technikája"
      ],
      explanation: "CSRF: az áldozat felkeres egy támadói oldalt, amely a háttérben kérést küld egy olyan weboldalra, amelyre az áldozat be van jelentkezve. Védelem: CSRF-token az űrlapokban, SameSite sütiattribútum."
    }
  },
  {
    id: 81,
    topic: "IT-Sicherheit",
    question: "Was ist Zwei-Faktor-Authentifizierung (2FA)?",
    answers: [
      "Zweimalige Eingabe desselben Passworts zur Bestätigung",
      "Zwei separate Browserfenster für den Anmeldevorgang",
      "Eine Authentifizierung mit zwei unabhängigen Faktoren - z. B. Passwort und einmaliger SMS-Code",
      "Ein doppelter Passwort-Hash zum Schutz der Datenbank"
    ],
    correct: 2,
    explanation: "2FA kombiniert zwei unterschiedliche Faktoren: Wissen (Passwort), Besitz (Smartphone, Hardware-Token) oder Biometrie. So ist ein Konto auch bei gestohlenem Passwort deutlich besser geschützt.",
    hu: {
      question: "Mi a kétfaktoros hitelesítés (2FA)?",
      answers: [
        "Ugyanazon jelszó kétszeri bevitele megerősítésként",
        "Két különálló böngészőablak a bejelentkezési folyamathoz",
        "Hitelesítés két független tényezővel - pl. jelszó és egyszer használatos SMS-kód",
        "Kettős jelszó-hash az adatbázis védelmére"
      ],
      explanation: "A 2FA két különböző tényezőt kombinál: tudást (jelszó), birtoklást (okostelefon, hardvertoken) vagy biometrikát. Így egy fiók ellopott jelszó esetén is lényegesen jobban védett."
    }
  },
  {
    id: 82,
    topic: "IT-Sicherheit",
    question: "Was bedeutet das 'Principle of Least Privilege' (Prinzip der minimalen Rechtevergabe)?",
    answers: [
      "Alle Benutzer erhalten Administratorrechte für maximale Effizienz",
      "Benutzer und Prozesse erhalten nur die Rechte, die für ihre jeweilige Aufgabe tatsächlich notwendig sind",
      "Passwörter müssen mindestens 8 Zeichen lang sein",
      "Nur das Sicherheitsteam darf auf Produktionsdaten zugreifen"
    ],
    correct: 1,
    explanation: "Least Privilege reduziert den Schaden bei einem Angriff oder Fehler: Ein Datenbankbenutzer braucht z. B. kein DROP-Recht, wenn er es nicht braucht. Gilt für Benutzer, APIs, Dienste und Datenbankrollen.",
    hu: {
      question: "Mit jelent a 'legkisebb jogosultság elve' (Principle of Least Privilege)?",
      answers: [
        "Minden felhasználó rendszergazdai jogokat kap a maximális hatékonyság érdekében",
        "A felhasználók és folyamatok csak azokat a jogokat kapják meg, amelyekre az adott feladatuk elvégzéséhez valóban szükségük van",
        "A jelszavaknak legalább 8 karakter hosszúaknak kell lenniük",
        "Csak a biztonsági csapat férhet hozzá az éles adatokhoz"
      ],
      explanation: "A legkisebb jogosultság elve csökkenti a támadás vagy hiba esetén keletkező kárt: egy adatbázis-felhasználónak pl. ne legyen DROP-joga, ha nincs rá szüksége. Vonatkozik a felhasználókra, API-kra, szolgáltatásokra és adatbázis-szerepkörökre."
    }
  },
  {
    id: 83,
    topic: "IT-Sicherheit",
    question: "Welche Maßnahmen sind beim Absichern einer API besonders wichtig?",
    answers: [
      "API-Keys direkt im Frontend-Quellcode speichern für einfachen Zugriff",
      "Keine Authentifizierung, wenn die API nur intern genutzt wird",
      "Authentifizierung, Autorisierung, Rate Limiting und Validierung aller Eingaben",
      "GET-Anfragen ohne sensible Daten brauchen keine Absicherung"
    ],
    correct: 2,
    explanation: "Eine sichere API authentifiziert jede Anfrage, prüft Berechtigungen je Endpunkt, begrenzt die Anfrageanzahl (Rate Limiting) und validiert alle Eingaben. API-Keys niemals im Frontend-Code ablegen.",
    hu: {
      question: "Melyek a legfontosabb intézkedések egy API biztosításánál?",
      answers: [
        "Az API-kulcsok közvetlen tárolása a frontend forráskódjában az egyszerű hozzáférés érdekében",
        "Nincs szükség hitelesítésre, ha az API-t csak belsőleg használják",
        "Hitelesítés, engedélyezés, rate limiting és az összes bevitel érvényesítése",
        "A személyes adatot nem tartalmazó GET-kérések nem igényelnek biztosítást"
      ],
      explanation: "Egy biztonságos API: minden kérést hitelesít, végpontonként ellenőrzi a jogosultságokat, korlátozza a kérések számát (rate limiting) és érvényesíti az összes bevitelt. Az API-kulcsokat soha nem szabad a frontend-kódban elhelyezni."
    }
  },

  // ── E-Commerce & Österreich (Erweiterung) ────────────────────────────────
  {
    id: 84,
    topic: "E-Commerce & Österreich",
    question: "Was ist ein Fernabsatzvertrag und wann gilt er?",
    answers: [
      "Ein Vertrag zwischen zwei Unternehmen über digitale Dienstleistungen",
      "Jeder Kaufvertrag über 1.000 Euro Warenwert",
      "Ein Vertrag zwischen Unternehmer und Verbraucher, der ausschließlich über Fernkommunikationsmittel (Internet, Telefon) geschlossen wird",
      "Ein Vertrag für Lieferungen außerhalb der EU"
    ],
    correct: 2,
    explanation: "Fernabsatzverträge entstehen bei Online-Bestellungen und Telefonverkäufen. Sie lösen besondere Pflichten aus: Informationspflichten, Widerrufsrecht und Formerfordernisse - geregelt im österreichischen FAGG.",
    hu: {
      question: "Mi a távolsági szerződés és mikor érvényes?",
      answers: [
        "Két vállalkozás közötti szerződés digitális szolgáltatásokról",
        "Minden 1000 euró értéket meghaladó adásvételi szerződés",
        "Vállalkozó és fogyasztó között kizárólag távközlési eszközökön (internet, telefon) keresztül kötött szerződés",
        "EU-n kívüli szállításokra vonatkozó szerződés"
      ],
      explanation: "A távolsági szerződések online rendeléseknél és telefonos értékesítéseknél keletkeznek. Különleges kötelezettségeket váltanak ki: tájékoztatási kötelezettség, elállási jog és alaki előírások - az osztrák FAGG szabályozza."
    }
  },
  {
    id: 85,
    revision: 1,
    topic: "E-Commerce & Österreich",
    question: "Wie lang ist die reguläre Rücktrittsfrist bei einem österreichischen Verbrauchervertrag im Onlinehandel, wenn keine gesetzliche Ausnahme greift?",
    answers: [
      "7 Tage ab Bestelldatum",
      "30 Tage ab Erhalt der Ware",
      "14 Tage ab Erhalt der Ware bzw. ab Vertragsschluss bei Dienstleistungen",
      "Das Widerrufsrecht gilt nur bei defekter Ware"
    ],
    correct: 2,
    explanation: "Regulär sind es 14 Tage, bei Waren grundsätzlich ab Erhalt, bei Dienstleistungen ab Vertragsschluss. Fehlt die vorgeschriebene Rücktrittsinformation, verlängert sich die Frist um zwölf Monate. Wird innerhalb dieser zwölf Monate nachinformiert, endet die Frist 14 Tage nach Erhalt der Information (§§ 11–12 FAGG).",
    hu: {
      question: "Mennyi az általános elállási határidő egy osztrák online fogyasztói szerződésnél, ha nincs alkalmazandó törvényi kivétel?",
      answers: [
        "7 nap a rendelés dátumától",
        "30 nap az áru kézhezvételétől",
        "14 nap az áru kézhezvételétől, illetve a szerződéskötéstől szolgáltatások esetén",
        "Az elállási jog csak hibás árura vonatkozik"
      ],
      explanation: "Az általános határidő 14 nap: árunál főszabály szerint az átvételtől, szolgáltatásnál a szerződéskötéstől. Az előírt elállási tájékoztatás hiányában a határidő tizenkét hónappal meghosszabbodik. Ha ezen tizenkét hónapon belül pótolják a tájékoztatást, az elállási határidő a kézhezvételétől számított 14 nap múlva jár le (FAGG 11–12. §)."
    }
  },
  {
    id: 86,
    topic: "E-Commerce & Österreich",
    question: "Was schützt das österreichische Konsumentenschutzgesetz (KSchG)?",
    answers: [
      "Nur Verbraucher in stationären Geschäften, nicht im Online-Handel",
      "Verbraucher vor unfairen Geschäftspraktiken und unzulässigen Klauseln in Allgemeinen Geschäftsbedingungen im B2C-Bereich",
      "Unternehmen vor Klagen durch Konsumenten",
      "Ausschließlich Käufer von Elektro- und Elektronikprodukten"
    ],
    correct: 1,
    explanation: "Das KSchG schützt Verbraucher gegenüber Unternehmern und erklärt viele benachteiligende AGB-Klauseln für ungültig. Es gilt für alle Verbraucherverträge - auch Online-Verträge.",
    hu: {
      question: "Mit véd az osztrák fogyasztóvédelmi törvény (KSchG)?",
      answers: [
        "Csak a hagyományos boltokban vásárló fogyasztókat, online kereskedésben nem érvényes",
        "Fogyasztókat a tisztességtelen üzleti gyakorlatokkal és a B2C területen alkalmazott megengedhetetlen ÁSZF-záradékokkal szemben",
        "Vállalkozásokat fogyasztói perekkel szemben",
        "Kizárólag elektromos és elektronikus termékek vevőit"
      ],
      explanation: "A KSchG védi a fogyasztókat a vállalkozókkal szemben, és számos hátrányos ÁSZF-záradékot érvénytelennek nyilvánít. Minden fogyasztói szerződésre vonatkozik - az online szerződésekre is."
    }
  },

  // ── ePrivacy & Cookies (Erweiterung) ──────────────────────────────────────
  {
    id: 87,
    topic: "ePrivacy & Cookies",
    question: "Was ist der Unterschied zwischen First-Party- und Third-Party-Cookies?",
    answers: [
      "First-Party-Cookies sind sicher, Third-Party-Cookies sind grundsätzlich schädlich",
      "First-Party-Cookies werden von der besuchten Website gesetzt; Third-Party-Cookies stammen von externen Diensten wie Werbenetzen oder Social Plugins",
      "Es gibt keinen datenschutzrechtlichen Unterschied zwischen beiden",
      "First-Party-Cookies benötigen immer eine Einwilligung, Third-Party-Cookies nicht"
    ],
    correct: 1,
    explanation: "Third-Party-Cookies ermöglichen webseitenübergreifendes Tracking und erfordern fast immer eine Einwilligung. Viele Browser blockieren sie bereits standardmäßig. First-Party-Cookies können technisch notwendig sein.",
    hu: {
      question: "Mi a különbség a first-party és a third-party sütik között?",
      answers: [
        "A first-party sütik biztonságosak, a third-party sütik alapvetően károsak",
        "A first-party sütiket a meglátogatott weboldal helyezi el; a third-party sütik külső szolgáltatásoktól, például reklámmhálózatoktól vagy social pluginoktól érkeznek",
        "Adatvédelmi szempontból nincs különbség a kettő között",
        "A first-party sütikhez mindig hozzájárulás szükséges, a third-party sütikhez nem"
      ],
      explanation: "A third-party sütik weboldalak közötti nyomkövetést tesznek lehetővé, és szinte mindig hozzájárulást igényelnek. Sok böngésző már alapértelmezés szerint blokkolja őket. A first-party sütik műszakilag szükségesek is lehetnek."
    }
  },
  {
    id: 88,
    revision: 1,
    topic: "ePrivacy & Cookies",
    question: "Wie unterscheidet sich Local Storage aus Datenschutzsicht von Cookies?",
    answers: [
      "Local Storage ist vom Datenschutz vollständig ausgenommen",
      "Local Storage wird automatisch nach 30 Tagen gelöscht",
      "Local Storage sendet Daten bei jeder HTTP-Anfrage automatisch an den Server - genau wie Cookies",
      "Local Storage hat keine eingebaute Ablaufzeit und wird nicht automatisch mit HTTP-Anfragen gesendet; Datenschutzregeln können trotzdem gelten"
    ],
    correct: 3,
    explanation: "Auch Cookies können dauerhaft gespeichert werden; Local Storage ist nicht grundsätzlich langlebiger. Der Browser oder Nutzer kann gespeicherte Daten löschen. In Österreich betrifft § 165 Abs. 3 TKG auch andere Endgerätespeicher: Einwilligung ist grundsätzlich nötig, mit Ausnahmen etwa für unbedingt erforderliche Speicherung eines ausdrücklich gewünschten Dienstes.",
    hu: {
      question: "Miben különbözik a Local Storage adatvédelmi szempontból a sütiektől?",
      answers: [
        "A Local Storage teljesen mentes az adatvédelem alól",
        "A Local Storage-ot 30 nap után automatikusan törlik",
        "A Local Storage minden HTTP-kérésnél automatikusan elküldi az adatokat a szervernek - ugyanúgy, mint a sütik",
        "A Local Storage-nak nincs beépített lejárati ideje, és nem küldi el automatikusan az adatokat HTTP-kérésekkel; adatvédelmi szabályok ettől még vonatkozhatnak rá"
      ],
      explanation: "A sütik is lehetnek tartósak; a Local Storage nem feltétlenül őrzi tovább az adatokat. A böngésző vagy a felhasználó törölheti a tárolt adatokat. Ausztriában a TKG 165. § (3) más végberendezéses tárolókra is vonatkozik: főszabály szerint hozzájárulás kell, kivétel például a kifejezetten kért szolgáltatáshoz feltétlenül szükséges tárolás."
    }
  },
  {
    id: 89,
    topic: "ePrivacy & Cookies",
    question: "Was ist ein Tracking-Pixel und welche datenschutzrechtliche Bedeutung hat er?",
    answers: [
      "Ein Designelement, das ausschließlich die Bildschirmauflösung des Nutzers misst",
      "Ein unsichtbares 1x1-Pixel-Bild, das beim Laden Nutzerdaten (IP-Adresse, Zeitpunkt, Gerät) an einen Server übermittelt und eine Einwilligung erfordert",
      "Ein technisch notwendiges Element für die Seitenoptimierung",
      "Tracking-Pixel sind datenschutzrechtlich irrelevant, da sie keine Cookies setzen"
    ],
    correct: 1,
    explanation: "Tracking-Pixel werden in E-Mails oder Webseiten eingebettet und senden beim Laden Daten wie IP-Adresse, Öffnungszeit und Geräteinfos. Sie gelten als personenbezogene Datenverarbeitung und erfordern in der Regel eine Einwilligung.",
    hu: {
      question: "Mi a nyomkövetési pixel és milyen adatvédelmi jelentősége van?",
      answers: [
        "Egy tervezési elem, amely kizárólag a felhasználó képernyőfelbontását méri",
        "Egy láthatatlan 1x1 pixeles kép, amely betöltéskor felhasználói adatokat (IP-cím, időpont, eszköz) küld egy szervernek, és hozzájárulást igényel",
        "Műszakilag szükséges elem az oldal optimalizálásához",
        "A nyomkövetési pixelek adatvédelmi szempontból lényegtelenek, mivel nem helyeznek el sütiket"
      ],
      explanation: "A nyomkövetési pixeleket e-mailekbe vagy weboldalakba ágyazzák, és betöltéskor adatokat küldenek, mint az IP-cím, a megnyitás időpontja és az eszköz adatai. Személyes adatok kezeléseként minősülnek, és általában hozzájárulást igényelnek."
    }
  },

  // ── DSGVO in der Praxis (Erweiterung) ─────────────────────────────────────
  {
    id: 90,
    revision: 1,
    topic: "DSGVO in der Praxis",
    question: "Welchen Datenschutzvorteil bietet es, Webfonts auf dem eigenen Server statt über einen externen Font-Dienst auszuliefern?",
    answers: [
      "Weil Google Fonts kostenpflichtig ist",
      "Weil Schriftarten grundsätzlich urheberrechtlich geschützt sind",
      "Für das Laden der Schrift entsteht keine zusätzliche Browseranfrage an den externen Font-Anbieter",
      "Es ist nicht problematisch - Google Fonts ist DSGVO-konform"
    ],
    correct: 2,
    explanation: "Ein externer Font-Dienst erhält beim Abruf technisch die IP-Adresse der anfragenden Verbindung. Lokales Hosting vermeidet diesen zusätzlichen Datenfluss für die Schriftdateien. Daraus folgt weder ein pauschales Verbot externer Fonts noch eine pauschale Rechtmäßigkeit: Der konkrete Einsatz muss geprüft werden.",
    hu: {
      question: "Milyen adatvédelmi előnye van annak, ha a webfontokat saját szerverről szolgáljuk ki külső betűtípus-szolgáltató helyett?",
      answers: [
        "Mert a Google Fonts fizetős",
        "Mert a betűtípusok alapvetően szerzői jogi védelem alatt állnak",
        "A betűtípus betöltése nem indít külön böngészős kérést a külső betűtípus-szolgáltatóhoz",
        "Nem problematikus - a Google Fonts GDPR-konform"
      ],
      explanation: "A külső betűtípus-szolgáltató a lekéréskor technikailag megkapja a kapcsolódás IP-címét. A helyi kiszolgálás elkerüli ezt a további adatfolyamot a fontfájloknál. Ez sem a külső fontok általános tilalmát, sem általános jogszerűségét nem jelenti: a konkrét használatot kell megvizsgálni."
    }
  },
  {
    id: 91,
    topic: "DSGVO in der Praxis",
    question: "Was ist bei der Protokollierung (Logging) in Anwendungen aus Datenschutzsicht zu beachten?",
    answers: [
      "Logs sollten so viele Details wie möglich enthalten - sie erleichtern die Fehlersuche",
      "Logs sind vom Datenschutz ausgenommen, da sie nur internen Zwecken dienen",
      "Personenbezogene Daten in Logs müssen auf das Nötigste beschränkt werden und dürfen nur so lange aufbewahrt werden, wie es der Zweck erfordert",
      "Logging ohne ausdrückliche Einwilligung jedes Nutzers ist grundsätzlich verboten"
    ],
    correct: 2,
    explanation: "Logs enthalten oft IP-Adressen, User-IDs oder andere personenbezogene Daten. Es gelten: minimale Datenmenge, klare Aufbewahrungsfristen, Zugriffsschutz und sichere Speicherung. Passwörter oder Zahlungsdaten dürfen niemals in Logs erscheinen.",
    hu: {
      question: "Mit kell figyelembe venni az alkalmazásokban a naplózás (logging) kapcsán adatvédelmi szempontból?",
      answers: [
        "A naplóknak a lehető legtöbb részletet kell tartalmazniuk - megkönnyítik a hibakeresést",
        "A naplók mentesek az adatvédelem alól, mivel csak belső célokat szolgálnak",
        "A naplókban lévő személyes adatokat a szükséges minimumra kell korlátozni, és csak addig szabad megőrizni, ameddig a cél megkívánja",
        "A naplózás minden felhasználó kifejezett hozzájárulása nélkül alapvetően tiltott"
      ],
      explanation: "A naplók gyakran tartalmaznak IP-címeket, felhasználói azonosítókat vagy más személyes adatokat. Vonatkozó elvek: minimális adatmennyiség, egyértelmű megőrzési határidő, hozzáférési védelem és biztonságos tárolás. Jelszavak vagy fizetési adatok soha nem kerülhetnek naplókba."
    }
  },
  {
    id: 92,
    topic: "DSGVO in der Praxis",
    question: "Was versteht man unter technischen und organisatorischen Maßnahmen (TOMs) nach Art. 32 DSGVO?",
    answers: [
      "Ausschließlich technische Maßnahmen wie Firewalls und Verschlüsselung",
      "Ausschließlich organisatorische Maßnahmen wie Schulungen und interne Richtlinien",
      "Ein kombiniertes Bündel an Maßnahmen zum Schutz personenbezogener Daten - z. B. Verschlüsselung, Zugriffskontrollen, Pseudonymisierung, Backups und Mitarbeiterschulungen",
      "Freiwillige Best Practices ohne rechtliche Verbindlichkeit"
    ],
    correct: 2,
    explanation: "TOMs sind nach Art. 32 DSGVO verpflichtend und müssen dem Risiko der Verarbeitung angemessen sein. Beispiele: TLS-Verschlüsselung, Zugriffskontrolle, regelmäßige Sicherheitstests, Löschkonzepte und Datenschutzschulungen.",
    hu: {
      question: "Mit értünk a GDPR 32. cikke szerinti műszaki és szervezési intézkedések (TOM) alatt?",
      answers: [
        "Kizárólag műszaki intézkedések, mint tűzfalak és titkosítás",
        "Kizárólag szervezési intézkedések, mint képzések és belső irányelvek",
        "A személyes adatok védelmét szolgáló kombinált intézkedéscsomag - pl. titkosítás, hozzáférés-ellenőrzés, álnevesítés, biztonsági mentések és munkavállaló-képzések",
        "Önkéntes best practice-ek jogi kötőerő nélkül"
      ],
      explanation: "A TOM-ok kötelezők a GDPR 32. cikke alapján, és arányosnak kell lenniük az adatkezelés kockázatával. Példák: TLS-titkosítás, hozzáférés-ellenőrzés, rendszeres biztonsági tesztek, törlési koncepciók és adatvédelmi képzések."
    }
  },
  {
    id: 93,
    topic: "DSGVO in der Praxis",
    question: "Wann muss ein Auftragsverarbeitungsvertrag (AVV) abgeschlossen werden?",
    answers: [
      "Nur wenn personenbezogene Daten in Länder außerhalb der EU übertragen werden",
      "Immer wenn ein externer Dienstleister im Auftrag des Verantwortlichen personenbezogene Daten verarbeitet - z. B. Cloud-Anbieter, Hosting oder E-Mail-Dienste",
      "Nur bei der Verarbeitung besonders sensibler Daten",
      "Nur wenn der Dienstleister mehr als 50 Mitarbeiter beschäftigt"
    ],
    correct: 1,
    explanation: "Art. 28 DSGVO: Wer Dienstleister einsetzt, die Daten im Auftrag verarbeiten, muss einen AVV abschließen. Ohne AVV ist die Verarbeitung nicht rechtmäßig. Das gilt auch für Hosting-Anbieter, SaaS-Tools und E-Mail-Dienste.",
    hu: {
      question: "Mikor kell adatfeldolgozási szerződést (AVV) kötni?",
      answers: [
        "Csak ha személyes adatokat az EU-n kívüli országokba továbbítanak",
        "Mindig, ha egy külső szolgáltató az adatkezelő megbízásából személyes adatokat kezel - pl. felhőszolgáltató, tárhelyszolgáltatás vagy e-mail-szolgáltatás",
        "Csak különösen érzékeny adatok kezelésekor",
        "Csak ha a szolgáltatónak több mint 50 alkalmazottja van"
      ],
      explanation: "GDPR 28. cikk: aki megbízás alapján adatokat kezelő szolgáltatókat vesz igénybe, adatfeldolgozási szerződést kell kötnie. AVV nélkül az adatkezelés nem jogszerű. Ez tárhelyszolgáltatókra, SaaS-eszközökre és e-mail-szolgáltatásokra is vonatkozik."
    }
  },
  {
    id: 94,
    topic: "DSGVO in der Praxis",
    question: "Welche DSGVO-Aspekte sind beim Einsatz von Künstlicher Intelligenz (KI) besonders zu beachten?",
    answers: [
      "KI fällt nicht unter die DSGVO - sie verarbeitet keine 'echten' Daten",
      "Nur wenn die KI auf Fotos oder Gesichtserkennung trainiert wird",
      "Transparenz über KI-Entscheidungen, Recht auf menschliche Überprüfung bei erheblichen Auswirkungen, Zweckbindung der Trainingsdaten und Datensparsamkeit",
      "KI-Systeme sind in der EU grundsätzlich verboten"
    ],
    correct: 2,
    explanation: "KI-Systeme, die personenbezogene Daten verarbeiten, unterliegen der DSGVO. Kritisch: automatisierte Entscheidungen mit erheblichen Folgen (Art. 22), Transparenzpflicht (Art. 5), Zweckbindung der Trainingsdaten und Datensparsamkeit.",
    hu: {
      question: "Melyek a legfontosabb GDPR-szempontok a mesterséges intelligencia (MI) alkalmazásakor?",
      answers: [
        "A MI nem tartozik a GDPR hatálya alá - nem kezel 'valódi' adatokat",
        "Csak ha a MI-t fényképeken vagy arcfelismerésen tanítják",
        "Átláthatóság a MI-döntésekről, emberi felülvizsgálathoz való jog jelentős hatású döntéseknél, a tanítóadatok célhoz kötöttsége és az adattakarékosság",
        "A MI-rendszerek az EU-ban alapvetően tiltottak"
      ],
      explanation: "Személyes adatokat kezelő MI-rendszerekre a GDPR vonatkozik. Kritikus szempontok: jelentős hatású automatizált döntések (22. cikk), átláthatóság (5. cikk), a tanítóadatok célhoz kötöttsége és az adattakarékosság."
    }
  },
  {
    id: 95,
    topic: "DSGVO in der Praxis",
    question: "Eine mobile App fordert beim ersten Start Zugriff auf Kamera, Mikrofon und Kontakte an. Was ist dabei aus Datenschutzsicht zu beachten?",
    answers: [
      "Apps dürfen alle benötigten Berechtigungen auf einmal anfragen - das ist Standard",
      "Jede Berechtigung muss durch einen konkreten Funktionszweck begründet sein; unnötige Berechtigungen verstoßen gegen die Datensparsamkeit",
      "Datenschutzrechtlich relevant ist nur der Kamerazugriff",
      "Das Betriebssystem regelt Berechtigungen automatisch - Entwickler müssen sich nicht darum kümmern"
    ],
    correct: 1,
    explanation: "Datensparsamkeit gilt auch für App-Berechtigungen. Eine Taschenrechner-App braucht keinen Mikrofonzugriff. Jede Berechtigung muss durch einen konkreten Zweck begründet sein. Unnötige Berechtigungen sind ein klares Warnsignal.",
    hu: {
      question: "Egy mobilalkalmazás az első indításkor kamerához, mikrofonhoz és névjegyekhez kér hozzáférést. Mit kell figyelembe venni adatvédelmi szempontból?",
      answers: [
        "Az alkalmazások egyszerre kérhetnek minden szükséges engedélyt - ez általános gyakorlat",
        "Minden engedélynek konkrét funkcionalitási céllal kell rendelkeznie; a szükségtelen engedélyek sértik az adattakarékosság elvét",
        "Adatvédelmi szempontból csak a kamerahozzáférés releváns",
        "Az operációs rendszer automatikusan kezeli az engedélyeket - a fejlesztőknek nem kell foglalkozniuk vele"
      ],
      explanation: "Az adattakarékosság az alkalmazás-engedélyekre is vonatkozik. Egy számológép-alkalmazásnak nincs szüksége mikrofonhozzáférésre. Minden engedélyt konkrét céllal kell indokolni. A szükségtelen engedélyek egyértelmű figyelmeztető jelek."
    }
  },
  {
    id: 96,
    topic: "DSGVO in der Praxis",
    question: "Warum müssen Backups, die personenbezogene Daten enthalten, verschlüsselt werden?",
    answers: [
      "Verschlüsselung von Backups ist optional und verlangsamt nur die Wiederherstellung",
      "Backups müssen nur verschlüsselt werden, wenn sie in der Cloud gespeichert werden",
      "Weil unverschlüsselte Backups ein leichtes Ziel bei Datenpannen sind und Art. 32 DSGVO geeignete Schutzmaßnahmen vorschreibt",
      "Nur wenn die gesicherten Daten besonders sensible Kategorien umfassen"
    ],
    correct: 2,
    explanation: "Ein unverschlüsseltes Backup auf einer externen Festplatte oder einem USB-Stick ist eine häufige Ursache von Datenpannen. Art. 32 DSGVO schreibt geeignete Schutzmaßnahmen vor - Backupverschlüsselung gehört dazu.",
    hu: {
      question: "Miért kell titkosítani a személyes adatokat tartalmazó biztonsági mentéseket?",
      answers: [
        "A biztonsági mentések titkosítása opcionális és csak lelassítja a visszaállítást",
        "A biztonsági mentéseket csak akkor kell titkosítani, ha felhőben tárolják",
        "Mert a titkosítatlan biztonsági mentések könnyen adatvédelmi incidensek célpontjaivá válnak, és a GDPR 32. cikke megfelelő védőintézkedéseket ír elő",
        "Csak ha a mentett adatok különleges adatkategóriákat tartalmaznak"
      ],
      explanation: "Egy titkosítatlan biztonsági mentés külső merevlemezen vagy USB-meghajtón az adatvédelmi incidensek gyakori oka. A GDPR 32. cikke megfelelő biztonsági intézkedéseket követel meg - a biztonsági mentések titkosítása ebbe beletartozik."
    }
  },
  {
    id: 97,
    topic: "DSGVO in der Praxis",
    question: "Was sollte beim Entwurf einer API, die personenbezogene Daten liefert, aus Datenschutzsicht beachtet werden?",
    answers: [
      "APIs sind intern und daher vom Datenschutz ausgenommen",
      "Es reicht, die API hinter einem API-Key abzusichern",
      "Datensparsamkeit in den Responses, Zugriffsprotokollierung, Authentifizierung und rollenbasierte Zugriffssteuerung",
      "Alle Datenbankfelder sollten über die API abrufbar sein, damit Clients flexibel bleiben"
    ],
    correct: 2,
    explanation: "Eine datenschutzkonforme API liefert nur die wirklich benötigten Felder, protokolliert Zugriffe, erzwingt Authentifizierung und steuert über Rollen, wer welche Daten sehen darf. Zu breite Endpunkte und Massenabrufe sind häufige Problemquellen.",
    hu: {
      question: "Mit kell figyelembe venni adatvédelmi szempontból egy személyes adatokat visszaadó API tervezésekor?",
      answers: [
        "Az API-k belső jellegűek, ezért mentesek az adatvédelem alól",
        "Elegendő az API-t egy API-kulccsal védeni",
        "Adattakarékosság a válaszokban, hozzáférés-naplózás, hitelesítés és szerepkör-alapú hozzáférés-vezérlés",
        "Minden adatbázismező lekérdezhetőnek kell lennie az API-n keresztül, hogy az ügyfelek rugalmasak maradhassanak"
      ],
      explanation: "Egy adatvédelmi szempontból megfelelő API csak a valóban szükséges mezőket adja vissza, naplózza a hozzáféréseket, kötelezővé teszi a hitelesítést, és szerepkörökön keresztül szabályozza, ki milyen adatokat láthat. A túl széles végpontok és a tömeges lekérdezések gyakori problémaforrások."
    }
  },
  {
    id: 98,
    revision: 1,
    topic: "DSGVO in der Praxis",
    question: "Was ist der Unterschied zwischen Ende-zu-Ende-Verschlüsselung und Transportverschlüsselung (TLS)?",
    answers: [
      "Es gibt keinen relevanten Unterschied - beide schützen Daten auf demselben Niveau",
      "TLS schützt Daten nur auf dem Server; Ende-zu-Ende-Verschlüsselung schützt sie nur beim Client",
      "TLS schützt eine Verbindung; Ende-zu-Ende-Verschlüsselung hält den Inhalt auch für vermittelnde Dienste unlesbar",
      "Ende-zu-Ende-Verschlüsselung ist ausschließlich für E-Mails relevant"
    ],
    correct: 2,
    explanation: "TLS schützt den Transport zwischen seinen Endpunkten, etwa Browser und Webserver. Ob der Server Daten verschlüsselt speichert, ist eine eigene Entscheidung. Bei Ende-zu-Ende-Verschlüsselung besitzen die vorgesehenen Endpunkte die Schlüssel zum Inhalt; vermittelnde Server können ihn nicht entschlüsseln.",
    hu: {
      question: "Mi a különbség a végponttól végpontig tartó titkosítás és az átviteli titkosítás (TLS) között?",
      answers: [
        "Nincs lényeges különbség - mindkettő ugyanolyan szinten védi az adatokat",
        "A TLS csak a szerveren, a végponttól végpontig tartó titkosítás csak az ügyfélen védi az adatokat",
        "A TLS egy kapcsolatot véd; a végpontok közötti titkosítás a közvetítő szolgáltatók számára is olvashatatlanná teszi a tartalmat",
        "A végponttól végpontig tartó titkosítás kizárólag e-mailek esetén releváns"
      ],
      explanation: "A TLS a saját végpontjai, például a böngésző és a webszerver közötti átvitelt védi. Külön kérdés, hogy a szerver titkosítva tárolja-e az adatokat. Végpontok közötti titkosításnál a tartalomhoz szükséges kulcsok a kijelölt végpontokon vannak; a közvetítő szerverek nem tudják visszafejteni."
    }
  },
  {
    id: 99,
    topic: "DSGVO in der Praxis",
    question: "Welche Rechte haben Betroffene bei vollautomatisierten Entscheidungen mit erheblichen Auswirkungen (Art. 22 DSGVO)?",
    answers: [
      "Keine - vollautomatisierte Entscheidungen sind uneingeschränkt erlaubt und nicht anfechtbar",
      "Das Recht, eine menschliche Überprüfung der Entscheidung zu verlangen und den eigenen Standpunkt darzulegen",
      "Nur das Recht, die bei der Entscheidung verwendeten Daten anzufragen",
      "Das Recht auf automatische Entschädigung, wenn die Entscheidung falsch war"
    ],
    correct: 1,
    explanation: "Art. 22 DSGVO schützt vor rein automatisierten Entscheidungen mit erheblichen Auswirkungen - z. B. Kreditablehnung oder automatisiertes Bewerberscreening. Betroffene können menschliche Überprüfung verlangen. Ausnahmen: Einwilligung oder Vertragserfüllung.",
    hu: {
      question: "Milyen jogai vannak az érintetteknek a jelentős hatású, teljesen automatizált döntések esetén (GDPR 22. cikk)?",
      answers: [
        "Nincs - a teljesen automatizált döntések korlátozás nélkül megengedettek és nem vitathatók",
        "A jog, hogy emberi felülvizsgálatot kérjen a döntésről, és kifejtse álláspontját",
        "Csak a jog, hogy lekérdezze a döntésnél felhasznált adatokat",
        "A jog az automatikus kártérítésre, ha a döntés téves volt"
      ],
      explanation: "A GDPR 22. cikke védelmet nyújt a jelentős hatású, teljesen automatizált döntésekkel szemben - pl. hitelkérelem elutasítása vagy automatizált jelöltkiválasztás esetén. Az érintett emberi felülvizsgálatot kérhet. Kivételek: hozzájárulás vagy szerződés teljesítése."
    }
  },
  {
    id: 100,
    topic: "DSGVO in der Praxis",
    question: "Was wird bei einem internen Datenschutz-Audit typischerweise geprüft?",
    answers: [
      "Ausschließlich technische Sicherheitsmaßnahmen wie Firewalls und Backups",
      "Ob alle Datenschutzdokumente rechtmäßig und aktuell sind - Verarbeitungsverzeichnis, Datenschutzerklärungen, AVVs, TOMs und Löschkonzepte",
      "Nur ob eine Datenschutzerklärung auf der Website vorhanden ist",
      "Ausschließlich die durchgeführten Mitarbeiterschulungen"
    ],
    correct: 1,
    explanation: "Ein Datenschutz-Audit prüft die gesamte Datenschutzorganisation: Ist das Verarbeitungsverzeichnis aktuell? Sind alle AVVs vorhanden? Werden Löschfristen eingehalten? Sind TOMs dem Risiko angemessen? Werden Betroffenenrechte korrekt umgesetzt?",
    hu: {
      question: "Mi kerül tipikusan ellenőrzésre egy belső adatvédelmi audit során?",
      answers: [
        "Kizárólag műszaki biztonsági intézkedések, mint tűzfalak és biztonsági mentések",
        "Hogy minden adatvédelmi dokumentum jogszerű-e és naprakész-e - adatkezelési nyilvántartás, adatvédelmi tájékoztatók, AVV-k, TOM-ok és törlési koncepciók",
        "Csak az, hogy megtalálható-e az adatvédelmi tájékoztató a weboldalon",
        "Kizárólag az elvégzett munkavállaló-képzések"
      ],
      explanation: "Az adatvédelmi audit az egész adatvédelmi szervezetet ellenőrzi: naprakész-e az adatkezelési nyilvántartás? Minden AVV megvan? Betartják-e a törlési határidőket? Arányosak-e a TOM-ok a kockázattal? Helyesen érvényesítik-e az érintetti jogokat?"
    }
  }

];
