import { type Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px',
      },
      backgroundImage: {
        forest: "url('./src/assets/forest-blur.jpg')",
        beach: "url('./src/assets/beach-blur.jpg')",
      },
      fontFamily: {
        pacifico: ['"Pacifico"', ...defaultTheme.fontFamily.sans],
        comfortaa: ['"Comfortaa"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
