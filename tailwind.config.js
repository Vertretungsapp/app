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
						background: '#111111',
						text: '#EFF1F3',
						accent: '#0071F5',
						grayedOut: '#4E5764',
						error: '#FF1B1C'
					}
				}
			},
			themes: [
				{
					name: 'light',
					extend: {
						colors: {
							background: '#EFF1F3',
							text: '#111111',
							accent: '#0071F5',
							grayedOut: '#4E5764',
							error: '#FF1B1C'
						}
					},
				},
				{
					name: 'orange',
					extend: {
						colors: {
							background: '#EFF1F3',
							text: '#111111',
							accent: '#FF6A00',
							grayedOut: '#4E5764',
							error: '#FF1B1C'
						}
					}
				},
				{
					name: 'darkOrange',
					extend: {
						colors: {
							background: '#111111',
							text: '#EFF1F3',
							accent: '#FF6A00',
							grayedOut: '#4E5764',
							error: '#FF1B1C'
						}
					}
				},
				{
					name: 'green',
					extend: {
						colors: {
							background: '#EFF1F3',
							text: '#111111',
							accent: '#00B300',
							grayedOut: '#4E5764',
							error: '#FF1B1C'
						}
					}
				},
				{
					name: 'darkGreen',
					extend: {
						colors: {
							background: '#111111',
							text: '#EFF1F3',
							accent: '#00B300',
							grayedOut: '#4E5764',
							error: '#FF1B1C'
						}
					}
				},
				{
					name: 'pinky',
					extend: {
						colors: {
							background: '#EFF1F3',
							text: '#111111',
							accent: '#FF00FF',
							grayedOut: '#4E5764',
							error: '#FF1B1C'
						}
					}
				},
				{
					name: 'darkPinky',
					extend: {
						colors: {
							background: '#111111',
							text: '#EFF1F3',
							accent: '#FF00FF',
							grayedOut: '#4E5764',
							error: '#FF1B1C'
						}
					}
				},
				{
					name: 'blackAndWhite',
					extend: {
						colors: {
							background: '#111111',
							text: '#EFF1F3',
							accent: '#b8b8b8',
							grayedOut: '#4E5764',
							error: '#FF1B1C'
						}
					}
				},
			]
		})
	]
};