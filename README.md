# UIP Africa — Urban Infrastructure Projects

Official web application for **UIP Africa** (Urban Infrastructure Projects Africa) — Civil and structural engineering consultancy, construction advisory, and CAD drafting across Zimbabwe and the Southern African region.

---

## 🏗️ About The Project

UIP Africa provides boundless engineering solutions, combining technical rigor with local environmental and developmental insight. This application showcases UIP Africa's:
- **Core Disciplines**: Structural engineering, civil infrastructure, water & sanitation, transportation, energy, and construction advisory.
- **Featured Projects**: Commercial developments, residential complexes, mining infrastructure, dams, and transit facilities.
- **Client Portfolio & Credentials**: ISO 9001:2015 certified quality management, ZACE membership, and partnerships with leading public and private sector clients.

---

## 🛠️ Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start) with file-based routing
- **UI & Components**: [React 19](https://react.dev/), [Radix UI](https://www.radix-ui.com/), Lucide Icons
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18.0.0 or later recommended)
- **npm** (or bun / yarn / pnpm)

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Jefterwork/uip-website-design.git
   cd uip-website-design
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:3000` (or the port shown in your terminal).

---

## 📦 Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the local development server |
| `npm run build` | Compiles and builds the production-ready bundle |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Runs ESLint to check for code quality issues |

---

## 📁 Project Structure

```text
├── public/               # Static assets (brand logos, client marks, project images)
│   ├── uip-logo.png      # Official UIP Africa brand logo
│   └── images/           # Badges, client logos, and project media
├── src/
│   ├── assets/           # Bundled image assets
│   ├── components/
│   │   ├── site/         # Core site components (SiteHeader, Sections, Reveal)
│   │   └── ui/           # Reusable UI component library (Radix primitives)
│   ├── lib/              # Site data, utilities, and helper functions
│   ├── routes/           # TanStack Start file-based routing (__root.tsx, index.tsx)
│   ├── styles.css        # Design tokens, typography, and Tailwind styles
│   └── router.tsx        # Application router configuration
└── vite.config.ts        # Vite build configuration
```

---

## 📄 License & Ownership

© Urban Infrastructure Projects (UIP) Africa. All rights reserved.
