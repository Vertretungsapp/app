import type { PlanType } from '$lib/api/planTypes';

export type Favorite = {
	id: number;
	order: number;
	type: PlanType;
	name: string;
};

export type Favorites = {
	schoolnumber: string;
	favs: Favorite[];
};

/**
 * Retrieves the favorites for a given school number.
 * @param {string} schoolnumber - The school number.
 * @returns {Favorites} The favorites object.
 */
export function getFavorites(schoolnumber: string): Favorites {
	const favorites = localStorage.getItem(`favorites.${schoolnumber}`);
	if (!favorites) {
		const favorites = {
			schoolnumber,
			favs: []
		};
		updateFavorites(favorites);
		return favorites;
	}
	return JSON.parse(favorites) as Favorites;
}

/**
 * Updates the favorites for a given school number.
 * @param {Favorites} favorites - The favorites object.
 */
export function updateFavorites(favorites: Favorites): void {
	localStorage.setItem(`favorites.${favorites.schoolnumber}`, JSON.stringify(favorites));
}

/**
 * Deletes the favorites for a given school number.
 * @param {string} schoolnumber - The school number.
 */
export function deleteFavorites(schoolnumber: string): void {
	localStorage.removeItem(`favorites.${schoolnumber}`);
}

function getNextId(favorites: Favorites): number {
	return Math.max(...favorites.favs.map((fav) => fav.id), -1) + 1;
}

/**
 * Adds a favorite to the favorites list for a given school number.
 * @param {string} schoolnumber - The school number.
 * @param {PlanType} type - The type of the plan.
 * @param {string} name - The name of the favorite.
 */
export function addFavorite(schoolnumber: string, name: string, type: PlanType): void {
	const favorites = getFavorites(schoolnumber);
	if (!favorites) {
		updateFavorites({
			schoolnumber,
			favs: [{ id: 0, order: 0, type, name }]
		});
		return;
	}

	const order = favorites.favs.length;
	favorites.favs.push({ id: getNextId(favorites), order, type, name });
	updateFavorites(favorites);
}

/**
 * Deletes a favorite from the favorites list for a given school number.
 * @param {string} schoolnumber - The school number.
 * @param {string} name - The name of the favorite.
 * @param {PlanType} type - The type of the plan.
 */
export function deleteFavorite(schoolnumber: string, name: string, type: PlanType): void {
	const favorites = getFavorites(schoolnumber);
	if (!favorites) return;

	const favIndex = favorites.favs.findIndex((fav) => fav.name === name && fav.type === type);
	if (favIndex === -1) return;

	favorites.favs.splice(favIndex, 1);
	updateFavorites(favorites);
}

/**
 * Retrieves a favorite from the favorites list for a given school number.
 * @param {string} schoolnumber - The school number.
 * @param {string} name - The name of the favorite.
 * @param {PlanType} type - The type of the plan.
 * @returns {Favorite | null} The favorite object or null if not found.
 */
export function getFavorite(schoolnumber: string, name: string, type: PlanType): Favorite | null {
	const favorites = getFavorites(schoolnumber);
	if (!favorites) return null;

	const fav = favorites.favs.find((fav) => fav.name === name && fav.type === type);
	if (!fav) return null;

	return fav;
}

/**
 * Reorders a favorite in the favorites list for a given school number.
 * @param {string} schoolnumber - The school number.
 * @param {string} name - The name of the favorite.
 * @param {PlanType} type - The type of the plan.
 * @param {number} order - The new order of the favorite.
 */
export function reorderFavorite(
	schoolnumber: string,
	name: string,
	type: PlanType,
	order: number
): void {
	const favorites = getFavorites(schoolnumber);
	if (!favorites) return;

	// 1. Sort all favorites
	favorites.favs.sort((a, b) => a.order - b.order);

	// 2. Move the favorite to the new position
	const favIndex = favorites.favs.findIndex((fav) => fav.name === name && fav.type === type);
	if (favIndex === -1) return;
	favorites.favs.splice(favIndex, 1);
	favorites.favs.splice(order, 0, { id: getNextId(favorites), order, name, type });

	// 3. Update all favorites with the new order
	favorites.favs.forEach((fav, index) => (fav.order = index));

	updateFavorites(favorites);
}
