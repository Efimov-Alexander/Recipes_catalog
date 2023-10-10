export type TFilterState = {
	selectedFilters: TSelectedFilters
	activeFilter: TActiveFilter,
	selectedSort: string,
	isTile: boolean,
	isFetch: boolean,
}
export type TSelectedFilters = {
	selectedTypes: TSelectedTypes
	selectedCuisines: TSelectedCuisines
	selectedDiets: TSelectedDiets
	selectedIntolerances: TSelectedIntolerances
}
export type TActiveFilter = {
	select_all_types: boolean,
	select_all_diets: boolean,
	select_all_cuisines: boolean,
	select_all_intolerances: boolean,
} & TSelectedCuisines & TSelectedDiets & TSelectedTypes & TSelectedIntolerances
export type TSelectedFiltersString = {
	selectedTypesString: string,
	selectedDietsString: string,
	selectedCusinesString: string,
	selectedIntolerancesString: string,
}
export type TSomeoneFilter = TSelectedCuisines | TSelectedDiets | TSelectedTypes | TSelectedIntolerances

export type TSelectedDiets = {
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
	whole_30: boolean,
}
export type TSelectedIntolerances = {
	dairy: boolean,
	egg: boolean,
	gluten: boolean,
	grain: boolean,
	peanut: boolean,
	seafood: boolean,
	sesame: boolean,
	shellfish: boolean,
	soy: boolean,
	sulfite: boolean,
	nut: boolean,
	wheat: boolean,
}
export type TSelectedTypes = {
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
export type TSelectedCuisines = {
	african: boolean,
	asian: boolean,
	american: boolean,
	british: boolean,
	cajun: boolean,
	caribbean: boolean,
	chinese: boolean,
	eastern: boolean,
	european: boolean,
	french: boolean,
	german: boolean,
	greek: boolean,
	indian: boolean,
	irish: boolean,
	italian: boolean,
	japanese: boolean,
	jewish: boolean,
	korean: boolean,
	latin_american: boolean,
	mediterranean: boolean,
	mexican: boolean,
	middle_eastern: boolean,
	nordic: boolean,
	southern: boolean,
	spanish: boolean,
	thai: boolean,
	vietnamese: boolean,
}
