/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // 1. Center content by default
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // 2. Your Professional Color Palette
      colors: {
        base: {
          light: "#f7f4ef", // Warm beige background
          dark: "#0f0f0f",  // Deep black background
        },
        surface: {
          light: "#ffffff",
          dark: "#161616", // Lighter black for cards
        },
        text: {
          light: "#141414", // Soft black text
          dark: "#ededed",  // Off-white text
        },
        muted: {
          light: "#6b645c", // Earthy gray
          dark: "#a3a3a3",
        },
        accent: {
          DEFAULT: "#8b6b3d", // Gold/Bronze
          hover: "#705530",   // Darker Gold for hover
          light: "#e0dbd1",   // Light beige for lines/borders
        },
        border: {
          light: "#e0dbd1",
          dark: "#262626",
        }
      },
      // 3. Animation Keyframes
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "0% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "slide-up": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scroll-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        // Added for the Typewriter Cursor effect
        cursor: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      },
      // 4. Animation Utilities
      animation: {
        shimmer: "shimmer 3s linear infinite",
        "slide-up": "slide-up 0.5s ease-out forwards",
        "fade-in": "fade-in 1s ease-out forwards",
        "scroll-left": "scroll-left 40s linear infinite",
        // Added for the Typewriter Cursor effect
        cursor: 'cursor 1s step-end infinite',
      },
      // 5. Fonts
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
        signature: ['"Great Vibes"', "cursive"], 
      },
    },
  },
  plugins: [],
};