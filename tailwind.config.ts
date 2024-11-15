import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
      "3xl": "1600px",
      "4xl": "1800px",
    },
    extend: {
      colors: {
        "primary-0": "#798F1D",
        "primary-1": "#BCE70C",
        "primary-2": "#BCFFA4",
        "primary-4": "#0B0B12",
        "primary-5": "#28330A",
        "primary-6": "rgba(53, 71, 36)",
        "primary-7": "rgba(40, 61, 31)",
        "primary-8": "rgba(40, 51, 10)",
        "primary-9": "#3b521c",
        "primary-10": "#495230",
        "primary-32": "rgba(11, 11, 18, 0.32)",
        "stroct-1": "#FFFFFF33",
        "highlight-1": "#FACD95 ",
        "highlight-2": "#F5D871 ",
        "BG": "#283D1F",
        "BG-2": "#28330A",
        "BG-3": "#384925",
        "BG-FFF-8": "rgba(255,255,255,0.08)",
        "BG-FFF-40": "rgba(255, 255, 255, 0.40)",
        "foundation-blue-20": "#F5F5F6",
        "foundation-blue-30": "#EBEBEC",
        "foundation-blue-40": "#DFDFE0",
        "foundation-blue-50": "#C2C2C4",
        "foundation-blue-60": "#B3B3B6",
        white: "#FFF",
        black: "#000000",
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)',
          },
          '50%': {
            transform: 'translateY(-30px)',
            animationTimingFunction: 'cubic-bezier(0, 0, 0.2, 1)',
          },
        },
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
        'bounce-slow': 'bounce-slow 5s infinite',
      }

    },
  },
  plugins: [],
}
export default config
