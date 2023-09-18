import { useState } from "react"
import { useGetSearchRecipesQuery } from "../services/recipes"
import { TActiveFilter } from "../types/filters.type"
import { TSelectedDiets } from "../types/filtersDiets.type"
import { TSelectedTypes } from "../types/filtersTypes.type"
import { useActions, useAppSelector } from "./hooks"

const createSelectedTypesArray = (selectedTypes: TSelectedTypes) => {
	let selectedTypesArray: string[] = []
	Object.values(selectedTypes).every(v => v === false) ?
		selectedTypesArray = selectedTypesArray.concat(Object.keys(selectedTypes))
		:
		selectedTypesArray = selectedTypesArray.concat((Object.keys(selectedTypes) as (keyof typeof selectedTypes)[]).filter(item => selectedTypes[item]))
	return selectedTypesArray.map(v => v.split("_").join(" "))
}

const createSelectedDietsArray = (selectedDiets: TSelectedDiets) => {
	let selectedDietsArray: string[] = []
	Object.values(selectedDiets).every(v => v) ?
		selectedDietsArray = selectedDietsArray.concat(Object.keys(selectedDiets))
		:
		selectedDietsArray = selectedDietsArray.concat((Object.keys(selectedDiets) as (keyof typeof selectedDiets)[]).filter(item => selectedDiets[item]))
	return selectedDietsArray.map(v => v.split("_").join(" "))
}

export const useRecipes = () => {

	const { setFetch } = useActions()
	const { selectedDiets, selectedTypes, fetch } = useAppSelector(state => state.filters)
	const { data, isLoading } = useGetSearchRecipesQuery({
		selectedTypesArray: createSelectedTypesArray(selectedTypes),
		selectedDietsArray: createSelectedDietsArray(selectedDiets),
	}, { skip: !fetch })

	return { data, isLoading, setFetch }
}