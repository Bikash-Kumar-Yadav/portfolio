# Portfolio Website - React + Tailwind CSS

A modern, responsive portfolio website built with React and Tailwind CSS.

## Features

- 🎨 Modern UI with Tailwind CSS
- 📱 Fully responsive design
- ⚡ Fast development with Vite
- 🎭 Smooth animations with ScrollReveal
- ⌨️ Typed.js for animated text effects
- 📧 Contact form integration with Web3Forms

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

### Preview Production Build

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
portfolio/
├── public/
│   └── img/          # Images and assets
├── src/
│   ├── components/   # React components
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx       # Main app component
│   ├── main.jsx      # Entry point
│   └── index.css     # Global styles with Tailwind
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **Typed.js** - Typing animation library
- **ScrollReveal** - Scroll animations

## Customization

### Colors

Edit the color scheme in `tailwind.config.js`:
```javascript
colors: {
  'bg-color': '#191f36',
  'snd-bg-color': '#262B40',
  'text-color': '#ffffff',
  'main-color': '#59B2F4',
}
```

### Contact Form

The contact form uses Web3Forms. Update the access key in `src/components/Contact.jsx`:
```javascript
<input type="hidden" name="access_key" value="YOUR_ACCESS_KEY" />
```

## License

Copyright © 2024 by Bikash yadav | All Rights Reserved.
