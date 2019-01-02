import React, { Component } from 'react';
import { bmiCalculation } from './BMICalculator'

class DisplayResult extends Component {
  
  calculate() {
    var method= this.props.method;
    var weight= this.props.weight;
    var height= this.props.height;

    return bmiCalculation(weight, height, method);
  }
    
  render() {
    return (
      <div>
        {this.calculate()}
      </div>
    )
  }
}

export default DisplayResult
