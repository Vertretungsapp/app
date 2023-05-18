export enum ThemeAccent {
	DEFAULT = 'default',
	ORANGE = 'orange',
	GREEN = 'green',
	PINKY = 'pinky',
	YELLOW = 'yellow',
	BLACKANDWHITE = 'blackAndWhite'
}

export type Theme = {
	accent: ThemeAccent;
	dark: boolean;
};

/**
 * Set the theme in local storage and apply it to the root element
 * @param theme The theme to set
 * @return {void}
 */
export function setTheme(theme: Theme): Theme {
	localStorage.setItem('theme', JSON.stringify(theme));
	document.querySelector(':root')?.classList.remove(...Object.values(ThemeAccent), 'dark', 'light');
	document.querySelector(':root')?.classList.add(theme.accent, theme.dark ? 'dark' : 'light');
	return theme;
}

/**
 * Load the theme from local storage and apply it to the root element
 * @return {void}
 */
export function loadTheme() {
	const theme = getTheme();
	if (theme) {
		setTheme(theme);
	}
}

/**
 * Clear the theme from local storage and remove it from the root element
 * @return {void}
 */
export function clearTheme() {
	localStorage.removeItem('theme');
	document.querySelector(':root')?.classList.remove(...Object.values(ThemeAccent), 'dark');
}

export function getTheme() {
	const theme = localStorage.getItem('theme');
	return theme ? (JSON.parse(theme) as Theme) : undefined;
}
