import React from 'react';
import './Result.css';

const Result = ({ result }) => {
    return (
        <div className="result">
            <p>{result}</p>
        </div>
    )
}

export default Result;