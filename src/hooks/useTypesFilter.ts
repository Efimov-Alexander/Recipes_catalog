import { useState } from "react"
import { initialState } from "../store/filterSlice"
import { useAppSelector } from "./hooks"
import { useActions } from './hooks'
import { TSelectedTypes } from "../types/filters.type"


export const useTypesFilter = () => {

	const { selectedTypes, activeFilter } = useAppSelector(state => state.filters)
	const { setTypes, setActiveFilter, setFetch } = useActions()
	const [typesIsOpen, setTypesIsOpen] = useState(false)

	const onSelectAll = () => {
		if (Object.values(selectedTypes).every(v => v)) {
			setTypes(initialState.selectedTypes)
		} else {
			const selectedTypesTrue: TSelectedTypes = { ...selectedTypes }
			Object.keys(selectedTypesTrue).forEach(v => selectedTypesTrue[v as keyof TSelectedTypes] = true)
			setTypes({ ...selectedTypesTrue })
		}
		setActiveFilter({ ...initialState.activeFilter, select_all_types: true })
	}

	const setTypesAndActiveFilter = (key: keyof TSelectedTypes) => {
		setTypes({ ...selectedTypes, [key]: !selectedTypes[key] })
		setActiveFilter({ ...initialState.activeFilter, [key]: true })
	}

	return { selectedTypes, typesIsOpen, setTypesIsOpen, setFetch, setActiveFilter, activeFilter, onSelectAll, setTypesAndActiveFilter }
}

