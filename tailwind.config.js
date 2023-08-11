//import type { Config } from 'tailwindcss'
const plugin = require('tailwindcss/plugin')

const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',

    './pages/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textShadow: {
        sm: '0 0.05rem 0.1rem var(--tw-shadow-color)',
        DEFAULT: '0 0.1rem 0.2rem var(--tw-shadow-color)',
        lg: '0 0.4rem 0.8rem var(--tw-shadow-color)',
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}
export default config
