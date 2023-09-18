import React from 'react'
import { ReactComponent as Cart } from '../../../aseets/images/svg/cart.svg'
import s from './Actions.module.scss'

export const Actions: React.FC = () => {
	return (
		<div className={s.actions_wrapper}>
			<div className={s.cart_wrapper}>
				<Cart />
				<span className={s.counter}>1</span>
			</div>
			<img src={require('../../../aseets/images/avatar.jpg')} alt="Avatar" />
		</div>
	)
}