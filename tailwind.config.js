import realtimeColors from 'tailwind-plugin-realtime-colors';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif']
			}
		}
	},
	plugins: [
		realtimeColors({
			colors: {
				text: '#f2ece8',
				background: '#080709',
				primary: '#0549d1',
				secondary: '#595959',
				accent: '#5b8dcc'
			},
			theme: false,
			shades: ['secondary', 'accent']
		})
	]
};
