import React, { Component } from 'react';
import Image1 from './Image1';
import Image2 from './Image2';
import Image3 from './Image3';
import Image4 from './Image4';
import WinnerImage from './WinnerImage';


export default class Image extends Component {
	render() {
		return (
			<div className="card-image valign center">  
				{
					this.props.attempts > 0 && this.props.gameSatus === 'won!' ?
						<WinnerImage />: null                         
				}           
				{
					this.props.attempts === 3 && this.props.gameSatus === 'playing' ? 
						<Image1 />: null                         
				}
				{
					this.props.attempts === 2 && this.props.gameSatus === 'playing' ? 
						<Image2 />: null                         
				}
				{
					this.props.attempts === 1 && this.props.gameSatus === 'playing' ? 
						<Image3 />: null                         
				}
				{
					this.props.attempts === 0 && this.props.gameSatus === 'playing' ? 
						<Image4 />: null                         
				}            
			</div>      
		);
	}
}
