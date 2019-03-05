import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react'
class MethodSelect extends Component {

  render() {
    const values = [
      { key: 1, text: "Metric", value: "metric" },
      { key: 2, text: "Imperial", value: "imperial" }
    ]
    return (
      <Dropdown
        selection search
        fluid
        id="method"
        defaultValue={values[0].value}
        name="method"
        onChange={(e, { value }) => this.props.onChangeValue(value)}
        options={values}
      />

    );
  }
}

export default MethodSelect
