import s from './FilterRecipesNav.module.scss'


export const FilterRecipesNav = () => {
	return (
		<nav className={s.nav}>
			<div className={s.nav_item}>
				Diet
				<button>Dairy Free</button>
				<button>Egg Free</button>
				<button>Sugar Free</button>
				<button>Gluten Free</button>
			</div>
			<div className={s.nav_item}>
				Allergies
				<button>Dairy Free</button>
				<button>Egg Free</button>
				<button>Sugar Free</button>
				<button>Gluten Free</button>
			</div>
			<div className={s.nav_item}>
				Cusine
				<button>Dairy Free</button>
				<button>Egg Free</button>
				<button>Sugar Free</button>
				<button>Gluten Free</button>
			</div>
			<div className={s.nav_item}>
				Goals
				<button>Dairy Free</button>
				<button>Egg Free</button>
				<button>Sugar Free</button>
				<button>Gluten Free</button>
			</div>
		</nav>
	)
}