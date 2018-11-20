import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      colour: ""
    }
  }

  setColour = hexColour => {
    this.setState({
      colour: hexColour
    })
  }

  getColour = () => this.state.colour
  

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} colour={val} getColour={this.getColour}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector setColour={this.setColour}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
