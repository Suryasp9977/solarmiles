# SolarMiles

Single-page marketing website for SolarMiles rooftop solar, built with React + Vite.

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build to dist/
npm run preview  # preview the production build
```

## Project structure

```
├── index.html                  # Vite entry (meta tags, fonts, #root)
├── public/favicon.svg
├── netlify.toml                # Netlify build settings
└── src/
    ├── main.jsx                # React bootstrap
    ├── App.jsx                 # Page composition (section order)
    ├── styles/global.css       # Design tokens, base, shared utilities
    ├── data/                   # All editable site content
    │   ├── site.js             # Contact details & navigation links
    │   ├── content.js          # Copy for cards, tables, lists
    │   ├── faqs.js             # FAQ questions and answers
    │   └── zones.js            # Chennai service areas + map shapes
    ├── utils/savings.js        # Solar savings / subsidy calculation
    └── components/
        ├── layout/             # TopBar, Header, Footer, WhatsAppButton
        ├── ui/                 # Logo, Card, SectionHeading, LeadForm
        └── sections/           # One component per page section
```

To change text, phone numbers, bank partners, FAQs or service areas, edit the files in `src/data/` — the components render from them.
