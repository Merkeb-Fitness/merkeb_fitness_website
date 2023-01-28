/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#FFFFFF",
				background: "#fffbf5",
				accent: "#FFE849",
			  },
			  fontFamily: {
				Rob: ["Roboto", "sans-serif"],
				questrial: ["Questrial", "sans-serif"],
				poppins : ["Poppins", "sans-serif" ]
			  },
			height: {
				"3/25" : "12%",
				"22/25" : "88%"
			}
		},
	},
	plugins: [],
}
