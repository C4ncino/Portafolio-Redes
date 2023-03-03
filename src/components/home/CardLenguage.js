import React from 'react';
import '../../styles/main.css'

const CardLenguage = ({lenguage, img_src}) => {
    return ( 
        <>
            <div className='card A'>
                <h3> {lenguage} </h3>
                <div className='bar'>
                    <div className='emptybar'></div>
                    <div className='filledbar'></div>
                </div>
                <img className='card-img' src={img_src} alt='hola'/>
            </div>
        </>
    );
}
 
export default CardLenguage;