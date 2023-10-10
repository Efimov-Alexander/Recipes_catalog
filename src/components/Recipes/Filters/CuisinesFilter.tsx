import s from './Filter.module.scss'
import { ReactComponent as ArrowDown } from '../../../aseets/images/svg/arrow_down.svg'
import { ShowButton } from '../../ShowButton/ShowButton'
import { TSelectedCuisines } from '../../../types/filters.type'
import { useCuisinesFilter } from '../../../hooks/filtersHooks/useCuisinesFilter'


export const CuisinesFilter: React.FC = () => {

	const { selectedCuisines, cuisinesIsOpen, setCuisinesIsOpen, activeFilter, setCuisinesAndActiveFilter, onSelectAll } = useCuisinesFilter()

	return (
		<div className={cuisinesIsOpen ? s.nav_item : `${s.nav_item} ${s.nav_item_closed}`}>
			<span className={s.nav_item_title} onClick={() => setCuisinesIsOpen(!cuisinesIsOpen)} >Cuisines <ArrowDown /> </span>
			<div className={cuisinesIsOpen ? `${s.buttons_wrapper} ${s.buttons_wrapper_open}` : s.buttons_wrapper}>
				<div className={s.button_wrapper}>
					<input
						className={s.checkbox}
						checked={Object.values(selectedCuisines).every(v => v) ? true : false}
						type='checkbox'
						onChange={onSelectAll} />
					<div className={s.button_text}>Select all</div>
					{activeFilter.select_all_cuisines && <ShowButton />}
				</div>
				{Object.keys(selectedCuisines).map((cuisine) => {
					return (
						<div key={cuisine} className={s.button_wrapper} >
							<input
								className={s.checkbox}
								checked={!!selectedCuisines[cuisine as keyof TSelectedCuisines]}
								onChange={() => setCuisinesAndActiveFilter(cuisine as keyof TSelectedCuisines)}
								type='checkbox' />
							<div className={s.button_text}>{`${cuisine.charAt(0).toUpperCase()}${cuisine.split("_").join(" ").slice(1)}`}</div>
							{activeFilter[cuisine as keyof TSelectedCuisines] && <ShowButton />}
						</div>
					)
				})}
			</div>
		</div>
	)
}