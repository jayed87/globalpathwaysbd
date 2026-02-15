<div align="center">

# 🎓 GlobalPathwaysBD

**Your Gateway to UK Education**

A modern, SEO-optimized education consultancy website helping Bangladeshi students pursue higher education in the United Kingdom.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green)](#license)

[Live Demo](#) · [Report Bug](../../issues) · [Request Feature](../../issues)

</div>

---

## 📋 About

**GlobalPathwaysBD** is a professional education consultancy website built for a Bangladeshi firm that helps students apply to UK universities. The site serves as an information hub covering university selection, admission requirements, visa processes, scholarships, IELTS preparation, and more.

### Who is this for?

- 🇧🇩 Bangladeshi students planning to study in the UK
- 🎯 Students looking for guidance on UK university admissions
- 📝 Anyone seeking information on UK student visas, IELTS, or scholarships

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| **7 Content Pages** | Home, About, Services, Study in UK, Universities, Blog, Contact |
| **Responsive Design** | Fully optimized for mobile, tablet, and desktop |
| **SEO Optimized** | Meta tags, Open Graph, semantic HTML, keyword targeting |
| **Static Generation** | All pages pre-rendered for blazing-fast load times |
| **Contact Form** | Inquiry form with education level and service selection |
| **University Directory** | 12 featured UK universities with courses, tuition, and rankings |
| **Blog Section** | Article cards ready for CMS integration |
| **Sticky Navigation** | Desktop + mobile hamburger menu |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 16](https://nextjs.org/) | React framework with App Router & SSG |
| [TypeScript](https://www.typescriptlang.org/) | Type-safe development |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first styling |
| [Lucide React](https://lucide.dev/) | Icon library |
| [clsx](https://github.com/lukeed/clsx) | Conditional class names |

---

## 📁 Project Structure

```
globalpathwaysbd/
├── public/                  # Static assets (favicon, images)
├── src/
│   ├── app/
│   │   ├── about/           # About page
│   │   ├── blog/            # Blog listing page
│   │   ├── contact/         # Contact form page
│   │   ├── services/        # Services page
│   │   ├── study-in-uk/     # Study in UK guide
│   │   ├── universities/    # University directory
│   │   ├── globals.css      # Global styles & theme
│   │   ├── layout.tsx       # Root layout with Header/Footer
│   │   └── page.tsx         # Homepage
│   └── components/
│       ├── Header.tsx       # Sticky nav with mobile menu
│       └── Footer.tsx       # Footer with CTA & links
├── package.json
├── postcss.config.mjs
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.x or later
- npm (comes with Node.js)

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/globalpathwaysbd.git

# Navigate to the project
cd globalpathwaysbd

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

---

## 🎨 Theme & Colors

The site uses a cohesive brand palette defined in `src/app/globals.css`:

| Color | Hex | Usage |
|-------|-----|-------|
| Primary (Navy) | `#1e3a5f` | Headers, nav, buttons, accents |
| Primary Light | `#2c5282` | Hover states, gradients |
| Secondary (Teal) | `#0f766e` | CTAs, highlights, badges |
| Accent (Gold) | `#d69e2e` | Stars, dividers, special elements |
| Background | `#f7fafc` | Section backgrounds |

To change colors, edit the `@theme inline` block in [`src/app/globals.css`](src/app/globals.css).

---

## 📄 Pages Overview

| Page | Route | Highlights |
|------|-------|-----------|
| **Home** | `/` | Hero, stats, services, why UK, testimonials, 5-step process |
| **About** | `/about` | Company story, mission/vision, values, team |
| **Services** | `/services` | 6 core + 6 additional services with details |
| **Study in UK** | `/study-in-uk` | Requirements, visa steps, costs, scholarships, intakes |
| **Universities** | `/universities` | 12 UK universities with tuition & rankings |
| **Blog** | `/blog` | 6 article cards with categories, newsletter signup |
| **Contact** | `/contact` | Inquiry form, office info, social links |

---

## 🔮 Future Roadmap

- [ ] CMS integration (Sanity / Strapi) for dynamic blog content
- [ ] Student portal with authentication
- [ ] Online application tracking system
- [ ] Live chat / WhatsApp integration
- [ ] Multi-language support (Bangla + English)
- [ ] Payment gateway for service fees
- [ ] Email notification system for form submissions
- [ ] Google Maps embed on contact page

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with ❤️ for Bangladeshi students dreaming of UK education**

[⬆ Back to Top](#-globalpathwaysbd)

</div>
