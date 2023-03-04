import React from 'react';

const ElementCard = ({info}) => {
    
    return (  
        <>
            <div className='cardT'>
                <h2 className='titleC'>{info.title}</h2>
                <p className='def'>{info.definition}</p>
                <h3 className='IP'>{info.IP}</h3>
                <h4 className='exampleT'>Ejemplo:</h4>
                <p className='example'>{info.example}</p>
                <div className='img-contain'>
                    <p className='text-b'>Imagen</p>
                    <img className='c-img' src={info.image_src} alt=''/>
                </div>
            </div>
        </>
    );
}
 
export default ElementCard;