import React, { Component } from 'react';
import phase3 from './pictures/phase3.svg';

export default class Image extends Component {

	render() {
		return (
			<div className="card-image valign center">
				<img src={phase3} alt="hanger" width="300" height="300" />            
			</div>      
		);
	}
}
