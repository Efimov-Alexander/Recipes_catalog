import React from 'react';
import s from './TileRecipe.module.scss'
import { ReactComponent as Clock } from '../../../aseets/images/svg/clock.svg'
import { ReactComponent as Like } from '../../../aseets/images/svg/like.svg'
import { ReactComponent as Health } from '../../../aseets/images/svg/health.svg'
import { ReactComponent as Serving } from '../../../aseets/images/svg/serving.svg'
import { TRecipe } from '../../../types/recipes.type';

export const TileRecipe: React.FC<TRecipe> = ({ image, title, pricePerServing, readyInMinutes, aggregateLikes, healthScore, servings, cuisines }) => {

	return (
		<div className={s.body}>
			<div className={s.image_wrapper}>
				<img className={s.image} src={image} alt="Recipe image" />
				<span className={s.cuisines}>{cuisines[0]}</span>
			</div>
			<div className={s.info_wrapper}>
				<div className={s.title_wrapper}>
					<h2 className={s.title}>{title.length > 30 ?
						`${title.split(" ").filter((item, index) => index < 5).join(" ")} ...` : title}</h2>
					<p className={s.price}>{pricePerServing} <span>$</span></p>
				</div>
				<div className={s.minutes_wrapper}>
					<p className={s.minutes}><Clock /> {readyInMinutes}</p>
					<p className={s.likes}><Like />{aggregateLikes}</p>
					<p className={s.health}><Health />{healthScore}</p>
					<p className={s.servings}><Serving />{servings}</p>
				</div>
			</div>
		</div>
	)
}