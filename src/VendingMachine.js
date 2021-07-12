import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './VendingMachine.css';
import TextBox from './TextBox';

class VendingMachine extends Component {
	render() {
		return (
			<div className='VendingMachine'>
				<div className='VendingMachine-data'>
					<TextBox light>
						<p>Hello, I'm a Vendigmachine. What can I serve you?</p>
					</TextBox>

					<TextBox light>
						<div className='VendingMachine-products'>
							<Link to='/redbull'>Redbull</Link>
							<Link to='/cheetos'>Cheetos</Link>
							<Link to='/fruits'>Fruits</Link>
						</div>{' '}
					</TextBox>
				</div>
			</div>
		);
	}
}

export default VendingMachine;
