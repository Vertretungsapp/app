// OMG, this code is an incredible mess
// This definitely needs a refactor before 1.0
// Most of the code is just a copy-paste from the realtimeColor tailwind plugin :D

import { browser } from '$app/environment';
import { hex, rgb, RGBColor } from 'color-util-nodejs';

type ColorTuple = [number, number, number];

function rgbToArray(rgb: RGBColor): ColorTuple {
	return [rgb.red, rgb.green, rgb.blue];
}

function arrayToRgb([r, g, b]: ColorTuple) {
	return rgb(r, g, b);
}

export const tintModifier = (rgb: RGBColor, intensity: number) =>
	arrayToRgb(rgbToArray(rgb).map((c) => Math.round(c + (255 - c) * intensity)) as ColorTuple);

export const shadeModifier = (rgb: RGBColor, intensity: number) =>
	arrayToRgb(rgbToArray(rgb).map((c) => Math.round(c * intensity)) as ColorTuple);

export function setPrimaryColor(color: string) {
	if (!browser || !window) return;
	const rootElement = document.querySelector(':root');
	if (!rootElement) return;
	const colors = shadeColor(color);
	colors.forEach((value, key) => {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		rootElement.style.setProperty(
			`--primary-${key}`,
			`${value.red}, ${value.green}, ${value.blue}`
		);
	});
}

export function shadeColor(colorHex: string) {
	const color: RGBColor = hex(colorHex).toRGB();
	const map = new Map<number, RGBColor>();
	map.set(50, tintModifier(color, 0.95));
	map.set(100, tintModifier(color, 0.9));
	map.set(200, tintModifier(color, 0.75));
	map.set(300, tintModifier(color, 0.6));
	map.set(400, tintModifier(color, 0.3));
	map.set(500, color);
	map.set(600, shadeModifier(color, 0.9));
	map.set(700, shadeModifier(color, 0.6));
	map.set(800, shadeModifier(color, 0.45));
	map.set(900, shadeModifier(color, 0.3));
	map.set(950, shadeModifier(color, 0.2));
	return map;
}
