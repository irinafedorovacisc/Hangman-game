import React, { Component } from 'react';

export default class PlayingPanel extends Component {
  
	render() {
		return (
			<div>
				<div className="row">       
					<div className="col s6 valign center">Attempts left: <span className="numbers"> {this.props.attemptsleft} </span></div>
					<div className="col s6 valign center">Your are guessing: {this.props.category} <span className="numbers">{this.props.fetchedGuessWord} </span></div>                     
				</div> 
				<div className="row">  
					<div className="col s12 m4 l2"></div>
					<div className="col s12 m4 l8">
						<input onKeyDown={this.props.onKeyDown.bind(this)} onChange={this.props.onType.bind(this)} placeholder='enter your guess here' value={this.props.value}></input>                   
					</div>                
				</div> 
			</div>  
		);
	}
}
