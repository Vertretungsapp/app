export type Favorite = {
	schoolnumber: string;
	id: number;
	short: string;
};

/**
 * Add a favorite to the local storage
 * @param favorite
 * @returns {void}
 */
export function setFavorite(favorite: Favorite) {
	localStorage.setItem(`fav.${favorite.schoolnumber}.${favorite.id}`, JSON.stringify(favorite));
}

/**
 * Get a favorite from the local storage
 * @param schoolnumber
 * @param id
 * @returns {Favorite | null}
 */
export function getFavorite(schoolnumber: string, id: number): Favorite | null {
	const fav = localStorage.getItem(`fav.${schoolnumber}.${id}`);
	return fav ? JSON.parse(fav) : null;
}

/**
 * Remove a favorite from the local storage
 * @param id
 * @returns {void}
 */
export function removeFavorite(schoolnumber: string, id: number) {
	localStorage.removeItem(`fav.${schoolnumber}.${id}`);
}

/**
 * Get all favorites from the local storage
 * @returns {Favorite[]}
 */
export function getFavorites(): Favorite[] {
	const favorites: Favorite[] = [];
	for (let i = 0; i < localStorage.length; i++) {
		const key = localStorage.key(i);
		if (key && key.startsWith('fav.')) {
			const fav = localStorage.getItem(key);
			if (fav) {
				favorites.push(JSON.parse(fav));
			}
		}
	}
	return favorites;
}
