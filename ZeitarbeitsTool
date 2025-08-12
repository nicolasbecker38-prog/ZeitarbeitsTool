Perfekt! Hier kommt der erste Teil — die Datei **frontend/App.js**:

---

```jsx
// frontend/App.js
import React, { useState } from "react";

const firmenDaten = {
  Logistik: [
    { name: "LHG Leipziger Handelsgesellschaft mbH", email: "kontakt@lhg-leipzig.de" },
    { name: "Logistik Leipzig GmbH", email: "info@logistik-leipzig.de" },
    { name: "Transporte & Co.", email: "service@transporte-leipzig.de" }
    // ... weitere Firmen
  ],
  Produktion: [
    { name: "Produktion Leipzig AG", email: "vertrieb@produktion-leipzig.de" },
    { name: "Leipziger Maschinenbau GmbH", email: "info@maschinenbau-leipzig.de" }
    // ... weitere Firmen
  ],
  Pflege: [
    { name: "Pflege & Betreuung Leipzig", email: "kontakt@pflege-leipzig.de" },
    { name: "Seniorenhilfe Leipzig GmbH", email: "info@seniorenhilfe-leipzig.de" }
    // ... weitere Firmen
  ]
};

const vorlagen = {
  "Terminvereinbarung": `Sehr geehrter Herr Becker,

ich hoffe, es geht Ihnen gut. Wir von OPPM OFFICE Professional bieten Ihnen zuverlässige Unterstützung bei Ihrem Personalbedarf.

Ich würde mich freuen, einen Außendiensttermin mit Ihnen zu vereinbaren, um Ihre Anforderungen persönlich zu besprechen.

Mit freundlichen Grüßen

Nicolas Edwin Becker
Vertriebsmitarbeiter
OPPM OFFICE Professional Personalmanagement GmbH
Friedrich-List-Platz 2
04103 Leipzig
Tel.: +49 341 23 10 33 48
Fax.: +49 341 23 10 33 42
E-Mail: becker-nicolas@office-personal.com
`,
  "Personalbedarfsfrage": `Sehr geehrter Herr Becker,

wir sind spezialisiert auf die schnelle Bereitstellung von qualifiziertem Personal in Ihrer Branche.

Darf ich Sie fragen, ob aktuell Personalbedarf in Ihrem Unternehmen besteht?

Mit freundlichen Grüßen

Nicolas Edwin Becker
Vertriebsmitarbeiter
OPPM OFFICE Professional Personalmanagement GmbH
Friedrich-List-Platz 2
04103 Leipzig
Tel.: +49 341 23 10 33 48
Fax.: +49 341 23 10 33 42
E-Mail: becker-nicolas@office-personal.com
`
};

export default function App() {
  const [branche, setBranche] = useState("Logistik");
  const [firma, setFirma] = useState(firmenDaten["Logistik"][0]);
  const [vorlage, setVorlage] = useState("Terminvereinbarung");

  const mailtoLink = () => {
    const subject = encodeURIComponent("Anfrage Personalbedarf");
    const body = encodeURIComponent(vorlagen[vorlage]);
    return `mailto:${firma.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>Zeitarbeit Vertriebs-Tool Leipzig</h1>

      <label>
        Branche wählen:{" "}
        <select
          value={branche}
          onChange={(e) => {
            setBranche(e.target.value);
            setFirma(firmenDaten[e.target.value][0]);
          }}
        >
          {Object.keys(firmenDaten).map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </label>

      <br /><br />

      <label>
        Firma wählen:{" "}
        <select
          value={firma.name}
          onChange={(e) => {
            const selected = firmenDaten[branche].find(
              (f) => f.name === e.target.value
            );
            setFirma(selected);
          }}
        >
          {firmenDaten[branche].map((f) => (
            <option key={f.name} value={f.name}>
              {f.name}
            </option>
          ))}
        </select>
      </label>

      <br /><br />

      <label>
        E-Mail Vorlage wählen:{" "}
        <select
          value={vorlage}
          onChange={(e) => setVorlage(e.target.value)}
        >
          {Object.keys(vorlagen).map((v) => (
            <option key={v} value={v}>
              {v}
            </option>
          ))}
        </select>
      </label>

      <br /><br />

      <a href={mailtoLink()}>
        <button style={{ padding: "10px 20px", fontSize: 16 }}>
          E-Mail senden
        </button>
      </a>
    </div>
  );
}
```

---

