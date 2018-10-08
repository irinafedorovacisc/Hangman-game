import React, { Component } from 'react';
import winner from './pictures/confetti.gif';

export default class Image extends Component {

	render() {
		return (
			<div className="card-image valign center">
				<img src={winner} alt="hanger" width="300" height="300"/>            
			</div>      
		);
	}
}
