export type TRecipe = {
	image: string,
	id: number,
	pricePerServing: number,
	readyInMinutes: number,
	title: string,
	aggregateLikes: number,
	healthScore: number,
	servings: number,
	cuisines: string[],
}

export type RecipesServerResponse = {
	results: TRecipe[],
	offset: number,
	number: number,
	totalResults: number,
}
