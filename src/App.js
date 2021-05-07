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

  //if its not a number do not do commas. 
  // its its a plus do the comma dance 

  // clickedVal = (value) => {
  //   let { result } = this.state
  //   // result = result.replaceAll(',', '')
  //   console.log(typeof (value))
  //   if (result !== '0' && !isNaN(value)) {

  //     this.setState({
  //       result: result + value
  //     })

  //     //if the reult is a number and not 0 add
  //     //if the result is mot a number (+,-) do localestring
  //   } else {
  //     this.setState({
  //       result: value
  //     })
  //   }
  // }

  clickedVal = (value) => {
    if (this.state.result === '0') {
      this.setState({
        result: value
      })
    } else {
      this.setState({
        result: this.state.result + value
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
      result: eval(this.state.result)
      //  (eval(this.state.result).toLocaleString('en-US') || '') + ''
    })
  }

  percent = () => {
    this.setState({
      result: Number(this.state.result * 0.01)
    })
  }

  posneg = () => {
    this.setState({
      result: Number(this.state.result * -1)
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
