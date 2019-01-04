import React from 'react';
import { mount, shallow } from 'enzyme';
import App from '../App';
import { stub } from 'sinon';

import DisplayResult from '../DisplayResult';
import MethodSelect from '../MethodSelect'

describe('<App />', () => {
  it('renders header', () => {
    const describedComponent = shallow(<App />);
    const text = <h1>BMI Converter</h1>;
    expect(describedComponent.contains(text)).toEqual(true);
  });

  it('shows metric as the standard method', () => {
    const describedComponent = shallow(<App />);
    const weightLabel = <label>Weight(kg)</label>;
    const heightLabel = <label>Height(cm)</label>;
    expect(describedComponent.contains(weightLabel)).toEqual(true);
    expect(describedComponent.contains(heightLabel)).toEqual(true);
  })

  it('can change method', () => {
    const onChangeValue = stub();
    const describedComponent = shallow(<App onChangeValue={onChangeValue} />);
    const weightLabel = <label>Weight(lbs)</label>;
    const heightLabel = <label>Height(inches)</label>;
    describedComponent.find("MethodSelect").prop('onChangeValue')({target: {value:'imperial'}});
    expect(describedComponent.contains(weightLabel)).toEqual(true);
    expect(describedComponent.contains(heightLabel)).toEqual(true);
  })
})

describe('<DisplayResult />', () => {
  it('displays the calulation correct(metric)', () => {
    const describedComponent = shallow(<DisplayResult method='metric' weight='100' height='195'/>)
    const response = <div id='response'>You are Overweight with a BMI of 26.3</div>
    expect(describedComponent.contains(response)).toEqual(true)
  })

  it('displays the calulation correct(imperial)', () => {
    const describedComponent = shallow(<DisplayResult method='imperial' weight='140' height='73'/>)
    const response = <div id='response'>You are Underweight with a BMI of 18.47</div>
    expect(describedComponent.contains(response)).toEqual(true)
  })

  it('does not show anything when one of the input fields are empty', () => {
    const describedComponent = shallow(<DisplayResult method='metric' weight='' height='195'/>);
    expect(describedComponent.text()).toBe('')
  })
})

describe('<MethodSelect />', () => {
  it('has two methods to choose from', () => {
    const component = mount(<MethodSelect />);
    const selector = component.find('#method').instance()
    expect(selector.options.length).toEqual(2)
  }
)})
