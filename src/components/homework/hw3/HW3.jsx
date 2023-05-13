import React from 'react';
import './styles.css';
import data from './data.json';
import FlippingCard from './FlippingCard';

const HW3 = () => {
    const name = 'Style ';

    return (
        <>
            <div className='HW B'>
                <h1>Tarea 3</h1>
                <p>La tercer Tarea consistió en la creación de 30 estilos de texto diferentes para familiarizarse con CSS.</p>
                <div className='container'>
                    {data.map((d, i) =>
                        <div key={i}>
                            <FlippingCard title={name + (i + 1)} i={i + 1} data={d['text']} />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default HW3;