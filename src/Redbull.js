import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Redbull.css';

class Redbull extends Component {
	render() {
		return (
			<div className='Redbull'>
				<img
					src='https://png2.cleanpng.com/sh/a326edefe7dd9444c149823adbfe0d91/L0KzQYm3UsAzN6l3iZH0aYP2gLBuTfVvbaNskZ9tcnnxe375hfQuaqZxhJ98b3b3PbX5if5sNZ50huV9ZYKwdbBskvd6NZD6ReRuZD3lhb3zTgBvb15uhdNwZT24cYi8UsgzO5Y9T9NvMj68SYK5UsQ0QWI6SakBMke3QoiCVcI0NqFzf3==/kisspng-energy-drink-red-bull-soft-drink-monster-energy-ou-red-bull-png-image-5a752823e87af2.9912243915176274279523.png'
					alt='redbull'
				/>
				<div className='Redbull-data'>
					<h2>I NEED ENERGY!!!!!!</h2>
					<Link to='/'>GO BACK</Link>
				</div>
				<img
					src='https://png2.cleanpng.com/sh/a326edefe7dd9444c149823adbfe0d91/L0KzQYm3UsAzN6l3iZH0aYP2gLBuTfVvbaNskZ9tcnnxe375hfQuaqZxhJ98b3b3PbX5if5sNZ50huV9ZYKwdbBskvd6NZD6ReRuZD3lhb3zTgBvb15uhdNwZT24cYi8UsgzO5Y9T9NvMj68SYK5UsQ0QWI6SakBMke3QoiCVcI0NqFzf3==/kisspng-energy-drink-red-bull-soft-drink-monster-energy-ou-red-bull-png-image-5a752823e87af2.9912243915176274279523.png'
					alt='redbull'
				/>
			</div>
		);
	}
}

export default Redbull;
