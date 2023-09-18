import { useState } from "react"
import { initialState } from "../store/filterSlice"
import { useAppSelector } from "./hooks"
import { useActions } from './hooks'
import { TFunctionsDiets } from "../types/filtersDiets.type"

export const useDietsFilter = () => {

	const { selectedDiets, activeFilter } = useAppSelector(state => state.filters)
	const { setDiets, setActiveFilter, setFetch } = useActions()
	const [dietsIsOpen, setDietsIsOpen] = useState(false)

	const functions: TFunctionsDiets = {
		onSelectAll() {
			Object.values(selectedDiets).every(v => v) ? setDiets(initialState.selectedDiets) : setDiets({
				gluten_free: true,
				ketogenic: true,
				lacto_vegetarian: true,
				low_FODMAP: true,
				ovo_vegetarian: true,
				paleo: true,
				pescetarian: true,
				primal: true,
				vegan: true,
				vegetarian: true,
				whole30: true,
			})
			setActiveFilter({ ...initialState.activeFilter, select_all_diets: true })
		},
		onGlutenFree() {
			setDiets({ ...selectedDiets, gluten_free: !selectedDiets.gluten_free })
			setActiveFilter({ ...initialState.activeFilter, gluten_free: true })
		},
		onKetogenic() {
			setDiets({ ...selectedDiets, ketogenic: !selectedDiets.ketogenic })
			setActiveFilter({ ...initialState.activeFilter, ketogenic: true })
		},
		onLactoVegetarian() {
			setDiets({ ...selectedDiets, lacto_vegetarian: !selectedDiets.lacto_vegetarian })
			setActiveFilter({ ...initialState.activeFilter, lacto_vegetarian: true })
		},
		onOvoVegetarian() {
			setDiets({ ...selectedDiets, lacto_vegetarian: !selectedDiets.lacto_vegetarian })
			setActiveFilter({ ...initialState.activeFilter, lacto_vegetarian: true })
		},
		onLowFODMAP() {
			setDiets({ ...selectedDiets, low_FODMAP: !selectedDiets.low_FODMAP })
			setActiveFilter({ ...initialState.activeFilter, low_FODMAP: true })
		},
		onPaleo() {
			setDiets({ ...selectedDiets, paleo: !selectedDiets.paleo })
			setActiveFilter({ ...initialState.activeFilter, paleo: true })
		},
		onPescetarian() {
			setDiets({ ...selectedDiets, pescetarian: !selectedDiets.pescetarian })
			setActiveFilter({ ...initialState.activeFilter, pescetarian: true })
		},
		onPrimal() {
			setDiets({ ...selectedDiets, primal: !selectedDiets.primal })
			setActiveFilter({ ...initialState.activeFilter, primal: true })
		},
		onVegan() {
			setDiets({ ...selectedDiets, vegan: !selectedDiets.vegan })
			setActiveFilter({ ...initialState.activeFilter, vegan: true })
		},
		onVegetarian() {
			setDiets({ ...selectedDiets, vegetarian: !selectedDiets.vegetarian })
			setActiveFilter({ ...initialState.activeFilter, vegetarian: true })
		},
		onWhole30() {
			setDiets({ ...selectedDiets, whole30: !selectedDiets.whole30 })
			setActiveFilter({ ...initialState.activeFilter, whole30: true })
		}
	}
	return { functions, selectedDiets, dietsIsOpen, setDietsIsOpen, setFetch, setActiveFilter, activeFilter }
}
