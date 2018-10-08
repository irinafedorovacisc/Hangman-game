import React, { Component } from 'react';
import phase4 from './pictures/phase4.svg';

export default class Image extends Component {

	render() {
		return (
			<div className="card-image valign center">
				<img src={phase4} alt="hanger" width="300" height="300" />            
			</div>      
		);
	}
}
