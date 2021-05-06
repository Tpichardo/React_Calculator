import React from 'react';
import KeyPad from './Components/KeyPad';
import Result from './Components/Result';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      result: '',
    }
  }

  clickedVal = (value) => {
    this.setState({
      result: this.state.result + value
    })

  }

  reset = (value) => {
    this.setState({
      result: '0'
    })
    if (this.state.result === '0') {
      this.setState({
        result: value
      })
    }
  }

  calculate = () => {
    this.setState({
      result: (eval(this.state.result) || '') + ''
    })
  }

  percent = () => {
    this.setState({
      result: this.state.result / 100
    })
  }

  posneg = () => [
    this.setState({
      result: this.state.result * (-1)
    })
  ]

  render() {
    const { result } = this.state
    return (
      <div className="app">
        <div className="calculator">
          <Result
            result={result}
          />
          <KeyPad
            clickedVal={this.clickedVal}
            reset={this.reset}
            calculate={this.calculate}
            percent={this.percent}
            posneg={this.posneg}
          />
        </div>
      </div>
    )
  }
}

export default App;
