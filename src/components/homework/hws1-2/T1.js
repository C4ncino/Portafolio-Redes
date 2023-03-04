import React from 'react';

const T1 = ({setLocalPage}) => {
    return (  
        <>
            <div>
                <h1 style={{cursor:'pointer', color:'blue'}} onClick={()=>{setLocalPage('main')}}>
                    Regresar a Tareas
                </h1>
                
                <h1> CAMPUS </h1>
                <img src='images/T1/banner.jpg' alt='' />
                <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>

                <a href='index'> LINK </a> 
            </div>
        </>
    );
}
 
export default T1;