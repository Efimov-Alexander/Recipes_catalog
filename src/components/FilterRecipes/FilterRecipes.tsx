import { useGetRandomRecipesQuery } from '../../services/recipes';
import { RecipeItem } from '../RecipeItem/RecipeItem';
import s from './FilterRecipes.module.scss'
import { FilterRecipesHeader } from './FilterRecipesHeader/FilterRecipesHeader';
import { FilterRecipesNav } from './FilterRecipesNav/FilterRecipesNav';


export const FilterRecipes = () => {

	const { data, isLoading } = useGetRandomRecipesQuery()
	console.log(data)
	console.log(data)


	return (
		<section className={s.section}>
			<div className={s.container}>
				<FilterRecipesHeader />
				<div className={s.body}>
					<FilterRecipesNav />
					<div>
						<h3 className={s.title}>Cusines</h3>
						<div className={s.block}>
							{isLoading ? <div>Loading...</div> :
								data ? data.recipes.map(recipe => {
									return <RecipeItem
										image={recipe.image}
										pricePerServing={recipe.pricePerServing}
										readyInMinutes={recipe.readyInMinutes}
										title={recipe.title}
										key={recipe.id} />
								}) : <div>Recipes not found</div>}
						</div>
						<h3 className={s.title}>Cusines</h3>
						<div className={s.block}>
							{isLoading ? <div>Loading...</div> :
								data ? data.recipes.map(recipe => {
									return <RecipeItem
										image={recipe.image}
										pricePerServing={recipe.pricePerServing}
										readyInMinutes={recipe.readyInMinutes}
										title={recipe.title}
										key={recipe.id} />
								}) : <div>Recipes not found</div>}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}