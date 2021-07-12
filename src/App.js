import { Route, Switch } from 'react-router-dom';
import './App.css';
import VendingMachine from './VendingMachine';
import Redbull from './Redbull';
import Fruits from './Fruits';
import Cheetos from './Cheetos';
import Navbar from "./Navbar"

function App() {
	return (
		<div className='App'>
			<Navbar />

			<Switch>
				<Route exact path='/' render={() => <VendingMachine />}></Route>
				<Route exact path='/redbull' render={() => <Redbull />}></Route>
				<Route exact path='/fruits' render={() => <Fruits />}></Route>
				<Route exact path='/cheetos' render={() => <Cheetos />}></Route>
			</Switch>
		</div>
	);
}

export default App;
