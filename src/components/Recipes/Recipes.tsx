import s from './Recipes.module.scss'
import { Header } from './Header/Header';
import { TypesFilter } from './Filters/TypesFilter';
import { useRecipes } from '../../hooks/useRecipes';
import { Recipe } from './Recipe/Recipe';
import React from 'react';
import { DietsFilter } from './Filters/DietsFilter';


export const Recipes: React.FC = () => {

	const { data, isLoading } = useRecipes()

	return (
		<section className={s.section}>
			<div className={s.container}>
				<Header />
				<div className={s.body}>
					<nav className={s.nav_body}>
						<TypesFilter />
						<DietsFilter />
					</nav>
					<div className={s.recipes_body}>
						{isLoading ? <div>Loading...</div> :
							data ? data.results.map(recipe => (
								<Recipe
									key={recipe.id}
									{...recipe} />
							)) : <div>Recipes not found</div>}
					</div>
				</div>
			</div>
		</section>
	)
}