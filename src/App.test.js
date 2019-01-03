import React from 'react';
import { mount, shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
  
  it('renders header', () => {
    const wrapper = shallow(<App />);
    const welcome = <h1>BMI Converter</h1>;
    expect(wrapper.contains(welcome)).toEqual(true);
  });

  it('shows metric as the standard method', () => {
    const component = mount(<App />);
    const weightLabel = <label>Weight(kg)</label>;
    const heightLabel = <label>Height(cm)</label>;
    expect(component.contains(weightLabel)).toEqual(true);
    expect(component.contains(heightLabel)).toEqual(true);
  })
})
