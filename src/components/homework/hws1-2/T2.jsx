import React from 'react';

const T2 = ({setLocalPage}) => {
    return (  
        <>
            <div>
                <h1 style={{cursor:'pointer', color:'blue'}} onClick={()=>{setLocalPage('main')}}>
                    Regresar a Tareas
                </h1>

                <table width="100%" bgcolor="red">
                    <tr>
                        <td width="10%" ></td>
                        <td width="8%" align="center">
                            <p style={{color: 0xFFFFFF}}> Alumnos </p>
                        </td>
                        <td width="8%" align="center">
                            <p style={{color: 0xFFFFFF}}> Egresados </p>
                        </td>
                        <td width="10%" align="center">
                            <p style={{color: 0xFFFFFF}}> Comunidad </p>
                        </td>
                        <td width="10%" align="center">
                            <p style={{color: 0xFFFFFF}}> International </p>
                        </td>
                        <td width="8%" align="center">
                            <p style={{color: 0xFFFFFF}}> Noticias </p>
                        </td>
                        <td width="6%" align="center">
                            <p style={{color: 0xFFFFFF}}> Accesos </p>
                        </td>
                        <td width="15%"></td>
                        <td width="5%" align="center">
                            <img src="images/T2/Lupa.png" height="50%" alt=''/>
                        </td>
                        <td width="5%" align="center">
                            <p style={{color: 0xFFFFFF}}> Intrauia </p>
                        </td>
                        <td width="25%"></td>
                    </tr>
                </table>

                <table width="100%">
                    <tr>
                        <td width="17%"></td>
                        <td width="10%" align="center">
                            <img src="images/T2/logo_2_0.png" width="100%" alt=''/>
                        </td>
                        <td width="5%"></td>
                        <td width="10%" align="center">
                            <p> La Ibero </p>
                        </td>
                        <td width="10%" align="center">
                            <p> Oferta Academica </p>
                        </td>
                        <td width="10%" align="center">
                            <p> Admisiones </p>
                        </td>
                        <td width="10%" align="center">
                            <p> Vida Estudiantil </p>
                        </td>
                        <td width="10%" align="center">
                            <p> Investigación </p>
                        </td>
                        <td width="17%"></td>
                    </tr>
                </table>

                <table>
                    <tr>
                        <td width="100%">
                            <img src="images/T2/banner.jpg" width="100%" alt=''/>
                        </td>
                    </tr>
                </table>

                <table>
                    <tr>
                        <td width="20%"> </td>
                        <td width="60%">
                            <p>ENCUENTRA TU MEJOR OPCIÓN</p>
                            <p>El papel de la Universidad no estaría completo si no tomara en cuenta la excelencia académica, que busca la
                                actualización y formación de sus profesores, y el mejoramiento de sus recursos.</p>
                        </td>
                        <td width="20%"> </td>
                    </tr>
                </table>

                <table width="100%">
                    <tr>
                        <td width="20%"> </td>
                        <td>
                            <img src="images/T2/1.png" alt=''/>
                        </td>
                        <td>
                            <img src="images/T2/2.png" alt=''/>
                        </td>
                        <td>
                            <img src="images/T2/3.png" alt=''/>
                        </td>
                        <td width="20%"> </td>
                    </tr>
                    <tr>
                        <td width="20%"> </td>
                        <td>
                            <img src="images/T2/4.png" alt=''/>
                        </td>
                        <td>
                            <img src="images/T2/5.png" alt=''/>
                        </td>
                        <td>
                            <img src="images/T2/6.png" alt=''/>
                        </td>
                        <td width="20%"> </td>
                    </tr>
                </table>

                <table width="100%" bgcolor="red">
                    <tr>
                        <td width="8%" align="center">
                            <p style={{color: 0xFFFFFF}}> Derechos Reservados 2023 </p>
                        </td>
                    </tr>
                </table>

            </div>
        </>
    );
}
 
export default T2;