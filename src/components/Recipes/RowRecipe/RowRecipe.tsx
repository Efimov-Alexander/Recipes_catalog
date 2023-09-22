import React from 'react';
import s from './RowRecipe.module.scss'
import { ReactComponent as Clock } from '../../../aseets/images/svg/clock.svg'
import { ReactComponent as Like } from '../../../aseets/images/svg/like.svg'
import { ReactComponent as Health } from '../../../aseets/images/svg/health.svg'
import { ReactComponent as Serving } from '../../../aseets/images/svg/serving.svg'
import { TRecipe } from '../../../types/recipes.type';

export const RowRecipe: React.FC<TRecipe> = ({ image, title, pricePerServing, readyInMinutes, aggregateLikes, healthScore, servings, cuisines }) => {

	return (
		<div className={s.body}>
			<div className={s.image_wrapper}>
				<img className={s.image} src={image} alt="Recipe image" />
				<span className={s.cuisines}>{cuisines[0]}</span>
			</div>
			<div className={s.title_info_wrapper}>
				<div className={s.title_wrapper}>
					<h2 className={s.title}>{title}</h2>
				</div>
				<div className={s.info_wrapper}>
					<p className={s.minutes}><Clock /> {readyInMinutes}</p>
					<p className={s.likes}><Like />{aggregateLikes}</p>
					<p className={s.health}><Health />{healthScore}</p>
					<p className={s.servings}><Serving />{servings}</p>
				</div>
			</div>
			<div className={s.price}>{pricePerServing} <span>$</span></div>
		</div>
	)
}