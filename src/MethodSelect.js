import React, { Component } from 'react';

class InputSelect extends Component {
  
  render() {
    return (
      <div>
        <select id="method" name="method" onChange={this.props.onChangeValue}>
          <option value="metric">Metric</option>
          <option value="imperial">Imperial</option>
        </select>
      </div>
    );
  }
}

export default InputSelect
