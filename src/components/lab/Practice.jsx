import React from 'react';

const Practice = ({data}) => {
    let ignorePos = -1;

    return (  
        <>
            <div className={'practice ' + data.style}>
                <h1 className='title'>{data.title}</h1>
                <div className='general'>
                    <h2>Objetivo General</h2>
                    <h3>{data.OG}</h3>
                </div>
                <div className='especifics'>
                    <h2>Objetivos específicos</h2>
                    <ul>
                        {data.OE.map((oe, i)=>{

                            if (oe === 'st'){
                                ignorePos = i + 1;
                            }

                            return(
                                <>
                                    {oe === 'st'? (
                                        <h3 key={i}>{data.OE[ignorePos]}</h3>
                                    ):(
                                        <>
                                            {i === ignorePos ? (
                                                <></>
                                            ):(
                                                <li key={i}>{oe}</li>
                                            )}
                                        </>
                                    )}
                                </>
                            );
                        })}
                    </ul>
                </div>
                {data.images ? (
                    <>
                        <h2 className='images-t'> Codes </h2>
                        <div className='images'>
                            {data.images.map((image, i) =>
                                <img key={i} src={'images' + image} alt='IMG' />
                            )}
                        </div>
                    </>
                ):(
                    <></>
                )}
                <h2 className='videos-t'> Evidencias </h2>
                <div className='evidencias'>
                    <div className='images-e'>
                        {data['images-e'] ? (
                            <>
                                {data['images-e'].map((image, i) =>
                                    <img key={i} src={'images' + image} alt='IMG'/>
                                )}
                            </>
                        ):(
                            <></>
                        )}
                    </div>
                    <div className='videos'>
                        {data.videos.map((video, i)=>
                            <iframe 
                                key={i}
                                title={video}
                                src={'https://www.youtube.com/embed/' + video +'?mute=1'} 
                                frameBorder='0'
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Practice;