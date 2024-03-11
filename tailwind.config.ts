import { type Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        login: "url('./src/assets/forest.jpg')",
        'login-blur': "url('./src/assets/forest-blur.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;
