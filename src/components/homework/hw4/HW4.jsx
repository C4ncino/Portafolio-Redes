import React from 'react';
import info from './info.json';

const HW4 = () => {
    const example = 'al enviar un correo electrónico se comportaría de la siguiente forma:';
    const layers = info['layers']
    const comparison = info['comparison']
    const examples = info['examples']

    return (  
        <>
            <div className='HW C' id='_Tarea-4_'>
                <h1> Tarea 4 </h1>
                <div className='OSI' style={{gridRow : 2 / 3}}>
                    <h2> OSI </h2>
                    <p>El modelo OSI nace como una propuesta de la organización Internacional de Normas (ISO) para estandarizar los protocolos utilizados hasta ese momento, este modelo no es una arquitectura de red, ya que carece de la especificación de los servicios y protocolos exactos a utilizar en cada capa, solo se indica lo que se debe de hacer, sin embargo, la ISO también cuenta con estándares para todas las capas, aunque no son parte del modelo en sí. En 1995 nace el modelo de Interconexión de Sistemas Abiertos (OSI). El modelo se divide en siete capas que siguen la siguiente lógica:</p>
                    <ul className='especifications'>
                        <li>Por cada Nivel de abstracción se requiere una capa nueva</li>
                        <li>Las funciones de una capa deben ser bien definidas</li>
                        <li>Dentro de las capas se deben tomar en cuenta los protocolos estandarizados internacionalmente </li>
                        <li>Los límites de las capas se deben elegir para minimizar el flujo de información a través de las interfaces</li>
                        <li>Las capas no deben de requerir de la agrupación de funciones adicionales, con la finalidad de mantener las capas lo más pequeño posible y evitar que se vuelvan inmanejables.</li>
                    </ul>
                    <h3>Capas del Modelo</h3>
                    <div className='layers O'>
                        {layers['OSI'].map((layer, i) =>
                            <>
                                <div className='card H' key={i}>
                                    <h4>{layer['title']}</h4>
                                    <p>{layer['description']}</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className='TCP'>
                    <h2> TCP/IP </h2>
                    <p>El modelo TCP/IP es un modelo de red que describe cómo se comunican los dispositivos en una red de computadoras. Se divide en cuatro capas: la capa de aplicación, la capa de transporte, la capa de red y la capa de enlace de datos. Este modelo es utilizado en la mayoría de las redes de computadoras y es esencial para el funcionamiento de internet. Cada capa tiene su propio conjunto de protocolos y estándares que permiten que los dispositivos en la red se comuniquen y compartan datos de manera efectiva. <br/> El modelo nace de la necesidad de que una red pudiera sobrevivir a pérdida de hardware y las conexiones principales continuaran intactas mientras que la máquina de origen y destino siguieran funcionando.</p>
                    <h3>Capas del Modelo</h3>
                    <div className='layers T'>
                        {layers['TCP'].map((layer, i) =>
                            <>
                                <div className='card H H2' key={i}>
                                    <h4>{layer['title']}</h4>
                                    <p>{layer['description']}</p>
                                </div>
                            </>
                        )}
                    </div>
                </div>
                <div className='comparison'>
                    <h2 className='Title'>Concepto</h2>
                    {comparison['titles'].map((title, i) =>
                        <>
                            <h3 className='concept' key={i} style={title['row']}> {title['title']} </h3>
                        </>
                    )}

                    <h2 className='Title O'>OSI</h2>
                    {comparison['OSI'].map((element, i) =>
                        <>
                            <p className='osiT' key={i} style={element['row']}> {element['info']} </p>
                        </>
                    )}

                    <h2 className='Title T'>TCP/IP</h2>
                    {comparison['TCP'].map((element, i) =>
                        <>
                            <p className='tcp' key={i} style={element['row']}> {element['info']} </p>
                        </>
                    )}
                </div>
                <div className='examples'>
                    <h2>OSI</h2>
                    <p> {'El modelo OSI ' + example}</p>
                    <ul>
                        {examples['OSI'].map( (layer, i) =>
                            <li  key={i}>{layer}</li>
                        )}
                    </ul> 
                    <p>Las señales son recibidas por el servidor de correo electrónico entrante, que realiza el proceso inverso para recibir el correo electrónico y almacenarlo en el buzón de correo del destinatario.</p>
                    
                    <h2 style={{marginTop : '20px'}}>TCP/IP</h2>
                    <p> {'El modelo TCP/IP ' + example}</p>
                    <ul>
                        {examples['TCP'].map( (layer, i) =>
                            <li key={i}>{layer}</li>
                        )}
                    </ul> 
                    <p> Cabe destacar que el modelo TCP/IP consta de 4 capas, mientras que el modelo OSI consta de 7 capas. En el modelo TCP/IP, la información de la capa de presentación y la capa de sesión se manejan en la capa de aplicación. Además, la capa física no se encuentra explícitamente en el modelo TCP/IP ya que se considera parte del medio físico de la red y no como una capa independiente.</p>
                </div>
            </div>
        </>
    );
}
 
export default HW4;