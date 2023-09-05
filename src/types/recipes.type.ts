export type TRecipe = {
	image: string,
	id?: number,
	pricePerServing: number,
	readyInMinutes: number,
	title: string,
}

export type TRecipes = {
	recipes: TRecipe[]
}