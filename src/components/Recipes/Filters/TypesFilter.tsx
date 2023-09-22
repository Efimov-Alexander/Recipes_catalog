import s from './Filter.module.scss'
import { ReactComponent as ArrowDown } from '../../../aseets/images/svg/arrow_down.svg'
import { useTypesFilter } from '../../../hooks/useTypesFilter'
import { ShowButton } from '../../ui/ShowButton'
import { TSelectedTypes } from '../../../types/filters.type'


export const TypesFilter: React.FC = () => {

	const { selectedTypes, setTypesIsOpen, typesIsOpen, setActiveFilter, setFetch, activeFilter, onSelectAll, setTypesAndActiveFilter } = useTypesFilter()

	return (
		<div className={typesIsOpen ? s.nav_item : `${s.nav_item} ${s.nav_item_closed}`}>
			<div className={s.nav_item_title} onClick={() => setTypesIsOpen(!typesIsOpen)} >Type <ArrowDown /> </div>
			<div className={typesIsOpen ? `${s.buttons_wrapper} ${s.buttons_wrapper_open}` : s.buttons_wrapper}>
				<div className={s.button_wrapper}>
					<input
						className={s.checkbox}
						checked={Object.values(selectedTypes).every(v => v) ? true : false}
						type='checkbox'
						onChange={onSelectAll} />
					<div className={s.button_text}>Select all</div>
					{activeFilter.select_all_types && <ShowButton setFetch={setFetch} setActiveFilter={setActiveFilter} />}
				</div>
				{Object.keys(selectedTypes).map(type => {
					return (
						<div key={type} className={s.button_wrapper} >
							<input
								className={s.checkbox}
								checked={!!selectedTypes[type as keyof TSelectedTypes]}
								onChange={() => setTypesAndActiveFilter(type as keyof TSelectedTypes)}
								type='checkbox' />
							<div className={s.button_text}>{`${type.charAt(0).toUpperCase()}${type.split("_").join(" ").slice(1)}`}</div>
							{activeFilter[type as keyof TSelectedTypes] && <ShowButton setFetch={setFetch} setActiveFilter={setActiveFilter} />}
						</div>
					)
				})}
			</div>
		</div>
	)
}