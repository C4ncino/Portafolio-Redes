import React from 'react';

const HW1and2 = ({setLocalPage}) => {
    return (  
        <>
            <div className="HW A" id="_Tarea-1_">
                <div>
                    <h1>Tarea 1</h1>
                    <p> La primer tarea fue una página con HTML básico.</p>
                    <button onClick={()=>{setLocalPage('t1')}}> Tarea 1 </button>
                </div>
                <div>
                    <h1>Tarea 2</h1>
                    <p> La segunda tarea fue realizar una página utilizando tablas.</p>
                    <button onClick={()=>{setLocalPage('t2')}}> Tarea 2 </button>
                </div>
            </div>
        </>
    );
}
 
export default HW1and2;