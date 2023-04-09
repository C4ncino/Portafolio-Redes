import React, { useState } from 'react';
import data from './data.json'

const HW9 = () => {
    const inputs = data.inputs;
    const questions = data.questions;

    const [name, setName] = useState('');

    const [text, setText] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [color, setColor] = useState('');
    const [url, setUrl] = useState('');
    const [range, setRange] = useState('');
    const [search, setSearch] = useState('');

    const typesVar = [text, password, email, number, date, time, color, url, range, search];

    const onChange = (e) => {
        if (e.target.name === 'text'){
            setText(e.target.value);
        }
        else if (e.target.name === 'password'){
            setPassword(e.target.value);
        }
        else if (e.target.name === 'email'){
            setEmail(e.target.value);
        }
        else if (e.target.name === 'number'){
            setNumber(e.target.value);
        }
        else if (e.target.name === 'date'){
            setDate(e.target.value);
        }
        else if (e.target.name === 'time'){
            setTime(e.target.value);
        }
        else if (e.target.name === 'color'){
            setColor(e.target.value);
        }
        else if (e.target.name === 'url'){
            setUrl(e.target.value);
        }
        else if (e.target.name === 'range'){
            setRange(e.target.value);
        }
        else if (e.target.name === 'search'){
            setSearch(e.target.value);
        }
        else if (e.target.name === 'name'){
            setName(e.target.value);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        alert('Hola ' + name)
    };

    return (  
        <>
            <div className='HW H'>
                <h1>Tarea 9</h1>
                <h2>Ingrese Su Nombre</h2>
                <form onSubmit={onSubmit}>
                    <input 
                        type='text'
                        id='name'
                        name='name'
                        placeholder='Nombre'
                        value={name}
                        onChange={onChange}
                    />
                    <button className='btn'>Listo</button>
                </form>

                <h2>Tipos de Inputs</h2>
                <div className='inputs'>
                    {inputs.map((input, i)=>
                        <div key={i} className='input'>
                            <h6>Input de tipo {input.title}</h6>
                            <input
                                type={input.type}
                                id={input.type}
                                name={input.type}
                                placeholder='Escribe algo...'
                                value={typesVar[i]}
                                onChange={onChange}
                            />
                        </div>
                    )}
                </div>

                <div className="questions">
                    {questions.map((question, i)=>
                        <div key={i} className="question">
                            <h3>{question.question}</h3>
                            {question.answer.map((answer, i)=>
                                <p key={i}>{answer}</p>
                                )}
                        </div>
                    )}
                </div>

                
                <iframe 
                    title='frame_1'
                    src='https://replit.com/@CCancino/Hello-World-JS?lite=true'
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
 
export default HW9;