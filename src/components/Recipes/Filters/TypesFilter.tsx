import s from './Filter.module.scss'
import { ReactComponent as ArrowDown } from '../../../aseets/images/svg/arrow_down.svg'
import { useTypesFilter } from '../../../hooks/useTypesFilter'
import { ShowButton } from '../../ui/ShowButton'


export const TypesFilter: React.FC = () => {

	const { functions, selectedTypes, setTypesIsOpen, typesIsOpen, setActiveFilter, setFetch, activeFilter } = useTypesFilter()

	return (
		<div className={typesIsOpen ? s.nav_item : `${s.nav_item} ${s.nav_item_closed}`}>
			<div className={s.nav_item_title} onClick={() => setTypesIsOpen(!typesIsOpen)} >Type <ArrowDown /> </div>
			<div className={typesIsOpen ? `${s.buttons_wrapper} ${s.buttons_wrapper_open}` : s.buttons_wrapper}>
				<div className={s.button_wrapper}>
					<input
						className={s.checkbox}
						checked={Object.values(selectedTypes).every(v => v) ? true : false} type='checkbox'
						onChange={() => functions.onSelectAll()} />
					<div className={s.button_text}>Select all</div>
					{activeFilter.select_all_types && <ShowButton setFetch={setFetch} setActiveFilter={setActiveFilter} />}
				</div>
				<div className={s.button_wrapper} >
					<input
						className={s.checkbox}
						checked={!!selectedTypes.main_course && true}
						onChange={functions.onMainCourse} type='checkbox' />
					<div className={s.button_text}>Main course</div>
					{activeFilter.main_course && <ShowButton setFetch={setFetch} setActiveFilter={setActiveFilter} />}
				</div>
				<div className={s.button_wrapper}>
					<input
						className={s.checkbox}
						checked={!!selectedTypes.side_dish && true}
						onChange={functions.onSideDish} type='checkbox' />
					<div className={s.button_text}>Side dish</div>
					{activeFilter.side_dish && <ShowButton setFetch={setFetch} setActiveFilter={setActiveFilter} />}
				</div>
				<div className={s.button_wrapper}>
					<input
						className={s.checkbox}
						checked={!!selectedTypes.dessert && true}
						onChange={functions.onDessert} type='checkbox' />
					<div className={s.button_text}>Dessert</div>
					{activeFilter.dessert && <ShowButton setFetch={setFetch} setActiveFilter={setActiveFilter} />}
				</div>
				<div className={s.button_wrapper}>
					<input
						className={s.checkbox}
						checked={!!selectedTypes.appetizer && true}
						onChange={functions.onAppetizer} type='checkbox' />
					<div className={s.button_text}>Appetizer</div>
					{activeFilter.appetizer && <ShowButton setFetch={setFetch} setActiveFilter={setActiveFilter} />}
				</div>
				<div className={s.button_wrapper}>
					<input
						className={s.checkbox}
						checked={!!selectedTypes.salad && true}
						onChange={functions.onSalad} type='checkbox' />
					<div className={s.button_text}>Salad</div>
					{activeFilter.salad && <ShowButton setFetch={setFetch} setActiveFilter={setActiveFilter} />}
				</div>
				<div className={s.button_wrapper}>
					<input
						className={s.checkbox}
						checked={!!selectedTypes.bread && true}
						onChange={functions.onBread} type='checkbox' />
					<div className={s.button_text}>Bread</div>
					{activeFilter.bread && <ShowButton setFetch={setFetch} setActiveFilter={setActiveFilter} />}
				</div>
				<div className={s.button_wrapper}>
					<input
						className={s.checkbox}
						checked={!!selectedTypes.breakfast && true}
						onChange={functions.onBreakfast} type='checkbox' />
					<div className={s.button_text}>Breakfast</div>
					{activeFilter.breakfast && <ShowButton setFetch={setFetch} setActiveFilter={setActiveFilter} />}
				</div>
				<div className={s.button_wrapper}>
					<input
						className={s.checkbox}
						checked={!!selectedTypes.soup && true}
						onChange={functions.onSoup} type='checkbox' />
					<div className={s.button_text}>Soup</div>
					{activeFilter.soup && <ShowButton setFetch={setFetch} setActiveFilter={setActiveFilter} />}
				</div>
				<div className={s.button_wrapper}>
					<input
						className={s.checkbox}
						checked={!!selectedTypes.beverage && true}
						onChange={functions.onBeverage} type='checkbox' />
					<div className={s.button_text}>Beverage</div>
					{activeFilter.beverage && <ShowButton setFetch={setFetch} setActiveFilter={setActiveFilter} />}
				</div>
				<div className={s.button_wrapper}>
					<input
						className={s.checkbox}
						checked={!!selectedTypes.sauce && true}
						onChange={functions.onSauce} type='checkbox' />
					<div className={s.button_text}>Sauce</div>
					{activeFilter.sauce && <ShowButton setFetch={setFetch} setActiveFilter={setActiveFilter} />}
				</div>
				<div className={s.button_wrapper}>
					<input
						className={s.checkbox}
						checked={!!selectedTypes.marinade && true}
						onChange={functions.onMarinade} type='checkbox' />
					<div className={s.button_text}>Marinade</div>
					{activeFilter.marinade && <ShowButton setFetch={setFetch} setActiveFilter={setActiveFilter} />}
				</div>
				<div className={s.button_wrapper}>
					<input
						className={s.checkbox}
						checked={!!selectedTypes.fingerfood && true}
						onChange={functions.onFingerfood} type='checkbox' />
					<div className={s.button_text}>Fingerfood</div>
					{activeFilter.fingerfood && <ShowButton setFetch={setFetch} setActiveFilter={setActiveFilter} />}
				</div>
				<div className={s.button_wrapper}>
					<input
						className={s.checkbox}
						checked={!!selectedTypes.snack && true}
						onChange={functions.onSnack} type='checkbox' />
					<div className={s.button_text}>Snack</div>
					{activeFilter.snack && <ShowButton setFetch={setFetch} setActiveFilter={setActiveFilter} />}
				</div>
			</div>
		</div>
	)
}