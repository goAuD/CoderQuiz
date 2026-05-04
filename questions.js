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
    topic: "Softwarelizenzen",
    question: "Was ist das typische Merkmal der GPL-Lizenz?",
    answers: [
      "Quellcode muss geheim bleiben",
      "Kommerzielle Nutzung ist verboten",
      "Die Software darf nur kostenlos angeboten werden",
      "Copyleft: Änderungen und abgeleitete Werke müssen ebenfalls unter der GPL veröffentlicht werden"
    ],
    correct: 3,
    explanation: "GPL ist eine Copyleft-Lizenz: Wer GPL-Software in sein Projekt einbindet, muss das gesamte Projekt unter GPL veröffentlichen. Das ist für proprietäre Produkte oft problematisch.",
    hu: {
      question: "Mi a GPL-licence jellegzetes tulajdonsága?",
      answers: [
        "A forráskódnak titkosnak kell maradnia",
        "Kereskedelmi felhasználás tilos",
        "A szoftvert csak ingyenesen szabad kínálni",
        "Copyleft: a módosításokat és a származékos műveket szintén GPL alatt kell közzétenni"
      ],
      explanation: "A GPL egy copyleft licence: aki GPL-szoftvert épít be projektjébe, az egész projektet GPL alatt kell közzétennie. Ez zárt forráskódú termékek esetén gyakran problémás."
    }
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
    explanation: "MIT ist eine permissive Lizenz: Fast alles ist erlaubt, solange der ursprüngliche Copyright-Hinweis erhalten bleibt. Keine Pflicht, eigene Änderungen zu veröffentlichen.",
    hu: {
      question: "Mit enged meg az MIT-licence?",
      answers: [
        "Csak nem kereskedelmi felhasználást",
        "Felhasználást, módosítást és terjesztést - kereskedelmi projektekben is - copyleft-kötelezettség nélkül",
        "Felhasználást csak a szerző írásos engedélyével",
        "A forráskódot mindig közzé kell tenni"
      ],
      explanation: "Az MIT egy megengedő licence: szinte minden megengedett, amíg az eredeti szerzői jogi megjegyzés megmarad. Nem kötelező a módosításokat közzétenni."
    }
  },
  {
    id: 33,
    topic: "Softwarelizenzen",
    question: "Was bedeutet Copyleft bei Open-Source-Lizenzen?",
    answers: [
      "Die Software ist gratis nutzbar",
      "Der Quellcode gehört der Allgemeinheit ohne jede Einschränkung",
      "Änderungen und Weiterentwicklungen müssen unter derselben oder einer kompatiblen Lizenz weitergegeben werden",
      "Das Urheberrecht ist aufgehoben"
    ],
    correct: 2,
    explanation: "Copyleft sichert, dass einmal freie Software auch in Ableitungen frei bleibt. GPL ist das bekannteste Beispiel: wer GPL-Code nutzt, muss das eigene Werk auch unter GPL stellen.",
    hu: {
      question: "Mit jelent a copyleft a nyílt forráskódú licencekben?",
      answers: [
        "A szoftver ingyenesen használható",
        "A forráskód minden korlátozás nélkül a köz tulajdona",
        "A módosításokat és a továbbfejlesztéseket ugyanolyan vagy kompatibilis licence alatt kell terjeszteni",
        "A szerzői jog megszűnik"
      ],
      explanation: "A copyleft biztosítja, hogy az egyszer szabad szoftver a származékos művekben is szabad maradjon. A GPL a legismertebb példa: aki GPL-kódot használ, saját művét is GPL alatt kell közzétennie."
    }
  },
  {
    id: 34,
    topic: "Softwarelizenzen",
    question: "Was ist der Unterschied zwischen Freeware und Open Source?",
    answers: [
      "Freeware ist kostenlos, aber der Quellcode ist nicht zugänglich; bei Open Source ist der Quellcode zugänglich",
      "Kein Unterschied - beide Begriffe bedeuten dasselbe",
      "Freeware ist immer auch Open Source",
      "Open Source ist immer kostenlos"
    ],
    correct: 0,
    explanation: "Freeware = kostenlos nutzbar, Quellcode oft nicht zugänglich. Open Source = Quellcode zugänglich und veränderbar - muss aber nicht kostenlos sein.",
    hu: {
      question: "Mi a különbség a freeware és a nyílt forráskód között?",
      answers: [
        "A freeware ingyenes, de a forráskód nem elérhető; nyílt forráskód esetén a forráskód elérhető",
        "Nincs különbség - mindkét fogalom ugyanazt jelenti",
        "A freeware mindig nyílt forráskódú is",
        "A nyílt forráskód mindig ingyenes"
      ],
      explanation: "Freeware = ingyenesen használható, forráskód gyakran nem elérhető. Nyílt forráskód = forráskód elérhető és módosítható - de nem feltétlenül ingyenes."
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
    topic: "IT-Sicherheit",
    question: "Was ist ein SQL-Injection-Angriff?",
    answers: [
      "Physischer Einbruch in einen Serverraum",
      "Ein Fehler bei der Datenbankinstallation",
      "Eine Optimierungsmethode für SQL-Abfragen",
      "Einschleusen von SQL-Befehlen über Eingabefelder, um unbefugten Datenbankzugriff zu erlangen"
    ],
    correct: 3,
    explanation: "SQL-Injection: Wenn Benutzereingaben ungefiltert in SQL-Abfragen einfließen, können Angreifer die Datenbankabfrage manipulieren und z. B. alle Passwörter auslesen.",
    hu: {
      question: "Mi az SQL-injekciós támadás?",
      answers: [
        "Fizikai betörés egy szerverterembe",
        "Adatbázis-telepítési hiba",
        "SQL-lekérdezések optimalizálási módszere",
        "SQL-parancsok beviteli mezőkön keresztüli beillesztése jogosulatlan adatbázis-hozzáférés megszerzéséhez"
      ],
      explanation: "SQL-injekció: ha a felhasználói bevitelek szűretlenül kerülnek be az SQL-lekérdezésekbe, a támadó manipulálhatja az adatbázis-lekérdezést, és pl. az összes jelszót kiolvashatja."
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
    topic: "IT-Sicherheit",
    question: "Warum müssen Benutzereingaben in einer Anwendung validiert werden?",
    answers: [
      "Um Angriffe wie SQL-Injection oder Cross-Site-Scripting (XSS) zu verhindern",
      "Nur aus optischen Gründen",
      "Nur aus Performance-Gründen",
      "Das ist bei modernen Frameworks nicht mehr notwendig"
    ],
    correct: 0,
    explanation: "Nicht validierte Eingaben sind ein häufiges Einfallstor. SQL-Injection, XSS und andere Angriffe nutzen aus, wenn Eingaben ungefiltert weiterverarbeitet werden.",
    hu: {
      question: "Miért kell érvényesíteni a felhasználói beviteleket egy alkalmazásban?",
      answers: [
        "Az SQL-injekció vagy a cross-site scripting (XSS) jellegű támadások megelőzéséhez",
        "Csak esztétikai okokból",
        "Csak teljesítményi okokból",
        "Modern keretrendszereknél erre már nincs szükség"
      ],
      explanation: "Az érvényesítés nélküli bevitelek gyakori belépési pont a támadók számára. Az SQL-injekció, az XSS és más támadások azt használják ki, ha a beviteleket szűretlenül dolgozzák fel."
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
    topic: "DSGVO in der Praxis",
    question: "Was ist beim Newsletter-Versand datenschutzrechtlich erforderlich?",
    answers: [
      "Einmalige Eintragung in ein Formular reicht aus",
      "Ein Cookie-Banner auf der Website ist ausreichend",
      "Double-Opt-In: Der Nutzer bestätigt die Anmeldung durch einen Link in einer Bestätigungs-E-Mail",
      "Keine besonderen Anforderungen"
    ],
    correct: 2,
    explanation: "Double-Opt-In ist der empfohlene Standard: Der Nutzer trägt sich ein und bestätigt dann über eine E-Mail. Das dient als Nachweis der Einwilligung und schützt vor missbräuchlichen Eintragungen.",
    hu: {
      question: "Mi szükséges adatvédelmi szempontból a hírlevél-küldéshez?",
      answers: [
        "Egyszeri regisztráció egy űrlapon elegendő",
        "Egy cookie-értesítő a weboldalon elegendő",
        "Kettős opt-in: a felhasználó egy megerősítő e-mailben lévő linkre kattintva erősíti meg a feliratkozást",
        "Nincsenek különleges követelmények"
      ],
      explanation: "A kettős opt-in az ajánlott standard: a felhasználó feliratkozik, majd e-mailben megerősíti azt. Ez bizonyítja a hozzájárulást és véd a visszaéléses feliratkozásoktól."
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
    topic: "DSGVO in der Praxis",
    question: "Ein Entwickler bindet ein Drittanbieter-SDK (z. B. Facebook Pixel, Crashlytics) ein. Wer ist für die dadurch entstehende Datenverarbeitung verantwortlich?",
    answers: [
      "Nur der SDK-Anbieter ist verantwortlich",
      "Niemand - SDKs sind vom Datenschutz ausgenommen",
      "Nur wenn der SDK-Anbieter in der EU sitzt",
      "Der App-Entwickler ist mitverantwortlich und muss Nutzer darüber informieren"
    ],
    correct: 3,
    explanation: "Wer ein SDK einbindet, das Daten sammelt, ist mitverantwortlich. Nutzer müssen in der Datenschutzerklärung darüber informiert werden, und ggf. ist ein Auftragsverarbeitungsvertrag mit dem SDK-Anbieter erforderlich.",
    hu: {
      question: "Egy fejlesztő harmadik feles SDK-t (pl. Facebook Pixel, Crashlytics) illeszt be. Ki felelős az ebből eredő adatkezelésért?",
      answers: [
        "Csak az SDK-szolgáltató felelős",
        "Senki - az SDK-k mentesek az adatvédelem alól",
        "Csak ha az SDK-szolgáltató az EU-ban van",
        "Az alkalmazás fejlesztője társ-adatkezelőnek minősül és tájékoztatnia kell a felhasználókat"
      ],
      explanation: "Aki adatgyűjtő SDK-t épít be, társ-adatkezelőnek minősül. A felhasználókat az adatvédelmi tájékoztatóban erről tájékoztatni kell, és szükség esetén adatfeldolgozási szerződést kell kötni az SDK-szolgáltatóval."
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
    topic: "DSGVO in der Praxis",
    question: "Ein Entwickler entdeckt eine Sicherheitslücke in der eigenen App, durch die Nutzerdaten abgerufen werden könnten. Was muss getan werden?",
    answers: [
      "Die Lücke sofort schließen; wenn Daten bereits abgeflossen sind, muss eine Datenpanne gemeldet werden",
      "Die Lücke intern dokumentieren und beim nächsten regulären Update schließen",
      "Nichts - solange noch kein Angriff stattgefunden hat, besteht keine Meldepflicht",
      "Die Nutzer per Social Media informieren"
    ],
    correct: 0,
    explanation: "Bekannte Sicherheitslücken müssen sofort behoben werden. Wenn bereits Daten abgeflossen sind oder ein hohes Risiko besteht, muss die Datenschutzbehörde innerhalb von 72 Stunden informiert werden.",
    hu: {
      question: "Egy fejlesztő biztonsági rést fedez fel saját alkalmazásában, amelyen keresztül felhasználói adatokhoz lehetne hozzáférni. Mi a teendő?",
      answers: [
        "A rést azonnal be kell zárni; ha adatok már kiszivárogtak, adatvédelmi incidenst kell bejelenteni",
        "A rést belső dokumentálás után a következő rendszeres frissítésnél kell lezárni",
        "Semmi - amíg nem történt tényleges támadás, nincs bejelentési kötelezettség",
        "A felhasználókat közösségi médián kell tájékoztatni"
      ],
      explanation: "Az ismert biztonsági réseket azonnal be kell zárni. Ha adatok már kiszivárogtak vagy magas kockázat áll fenn, az adatvédelmi hatóságot 72 órán belül értesíteni kell."
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
  }

];
