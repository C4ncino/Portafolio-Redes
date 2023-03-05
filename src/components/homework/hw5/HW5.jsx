import React from 'react';
import ElementCard from './ElementCard';
import info from './info.json';

const HW5 = () => {
    const elements = info['elements'];
    const matrix = info['matrix'];

    return (  
        <>
        <div className='HW D' id='_Tarea-5_'>
            <h1>Tarea 5</h1>
            
            <div className='elements'>
                {elements.map( (info, i) =>
                    <ElementCard key={i} info={info}/>
                )}
            </div>

            <h2>Matriz de conexiones</h2>
            <div className='matrix'>
                {matrix.map( (element, i) =>
                    <>
                        <h3 className='title'>{element.title}</h3>
                        {i === 0 ? (
                            <>
                                {element.data.map( (pos, i) =>
                                    <h3 key={i} className={element.style} style={pos.row}>{pos.info}</h3>
                                )}
                            </>
                        ):(
                            <>
                                {element.rows.map( (pos, i) =>
                                    <>
                                        {pos.style === {"gridRow" : "3 / 4"} ? (
                                            <h3 key={i} className={element.style} style={pos}>Recto</h3>
                                        ):(
                                            
                                            <h3 key={i} className={element.style} style={pos}>Cruzado</h3>
                                        )}
                                    </>
                                )}
                            </>
                        )}
                    </>
                )}
            </div>

            <p className='conclusion'> Es importante tener en cuenta que la necesidad de utilizar un cable cruzado o recto depende de los estándares de conexión utilizados por los elementos de la red y la forma en que se transmite la señal. En general, si se conecta un dispositivo de red a otro dispositivo de red de la misma categoría (como un switch a un switch), se necesita un cable crossover para cruzar los pares de transmisión y recepción. Si se conecta un dispositivo de red a un dispositivo de red de una categoría superior o inferior (como una computadora a un switch), se necesita un cable recto para mantener los pares de transmisión y recepción en el mismo orden. </p>
        </div>
        </>
    );
}
 
export default HW5;