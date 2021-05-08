import React from 'react';
import './OutPut.css';

const OutPut = ({ outPut }) => {
    return (
        <div className="OutPut">
            <p>{outPut.toLocaleString('en-US')}</p>
        </div>
    )
}

export default OutPut;