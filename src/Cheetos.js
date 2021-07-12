import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Cheetos.css';
import CheetoBag from './CheetoBag';
import TextBox from './TextBox';

class Cheetos extends Component {
	constructor(props) {
		super(props);
		this.state = { bags: [] };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(evt) {
		const randRotation = Math.floor(Math.random() * 360);
		const randX = window.innerWidth * Math.random();
		const randY = window.innerHeight * Math.random();
		const newBag = { rotation: randRotation, x: randX, y: randY };
		this.setState(st => ({
			bags: [...st.bags, newBag],
		}));
	}

	render() {
		const renderBags = this.state.bags.map((b, idx) => (
			<CheetoBag
				src='https://purepng.com/public/uploads/large/flaming-hot-cheetos-o9v.png'
				rotation={b.rotation}
				y={b.y}
				x={b.x}
				key={idx}
			/>
		));
		return (
			<div className='Cheetos'>
				<TextBox dark>
					<div className='Cheetos-data'>
						<h2>GIMME CHEETOS!!!</h2>
						<button onClick={this.handleClick}>NOM NOM NOM</button>
						<p>BAGS EATEN: {this.state.bags.length}</p>
						<Link to='/'>GO BACK</Link>
					</div>
				</TextBox>
				{renderBags}
			</div>
		);
	}
}

export default Cheetos;
