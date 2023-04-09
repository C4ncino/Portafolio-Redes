import React from 'react';
import data from './data.json'

const HW8 = () => {

    return (  
        <>
            <div className='HW G'>
                <h1>Tarea 8</h1>
                {data.map((question, i)=>
                    <div key={i}>
                        <h3>{question.question}</h3>
                        {question.answer.map((answer, i)=>
                            <p key={i}>{answer}</p>
                            )}
                    </div>
                )}
                <iframe 
                title='frame_1'
                src='https://replit.com/@CCancino/Pruebas?lite=true'
                borderColor='white' 
                frameBorder='2' 
                height='500px' 
                width='100%'  
                scrolling='no'
                allowTransparency='true' 
                allowFullScreen='true' 
                sandbox='allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals' />
            </div>
        </>
    );
}
 
export default HW8;