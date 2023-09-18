import { useState } from "react"
import { initialState } from "../store/filterSlice"
import { useAppSelector } from "./hooks"
import { useActions } from './hooks'
import { TFunctionsTypes } from "../types/filtersTypes.type"

export const useTypesFilter = () => {

	const { selectedTypes, activeFilter } = useAppSelector(state => state.filters)
	const { setTypes, setActiveFilter, setFetch } = useActions()
	const [typesIsOpen, setTypesIsOpen] = useState(false)

	const functions: TFunctionsTypes = {
		onSelectAll() {
			Object.values(selectedTypes).every(v => v) ? setTypes(initialState.selectedTypes) : setTypes({
				main_course: true,
				side_dish: true,
				dessert: true,
				appetizer: true,
				salad: true,
				bread: true,
				breakfast: true,
				soup: true,
				beverage: true,
				sauce: true,
				marinade: true,
				fingerfood: true,
				snack: true,
			})
			setActiveFilter({ ...initialState.activeFilter, select_all_types: true })
		},
		onMainCourse() {
			setTypes({ ...selectedTypes, main_course: !selectedTypes.main_course })
			setActiveFilter({ ...initialState.activeFilter, main_course: true })
		},
		onAppetizer() {
			setTypes({ ...selectedTypes, appetizer: !selectedTypes.appetizer })
			setActiveFilter({ ...initialState.activeFilter, appetizer: true })
		},
		onBeverage() {
			setTypes({ ...selectedTypes, beverage: !selectedTypes.beverage })
			setActiveFilter({ ...initialState.activeFilter, beverage: true })
		},
		onBread() {
			setTypes({ ...selectedTypes, bread: !selectedTypes.bread })
			setActiveFilter({ ...initialState.activeFilter, bread: true })
		},
		onBreakfast() {
			setTypes({ ...selectedTypes, breakfast: !selectedTypes.breakfast })
			setActiveFilter({ ...initialState.activeFilter, breakfast: true })
		},
		onDessert() {
			setTypes({ ...selectedTypes, dessert: !selectedTypes.dessert })
			setActiveFilter({ ...initialState.activeFilter, dessert: true })
		},
		onFingerfood() {
			setTypes({ ...selectedTypes, fingerfood: !selectedTypes.fingerfood })
			setActiveFilter({ ...initialState.activeFilter, fingerfood: true })
		},
		onMarinade() {
			setTypes({ ...selectedTypes, marinade: !selectedTypes.marinade })
			setActiveFilter({ ...initialState.activeFilter, marinade: true })
		},
		onSalad() {
			setTypes({ ...selectedTypes, salad: !selectedTypes.salad })
			setActiveFilter({ ...initialState.activeFilter, salad: true })
		},
		onSauce() {
			setTypes({ ...selectedTypes, sauce: !selectedTypes.sauce })
			setActiveFilter({ ...initialState.activeFilter, sauce: true })
		},
		onSideDish() {
			setTypes({ ...selectedTypes, side_dish: !selectedTypes.side_dish })
			setActiveFilter({ ...initialState.activeFilter, side_dish: true })
		},
		onSnack() {
			setTypes({ ...selectedTypes, snack: !selectedTypes.snack })
			setActiveFilter({ ...initialState.activeFilter, snack: true })
		},
		onSoup() {
			setTypes({ ...selectedTypes, soup: !selectedTypes.soup })
			setActiveFilter({ ...initialState.activeFilter, soup: true })
		},
	}

	return { functions, selectedTypes, typesIsOpen, setTypesIsOpen, setFetch, setActiveFilter, activeFilter }
}

