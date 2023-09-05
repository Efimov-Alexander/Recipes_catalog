import s from './FilterRecipesHeader.module.scss'


export const FilterRecipesHeader = () => {
	return (
		<div className={s.header}>
			<h2 className={s.title}>Filter Recipes</h2>
			<nav className={s.nav}>
				<h3>Home </h3>
				<h3>Explore </h3>
				<h3>Help </h3>
				<h3>Profile </h3>
			</nav>
		</div>
	)
}