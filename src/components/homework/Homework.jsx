import React from 'react';
import HW1and2 from './hw1-2/HW1and2';
import HW3 from './hw3/HW3';
import HW4 from './hw4/HW4';
import HW5 from './hw5/HW5';
import HW6 from './hw6/HW6';
import HW7 from './hw7/HW7';
import HW8 from './hw8/HW8';
import HW9 from './hw9/HW9';
import '../../styles/homeworks.css'

const Homework = ({setLocalPage}) => {
    return ( 
        <> 
            <div class="welcome">
                <h1> Tareas </h1>
            </div>
            <HW1and2 setLocalPage={setLocalPage}/>
            <HW3/>
            <HW4/>
            <HW5/>
            <HW6/>
            <HW7/>
            <HW8/>
            <HW9/>
        </>
    );
}
 
export default Homework;