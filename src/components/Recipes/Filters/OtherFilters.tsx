import React, { useState } from 'react'
import s from './FilterRecipesNav.module.scss'
import { ReactComponent as ArrowDown } from '../../../aseets/images/svg/arrow_down.svg'

export const FilterRecipesNav: React.FC = () => {

	const [isOpen, setIsOpen] = useState({
		dietIsOpen: false,
		allergiesIsOpen: false,
		cusineIsOpen: false,
		typeIsOpen: false,
	})

	return (
		<nav className={s.nav}>
			<div className={isOpen.allergiesIsOpen ? s.nav_item : `${s.nav_item} ${s.nav_item_closed}`}>
				<span className={s.nav_item_title} onClick={() =>
					setIsOpen(prev => ({ ...prev, allergiesIsOpen: !isOpen.allergiesIsOpen }))
				} >Allergies <ArrowDown /> </span>
				<div className={isOpen.allergiesIsOpen ? `${s.buttons_wrapper} ${s.buttons_wrapper_open}` : s.buttons_wrapper}>
					<span>Dairy Free</span>
					<span>Egg Free</span>
					<span>Gluten Free</span>
					<span>Grain Free</span>
					<span>Peanut Free</span>
					<span>Seafood Free</span>
					<span>Sesame Free</span>
					<span>Shellfish Free</span>
					<span>Soy Free</span>
					<span>Sulfite Free</span>
					<span>Nut Free</span>
					<span>Wheat Free</span>
				</div>
			</div>
			<div className={isOpen.cusineIsOpen ? s.nav_item : `${s.nav_item} ${s.nav_item_closed}`}>
				<span className={s.nav_item_title} onClick={() =>
					setIsOpen(prev => ({ ...prev, cusineIsOpen: !isOpen.cusineIsOpen }))
				} >Cusine <ArrowDown /> </span>
				<div className={isOpen.cusineIsOpen ? `${s.buttons_wrapper} ${s.buttons_wrapper_open}` : s.buttons_wrapper}>
					<span>African</span>
					<span>Asian</span>
					<span>American</span>
					<span>British</span>
					<span>Cajun</span>
					<span>Caribbean</span>
					<span>Chinese</span>
					<span>Eastern European</span>
					<span>European</span>
					<span>French</span>
					<span>German</span>
					<span>Greek</span>
					<span>Indian</span>
					<span>Irish</span>
					<span>Italian</span>
					<span>Japanese</span>
					<span>Jewish</span>
					<span>Korean</span>
					<span>Latin American</span>
					<span>Mediterranean</span>
					<span>Mexican</span>
					<span>Middle Eastern</span>
					<span>Nordic</span>
					<span>Southern</span>
					<span>Spanish</span>
					<span>Thai</span>
					<span>Vietnamese</span>
				</div>
			</div>
		</nav>
	)
}