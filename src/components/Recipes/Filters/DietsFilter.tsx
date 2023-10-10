import s from './Filter.module.scss'
import { ReactComponent as ArrowDown } from '../../../aseets/images/svg/arrow_down.svg'
import { useDietsFilter } from '../../../hooks/filtersHooks/useDietsFilter'
import { ShowButton } from '../../ShowButton/ShowButton'
import { TSelectedDiets } from '../../../types/filters.type'


export const DietsFilter: React.FC = () => {

	const { selectedDiets, setDietsIsOpen, dietsIsOpen, activeFilter, setDietsAndActiveFilter, onSelectAll } = useDietsFilter()

	return (
		<div className={dietsIsOpen ? s.nav_item : `${s.nav_item} ${s.nav_item_closed}`}>
			<span className={s.nav_item_title} onClick={() => setDietsIsOpen(!dietsIsOpen)} >Diets <ArrowDown /> </span>
			<div className={dietsIsOpen ? `${s.buttons_wrapper} ${s.buttons_wrapper_open}` : s.buttons_wrapper}>
				<div className={s.button_wrapper}>
					<input
						className={s.checkbox}
						checked={Object.values(selectedDiets).every(v => v) ? true : false}
						type='checkbox'
						onChange={onSelectAll} />
					<div className={s.button_text}>Select all</div>
					{activeFilter.select_all_diets && <ShowButton />}
				</div>
				{Object.keys(selectedDiets).map((diet) => {
					return (
						<div key={diet} className={s.button_wrapper} >
							<input
								className={s.checkbox}
								checked={!!selectedDiets[diet as keyof TSelectedDiets]}
								onChange={() => setDietsAndActiveFilter(diet as keyof TSelectedDiets)}
								type='checkbox' />
							<div className={s.button_text}>{`${diet.charAt(0).toUpperCase()}${diet.split("_").join(" ").slice(1)}`}</div>
							{activeFilter[diet as keyof TSelectedDiets] && <ShowButton />}
						</div>
					)
				})}
			</div>
		</div>
	)
}