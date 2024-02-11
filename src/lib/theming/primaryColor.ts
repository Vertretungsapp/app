import { browser } from '$app/environment';
import { hex, rgb, RGBColor } from 'color-util-nodejs';
import { generateDynamicPalette, invertColor } from 'tailwind-plugin-realtime-colors';

export function setPrimaryColor(color: string, dark: boolean = false) {
	if (!browser || !window) return;
	const palette = generateDynamicPalette({ primary: color });

	for (const [key, value] of Object.entries(palette)) {
		// For some reason (but mainly aesthetics), all colors need to be inverted
		// Therefore, we need to convert the RGB value to HEX, invert it and then convert it back to RGB
		//
		// As long as it works, don't touch it.
		const rgbValue = value.split(', ').map((v) => +v);
		const hexValue = rgb(rgbValue[0], rgbValue[1], rgbValue[2]).toHex().toString();
		const invertedHexValue = !dark ? invertColor(hexValue) : hexValue;
		const rgbToString = (rgb: RGBColor) => {
			return `${rgb.red}, ${rgb.green}, ${rgb.blue}`;
		};
		document.documentElement.style.setProperty(key, rgbToString(hex(invertedHexValue).toRGB()));
	}
}
