import React, { Component } from 'react';
import phase2 from './pictures/phase2.svg';

export default class Image extends Component {

	render() {
		return (
			<div className="card-image valign center">
				<img src={phase2} alt="hanger" width="300" height="300" />            
			</div>      
		);
	}
}
