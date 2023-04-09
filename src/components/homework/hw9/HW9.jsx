import React from 'react';
import data from './data.json'

const HW9 = () => {
    return (  
        <>
            <div className='HW I'>
                <h1>Tarea 9</h1>
                {data.map((question, i)=>
                    <div key={i}>
                        <h3>{question.question}</h3>
                        {question.answer.map((answer, i)=>
                            <p key={i}>{answer}</p>
                            )}
                    </div>
                )}
            </div>
        </>
    );
}
 
export default HW9;