import './aseets/styles/App.scss';
import './aseets/styles/null.css'
import { Recipes } from './components/Recipes/Recipes';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';


function App() {

	return (
		<>
			<Header />
			<Main />
			<Recipes />
		</>
	);
}

export default App;
