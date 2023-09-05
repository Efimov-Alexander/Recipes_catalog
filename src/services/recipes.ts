import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TRecipes } from '../types/recipes.type'

const apiKey = '65cc4a8b7d1944aea8d42011381e4b41'

export const recipesApi = createApi({
	reducerPath: 'recipesApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://api.spoonacular.com/recipes/random' }),
	endpoints: (builder) => ({
		getRandomRecipes: builder.query<TRecipes, void>({
			query: () => `?apiKey=${apiKey}&number=3`,
		}),
	}),
})

export const { useGetRandomRecipesQuery } = recipesApi