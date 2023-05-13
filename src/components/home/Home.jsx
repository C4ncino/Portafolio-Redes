import React from 'react';
import CardLenguage from './CardLenguage';
import '../../styles/main.css';

const Home = ({ setPage }) => {
    const lenguages = ['C', 'C++', 'Java', 'Python', 'MySQL', 'React', 'HTML', 'CSS', 'JavaScript'];
    const dir = 'images/About/Logos/';

    return (
        <>
            <div className='welcome'>
                <h1> Bienvenido a Mi Página Web </h1>
                <p>
                    Hola, aquí encontrarás todas mis tareas y trabajos relacionados con la materia de Redes Digitales de Datos. Espero sea de tu ayuda!
                </p>
            </div>

            <div className='about'>
                <h1> Sobre Mi </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultrices orci eget turpis euismod, vitae consequat diam ullamcorper. Nunc vehicula mauris at metus interdum, sed bibendum ipsum dictum. Pellentesque sit amet nibh at ipsum rutrum efficitur non sit amet mauris. Morbi ac risus feugiat ante aliquet rhoncus ac eget sapien. Suspendisse diam orci, condimentum eu ante at, convallis blandit nulla. Integer pretium ante id orci facilisis, sed varius metus imperdiet. Donec vel massa lectus. Ut et dui metus. Maecenas quis tortor at velit pellentesque venenatis imperdiet id ligula. Suspendisse vehicula ipsum arcu, sed dictum lacus viverra eu. Suspendisse ultrices commodo dui, non fringilla turpis sodales sed. Donec tempus porta odio eget cursus. Integer rhoncus venenatis odio, eget varius mi cursus quis. Praesent in consectetur nisi. Etiam vel odio quis ipsum pharetra sagittis. Donec tempor tellus ac lectus semper, nec gravida nulla rutrum. Sed nec est vitae nunc cursus elementum.</p>
                <div className='img-container'>
                    <img className='my-photo' src='images/About/mini-Yo.jpg' alt='Yo' />
                </div>
                <h2>Lenguajes y Tecnologías</h2>
                <div className='carrusel'>
                    {lenguages.map((lenguage, i) =>
                        <CardLenguage key={i} lenguage={lenguage} img_src={dir + lenguage + '_Logo.png'} />
                    )}
                </div>
            </div>

            <div className='homework'>
                <h1>Tareas</h1>
                <p>En esta sección se encuentran los enlaces que te llevará a la página dedicada a mis tareas de la materia teórica y las prácticas del laboratorio.</p>
                <div className='hw-btn HomeW'>
                    <button className='btnH A' onClick={() => { setPage('homework') }}>
                        <h2>Tareas</h2>
                        <img alt='Homework' src='images/HW/HW-A.png' />
                    </button>
                </div>
                <div className='hw-btn Lab'>
                    <button className='btnH B' onClick={() => { setPage('lab') }}>
                        <h2>Reportes</h2>
                        <img alt='Lab' src='images/HW/Lab-A.png' />
                    </button>
                </div>
            </div>

            <div className='final-projects'>
                <h1> Proyectos </h1>
                <p>Mediante este enlace te redirigiras a la página de mis proyectos finales.</p>
                <a href='https://rancho-el-moralito.vercel.app/' target='_blank' rel='noreferrer'> <button> Proyectos </button> </a>
            </div>
        </>
    );
}

export default Home;