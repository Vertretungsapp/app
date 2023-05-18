/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif']
		}
	},
	plugins: [
		// eslint-disable-next-line @typescript-eslint/no-var-requires
		require('tailwindcss-themer')({
			defaultTheme: {
				extend: {
					colors: {
						background: '#EFF1F3',
						secondaryBackground: '#e6e6e6',
						text: '#111111',
						accent: '#0071F5',
						grayedOut: '#4E5764',
						error: '#FF1B1C'
					}
				}
			},
			themes: [
				{
					name: 'dark',
					extend: {
						colors: {
							background: '#111111',
							secondaryBackground: '#181818',
							text: '#EFF1F3',
						}
					}
				},
				{
					name: 'orange',
					extend: {
						colors: {
							accent: '#FF6A00',
						}
					}
				},
				{
					name: 'darkOrange',
					extend: {
						colors: {
							background: '#111111',
							secondaryBackground: '#181818',
							text: '#EFF1F3',
							accent: '#FF6A00'
						}
					}
				},
				{
					name: 'green',
					extend: {
						colors: {
							accent: '#00B300',
						}
					}
				},
				{
					name: 'darkGreen',
					extend: {
						colors: {
							background: '#111111',
							secondaryBackground: '#181818',
							text: '#EFF1F3',
							accent: '#00B300',
						}
					}
				},
				{
					name: 'pinky',
					extend: {
						colors: {
							accent: '#FF00FF',
						}
					}
				},
				{
					name: 'darkPinky',
					extend: {
						colors: {
							background: '#111111',
							secondaryBackground: '#181818',
							text: '#EFF1F3',
							accent: '#FF00FF',
						}
					}
				},
				{
					name: 'blackAndWhite',
					extend: {
						colors: {
							accent: '#b8b8b8',
						}
					}
				},
				{
					name: 'yellow',
					extend: {
						colors: {
							accent: '#f2e500ff',
						}
					}
				},
				{
					name: 'darkYellow',
					extend: {
						colors: {
							background: '#111111',
							secondaryBackground: '#181818',
							text: '#EFF1F3',
							accent: '#f2e500ff',
						}
					}
				}
			]
		})
	]
};
