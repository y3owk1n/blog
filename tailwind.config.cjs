const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						"--tw-prose-body": "hsl(var(--muted-foreground))",
						"--tw-prose-headings": "hsl(var(--primary))",
						"--tw-prose-lead": "hsl(var(--muted-foreground))",
						"--tw-prose-links": "hsl(var(--primary))",
						"--tw-prose-bold": "hsl(var(--muted-foreground))",
						"--tw-prose-counters": "hsl(var(--muted-foreground))",
						"--tw-prose-bullets": "hsl(var(--muted-foreground))",
						"--tw-prose-hr": "hsl(var(--muted-foreground))",
						"--tw-prose-quotes": "hsl(var(--muted-foreground))",
						"--tw-prose-quote-borders":
							"hsl(var(--muted-foreground))",
						"--tw-prose-captions": "hsl(var(--muted-foreground))",
						"--tw-prose-code": "hsl(var(--foreground))",
						"--tw-prose-pre-code": "hsl(var(--primary))",
						"--tw-prose-pre-bg": "hsl(var(--background))",
						"--tw-prose-th-borders": "hsl(var(--muted-foreground))",
						"--tw-prose-td-borders": "hsl(var(--muted-foreground))",
					},
				},
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			fontFamily: {
				sans: ["var(--font-sans)", ...fontFamily.sans],
			},
			keyframes: {
				"accordion-down": {
					from: { height: "0" },
					to: { height: "var(--radix-accordion-content-height)" },
				},
				"accordion-up": {
					from: { height: "var(--radix-accordion-content-height)" },
					to: { height: "0" },
				},
			},
			animation: {
				"accordion-down": "accordion-down 0.2s ease-out",
				"accordion-up": "accordion-up 0.2s ease-out",
			},
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/typography"),
	],
};
