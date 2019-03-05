import React, { Component } from 'react';
import MethodSelect from './MethodSelect';
import DisplayResult from './DisplayResult';
import {
  Container,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react';

class App extends Component {
  state = {
    weight: '',
    height: '',
    method: 'metric',
    weightType: 'kg',
    heightType: 'cm',
    displayResults: false
  }


  setInputType(value) {
    this.setState({ method: value }, () => {
      if (this.state.method === 'imperial') {
        this.setState({ weightType: 'lbs', heightType: 'inches' });
      } else if (this.state.method === 'metric') {
        debugger
        this.setState({ weightType: 'kg', heightType: 'cm' });
      }
    })
  }

  render() {
    return (
      <>
        <Container>
          <Grid centered columns={3}>
            <Grid.Column>
              <Header
                as="h1"
                textAlign="center">
                BMI Converter
              </Header>
              <Segment>
                <Form type="large">
                  <Form.Input
                    fluid
                    placeholder={`Weight(${this.state.weightType})`}
                    name="weight"
                    onChange={(e) => this.setState({ weight: e.target.value })} />
                  <Form.Input
                    fluid
                    placeholder={`Height(${this.state.heightType})`}
                    name="Height"
                    onChange={(e) => this.setState({ displayResults: true, height: e.target.value })} />
                  <MethodSelect
                    onChangeValue={this.setInputType.bind(this)}
                  />
                </Form>
                <Message>
                  {this.state.displayResults && this.state.weight && this.state.height ?
                    <DisplayResult
                      method={this.state.method}
                      weight={this.state.weight}
                      height={this.state.height}
                    /> :
                    "Input your measurements in fields above, please."
                  }
                </Message>
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>
      </>
    );
  }
}

export default App
