import s from './Filter.module.scss'
import { ReactComponent as ArrowDown } from '../../../aseets/images/svg/arrow_down.svg'
import { useDietsFilter } from '../../../hooks/useDietsFilter'
import { ShowButton } from '../../ui/ShowButton'


export const DietsFilter: React.FC = () => {

	const { functions, selectedDiets, setDietsIsOpen, dietsIsOpen, setFetch, activeFilter, setActiveFilter } = useDietsFilter()

	return (
		<div className={dietsIsOpen ? s.nav_item : `${s.nav_item} ${s.nav_item_closed}`}>
			<span className={s.nav_item_title} onClick={() => setDietsIsOpen(!dietsIsOpen)} >Diets <ArrowDown /> </span>
			<div className={dietsIsOpen ? `${s.buttons_wrapper} ${s.buttons_wrapper_open}` : s.buttons_wrapper}>
				<div className={s.button_wrapper}>
					<input
						className={s.checkbox}
						checked={Object.values(selectedDiets).every(v => v) ? true : false} type='checkbox'
						onChange={functions.onSelectAll} />
					<div className={s.button_text}>Select all</div>
					{activeFilter.select_all_diets && <ShowButton setFetch={setFetch} setActiveFilter={setActiveFilter} />}
				</div>
				<div className={s.button_wrapper} >
					<input
						className={s.checkbox}
						checked={!!selectedDiets.gluten_free && true}
						onChange={functions.onGlutenFree} type='checkbox' />
					<div className={s.button_text}>Gluten Free</div>
					{activeFilter.gluten_free && <ShowButton setFetch={setFetch} setActiveFilter={setActiveFilter} />}
				</div>
				<div className={s.button_wrapper} >
					<input
						className={s.checkbox}
						checked={!!selectedDiets.ketogenic && true}
						onChange={functions.onKetogenic} type='checkbox' />
					<div className={s.button_text}>Ketogenic</div>
					{activeFilter.ketogenic && <ShowButton setFetch={setFetch} setActiveFilter={setActiveFilter} />}
				</div>
				<div className={s.button_wrapper} >
					<input
						className={s.checkbox}
						checked={!!selectedDiets.vegetarian && true}
						onChange={functions.onVegetarian} type='checkbox' />
					<div className={s.button_text}>Vegetarian</div>
					{activeFilter.vegetarian && <ShowButton setFetch={setFetch} setActiveFilter={setActiveFilter} />}
				</div>
				<div className={s.button_wrapper} >
					<input
						className={s.checkbox}
						checked={!!selectedDiets.lacto_vegetarian && true}
						onChange={functions.onLactoVegetarian} type='checkbox' />
					<div className={s.button_text}>Lacto Vegetarian</div>
					{activeFilter.lacto_vegetarian && <ShowButton setFetch={setFetch} setActiveFilter={setActiveFilter} />}
				</div>
				<div className={s.button_wrapper} >
					<input
						className={s.checkbox}
						checked={!!selectedDiets.ovo_vegetarian && true}
						onChange={functions.onOvoVegetarian} type='checkbox' />
					<div className={s.button_text}>Ovo Vegetarian</div>
					{activeFilter.ovo_vegetarian && <ShowButton setFetch={setFetch} setActiveFilter={setActiveFilter} />}
				</div>
				<div className={s.button_wrapper} >
					<input
						className={s.checkbox}
						checked={!!selectedDiets.vegan && true}
						onChange={functions.onVegan} type='checkbox' />
					<div className={s.button_text}>Vegan</div>
					{activeFilter.vegan && <ShowButton setFetch={setFetch} setActiveFilter={setActiveFilter} />}
				</div>
				<div className={s.button_wrapper} >
					<input
						className={s.checkbox}
						checked={!!selectedDiets.pescetarian && true}
						onChange={functions.onPescetarian} type='checkbox' />
					<div className={s.button_text}>Pescetarian</div>
					{activeFilter.pescetarian && <ShowButton setFetch={setFetch} setActiveFilter={setActiveFilter} />}
				</div>
				<div className={s.button_wrapper} >
					<input
						className={s.checkbox}
						checked={!!selectedDiets.paleo && true}
						onChange={functions.onPaleo} type='checkbox' />
					<div className={s.button_text}>Paleo</div>
					{activeFilter.paleo && <ShowButton setFetch={setFetch} setActiveFilter={setActiveFilter} />}
				</div>
				<div className={s.button_wrapper} >
					<input
						className={s.checkbox}
						checked={!!selectedDiets.primal && true}
						onChange={functions.onPrimal} type='checkbox' />
					<div className={s.button_text}>Primal</div>
					{activeFilter.primal && <ShowButton setFetch={setFetch} setActiveFilter={setActiveFilter} />}
				</div>
				<div className={s.button_wrapper} >
					<input
						className={s.checkbox}
						checked={!!selectedDiets.low_FODMAP && true}
						onChange={functions.onLowFODMAP} type='checkbox' />
					<div className={s.button_text}>Low FODMAP</div>
					{activeFilter.low_FODMAP && <ShowButton setFetch={setFetch} setActiveFilter={setActiveFilter} />}
				</div>
				<div className={s.button_wrapper} >
					<input
						className={s.checkbox}
						checked={!!selectedDiets.whole30 && true}
						onChange={functions.onWhole30} type='checkbox' />
					<div className={s.button_text}>Whole30</div>
					{activeFilter.whole30 && <ShowButton setFetch={setFetch} setActiveFilter={setActiveFilter} />}
				</div>
			</div>
		</div>
	)
}