import { TSelectedDiets } from "./filtersDiets.type"
import { TSelectedTypes } from "./filtersTypes.type"

export type TFilterState = {
	selectedTypes: TSelectedTypes,
	selectedDiets: TSelectedDiets,
	activeFilter: TActiveFilter,
	fetch: boolean,
}
export type TSelectedFilters = {
	selectedTypesArray: string[],
	selectedDietsArray: string[],
}
export type TActiveFilter = {
	select_all_types: boolean,
	select_all_diets: boolean,
	gluten_free: boolean,
	ketogenic: boolean,
	vegetarian: boolean,
	lacto_vegetarian: boolean,
	ovo_vegetarian: boolean,
	vegan: boolean,
	pescetarian: boolean,
	paleo: boolean,
	primal: boolean,
	low_FODMAP: boolean,
	whole30: boolean,
	main_course: boolean,
	side_dish: boolean,
	dessert: boolean,
	appetizer: boolean,
	salad: boolean,
	bread: boolean,
	breakfast: boolean,
	soup: boolean,
	beverage: boolean,
	sauce: boolean,
	marinade: boolean,
	fingerfood: boolean,
	snack: boolean,
}