import React from 'react';

const Nabvar = ({page}) => {
    return (
        <>
            <nav>
                <div className = 'container'>
                    <h1> Redes Digitales </h1>
                    <div className = 'menu'>
                        {page === 'home' ? (
                            <>
                                <a href='index.html' className='a is-active'> Home </a>
                                <a href='homework.html' className='a'> Homework </a>
                                <a href='lab.html' className='a'> Lab </a>
                                <a href='proyects.html' className='a'> Proyectos Finales </a>
                            </>
                        ):(
                            <>
                                {page === 'Homework' ? (
                                <>
                                    <a href='index.html' className='a'> Home </a>
                                    <a href='homework.html' className='a is-active'> Homework </a>
                                    <a href='lab.html' className='a'> Lab </a>
                                    <a href='proyects.html' className='a'> Proyectos Finales </a>
                                </>
                                ):(
                                    <>
                                        {page === 'Lab' ? (
                                            <>
                                                <a href='index.html' className='a'> Home </a>
                                                <a href='homework.html' className='a'> Homework </a>
                                                <a href='lab.html' className='a is-active'> Lab </a>
                                                <a href='proyects.html' className='a'> Proyectos Finales </a>
                                            </>
                                        ):(
                                            <>
                                                {page === 'fProjects' ? (
                                                    <>
                                                        <a href='index.html' className='a'> Home </a>
                                                        <a href='homework.html' className='a'> Homework </a>
                                                        <a href='lab.html' className='a'> Lab </a>
                                                        <a href='proyects.html' className='a is active'> Proyectos Finales </a>
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