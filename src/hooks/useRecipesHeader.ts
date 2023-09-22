import { useState } from "react"
import { useActions, useAppSelector } from "./hooks"

const sorts = ["Popularity", "Healthiness", "Price", "Time", "Max-used-ingredients", "Min-missing-ingredients", "Alcohol", "Caffeine", "Energy", "Calories", "Calcium", "Carbohydrates", "Cholesterol", "Sugar", "Phosphorus", "Protein", "Fiber", "Iodine", "Iron", "Magnesium"]

export const useRecipesHedaer = () => {

	const { selectedSort, isTile } = useAppSelector(state => state.filters)
	const [isActive, setIsActive] = useState(false)
	const { setSelectedSort, setIsTile } = useActions()

	return { selectedSort, isTile, isActive, setIsActive, setIsTile, setSelectedSort, sorts }
}



