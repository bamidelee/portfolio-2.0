import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'dm': ['DM Sans', 'sans-serif'],
      },
      colors: {
        'primary-blue': '#296df3',
        'primary-purple': '#8a55f6',
        'dark-navy': '#363c49',
        'light-bg': '#fafafa',
        'light-blue': '#e6eefd',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-mesh": "radial-gradient(at 0% 0%, #e6eefd 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(138, 85, 246, 0.1) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(41, 109, 243, 0.1) 0px, transparent 50%), radial-gradient(at 0% 100%, #e6eefd 0px, transparent 50%)",
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
        'glow-blue': '0 0 40px rgba(41, 109, 243, 0.3)',
        'glow-purple': '0 0 40px rgba(138, 85, 246, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
export default config;