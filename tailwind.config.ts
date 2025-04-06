
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sjsu: {
					blue: '#0055A2',     // SJSU Blue
					gold: '#E5A823',     // SJSU Gold
					gray: '#939597',     // SJSU Gray
					lightGray: '#D2D2D2', // SJSU Light Gray
					darkGray: '#666666',  // SJSU Dark Gray
					rolloverBlue: '#1C88F4' // SJSU Rollover Blue
				},
				// Define theme colors that map to the new portfolio design
				theme: {
					navyDark: '#0a192f',    // Dark navy background
					navyLight: '#112240',    // Lighter navy for elements
					navyBorder: '#233554',   // Navy border color
					slate: '#8892b0',        // Slate for main text color
					slateLight: '#a8b2d1',   // Lighter slate for secondary text
					slateWhite: '#ccd6f6',   // Whitest slate for highlights
					brightBlue: '#00B7FF',   // Bright blue for primary accents
					teal: '#64ffda',         // Teal for secondary accents
					yellow: '#ffcc66',        // Yellow for tertiary accents
					white: '#e6f1ff',        // Off-white for pure white needs
				},
				// Site background color updated to match reference
				siteBg: '#0a192f',
			},
			backgroundColor: {
				'site-bg': 'var(--site-bg)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
				mono: ['JetBrains Mono', 'monospace'],
				display: ['Poppins', 'sans-serif'],
				body: ['Manrope', 'sans-serif']
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'fade-in-left': {
					'0%': { opacity: '0', transform: 'translateX(-20px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'scale-in': {
					'0%': { opacity: '0', transform: 'scale(0.95)' },
					'100%': { opacity: '1', transform: 'scale(1)' }
				},
				'blur-in': {
					'0%': { opacity: '0', filter: 'blur(10px)' },
					'100%': { opacity: '1', filter: 'blur(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '1',
						boxShadow: '0 0 10px hsla(var(--primary), 0.5)' 
					},
					'50%': { 
						opacity: '0.8',
						boxShadow: '0 0 25px hsla(var(--primary), 0.8)' 
					}
				},
				'data-flow': {
					'0%': { left: '-30%' },
					'100%': { left: '100%' }
				},
				'glitch': {
					'0%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(-2px, -2px)' },
					'60%': { transform: 'translate(2px, 2px)' },
					'80%': { transform: 'translate(2px, -2px)' },
					'100%': { transform: 'translate(0)' }
				},
				'breathe': {
					'0%, 100%': { transform: 'scale(1)' },
					'50%': { transform: 'scale(1.03)' }
				},
				'wave': {
					'0%': { transform: 'rotate(0deg)' },
					'10%': { transform: 'rotate(14deg)' },
					'20%': { transform: 'rotate(-8deg)' },
					'30%': { transform: 'rotate(14deg)' },
					'40%': { transform: 'rotate(-4deg)' },
					'50%': { transform: 'rotate(10deg)' },
					'60%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(0deg)' }
				},
				'gradient-x': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'gradient-y': {
					'0%, 100%': { backgroundPosition: '50% 0%' },
					'50%': { backgroundPosition: '50% 100%' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '200% 0' },
					'100%': { backgroundPosition: '-200% 0' }
				},
				'spin-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'bounce-gentle': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-5px)' }
				},
				'pulse-ring': {
					'0%': { transform: 'scale(0.8)', opacity: '0.2' },
					'50%': { transform: 'scale(1)', opacity: '0.5' },
					'100%': { transform: 'scale(1.2)', opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out',
				'fade-in-delayed': 'fade-in 0.7s ease-out 0.2s forwards',
				'fade-in-delayed-2': 'fade-in 0.7s ease-out 0.4s forwards',
				'fade-in-delayed-3': 'fade-in 0.7s ease-out 0.6s forwards',
				'fade-in-right': 'fade-in-right 0.7s ease-out',
				'fade-in-left': 'fade-in-left 0.7s ease-out',
				'scale-in': 'scale-in 0.7s ease-out',
				'blur-in': 'blur-in 0.7s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'float-faster': 'float 4s ease-in-out infinite',
				'float-slower': 'float 8s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'data-flow': 'data-flow 3s infinite linear',
				'glitch': 'glitch 0.3s ease-in-out',
				'breathe': 'breathe 4s ease-in-out infinite',
				'wave': 'wave 2.5s ease-in-out',
				'gradient-x': 'gradient-x 8s ease infinite',
				'gradient-y': 'gradient-y 8s ease infinite',
				'shimmer': 'shimmer 2s linear infinite',
				'spin-slow': 'spin-slow 12s linear infinite',
				'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
				'pulse-ring': 'pulse-ring 1.5s cubic-bezier(0.24, 0, 0.38, 1) infinite'
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
