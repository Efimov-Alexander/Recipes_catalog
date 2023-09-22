import s from './Header.module.scss'
import { ReactComponent as ArrowDown } from '../../../aseets/images/svg/arrow_down.svg'
import { ReactComponent as Tile } from '../../../aseets/images/svg/tile.svg'
import { ReactComponent as Row } from '../../../aseets/images/svg/row.svg'
import { useRecipesHedaer } from '../../../hooks/useRecipesHeader'


export const Header: React.FC = () => {

	const { isActive, isTile, selectedSort, setIsActive, setIsTile, setSelectedSort, sorts } = useRecipesHedaer()

	return (
		<div className={s.header}>
			<h2 className={s.title}>Filter Recipes</h2>
			<div className={s.sort}>
				<div onClick={() => setIsActive(!isActive)} className={isActive ? `${s.select} ${s.select_active}` : `${s.select}`} >
					{selectedSort} <ArrowDown />
				</div>
				<div className={isActive ? `${s.menu} ${s.menu_active}` : `${s.menu} ${s.menu_closed}`}>
					{sorts.map(sort => {
						return <button key={sort} className={s.button} onClick={() => {
							setSelectedSort(sort)
							setIsActive(false)
						}}>{sort.split("-").join(" ")}</button>
					})}
				</div>
				<div className={s.tile_or_row}>
					<Tile onClick={() => setIsTile(true)} className={isTile ? `${s.tile} ${s.tile_active}` : `${s.tile}`} />
					<Row onClick={() => setIsTile(false)} className={isTile ? `${s.row} ` : `${s.row} ${s.row_active}`} />
				</div>
			</div>
		</div>
	)
}