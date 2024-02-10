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
	darkMode: 'class',
	plugins: [
		realtimeColors({
			colors: {
				text: '#f2ece8',
				background: '#040404',
				primary: '#2456df',
				secondary: '#000',
				accent: '#000'
			}
		})
	]
};
