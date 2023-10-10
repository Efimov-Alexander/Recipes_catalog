import { useState } from "react"
import { initialState } from "../../store/filterSlice"
import { useAppSelector } from "../hooks"
import { useActions } from '../hooks'
import { TSelectedIntolerances } from "../../types/filters.type"

export const useIntolerancesFilter = () => {

	const { selectedFilters, activeFilter } = useAppSelector(state => state.filters)
	const { setFilter, setActiveFilter, setFetch } = useActions()
	const [intolerancesIsOpen, setIntolerancesIsOpen] = useState(false)
	const selectedIntolerances = selectedFilters.selectedIntolerances

	const setIntolerancesAndActiveFilter = (key: keyof TSelectedIntolerances) => {
		setFilter({ ...selectedFilters, selectedIntolerances: { ...selectedIntolerances, [key]: !selectedIntolerances[key] } })
		setActiveFilter({ ...initialState.activeFilter, [key]: true })
	}

	const onSelectAll = () => {
		if (Object.values(selectedIntolerances).every(v => v)) {
			setFilter({ ...selectedFilters, selectedIntolerances: initialState.selectedFilters.selectedIntolerances })
		} else {
			const selectedIntolerancesTrue: TSelectedIntolerances = { ...selectedIntolerances }
			Object.keys(selectedIntolerancesTrue).forEach(v => selectedIntolerancesTrue[v as keyof TSelectedIntolerances] = true)
			setFilter({ ...selectedFilters, selectedIntolerances: selectedIntolerancesTrue })
		}
		setActiveFilter({ ...initialState.activeFilter, select_all_intolerances: true })
	}

	return { selectedIntolerances, intolerancesIsOpen, setIntolerancesIsOpen, setFetch, setActiveFilter, activeFilter, setIntolerancesAndActiveFilter, onSelectAll }
}
