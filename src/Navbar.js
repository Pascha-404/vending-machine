import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import "./Navbar.css"

class Navbar extends Component {
    render() {
        return (
					<nav className='Navbar'>
						<NavLink activeClassName='nav-active' exact to='/'>
							Vendingmachine
						</NavLink>
						<NavLink activeClassName='nav-active' exact to='/redbull'>
							Redbull
						</NavLink>
						<NavLink activeClassName='nav-active' exact to='/fruits'>
							Fruits
						</NavLink>
						<NavLink activeClassName='nav-active' exact to='/cheetos'>
							Cheetos
						</NavLink>
					</nav>
				);
    }
}

export default Navbar;