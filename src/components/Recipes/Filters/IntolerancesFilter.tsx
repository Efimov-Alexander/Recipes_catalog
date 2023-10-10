import s from './Filter.module.scss'
import { ReactComponent as ArrowDown } from '../../../aseets/images/svg/arrow_down.svg'
import { ShowButton } from '../../ShowButton/ShowButton'
import { TSelectedIntolerances } from '../../../types/filters.type'
import { useIntolerancesFilter } from '../../../hooks/filtersHooks/useIntolerancesFilter'


export const IntolerancesFilter: React.FC = () => {

	const { selectedIntolerances, intolerancesIsOpen, setIntolerancesAndActiveFilter, activeFilter, setIntolerancesIsOpen, onSelectAll } = useIntolerancesFilter()

	return (
		<div className={intolerancesIsOpen ? s.nav_item : `${s.nav_item} ${s.nav_item_closed}`}>
			<span className={s.nav_item_title} onClick={() => setIntolerancesIsOpen(!intolerancesIsOpen)} > Intolerances <ArrowDown /> </span>
			<div className={intolerancesIsOpen ? `${s.buttons_wrapper} ${s.buttons_wrapper_open}` : s.buttons_wrapper}>
				<div className={s.button_wrapper}>
					<input
						className={s.checkbox}
						checked={Object.values(selectedIntolerances).every(v => v) ? true : false}
						type='checkbox'
						onChange={onSelectAll} />
					<div className={s.button_text}>Select all</div>
					{activeFilter.select_all_intolerances && <ShowButton />}
				</div>
				{Object.keys(selectedIntolerances).map((intolerance) => {
					return (
						<div key={intolerance} className={s.button_wrapper} >
							<input
								className={s.checkbox}
								checked={!!selectedIntolerances[intolerance as keyof TSelectedIntolerances]}
								onChange={() => setIntolerancesAndActiveFilter(intolerance as keyof TSelectedIntolerances)}
								type='checkbox' />
							<div className={s.button_text}>{`${intolerance.charAt(0).toUpperCase()}${intolerance.split("_").join(" ").slice(1)}`}</div>
							{activeFilter[intolerance as keyof TSelectedIntolerances] && <ShowButton />}
						</div>
					)
				})}
			</div>
		</div>
	)
}