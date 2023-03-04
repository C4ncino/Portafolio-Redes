import React from 'react';
import ElementCard from './ElementCard';
import info from './info.json';

const HW5 = () => {
    const elements = info['elements']

    return (  
        <>
        <div className="HW D" id="_Tarea-5_">
            <h1>Tarea 5</h1>
            
            <div className="elements">
                {elements.map( (info, i) =>
                    <ElementCard key={i} info={info}/>
                )}
            </div>

            <h2>Matriz de conexiones</h2>
            {/* <div className="matrix">
                <h3 className="title">Elemento</h3>
                <h3 className="element" style="grid-row: 2 / 3;"> Compu </h3>
                <h3 className="element" style="grid-row: 3 / 4;"> Repeater </h3>
                <h3 className="element" style="grid-row: 4 / 5;"> Hub </h3>
                <h3 className="element" style="grid-row: 5 / 6;"> Switch </h3>
                <h3 className="element" style="grid-row: 6 / 7;"> Router </h3>
                <h3 className="element" style="grid-row: 7 / 8;"> Bridge </h3>

                
                <h3 className="title"> Compu </h3>
                <h3 className="compu" style="grid-row: 2 / 3; color: var(--dark);"> Cruzado </h3>
                <h3 className="compu" style="grid-row: 3 / 4;"> Recto </h3>
                <h3 className="compu" style="grid-row: 4 / 5;"> Recto </h3>
                <h3 className="compu" style="grid-row: 5 / 6;"> Recto </h3>
                <h3 className="compu" style="grid-row: 6 / 7;"> Recto </h3>
                <h3 className="compu" style="grid-row: 7 / 8;"> Recto </h3>

                
                <h3 className="title"> Repeater </h3>
                <h3 className="repeat" style="grid-row: 2 / 3;"> Recto </h3>
                <h3 className="repeat" style="grid-row: 3 / 4; color: var(--dark);"> Cruzado </h3>
                <h3 className="repeat" style="grid-row: 4 / 5;"> Recto </h3>
                <h3 className="repeat" style="grid-row: 5 / 6;"> Recto </h3>
                <h3 className="repeat" style="grid-row: 6 / 7;"> Recto </h3>
                <h3 className="repeat" style="grid-row: 7 / 8;"> Recto </h3>

                
                <h3 className="title"> Hub </h3>
                <h3 className="hub" style="grid-row: 2 / 3;"> Recto </h3>
                <h3 className="hub" style="grid-row: 3 / 4;"> Recto </h3>
                <h3 className="hub" style="grid-row: 4 / 5; color: var(--dark);"> Cruzado </h3>
                <h3 className="hub" style="grid-row: 5 / 6;"> Recto </h3>
                <h3 className="hub" style="grid-row: 6 / 7;"> Recto </h3>
                <h3 className="hub" style="grid-row: 7 / 8;"> Recto </h3>

                
                <h3 className="title"> Switch </h3>
                <h3 className="switch" style="grid-row: 2 / 3;"> Recto </h3>
                <h3 className="switch" style="grid-row: 3 / 4;"> Recto </h3>
                <h3 className="switch" style="grid-row: 4 / 5;"> Recto </h3>
                <h3 className="switch" style="grid-row: 5 / 6; color: var(--dark);"> Cruzado </h3>
                <h3 className="switch" style="grid-row: 6 / 7;"> Recto </h3>
                <h3 className="switch" style="grid-row: 7 / 8;"> Recto </h3>

                
                <h3 className="title"> Router </h3>
                <h3 className="router" style="grid-row: 2 / 3;"> Recto </h3>
                <h3 className="router" style="grid-row: 3 / 4;"> Recto </h3>
                <h3 className="router" style="grid-row: 4 / 5;"> Recto </h3>
                <h3 className="router" style="grid-row: 5 / 6;"> Recto </h3>
                <h3 className="router" style="grid-row: 6 / 7; color: var(--dark);"> Cruzado</h3>
                <h3 className="router" style="grid-row: 7 / 8;"> Recto </h3>

                
                <h3 className="title" style="border-right: 0;"> Bridge </h3>
                <h3 className="bridge" style="grid-row: 2 / 3;"> Recto </h3>
                <h3 className="bridge" style="grid-row: 3 / 4;"> Recto </h3>
                <h3 className="bridge" style="grid-row: 4 / 5;"> Recto </h3>
                <h3 className="bridge" style="grid-row: 5 / 6;"> Recto </h3>
                <h3 className="bridge" style="grid-row: 6 / 7;"> Recto </h3>
                <h3 className="bridge" style="grid-row: 7 / 8; color: var(--dark);"> Cruzado</h3>
            </div> */}

            <p className="conclusion"> Es importante tener en cuenta que la necesidad de utilizar un cable cruzado o recto depende de los estándares de conexión utilizados por los elementos de la red y la forma en que se transmite la señal. En general, si se conecta un dispositivo de red a otro dispositivo de red de la misma categoría (como un switch a un switch), se necesita un cable crossover para cruzar los pares de transmisión y recepción. Si se conecta un dispositivo de red a un dispositivo de red de una categoría superior o inferior (como una computadora a un switch), se necesita un cable recto para mantener los pares de transmisión y recepción en el mismo orden. </p>
        </div>
        </>
    );
}
 
export default HW5;