import React, { Component } from 'react';
import './CheetoBag.css';

class CheetoBag extends Component {
	render() {
		const { src, rotation, y, x} = this.props;
		return (
			<img
				className='CheetoBag'
				src={src}
				alt='Cheeto Bag'
				style={{
					transform: `rotate(${rotation}deg)`,
					top: `${y}px`,
					left: `${x}px`,
				}}
			/>
		);
	}
}

export default CheetoBag;
