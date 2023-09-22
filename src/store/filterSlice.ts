import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TActiveFilter, TFilterState, TSelectedDiets, TSelectedTypes } from '../types/filters.type';

export const initialState: TFilterState = {
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
	activeFilter: {
		select_all_diets: false,
		select_all_types: false,
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
	selectedSort: "Popularity",
	fetch: true,
	isTile: true,
}

const filterSlice = createSlice({
	name: 'filterSlice',
	initialState,
	reducers: {
		setTypes(state, action: PayloadAction<TSelectedTypes>) {
			state.fetch = false
			state.selectedTypes = action.payload
		},
		setDiets(state, action: PayloadAction<TSelectedDiets>) {
			state.fetch = false
			state.selectedDiets = action.payload
		},
		setFetch(state, action: PayloadAction<boolean>) {
			state.fetch = action.payload
		},
		setActiveFilter(state, action: PayloadAction<TActiveFilter>) {
			state.activeFilter = action.payload
		},
		setSelectedSort(state, action: PayloadAction<string>) {
			state.selectedSort = action.payload
		},
		setIsTile(state, action: PayloadAction<boolean>) {
			state.isTile = action.payload
		},
	},
});

export const { actions, reducer } = filterSlice;