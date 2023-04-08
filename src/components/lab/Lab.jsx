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

            <Practice data={data.P1}/>
            <Practice data={data.P2}/>
            <Practice data={data.P3}/>
            <Practice data={data.P4}/>
            <Practice data={data.P5}/>
            <Practice data={data.P6}/>
            <Practice data={data.P7}/>
        </>
    );
}
 
export default Lab;