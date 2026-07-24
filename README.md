# NucFresh Brazil 🍅☢️
**Consumer-facing transparency platform for nuclear food irradiation**

Built at **HackAtom** (24-hr hackathon, sponsored by RosAtom Russia).

🔗 **Live demo:** https://kathan-majithia.github.io/innov8/

---

## About

NucFresh Brazil bridges the trust gap between food irradiation technology and consumers. Nuclear food irradiation eliminates pests, bacteria, and pathogens while extending shelf life — but public skepticism ("radioactive food" stigma) limits adoption. This platform lets any consumer **scan a product barcode** and instantly see verified data on the irradiation dose, facility, safety status, and environmental impact of what they're buying.

## Features

- **Barcode Scanner** — live camera-based QR/barcode scanning (`scan.html`) via `html5-qrcode`, plus manual barcode entry fallback.
- **Product Transparency Report** — per-product data: source farm, treatment facility, irradiation dose (kGy), purpose (e.g. ripening delay, disinfestation), bacteria elimination %, shelf-life extension date, and CO₂ savings.
- **Impact Dashboard** — live animated stats on the homepage: tonnes treated, average shelf-life boost, CO₂ prevented, farmers supported.
- **Educational Hub** (`learn.html`) — explains irradiation science and safety to non-technical users.
- **About Page** — project mission and background.

## Tech Stack

- HTML5, CSS3, vanilla JavaScript (no framework/build step)
- [`html5-qrcode`](https://github.com/mebjas/html5-qrcode) for camera-based barcode scanning
- Static product database (`assets/js/data.js`) keyed by barcode
- GitHub Actions → GitHub Pages for deployment (`.github/workflows/static.yml`)

## Project Structure

```
HackAtom/
├── index.html          # Landing page + live impact stats
├── scan.html            # Barcode scanner + verification result
├── learn.html            # Irradiation science explainer
├── about.html            # About the project
├── assets/
│   ├── css/style.css
│   ├── js/
│   │   ├── main.js       # Stat animations
│   │   ├── data.js       # Product verification database
│   │   └── html5-qrcode.min.js
│   └── images/
└── .github/workflows/static.yml
```

## Team / Context

Developed during **HackAtom**, a 24-hour nuclear-tech hackathon sponsored by **RosAtom Russia**, following the AI/ML Summer Program at Ural Federal University, Ekaterinburg.
