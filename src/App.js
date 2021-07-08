import { Route, NavLink, Switch } from 'react-router-dom';
import './App.css';
import VendingMachine from './VendingMachine';
import Redbull from './Redbull';
import Fruits from './Fruits';
import Cheetos from './Cheetos';

function App() {
  return (
		<div className='App'>
			<nav className='App-nav'>
				<NavLink activeClassName="nav-active" exact to='/'>Vendingmachine</NavLink>
				<NavLink activeClassName="nav-active" exact to='/redbull'>Redbull</NavLink>
				<NavLink activeClassName="nav-active" exact to='/fruits'>Fruits</NavLink>
				<NavLink activeClassName="nav-active" exact to='/cheetos'>Cheetos</NavLink>
			</nav>

			<Switch>
				<Route exact path='/'>
					<VendingMachine />
				</Route>
				<Route exact path='/redbull'>
					<Redbull />
				</Route>
				<Route exact path='/fruits'>
					<Fruits />
				</Route>
				<Route exact path='/cheetos'>
					<Cheetos />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
