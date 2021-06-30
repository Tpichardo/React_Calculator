import React from 'react';
import KeyPad from './Components/KeyPad';
import OutPut from './Components/OutPut';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
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
    } else if (value === "/" || value === "*" || value === "-" || value === "+") {
      this.setState({
        outPut: '',
        memory: this.state.outPut,
        operation: value
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

  percent = () => {
    this.setState({
      outPut: Number(this.state.outPut * 0.01)
    })
  }

  reset = () => {
    this.setState({
      outPut: '0'
    })
  }

  calculate = () => {
    const { outPut, memory, operation } = this.state
    switch (operation) {
      case "/":
        this.setState({
          outPut: Math.round((Number(memory) / Number(outPut)))
        })
        break;
      case "*":
        this.setState({
          outPut: Number(memory) * Number(outPut)
        })
        break;
      case "-":
        this.setState({
          outPut: Number(memory) - Number(outPut)
        })
        break;
      case "+":
        this.setState({
          outPut: Number(memory) + Number(outPut)
        })
        break;
      default:
        return 0;
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
            percent={this.percent}
          />
        </div>
      </div>
    )
  }
}


export default App;
