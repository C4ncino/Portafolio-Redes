import React from 'react';
import HW1and2 from './hw1-2/HW1and2';
import HW3 from './hw3/HW3';
import HW4 from './hw4/HW4';
import HW5 from './hw5/HW5';
import HW6 from './hw6/HW6';
import '../../styles/homeworks.css'

const Homework = ({setLocalPage}) => {
    return ( 
        <> 
            <HW1and2 setLocalPage={setLocalPage}/>
            <HW3/>
            <HW4/>
            <HW5/>
            <HW6/>
        </>
    );
}
 
export default Homework;