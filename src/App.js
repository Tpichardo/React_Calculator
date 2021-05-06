import React from 'react';
import KeyPad from './Components/KeyPad';
import Result from './Components/Result';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      result: '0',
    }
  }

  clickedVal = (value) => {
    let { result } = this.state
    result = result.replaceAll(',', '')
    if (result !== '0') {
      let num = result + value
      this.setState({
        result: (Number(num).toLocaleString().toString())
      })
    } else {
      this.setState({
        result: value
      })
    }
  }

  reset = () => {
    this.setState({
      result: '0'
    })
  }

  calculate = () => {
    this.setState({
      result: (eval(this.state.result).toLocaleString('en-US') || '') + ''
    })
  }

  percent = () => {
    this.setState({
      result: parseInt(this.state.result) / (100)
    })
  }

  posneg = () => {
    this.setState({
      result: Number(this.state.result) * (-1)
    })

  }


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
