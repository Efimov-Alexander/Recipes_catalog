import { useState } from "react"
import { initialState } from "../store/filterSlice"
import { useAppSelector } from "./hooks"
import { useActions } from './hooks'
import { TSelectedDiets } from "../types/filters.type"

export const useDietsFilter = () => {

	const { selectedDiets, activeFilter } = useAppSelector(state => state.filters)
	const { setDiets, setActiveFilter, setFetch } = useActions()
	const [dietsIsOpen, setDietsIsOpen] = useState(false)

	const setDietsAndActiveFilter = (key: keyof TSelectedDiets) => {
		setDiets({ ...selectedDiets, [key]: !selectedDiets[key] })
		setActiveFilter({ ...initialState.activeFilter, [key]: true })
	}

	const onSelectAll = () => {
		if (Object.values(selectedDiets).every(v => v)) {
			setDiets(initialState.selectedDiets)
		} else {
			const selectedDietsTrue: TSelectedDiets = { ...selectedDiets }
			Object.keys(selectedDietsTrue).forEach(v => selectedDietsTrue[v as keyof TSelectedDiets] = true)
			setDiets({ ...selectedDietsTrue })
		}
		setActiveFilter({ ...initialState.activeFilter, select_all_diets: true })
	}
	return { selectedDiets, dietsIsOpen, setDietsIsOpen, setFetch, setActiveFilter, activeFilter, setDietsAndActiveFilter, onSelectAll }
}
