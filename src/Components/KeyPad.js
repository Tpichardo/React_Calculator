import React from 'react';
import './KeyPad.css';

const KeyPad = ({ clickedVal, reset, calculate, percent, posneg, sum, subtract, divide, multiply }) => {
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