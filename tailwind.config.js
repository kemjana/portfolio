/** @type {import('tailwindcss').Config} */
const v = (name) => `rgb(var(${name}) / <alpha-value>)`;

module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      // Colors read CSS variables (see app/globals.css), so every
      // existing class (text-white, bg-ink, border-line...) follows the theme.
      colors: {
        ink: v("--ink"),
        card: v("--card"),
        line: v("--line"),
        accent: v("--accent"),
        "on-accent": v("--on-accent"),
        "accent-text": v("--accent-text"),
        "accent-hover": v("--accent-hover"),
        slate: {
          ...require("tailwindcss/colors").slate,
          DEFAULT: v("--slate"),
        },
        white: v("--fg"),
        black: v("--on-fg"),
        neutral: {
          200: v("--n200"),
          300: v("--n300"),
          400: v("--n400"),
          500: v("--n500"),
          600: v("--n600"),
          700: v("--n700"),
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
