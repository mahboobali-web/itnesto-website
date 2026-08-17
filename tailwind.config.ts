import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060d24',
          900: '#0B1437',
          800: '#111d4a',
          700: '#1A2B6B',
          600: '#243580',
        },
        electric: {
          600: '#1a3fd4',
          500: '#2F54EB',
          400: '#4d6ef0',
          300: '#6B8CFF',
          200: '#a0b4ff',
          100: '#dce4ff',
          50:  '#f0f3ff',
        },
        offwhite: '#F5F7FF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
