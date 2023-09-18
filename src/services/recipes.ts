import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TRecipes } from '../types/recipes.type'
import { TSelectedFilters } from '../types/filters.type'

// `https://api.spoonacular.com/recipes/complexSearch
// ?apiKey=65cc4a8b7d1944aea8d42011381e4b41
// &number=3
// &type=snack,drink
// &sort=popularity
// &fillIngredients=true
// &addRecipeNutrition=true
// &addRecipeInformation=true`

const apiKey1 = '65cc4a8b7d1944aea8d42011381e4b41'
const apiKey2 = '721765b0dcb54547a2d83534ac8f5ebc'
// const cuisines = ["African", "Asian", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European", "European", "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "Korean", "Latin American", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "Southern", "Spanish", "Thai", "Vietnamese"]

// const g = `&cuisine=${cuisines[Math.floor(Math.random() * (26 - 0) + 0)]}`



export const recipesApi = createApi({
	reducerPath: 'recipesApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spoonacular.com/recipes/complexSearch' }),
	endpoints: (builder) => ({
		getSearchRecipes: builder.query<TRecipes, TSelectedFilters>({
			query: ({ selectedTypesArray, selectedDietsArray }) => `
			?apiKey=${apiKey2}
			&number=6
			&type=${selectedTypesArray.join(",")}
			&diet=${selectedDietsArray.join(",")}
			&sort=popularity
			&fillIngredients=true
			&addRecipeNutrition=true
			&addRecipeInformation=true`,
		}),
	}),
})

export const { useGetSearchRecipesQuery } = recipesApi