import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      colour: this.props.colour
    }
  }

  handleClick(colour) {
    this.setState({colour: colour})
  }
  
  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.colour}} onClick={() => this.handleClick(this.props.getColour())}>
      </div>
    )
  }
  
}
