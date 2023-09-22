import { useGetSearchRecipesQuery } from "../services/recipes"
import { TSelectedDiets, TSelectedTypes } from "../types/filters.type"
import { useAppSelector } from "./hooks"

const createSelectedTypesArray = (selectedTypes: TSelectedTypes) => {
	let selectedTypesArray: string[] = []
	Object.values(selectedTypes).every(v => v === false) ?
		selectedTypesArray = (Object.keys(selectedTypes))
		:
		selectedTypesArray = (Object.keys(selectedTypes).filter(item => selectedTypes[item as keyof TSelectedTypes]))
	return selectedTypesArray.map(v => v.split("_").join(" "))
}

const createSelectedDietsArray = (selectedDiets: TSelectedDiets) => {
	let selectedDietsArray: string[] = []
	Object.values(selectedDiets).every(v => v) ?
		selectedDietsArray = (Object.keys(selectedDiets))
		:
		selectedDietsArray = (Object.keys(selectedDiets).filter(item => selectedDiets[item as keyof TSelectedDiets]))
	return selectedDietsArray.map(v => v.split("_").join(" "))
}

export const useRecipes = () => {

	const { selectedDiets, selectedTypes, fetch, selectedSort, isTile } = useAppSelector(state => state.filters)

	const { data, isLoading } = useGetSearchRecipesQuery({
		selectedTypesArray: createSelectedTypesArray(selectedTypes),
		selectedDietsArray: createSelectedDietsArray(selectedDiets),
		selectedSort,
	}, { skip: !fetch })

	return { data, isLoading, isTile }
}