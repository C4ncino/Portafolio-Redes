import React from 'react';
import data from './data.json';
import Evidence from './Evicence';
import Element from './Element';

const HW6 = () => {
    const evidence = data['evidence'];
    const elements = data['elements'];
    
    return (  
        <>
            <div className='HW E'>
                <h1> Tarea 6 </h1>
                <p></p>
                <h3>Tabla de Componentes</h3>
                <table className='components'>
                    <tr>
                        <td> <h3>Elemento</h3> </td>
                        <td> <h3>Descripción</h3> </td>
                        <td> <h3>Imagen</h3> </td>
                    </tr>
                    {elements.map( (element, i) =>
                        <Element key={i} data={element}/>
                    )}
                </table>
                <div className='parts'>
                    {evidence.map( (part, i) => 
                        <Evidence key={i} data={part} index={i + 1}/>
                    )}
                </div>

            </div>
        </>
    );
}
 
export default HW6;