import React from 'react';

const FlippingCard = ({title, i, data}) => {
    const style = "style-" + i;

    return (  
        <>
            <div className="cart">
                <div className="content">
                    <div className="front">
                        <b className={style}> {title} </b>
                    </div>
                    <div className="back">
                        <b>
                            {data.map( (text)=>
                                <>
                                    {text} <br/>
                                </>
                            )}
                        </b>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default FlippingCard;