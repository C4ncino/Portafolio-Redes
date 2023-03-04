import React from 'react';
import HW1and2 from './hws1-2/HW1and2';
import HW3 from './hw3/HW3';
import '../../styles/homeworks.css'

const Homework = ({setLocalPage}) => {
    return ( 
        <> 
            <HW1and2 setLocalPage={setLocalPage}/>
            <HW3/>
        </>
    );
}
 
export default Homework;