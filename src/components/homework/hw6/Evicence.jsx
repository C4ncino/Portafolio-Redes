import React from 'react';

const Evidence = ({data, index}) => {
    const params = '?mute=1';
    const url = 'https://www.youtube.com/embed/' + data.video + params;

    const type = '.png'
    const img = 'images/T6/P' + index + type


    return (  
        <>
            <div className='part'>
                <h2>Parte {index}</h2>
                <div className='content B'>
                    <div>
                        <h3>Imagen de la Red</h3>
                        <img className='diagram' src={img} alt=''/>
                    </div>
                    <div>
                        <h3>Video de Funcionamiento</h3>
                        <iframe 
                            title={'P' + index}
                            className='video'
                            src={url}
                            frameBorder='0'
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Evidence;