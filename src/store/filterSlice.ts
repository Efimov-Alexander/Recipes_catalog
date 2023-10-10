import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TActiveFilter, TFilterState, TSelectedFilters } from '../types/filters.type';
import { activeFilterData, filtersData } from '../data/data'

export const initialState: TFilterState = {
	selectedFilters: filtersData,
	activeFilter: activeFilterData,
	selectedSort: "Popularity",
	isFetch: true,
	isTile: true,
}

const filterSlice = createSlice({
	name: 'filterSlice',
	initialState,
	reducers: {
		setFilter(state, action: PayloadAction<TSelectedFilters>) {
			state.isFetch = false
			state.selectedFilters = action.payload
		},
		setSelectedSort(state, action: PayloadAction<string>) {
			state.selectedSort = action.payload
		},
		setActiveFilter(state, action: PayloadAction<TActiveFilter>) {
			state.activeFilter = action.payload
		},
		setIsTile(state, action: PayloadAction<boolean>) {
			state.isTile = action.payload
		},
		setFetch(state, action: PayloadAction<boolean>) {
			state.isFetch = action.payload
		},
	},
});

export const { actions, reducer } = filterSlice;