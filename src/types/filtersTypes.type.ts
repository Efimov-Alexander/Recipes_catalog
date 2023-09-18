export type TSelectedTypes = {
	main_course: boolean,
	side_dish: boolean,
	dessert: boolean,
	appetizer: boolean,
	salad: boolean,
	bread: boolean,
	breakfast: boolean,
	soup: boolean,
	beverage: boolean,
	sauce: boolean,
	marinade: boolean,
	fingerfood: boolean,
	snack: boolean,
}
export type TFunctionsTypes = {
	onSelectAll: () => void,
	onMainCourse: () => void,
	onSideDish: () => void,
	onDessert: () => void,
	onAppetizer: () => void,
	onSalad: () => void,
	onBread: () => void,
	onBreakfast: () => void,
	onSoup: () => void,
	onBeverage: () => void,
	onSauce: () => void,
	onMarinade: () => void,
	onFingerfood: () => void,
	onSnack: () => void,
}