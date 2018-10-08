import React, { Component } from 'react'

export default class ButtonsPanel extends Component {

 exitHandeler = () => {
    window.close(); 
}

  render() {
    return (
        <div className="row">
            <div className="valign center">                
                <a className="waves-effect waves-light btn"  onClick={this.props.show}>How to Play</a>
                <a className="btn-floating btn-large waves-effect waves-light deep-orange" onClick={this.props.reset}>RESET</a>
                <a className="waves-effect waves-light btn" onClick = {this.exitHandeler}>Exit</a>
            </div>
      </div>
    );
  }
}
