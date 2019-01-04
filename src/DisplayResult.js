import React, { Component } from 'react';
import { bmiCalculation } from './BMICalculator';

class DisplayResult extends Component {
  
  calculate() {
    return bmiCalculation(this.props.weight, this.props.height, this.props.method);
  }
    
  render() {
    return (
      <div id='response'>
        {this.calculate()}
      </div>
    )
  }
}

export default DisplayResult
