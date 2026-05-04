# DSGVO LAP Quiz — Applikationsentwickler

Deutschsprachiges Lern-Quiz zur Vorbereitung auf die **LAP Applikationsentwickler-Coding** (Österreich).

## Themen

| Bereich | Inhalt |
|---|---|
| DSGVO | Grundlagen, Rechtsgrundlagen, Betroffenenrechte, Bußgelder |
| Datenschutz AT | DSG 2018, Datenschutzbehörde, Auftragsverarbeitung |
| Urheberrecht | UrhG, Schutzdauer, Softwareschutz |
| Lizenzen | GPL, MIT, Apache 2.0, Creative Commons |
| IT-Sicherheit | CIA-Triade, SQL-Injection, Verschlüsselung, Social Engineering |
| E-Commerce/ECG | Impressumspflicht, Vertragsabschluss online |
| ePrivacy | Cookies, Consent |

## Stack

- HTML / CSS / Vanilla JS — keine Abhängigkeiten, kein Build-Schritt.

## Fragen erweitern

Neue Fragen in `questions.js` am Ende des `QUESTIONS`-Arrays ergänzen:

```js
{
  id: 51,
  topic: "Themenbereich",
  question: "Fragetext?",
  answers: ["A", "B", "C", "D"],
  correct: 0,          // 0-basierter Index der richtigen Antwort
  explanation: "Erklärung zur richtigen Antwort."
}
```

## Lokal starten

```
# beliebiger lokaler HTTP-Server, z. B.:
npx serve .
# oder direkt index.html im Browser öffnen (file://)
```

## Lizenz

Apache License 2.0 — siehe [LICENSE](LICENSE)
