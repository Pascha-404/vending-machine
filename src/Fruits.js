import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Fruits.css';

class Fruits extends Component {
	render() {
		return (
			<div className='Fruits'>
				<img
					src='https://media1.tenor.com/images/19ed71233d1b9db8a8ba35da94ad8f2c/tenor.gif?itemid=4808470'
					alt='girl dancing with fruits'
				/>
				<Link to="/">GO BACK</Link>
			</div>
		);
	}
}

export default Fruits;
