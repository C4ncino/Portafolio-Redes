import React from 'react';
import data from './data.json';

const HW7 = () => {
    
    return (  
        <>
            <div className='HW F'>
                <h1 className='title'> Tarea 7 </h1>
                <div className="description">
                    <h2> Descripción </h2>
                    <p> En una escuela se necesitan desarrollar una red de computadoras, se cuenta con 3 salas de cómputo con 10 computadoras cada uno, y una sala de administración con 5 computadoras para el personal administrativo. Los salones de cómputo se encuentran a más 100 metros de la oficina administrativa. La oficina administrativa posee un router para la conexión a internet de todos los equipos de la escuela. Utiliza repetidores y switches necesarios para desarrollar la red. </p>
                </div>
                
                <div className='tableC'>
                    <h2>Tabla de Datos</h2>
                    <table>
                        {data.map((data)=>
                            <>
                                <tr>
                                    <td>{data.element}</td>
                                    <td>{data.location}</td>
                                    <td>{data.IP}</td>
                                </tr>
                            </>
                        )}
                    </table>
                </div>
                <div className='exercise'>
                    <div className='budget'>
                        <h2>Presupuesto</h2>
                        <div className="things">
                            <h4>Metros de Cable</h4>
                            <p>(13 * 36) + 40 + 40 + 20 + 20 + 20 = 608</p>
                            <p>608 * 45 = $27,360 </p>
                            <a href='https://www.steren.com.mx/cable-ethernet-utp-cat-6a-condumex-vta.html'>
                                Link al cable
                            </a>
                            <h4>Dispositivos</h4>
                            <a href='https://www.steren.com.mx/repetidor-router-wi-fi-2-4-ghz-y-5-ghz-b-g-n-a-ac-hasta-21-m-de-cobertura.html'>1 Router $1,600</a> <br/>
                            <a href='https://www.steren.com.mx/repetidor-wi-fi-2-4-ghz-19-m-de-cobertura.html'>1 Repetidor $700</a> <br/>
                            <a href='https://www.steren.com.mx/switch-fast-ethernet-de-8-puertos.html'>1 Switch de 8 puertos $400</a> <br/>
                            <a href='https://www.steren.com.mx/switch-fast-ethernet-de-5-puertos.html'>1 Switch de 5 puertos $300</a> <br/>
                            <a href='https://www.steren.com.mx/switch-fast-ethernet-de-16-puertos.html'>1 Switch de 16 puertos $900</a> <br/>
                            <h4>Costo Final: $31,260</h4> 
                        </div>
                    </div>

                    <h2>Evidencias</h2>
                    <div className='evidence'>
                        <div className='imageC'>
                            <h3>Diagrama</h3>
                            <img className='image' src='images/T7/Diagrama.png' alt='IMG'/>
                        </div>
                        <div className='videoC'>
                            <h3>Video</h3>
                            <iframe 
                                title='video'
                                className='videoA'
                                src='https://www.youtube.com/embed/G4MkBsTyuSo?mute=1' 
                                frameborder='0'
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default HW7;