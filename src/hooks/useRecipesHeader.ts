import { useState } from "react"
import { useActions, useAppSelector } from "./hooks"
import { initialState } from "../store/filterSlice"
import { TSelectedFilters } from "../types/filters.type"
import { activeFilterData } from "../data/data"

const sorts = ["Popularity", "Healthiness", "Price", "Time", "Max-used-ingredients", "Min-missing-ingredients", "Alcohol", "Caffeine", "Energy", "Calories", "Calcium", "Carbohydrates", "Cholesterol", "Sugar", "Phosphorus", "Protein", "Fiber", "Iodine", "Iron", "Magnesium"]

export const getFiltersCount = (filters: TSelectedFilters) => {
	return Object.values(filters).map(filter => Object.values(filter).filter(value => value).length)
}

export const useRecipesHedaer = () => {

	const { selectedSort, isTile, selectedFilters } = useAppSelector(state => state.filters)
	const [isActive, setIsActive] = useState(false)
	const { setSelectedSort, setIsTile, setFilter, setFetch, setActiveFilter } = useActions()

	const resetFilters = () => {
		setFilter(initialState.selectedFilters)
		setFetch(true)
		setActiveFilter(activeFilterData)
	}

	return { selectedSort, isTile, isActive, setIsActive, setIsTile, setSelectedSort, sorts, selectedFilters, resetFilters, getFiltersCount }
}



