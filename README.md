# NextJs + Tailwind CSS

## Tech Stack

**Client:** NextJs, TailwindCSS

## Installation

React App

```bash
  npx create-next-app next-tailwindcss
  cd next-tailwindcss
```

Install Tailwind CSS

```bash
  yarn add -D tailwindcss@latest postcss@latest autoprefixer@lates
```

## Setup Config

```bash
  npx tailwindcss init -p
```

Edit Config

`tailwind.config.js`

```javascript
module.exports = {
  mode: "jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
```

`postcss.config.js`

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

`package.json`

```json
{
  "name": "next-tailwindcss",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "10.2.2",
    "react": "17.0.2",
    "react-dom": "17.0.2"
  },
  "devDependencies": {
    "autoprefixer": "^10.2.5",
    "postcss": "^8.3.0",
    "tailwindcss": "^2.1.2"
  }
}

```

## Dev

To deploy this project run

```bash
yarn dev
```

## Documentation

* https://tailwindcss.com/docs/just-in-time-mode#enabling-jit-mode

* https://tailwindcss.com/docs/guides/nextjs
* https://nextjs.org/docs
