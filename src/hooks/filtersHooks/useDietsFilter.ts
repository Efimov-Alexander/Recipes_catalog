import { useState } from "react"
import { initialState } from "../../store/filterSlice"
import { useAppSelector } from "../hooks"
import { useActions } from '../hooks'
import { TSelectedDiets } from "../../types/filters.type"

export const useDietsFilter = () => {

	const { selectedFilters, activeFilter } = useAppSelector(state => state.filters)
	const { setFilter, setActiveFilter, setFetch } = useActions()
	const [dietsIsOpen, setDietsIsOpen] = useState(false)
	const selectedDiets = selectedFilters.selectedDiets

	const setDietsAndActiveFilter = (key: keyof TSelectedDiets) => {
		setFilter({ ...selectedFilters, selectedDiets: { ...selectedDiets, [key]: !selectedDiets[key] } })
		setActiveFilter({ ...initialState.activeFilter, [key]: true })
	}

	const onSelectAll = () => {
		if (Object.values(selectedDiets).every(v => v)) {
			setFilter({ ...selectedFilters, selectedDiets: initialState.selectedFilters.selectedDiets })
		} else {
			const selectedDietsTrue: TSelectedDiets = { ...selectedDiets }
			Object.keys(selectedDietsTrue).forEach(v => selectedDietsTrue[v as keyof TSelectedDiets] = true)
			setFilter({...selectedFilters, selectedDiets: selectedDietsTrue })
		}
		setActiveFilter({ ...initialState.activeFilter, select_all_diets: true })
	}

	return { selectedDiets, dietsIsOpen, setDietsIsOpen, setFetch, setActiveFilter, activeFilter, setDietsAndActiveFilter, onSelectAll }
}
