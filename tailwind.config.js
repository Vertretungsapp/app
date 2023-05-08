/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				background: '#111111',
				text: '#EFF1F3',
				accent: '#0071F5',
				grayedOut: '#4E5764',
				error: '#FF1B1C'
			}
		},
		fontFamily: {
			sans: ['Inter', 'sans-serif']
		}
	},
	plugins: []
};
