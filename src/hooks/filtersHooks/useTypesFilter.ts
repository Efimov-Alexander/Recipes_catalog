import { useState } from "react"
import { initialState } from "../../store/filterSlice"
import { useAppSelector } from "../hooks"
import { useActions } from '../hooks'
import { TSelectedTypes } from "../../types/filters.type"


export const useTypesFilter = () => {

	const { selectedFilters, activeFilter } = useAppSelector(state => state.filters)
	const { setFilter, setActiveFilter, setFetch } = useActions()
	const [typesIsOpen, setTypesIsOpen] = useState(false)
	const selectedTypes = selectedFilters.selectedTypes

	const setTypesAndActiveFilter = (key: keyof TSelectedTypes) => {
		setFilter({ ...selectedFilters, selectedTypes: { ...selectedTypes, [key]: !selectedTypes[key] } })
		setActiveFilter({ ...initialState.activeFilter, [key]: true })
	}

	const onSelectAll = () => {
		if (Object.values(selectedTypes).every(v => v)) {
			setFilter({ ...selectedFilters, selectedTypes: initialState.selectedFilters.selectedTypes })
		} else {
			const selectedTypesTrue: TSelectedTypes = { ...selectedTypes }
			Object.keys(selectedTypesTrue).forEach(v => selectedTypesTrue[v as keyof TSelectedTypes] = true)
			setFilter({ ...selectedFilters, selectedTypes: selectedTypesTrue })
		}
		setActiveFilter({ ...initialState.activeFilter, select_all_types: true })
	}

	return { selectedTypes, typesIsOpen, setTypesIsOpen, setFetch, setActiveFilter, activeFilter, onSelectAll, setTypesAndActiveFilter }
}

