import s from './ShowButton.module.scss'
import { initialState } from '../../store/filterSlice'

export const ShowButton = ({ setActiveFilter, setFetch }) => {

	return <button onClick={() => {
		setFetch(true)
		setActiveFilter(initialState.activeFilter)
	}} className={s.query_button}>Show</button>
}