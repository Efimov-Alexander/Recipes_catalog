export type TSelectedDiets = {
	gluten_free: boolean,
	ketogenic: boolean,
	vegetarian: boolean,
	lacto_vegetarian: boolean,
	ovo_vegetarian: boolean,
	vegan: boolean,
	pescetarian: boolean,
	paleo: boolean,
	primal: boolean,
	low_FODMAP: boolean,
	whole30: boolean,
}
export type TFunctionsDiets = {
	onSelectAll: () => void,
	onGlutenFree: () => void,
	onKetogenic: () => void,
	onVegetarian: () => void,
	onLactoVegetarian: () => void,
	onOvoVegetarian: () => void,
	onVegan: () => void,
	onPescetarian: () => void,
	onPaleo: () => void,
	onPrimal: () => void,
	onLowFODMAP: () => void,
	onWhole30: () => void,
}

