import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TSelectedFiltersString } from '../types/filters.type'
import { RecipesServerResponse, TRecipe } from '../types/recipes.type'

const apiKey1 = '65cc4a8b7d1944aea8d42011381e4b41'
const apiKey2 = '721765b0dcb54547a2d83534ac8f5ebc'


export const recipesApi = createApi({
	reducerPath: 'recipesApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spoonacular.com/recipes/complexSearch' }),
	endpoints: (builder) => ({
		getSearchRecipes: builder.query<TRecipe[], TSelectedFiltersString & { selectedSort: string }>({
			query: ({ selectedCusinesString, selectedDietsString, selectedTypesString, selectedIntolerancesString, selectedSort }) => ({
				url: '/',
				params: {
					apiKey: apiKey2,
					number: 6,
					intolerances: selectedIntolerancesString,
					type: selectedTypesString,
					diet: selectedDietsString,
					cuisine: selectedCusinesString,
					// titleMatch: 'OREO',
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