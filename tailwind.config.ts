
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
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
			},
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
				'baby-blue': {
					50: '#f0f9ff',
					100: '#e0f2fe',
					200: '#bae6fd',
					300: '#7dd3fc',
					400: '#38bdf8',
					500: '#0ea5e9',
					600: '#0284c7',
					700: '#0369a1',
					800: '#075985',
					900: '#0c4a6e',
				},
			},
			backgroundImage: {
				'hero-gradient': 'linear-gradient(135deg, #0c4a6e 0%, #075985 20%, #0369a1 40%, #0284c7 60%, #0ea5e9 80%, #38bdf8 100%)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0'
					},
					'100%': {
						opacity: '1'
					}
				},
				'slide-in-right': {
					'0%': {
						transform: 'translateX(100%)'
					},
					'100%': {
						transform: 'translateX(0)'
					}
				},
				'slide-out-right': {
					'0%': {
						transform: 'translateX(0)'
					},
					'100%': {
						transform: 'translateX(100%)'
					}
				},
				'glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(14, 165, 233, 0.5)'
					},
					'50%': {
						boxShadow: '0 0 30px rgba(14, 165, 233, 0.8)'
					}
				},
				'white-glow': {
					'0%, 100%': {
						boxShadow: '0 0 20px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.4), 0 8px 25px rgba(255, 255, 255, 0.2)'
					},
					'50%': {
						boxShadow: '0 0 30px rgba(255, 255, 255, 0.8), 0 0 60px rgba(255, 255, 255, 0.6), 0 8px 25px rgba(255, 255, 255, 0.3)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'slide-out-right': 'slide-out-right 0.3s ease-out',
				'glow': 'glow 2s ease-in-out infinite',
				'white-glow': 'white-glow 2s ease-in-out infinite'
			},
			backdropBlur: {
				xs: '2px',
			},
			letterSpacing: {
				tight: '-0.025em',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
