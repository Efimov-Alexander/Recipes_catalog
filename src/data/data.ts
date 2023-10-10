import { TActiveFilter, TSelectedFilters } from "../types/filters.type";

export const filtersData: TSelectedFilters = {
	selectedTypes: {
		main_course: false,
		side_dish: false,
		dessert: false,
		appetizer: false,
		salad: false,
		bread: false,
		breakfast: false,
		soup: false,
		beverage: false,
		sauce: false,
		marinade: false,
		fingerfood: false,
		snack: false,
	},
	selectedDiets: {
		gluten_free: false,
		ketogenic: false,
		lacto_vegetarian: false,
		low_FODMAP: false,
		ovo_vegetarian: false,
		paleo: false,
		pescetarian: false,
		primal: false,
		vegan: false,
		vegetarian: false,
		whole_30: false,
	},
	selectedCuisines: {
		african: false,
		asian: false,
		american: false,
		british: false,
		cajun: false,
		caribbean: false,
		chinese: false,
		eastern: false,
		european: false,
		french: false,
		german: false,
		greek: false,
		indian: false,
		irish: false,
		italian: false,
		japanese: false,
		jewish: false,
		korean: false,
		latin_american: false,
		mediterranean: false,
		mexican: false,
		middle_eastern: false,
		nordic: false,
		southern: false,
		spanish: false,
		thai: false,
		vietnamese: false,
	},
	selectedIntolerances: {
		dairy: false,
		egg: false,
		gluten: false,
		grain: false,
		peanut: false,
		seafood: false,
		sesame: false,
		shellfish: false,
		soy: false,
		sulfite: false,
		nut: false,
		wheat: false,
	}
}
export const activeFilterData: TActiveFilter = {
	select_all_diets: false,
	select_all_types: false,
	select_all_cuisines: false,
	select_all_intolerances: false,
	...filtersData.selectedIntolerances,
	...filtersData.selectedCuisines,
	...filtersData.selectedDiets,
	...filtersData.selectedTypes,
}