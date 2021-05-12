import React from 'react';
import './OutPut.css';

const OutPut = ({ outPut }) => {
    return (
        <div className="OutPut">
            {/* I think outPut is a string, not a number, which is why .toLocaleString() isn't inserting commas like we want */}
            <p>{outPut.toLocaleString('en-US')}</p>
        </div>
    )
}

export default OutPut;
