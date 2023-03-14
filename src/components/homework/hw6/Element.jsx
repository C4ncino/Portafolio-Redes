import React from 'react';

const Element = ({data}) => {
    return (  
        <>
            <tr>
                <td> <p>{data.title}</p> </td>
                <td> <p>{data.info}</p></td>
                <td> <img className='com-img' src={data.img} alt=''/></td>
            </tr>
        </>
    );
}
 
export default Element;