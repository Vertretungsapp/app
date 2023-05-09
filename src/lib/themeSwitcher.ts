export enum Theme {
    DEFAULT = 'default',
    LIGHT = 'light',
    ORANGE = 'orange',
    DARKORANGE = 'darkOrange',
    GREEN = 'green',
    DARKGREEN = 'darkGreen',
    PINKY = 'pinky',
    BLACKANDWHITE = 'blackAndWhite',
}

/**
 * Set the theme in local storage and apply it to the root element
 * @param theme The theme to set
 * @return {void}
 */
export function setTheme(theme: Theme) {
  if(theme === 'default') return clearTheme();
  localStorage.setItem('theme', theme);
  document.querySelector(':root')?.classList.remove(...Object.values(Theme));
  document.querySelector(':root')?.classList.add(theme);
}

/**
 * Load the theme from local storage and apply it to the root element
 * @return {void}
 */
export function loadTheme() {
  const theme = localStorage.getItem('theme');
  if (theme) {
    setTheme(theme as Theme);
  }
}

/**
 * Clear the theme from local storage and remove it from the root element
 * @return {void}
 */
export function clearTheme() {
  localStorage.removeItem('theme');
  document.querySelector(':root')?.classList.remove(...Object.values(Theme));
}

export function getTheme() {
  return localStorage.getItem('theme') as Theme;
}