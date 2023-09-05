import { TRecipe } from "../../types/recipes.type"
import React from 'react';
import s from './RecipeItem.module.scss'

export const RecipeItem = ({ image, title, pricePerServing, readyInMinutes }: TRecipe) => {

	return (
		<div>
			<img className={s.image} src={image} alt="Recipe image" />
			<h2>{title}</h2>
			<p>Price per serving : {pricePerServing} $</p>
			<p>Ready in minutes: {readyInMinutes}</p>
		</div>
	)
}