# Portfolio Recolor to #CDE77F Palette

Keep dark background (#0b0f19 / #111827), change light/accent shades to green palette.

## Approach
Used Tailwind v4 `@theme` overrides in src/index.css to globally remap color names
(cyan-400/500, purple-300/400/500/600, teal-400/500, green-400, blue-400) to the
#CDE77F green palette. This automatically recolors all component files without
hand-editing each JSX file.

## Steps
- [x] src/index.css — add @theme overrides + selection color
- [x] src/App.css — CSS variables, glow, gradient-text, card-hover
- [x] src/components/Hero.jsx — covered via @theme
- [x] src/components/Navbar.jsx — covered via @theme
- [x] src/components/About.jsx — covered via @theme
- [x] src/components/Skills.jsx — covered via @theme (brand colors kept)
- [x] src/components/Projects.jsx — covered via @theme
- [x] src/components/Experience.jsx — covered via @theme
- [x] src/components/Testimonials.jsx — covered via @theme
- [x] src/components/Contact.jsx — covered via @theme
- [x] src/components/Footer.jsx — covered via @theme
- [x] src/components/SectionHeading.jsx — covered via @theme
- [ ] Verify build compiles
