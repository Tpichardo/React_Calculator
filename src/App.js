import React from 'react';
import KeyPad from './Components/KeyPad';
import OutPut from './Components/OutPut';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    // Really nice work! I love how you updated your calculator to avoid using eval!!
    this.state = {
      outPut: '',
      memory: '',
      operation: ''
    }
  }

  clickedVal = (value) => {
    if (this.state.outPut === '0') {
      this.setState({
        outPut: value
      })
    } else {
      this.setState({
        outPut: this.state.outPut + value
      })
    }
  }

  posneg = () => {
    this.setState({
      outPut: Number(this.state.outPut * -1)
    })

  }

  // divide, multiply, subtract, and sum are nearly identical functions
  // could you find a way to combine them into a single function?
  divide = () => {
    this.setState({
      outPut: '',
      memory: this.state.outPut,
      operation: '/'
    })
  }

  percent = () => {
    this.setState({
      outPut: Number(this.state.outPut * 0.01)
    })
  }

  multiply = () => {
    this.setState({
      outPut: '',
      memory: this.state.outPut,
      operation: '*'
    })
  }

  subtract = () => {
    this.setState({
      outPut: '',
      memory: this.state.outPut,
      operation: '-'
    })
  }

  sum = () => {
    this.setState({
      outPut: '',
      memory: this.state.outPut,
      operation: '+'
    })
  }

  reset = () => {
    this.setState({
      outPut: '0'
    })
  }


  calculate = () => {
    const { outPut, memory, operation } = this.state
    if (operation === '/') {
      this.setState({
        outPut: Math.floor((Number(memory) / Number(outPut)))
      })
    } else if (operation === '*') {
      this.setState({
        outPut: Number(memory) * Number(outPut)
      })
    } else if (operation === '-') {
      this.setState({
        outPut: Number(memory) - Number(outPut)
      })
    } else if (operation === '+') {
      this.setState({
        outPut: Number(memory) + Number(outPut)
      })
    }

  }

  render() {
    const { outPut } = this.state
    return (
      <div className="app">
        <div className="calculator">
          <OutPut
            outPut={outPut}
          />
          <KeyPad
            clickedVal={this.clickedVal}
            reset={this.reset}
            calculate={this.calculate}
            posneg={this.posneg}
            divide={this.divide}
            percent={this.percent}
            multiply={this.multiply}
            subtract={this.subtract}
            sum={this.sum}
          />
        </div>
      </div>
    )
  }
}


export default App;
