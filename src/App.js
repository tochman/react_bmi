import React, { Component } from 'react';
import MethodSelect from './MethodSelect';
import DisplayResult from './DisplayResult';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: '',
      method: 'metric',
      weightType: 'kg',
      heightType: 'cm'
    }
  }

  setInputType(e) {
    this.setState({method: e.target.value}, () => {
      if (this.state.method === 'imperial') {
        this.setState({weightType: 'lbs', heightType: 'inches' });
      } else if (this.state.method === 'metric') {
        this.setState({weightType: 'kg', heightType: 'cm' });
      }
    })   
  }

  render() {
    return (
      <div>
        <MethodSelect
          onChangeValue={this.setInputType.bind(this)}
        />

        <div>
          <label>Weight({this.state.weightType})</label>
          <input type="tel" value={this.state.weight} onChange={(e) => this.setState({weight: e.target.value})}/>
        </div>

        <div>
          <label>Height({this.state.heightType}) </label>
          <input type="tel" value={this.state.height} onChange={(e) => this.setState({height: e.target.value})}/>
        </div>

        <div>
          <DisplayResult method={this.state.method} weight={this.state.weight} height={this.state.height} />
        </div>
      </div>
    );
  }
}

export default App
