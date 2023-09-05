import { useState } from 'react'
import { ReactComponent as ArrowDown } from '../../../aseets/images/svg/arrow_down.svg'
import { ReactComponent as SearchButton } from '../../../aseets/images/svg/search.svg'
import s from './HeaderSearch.module.scss'


export const HeaderSearch = () => {

	const [select, setSelect] = useState("All Categories")

	const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSelect(e.target.value)
	}

	return (
		<form className={s.form}>
			<div className={s.select_wrapper}>
				<select className={s.select} value={select} onChange={handleChange}>
					<option value="All Categories ">All Categories</option>
					<option value="Diet">Diet</option>
					<option value="Allergies">Allergies</option>
					<option value="Cusine ">Cusine </option>
					<option value="Goals">Goals</option>
				</select>
				<ArrowDown className={s.arrow_down} />
			</div>
			<input className={s.search} type="text" placeholder='Search' />
			<button className={s.button} type='submit'><SearchButton /></button>
		</form>
	)
}