
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // SJSU Color Palette
        sjsu: {
          blue: {
            DEFAULT: '#0055A2',     // Primary SJSU Blue
            light: '#1C88F4',       // Rollover Blue
          },
          gold: {
            DEFAULT: '#E5A823',     // Primary SJSU Gold
            light: '#F3C657',       // Lighter gold for contrast
          },
          gray: {
            DEFAULT: '#939597',     // Primary Gray
            light: '#D2D2D2',       // Light Gray
            dark: '#666666',        // Dark Gray
          },
        },
        // Updating default color scheme to work with SJSU palette
        primary: {
          DEFAULT: '#0055A2',       // SJSU Blue
          foreground: '#FFFFFF',    // White for contrast
        },
        secondary: {
          DEFAULT: '#E5A823',       // SJSU Gold
          foreground: '#0055A2',    // SJSU Blue for contrast
        },
        accent: {
          DEFAULT: '#1C88F4',       // Rollover Blue
          foreground: '#FFFFFF',    // White for contrast
        },
        border: "rgb(147 149 151 / 0.2)",  // Using SJSU Gray with opacity for borders
        input: "#D2D2D2",           // Using SJSU Light Gray for inputs
      },
      // Adding custom gradients
      backgroundImage: {
        'sjsu-gradient': 'linear-gradient(to right, #0055A2, #939597, #E5A823)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
