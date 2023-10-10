import { activeFilterData } from "../../data/data"
import { useActions, useAppSelector } from "../../hooks/hooks"
import { TSomeoneFilter } from "../../types/filters.type"

export const getFilterCount = (filter: TSomeoneFilter) => {
	return Object.values(filter).filter(value => value).length
}

type useFiltersCountProps = {
	filter: TSomeoneFilter,
	nameForSetFilter: string,
}

export const useFiltersCount = ({ filter, nameForSetFilter }: useFiltersCountProps) => {

	const { setFilter, setFetch, setActiveFilter } = useActions()
	const { selectedFilters } = useAppSelector(state => state.filters)
	const filterCount = getFilterCount(filter)

	const onFilterCount = () => {
		const selectedFilterFalse: any = { ...filter }
		Object.keys(selectedFilterFalse).forEach(item => selectedFilterFalse[item] = false)
		setFilter({ ...selectedFilters, [nameForSetFilter]: selectedFilterFalse })
		setFetch(true)
		setActiveFilter(activeFilterData)
	}

	return { filterCount, onFilterCount }
}