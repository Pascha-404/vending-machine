import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Redbull.css';

class Redbull extends Component {
	render() {
		return (
			<div className='Redbull'>
				<img
					src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c1e9.png'
					alt='redbull'
				/>
				<div className='Redbull-data'>
					<h2>I NEED ENERGY!!!!!!</h2>
					<Link to='/'>GO BACK</Link>
				</div>
				<img
					src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c1e9.png'
					alt='redbull'
				/>
			</div>
		);
	}
}

export default Redbull;
