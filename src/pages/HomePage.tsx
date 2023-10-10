import React from 'react';
import { Recipes } from '../components/Recipes/Recipes';
import { ReactComponent as Logo } from '../aseets/images/svg/logo.svg';
import { ReactComponent as SearchButton } from '../aseets/images/svg/search.svg'
import { ReactComponent as Cart } from '../aseets/images/svg/cart.svg'
import s from './HomePage.module.scss'

export const HomePage: React.FC = () => {

	return (
		<>
			<header>
				<div className={s.header_container}>
					<Logo className={s.header_logo} />
					<form className={s.header_form}>
						<input className={s.header_search} type="text" placeholder='Search' />
						<button className={s.header_search_button} type='submit'><SearchButton /></button>
					</form>
					<div className={s.header_actions_wrapper}>
						<div className={s.header_cart_wrapper}>
							<Cart />
							<span className={s.header_cart_counter}>1</span>
						</div>
						<img src={require('../aseets/images/avatar.jpg')} alt="Avatar" />
					</div>
				</div>
			</header>
			<main>
				<section className={s.more_background}>
					<div className={s.more_container}>
						<h1 className={s.more_title}>Meat <span>Chicken</span> </h1>
						<button className={s.more_button}>More</button>
					</div>
				</section>
				<Recipes />
			</main>
		</>
	)
}