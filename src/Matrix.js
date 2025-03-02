import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      currentColor : '#000'
    }
  }

  changeColor = (newColor) => {
    console.log(newColor)
    this.setState({
      currentColor : newColor
    })
  }

  getCurrentColor = () => {
    return this.state.currentColor
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} cColor={this.getCurrentColor}/>)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )


  render() {
    return (
      <div id="app">
        <ColorSelector cColor = {this.changeColor} />
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
