import React from 'react';
import './OutPut.css';

const OutPut = ({ outPut }) => {
    return (
        <div className="output">
            <p>{Number(outPut).toLocaleString('en-US')}</p>
        </div>
    )
}

export default OutPut;