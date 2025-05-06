import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        polly: {
          primary:  '#14C2D1',
          secondary:'#5ED37C',
          accent:   '#FABB3D',
          midnight: '#0E1827',
          ice:      '#F5FAFD',
          mist:     '#E7EEF4',
          ink:      '#1F2937',
          cloud:    '#E5ECF5',
          berry:    '#E34C66',
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
    },
  },
  plugins: [],
} satisfies Config;
