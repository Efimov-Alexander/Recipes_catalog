import './aseets/styles/App.scss';
import './aseets/styles/null.css'
import { FilterRecipes } from './components/FilterRecipes/FilterRecipes';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';


function App() {

	return (
		<>
			<Header />
			<Main />
			<FilterRecipes />
		</>
	);
}

export default App;
