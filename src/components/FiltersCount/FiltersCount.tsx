import { useFiltersCount } from './useFiltersCount'
import s from './FiltersCount.module.scss'
import { TSomeoneFilter } from '../../types/filters.type'

type TFiltersCountProps = {
	filter: TSomeoneFilter,
	name: string,
	nameForSetFilter: string,
}

export const FiltersCount = ({ filter, name, nameForSetFilter }: TFiltersCountProps) => {

	const { filterCount, onFilterCount } = useFiltersCount({ filter, nameForSetFilter })

	return (
		<>
			{filterCount === 0 ?
				null :
				Object.keys(filter).length === filterCount ?
					<button onClick={onFilterCount} className={s.selected_filters_count_button}>{name}: all <div className={s.selected_filters_count_cross}></div> </button> :
					<button onClick={onFilterCount} className={s.selected_filters_count_button}>{name}: {filterCount} value <div className={s.selected_filters_count_cross}></div> </button>}
		</>
	)
}