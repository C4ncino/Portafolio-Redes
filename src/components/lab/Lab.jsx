import React from 'react';
import Practice from './Practice';
import data from './data.json'
import '../../styles/lab.css'

const Lab = () => {
    return (
        <>
            <div className="welcome">
                <h1> Prácticas </h1>
            </div>
            {data.map((practice, i) =>
                <div key={i}>
                    <Practice data={practice} />
                </div>
            )}
        </>
    );
}

export default Lab;