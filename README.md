# Adressbok (Intervjuprov)

## Om projektet
Denna adressbok är ett intervjuprov utvecklat för en frontendutvecklartjänst. Applikationen är byggd som en **Single Page Application** (SPA) med funktioner för att söka, sortera och visa detaljerad information om anställda. Den använder **React** och **TypeScript**, och hämtar data från **Random User API**.

## Funktioner
- Visa en lista över anställda med kontaktinformation.
- Sök- och sorteringsfunktionalitet för att snabbt hitta rätt kollega.
- Detaljerad vy med mer information om varje anställd.
- Responsiv design som fungerar både på mobil och desktop.

## Använda teknologier
- **React** (SPA frontend)
- **TypeScript** (typning och stabilitet)
- **Vite** (verktyg för snabb utveckling)
- **Tailwind CSS** (styling och layout)
- **Random User API** (datakälla för användarinformation)
- **Vite + ESLint** för utveckling och linting av koden.

## Installation och användning

1. **Klona repositoryt**:
   ```bash
   git clone https://github.com/SofiaAlmroth/work_wave.git
   cd work_wave
2. Installera beroenden:
`npm install`

3. Starta utvecklingsservern:
`npm run dev`

4. Bygg för produktion:
`npm run build`

Deployment
Applikationen är deployad och tillgänglig via följande länk:
https://work-wave2.onrender.com

API
Denna applikation använder sig av Random User API för att hämta anställdas kontaktinformation.

## Framtida förbättringar
- Lägga till autentisering och användarroller för att hantera olika nivåer av tillgång till information.
- Implementera caching för API-anrop för att förbättra prestanda.
- Förbättra sök- och filtreringsfunktioner för att hantera större dataset effektivare.

## Teknisk Setup
Det här projektet använder Vite som byggverktyg och inkluderar vissa konfigurationer för ESLint och TypeScript för att underlätta snabb utveckling.

@vitejs/plugin-react används för Fast Refresh via Babel.
Du kan utöka ESLint-konfigurationen genom att justera parserOptions och andra regler som specificeras nedan:

  ```bash
export default {
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
