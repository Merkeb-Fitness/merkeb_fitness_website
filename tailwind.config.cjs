/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#FFFFFF",
				background: "#1E1E1E",
				accent: "#FFE849",
			  },
			  fontFamily: {
				Rob: ["Roboto", "sans-serif", ...defaultTheme.fontFamily.sans],
				questrial: ["Questrial", "sans-serif"]
			  },
			height: {
				"3/25" : "12%",
				"22/25" : "88%"
			}
		},
	},
	plugins: [],
}
