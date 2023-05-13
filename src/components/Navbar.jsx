import React from 'react';

const Nabvar = ({ page, setPage }) => {
    const onClick = (e) => {
        setPage(e.target.id);
    };

    const pages = (page) => {
        if (page === 'home') {
            return (
                <>
                    <button id='home' onClick={onClick} className='a is-active'> Home </button>
                    <button id='homework' onClick={onClick} className='a'> Homework </button>
                    <button id='lab' onClick={onClick} className='a'> Lab </button>
                    <a href='https://rancho-el-moralito.vercel.app/' rel='noreferrer' target='_blank' id='projects' onClick={onClick} className='a'> Proyectos Finales </a>
                </>
            )
        }
        else if (page === 'homework') {
            return (
                <>
                    <button id='home' onClick={onClick} className='a'> Home </button>
                    <button id='homework' onClick={onClick} className='a is-active'> Homework </button>
                    <button id='lab' onClick={onClick} className='a'> Lab </button>
                    <a href='https://rancho-el-moralito.vercel.app/' rel='noreferrer' target='_blank' id='projects' onClick={onClick} className='a'> Proyectos Finales </a>
                </>
            )
        }
        else if (page === 'lab') {
            return (
                <>
                    <button id='home' onClick={onClick} className='a'> Home </button>
                    <button id='homework' onClick={onClick} className='a'> Homework </button>
                    <button id='lab' onClick={onClick} className='a is-active'> Lab </button>
                    <a href='https://rancho-el-moralito.vercel.app/' rel='noreferrer' target='_blank' id='projects' onClick={onClick} className='a'> Proyectos Finales </a>
                </>
            )
        }
        else if (page === 'projects') {
            return (
                <>
                    <button id='home' onClick={onClick} className='a'> Home </button>
                    <button id='homework' onClick={onClick} className='a'> Homework </button>
                    <button id='lab' onClick={onClick} className='a'> Lab </button>
                    <a href='https://rancho-el-moralito.vercel.app/' rel='noreferrer' target='_blank' id='projects' onClick={onClick} className='a is-active'> Proyectos Finales </a>
                </>
            )
        }
    }

    return (
        <>
            <nav>
                <div className='container'>
                    <h1> Redes Digitales </h1>
                    <div className='menu'>
                        {pages(page)}
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