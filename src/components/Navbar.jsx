import React from 'react';

const Nabvar = ({page, setPage}) => {
    const onClick = (e) => {
        console.log(e.target.id);
        setPage(e.target.id);
    };
    
    return (
        <>
            <nav>
                <div className = 'container'>
                    <h1> Redes Digitales </h1>
                    <div className = 'menu'>
                        {page === 'home' ? (
                            <>  
                                <button id='home' onClick={onClick} className='a is-active'> Home </button>
                                <button id='homework' onClick={onClick} className='a'> Homework </button>
                                <button id='lab' onClick={onClick} className='a'> Lab </button>
                                <button id='projects' onClick={onClick} className='a'> Proyectos Finales </button>
                            </>
                        ):(
                            <>
                                {page === 'homework' ? (
                                <>
                                    <button id='home' onClick={onClick} className='a'> Home </button>
                                    <button id='homework' onClick={onClick} className='a is-active'> Homework </button>
                                    <button id='lab' onClick={onClick} className='a'> Lab </button>
                                    <button id='projects' onClick={onClick} className='a'> Proyectos Finales </button>
                                </>
                                ):(
                                    <>
                                        {page === 'lab' ? (
                                            <>
                                                <button id='home' onClick={onClick} className='a'> Home </button>
                                                <button id='homework' onClick={onClick} className='a'> Homework </button>
                                                <button id='lab' onClick={onClick} className='a is-active'> Lab </button>
                                                <button id='projects' onClick={onClick} className='a'> Proyectos Finales </button>
                                            </>
                                        ):(
                                            <>
                                                {page === 'projects' ? (
                                                    <>
                                                        <button id='home' onClick={onClick} className='a'> Home </button>
                                                        <button id='homework' onClick={onClick} className='a'> Homework </button>
                                                        <button id='lab' onClick={onClick} className='a'> Lab </button>
                                                        <button id='projects' onClick={onClick} className='a is-active'> Proyectos Finales </button>
                                                    </>
                                                ):(
                                                    <></>
                                                )}
                                            </>
                                        )}
                                    </>
                                )}
                            </>
                        )}
                    </div>
                    <button className='btn'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>
        </>
    );
}
 
export default Nabvar;