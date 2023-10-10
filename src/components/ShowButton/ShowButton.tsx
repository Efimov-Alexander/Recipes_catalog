import { useActions } from '../../hooks/hooks'
import { initialState } from '../../store/filterSlice'
import s from './ShowButton.module.scss'

export const ShowButton = () => {

	const { setFetch, setActiveFilter } = useActions()

	const onShowButton = () => {
		setFetch(true)
		setActiveFilter(initialState.activeFilter)
	}

	return <button onClick={onShowButton} className={s.query_button}>Show</button>
}