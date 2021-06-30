import React from 'react';
import './KeyPad.css';

const KeyPad = ({ clickedVal, reset, calculate, percent, posneg }) => {

    return (
        <div className="keys">
            <button className='key functionality' value='' onClick={() => reset()}>AC</button>
            <button className="key functionality" value='±' onClick={() => posneg()}>±</button>
            <button className="key functionality" value='%' onClick={() => percent()}>%</button>
            <button className="key operator" value='/' onClick={(e) => clickedVal(e.target.value)}>÷</button>

            <button className="key" value='7' onClick={(e) => clickedVal(e.target.value)}>7</button>
            <button className="key" value='8' onClick={(e) => clickedVal(e.target.value)}>8</button>
            <button className="key" value='9' onClick={(e) => clickedVal(e.target.value)}>9</button>
            <button className="key operator" value='*' onClick={(e) => clickedVal(e.target.value)}>x</button>

            <button className="key" value='4' onClick={(e) => clickedVal(e.target.value)}>4</button>
            <button className="key" value='5' onClick={(e) => clickedVal(e.target.value)}>5</button>
            <button className="key" value='6' onClick={(e) => clickedVal(e.target.value)}>6</button>
            <button className="key operator" value='-' onClick={(e) => clickedVal(e.target.value)}>-</button>

            <button className="key" value='1' onClick={(e) => clickedVal(e.target.value)}>1</button>
            <button className="key" value='2' onClick={(e) => clickedVal(e.target.value)}>2</button>
            <button className="key" value='3' onClick={(e) => clickedVal(e.target.value)}>3</button>
            <button className="key operator" value='+' onClick={(e) => clickedVal(e.target.value)}>+</button>

            <button className="key" value='0' onClick={(e) => clickedVal(e.target.value)}>0</button>
            <button className="key" value='.' onClick={(e) => clickedVal(e.target.value)}>.</button>
            <button className="key calculate" value='=' onClick={() => calculate()}>=</button>
        </div>
    )
}

export default KeyPad;