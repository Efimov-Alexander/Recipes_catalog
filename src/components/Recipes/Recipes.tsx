import s from './Recipes.module.scss'
import { Header } from './Header/Header';
import { TypesFilter } from './Filters/TypesFilter';
import { useRecipes } from '../../hooks/useRecipes';
import { TileRecipe } from './TileRecipe/TileRecipe';
import React from 'react';
import { DietsFilter } from './Filters/DietsFilter';
import { RowRecipe } from './RowRecipe/RowRecipe';
import { CuisinesFilter } from './Filters/CuisinesFilter';
import { IntolerancesFilter } from './Filters/IntolerancesFilter';


export const Recipes: React.FC = () => {

	const { data, isLoading, isTile } = useRecipes()
	
	return (
		<section className={s.section}>
			<div className={s.container}>
				<Header />
				<div className={s.body}>
					<nav className={s.nav_body}>
						<TypesFilter />
						<DietsFilter />
						<CuisinesFilter />
						<IntolerancesFilter />
					</nav>
					<div className={isTile ? `${s.tile_recipes_body}` : `${s.row_recipes_body}`}>
						{isLoading ? <div>Loading...</div> :
							data ? data.map(recipe => (
								isTile ? <TileRecipe
									key={recipe.id}
									{...recipe} />
									:
									<RowRecipe
										key={recipe.id}
										{...recipe} />
							)) : <div>Recipes not found</div>}
					</div>
				</div>
			</div>
		</section>
	)
}