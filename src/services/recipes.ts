import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TSelectedFilters } from '../types/filters.type'
import { RecipesServerResponse, TRecipe } from '../types/recipes.type'


const apiKey1 = '65cc4a8b7d1944aea8d42011381e4b41'
const apiKey2 = '721765b0dcb54547a2d83534ac8f5ebc'

// const cuisines = ["African", "Asian", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European", "European", "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "Korean", "Latin American", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "Southern", "Spanish", "Thai", "Vietnamese"]


export const recipesApi = createApi({
	reducerPath: 'recipesApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spoonacular.com/recipes/complexSearch' }),
	endpoints: (builder) => ({
		getSearchRecipes: builder.query<TRecipe[], TSelectedFilters>({
			query: ({ selectedTypesArray, selectedDietsArray, selectedSort }) => ({
				url: '/',
				params: {
					apiKey: apiKey2,
					number: 6,
					type: selectedTypesArray.join(","),
					diet: selectedDietsArray.join(","),
					sort: selectedSort,
					fillIngredients: true,
					addRecipeNutrition: true,
					addRecipeInformation: true,
				}
			}),
			transformResponse: (response: RecipesServerResponse) => response.results
		})
	})
})

export const { useGetSearchRecipesQuery } = recipesApi