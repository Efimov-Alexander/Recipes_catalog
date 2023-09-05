import { ReactComponent as Logo } from '../../aseets/images/svg/logo.svg';
import { HeaderSearch } from './HeaderSearch/HeaderSearch';
import s from './Header.module.scss'
import { Actions } from './Actions/Actions';

export const Header = () => {

	return (
		<header>
			<div className={s.container}>
				<Logo className={s.logo}/>
				<HeaderSearch />
				<Actions />
			</div>
		</header>
	)
}