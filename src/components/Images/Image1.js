import React, { Component } from 'react';
import phase1 from './pictures/phase1.svg';

export default class Image extends Component {

	render() {
		return (
			<div className="card-image valign center">
				<img src={phase1} alt="hanger" width="300" height="300" />            
			</div>      
		);
	}
}
