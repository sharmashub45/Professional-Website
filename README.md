# Shubham Sharma - Professional Resume Website

A modern, interactive single-page resume website built with Next.js, TailwindCSS, and Framer Motion.

## Features

- **Responsive Design**: Mobile-first approach with beautiful layouts across all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Interactive Components**: Expandable sections, hover effects, and smooth scrolling
- **Professional Design**: Clean, modern design with Royal Blue accent color
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessibility**: WCAG compliant with proper contrast ratios and keyboard navigation

## Sections

1. **Hero**: Professional introduction with profile photo and key highlights
2. **About**: Personal summary, strengths, and professional values
3. **Experience**: Interactive timeline with expandable achievements
4. **Skills**: Tabbed skill categories with progress indicators
5. **Education**: Academic background and certifications
6. **Projects**: Featured projects with detailed case studies
7. **Contact**: Contact form and professional links

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: TailwindCSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Fonts**: Montserrat (headings), Open Sans (body)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd shubham-sharma-resume
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm start
```

## Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary: Royal Blue (#1E3A8A)
- Neutral: Various grays for text and backgrounds
- Accent: Blue variations for hover effects

### Content
Update the following files to customize content:
- `components/Hero.tsx` - Personal information and tagline
- `components/About.tsx` - Professional summary and strengths
- `components/Experience.tsx` - Work experience and achievements
- `components/Skills.tsx` - Skills and certifications
- `components/Education.tsx` - Education and certifications
- `components/Projects.tsx` - Featured projects
- `components/Contact.tsx` - Contact information

### Assets
Replace placeholder files in the `public/` directory:
- `profile.jpg` - Professional headshot (400x400px recommended)
- `Shubham_Sharma_CV.pdf` - Resume/CV document

## Design System

### Typography
- **Headings**: Montserrat (weights: 300, 400, 500, 600, 700)
- **Body**: Open Sans (weights: 300, 400, 500, 600, 700)

### Spacing
- Section padding: `py-12 px-4`
- Card padding: `p-6`
- Grid gap: `gap-6`

### Components
- **Cards**: Rounded corners (`rounded-2xl`), soft shadows, hover lift effect
- **Buttons**: Pill-shaped, filled (primary) & outlined (secondary)
- **Timeline**: Vertical line with connected cards

## Performance

- Optimized images and assets
- Lazy loading for animations
- Efficient bundle splitting
- SEO-friendly structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for personal use. Please respect the design and code structure.

## Contact

For questions or collaboration opportunities, please reach out through the contact form on the website.

---

Built with ❤️ by Shubham Sharma
