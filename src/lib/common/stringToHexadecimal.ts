/**
 * Converts a string to hexadecimal.
 * @param {string} str The string to convert.
 * @returns {string} The hexadecimal representation of the string.
 */
export function stringToHexadecimal(str: string): string {
	return str
		.split('')
		.map((c) => c.charCodeAt(0).toString(16).padStart(2, '0'))
		.join('');
}

/**
 * Converts a hexadecimal to string.
 * @param {string} hex The hexadecimal to convert.
 * @returns {string} The string representation of the hexadecimal.
 */
export function hexadecimalToString(hex: string): string {
	return hex
		.split(/(\w\w)/g)
		.filter((p) => !!p)
		.map((c) => String.fromCharCode(parseInt(c, 16)))
		.join('');
}
