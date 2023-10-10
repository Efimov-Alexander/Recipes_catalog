import { useGetSearchRecipesQuery } from "../services/recipes"
import { TSomeoneFilter } from "../types/filters.type"
import { useAppSelector } from "./hooks"

const createSelectedFilterString = (selectedFilter: TSomeoneFilter) => {
	return (Object.keys(selectedFilter).filter(item => selectedFilter[item as keyof TSomeoneFilter])).map(v => v.split("_").join(" ")).join(",")
}

export const useRecipes = () => {

	const { selectedFilters, isFetch, selectedSort, isTile } = useAppSelector(state => state.filters)

	const { data, isLoading } = useGetSearchRecipesQuery({
		selectedTypesString: createSelectedFilterString(selectedFilters.selectedTypes),
		selectedDietsString: createSelectedFilterString(selectedFilters.selectedDiets),
		selectedCusinesString: createSelectedFilterString(selectedFilters.selectedCuisines),
		selectedIntolerancesString: createSelectedFilterString(selectedFilters.selectedIntolerances),
		selectedSort,
	}, { skip: !isFetch })

	return { data, isLoading, isTile }
}