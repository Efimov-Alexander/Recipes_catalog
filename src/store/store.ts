import { configureStore } from "@reduxjs/toolkit";
import { recipesApi } from "../services/recipes";
import { reducer as filterReducer } from "./filterSlice";


export const store = configureStore({
	reducer: {
		filters: filterReducer,
		[recipesApi.reducerPath]: recipesApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware()
		.concat(recipesApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch