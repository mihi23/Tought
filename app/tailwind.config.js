/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				mainBg: '#1D2120',
				secondaryColor: '#2D4A3D',
				lighterGreen: '#5D764B',
				textColor: '#f5f5f1',
			},
			fontFamily: {
				roboto: ['Roboto', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
