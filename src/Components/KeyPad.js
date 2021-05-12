import React from 'react';
import './KeyPad.css';

const KeyPad = ({ clickedVal, reset, calculate, percent, posneg, sum, subtract, divide, multiply }) => {
    // how could you refactor this so that it's more DRY?
    // the code below is more repetitive and difficult to maintain than it needs to be
    // For instance, if you need to make a change to the number button click handlers, right now you need to
    // update 10 different functions!
    
    // Suggestion: write a single numberClick function. 
    // then create a variable: const buttons = [{value: '4', onClick: numberClick, display: '4'}, ...]
    // then use .map to create all your buttons.
    return (
        <div className="buttons">
            <button className='darkgreen' value='' onClick={() => reset()}>AC</button>
            <button className="operator" value='±' onClick={() => posneg()}>±</button>
            <button className="operator" value='/' onClick={() => divide()}>÷</button>
            <button className="operator" value='%' onClick={() => percent()}>%</button>

            <button value='7' onClick={(e) => clickedVal(e.target.value)}>7</button>
            <button value='8' onClick={(e) => clickedVal(e.target.value)}>8</button>
            <button value='9' onClick={(e) => clickedVal(e.target.value)}>9</button>
            <button className="operator" value='*' onClick={() => multiply()}>x</button>

            <button value='4' onClick={(e) => clickedVal(e.target.value)}>4</button>
            <button value='5' onClick={(e) => clickedVal(e.target.value)}>5</button>
            <button value='6' onClick={(e) => clickedVal(e.target.value)}>6</button>
            <button className="operator" value='-' onClick={() => subtract()}>-</button>

            <button value='1' onClick={(e) => clickedVal(e.target.value)}>1</button>
            <button value='2' onClick={(e) => clickedVal(e.target.value)}>2</button>
            <button value='3' onClick={(e) => clickedVal(e.target.value)}>3</button>
            <button className="operator" value='+' onClick={() => sum()}>+</button>

            <button value='0' onClick={(e) => clickedVal(e.target.value)}>0</button>
            <button value='.' onClick={(e) => clickedVal(e.target.value)}>.</button>
            <button className='darkgreen' value='=' onClick={() => calculate()}>=</button>
        </div>
    )
}

export default KeyPad;
