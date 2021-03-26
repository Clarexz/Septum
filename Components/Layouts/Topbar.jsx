import React, { useState } from 'react'
import styled from '@emotion/styled';
import BotonMenu from './BotonMenu';
import Sidebar from './Sidebar';

const ContenedorAzul = styled.div`
    background-color: rgba(43,53,89,255);
`;

const Topbar = () => {
    
    const [ menu, setMenu ] = useState(false);
    
    const abrirMenu = () => {
        setMenu(!menu);
    };

    return ( 
        <>
            <Sidebar 
                menu={menu}
                handleClick={abrirMenu}
            />

            <ContenedorAzul className="text-white w-screen flex h-32">
                <BotonMenu 
                    menu={menu}
                    handleClick={abrirMenu}
                />

                <h1 className="w-screen text-center text-7xl m-auto pr-20 lg:pr-0">Septum</h1>
            </ContenedorAzul>        
        </>
     );
}
 
export default Topbar;