import { type Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        login: "url('./src/assets/forest.jpg')",
        'login-blur': "url('./src/assets/forest-blur.jpg')",
        'beach-blur': "url('./src/assets/beach-blur.jpg')",
      },
      fontFamily: {
        pacifico: ['"Pacifico"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
