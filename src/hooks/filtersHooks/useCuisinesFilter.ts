import { useState } from "react"
import { initialState } from "../../store/filterSlice"
import { useAppSelector } from "../hooks"
import { useActions } from '../hooks'
import { TSelectedCuisines } from "../../types/filters.type"

export const useCuisinesFilter = () => {

	const { selectedFilters, activeFilter } = useAppSelector(state => state.filters)
	const { setFilter, setActiveFilter, setFetch } = useActions()
	const [cuisinesIsOpen, setCuisinesIsOpen] = useState(false)
	const selectedCuisines = selectedFilters.selectedCuisines

	const setCuisinesAndActiveFilter = (key: keyof TSelectedCuisines) => {
		setFilter({ ...selectedFilters, selectedCuisines: { ...selectedCuisines, [key]: !selectedCuisines[key] } })
		setActiveFilter({ ...initialState.activeFilter, [key]: true })
	}

	const onSelectAll = () => {
		if (Object.values(selectedCuisines).every(v => v)) {
			setFilter({ ...selectedFilters, selectedCuisines: initialState.selectedFilters.selectedCuisines })
		} else {
			const selectedCuisinesTrue: TSelectedCuisines = { ...selectedCuisines }
			Object.keys(selectedCuisinesTrue).forEach(v => selectedCuisinesTrue[v as keyof TSelectedCuisines] = true)
			setFilter({ ...selectedFilters, selectedCuisines: selectedCuisinesTrue })
		}
		setActiveFilter({ ...initialState.activeFilter, select_all_cuisines: true })
	}
	return { selectedCuisines, cuisinesIsOpen, setCuisinesIsOpen, setFetch, setActiveFilter, activeFilter, setCuisinesAndActiveFilter, onSelectAll }
}
