import React, { useState } from 'react'
import Link from 'next/link';
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
            />

            <BotonMenu 
                menu={menu}
                handleClick={abrirMenu}
            />

            <ContenedorAzul className="text-white flex h-32">
                <Link href="/materias">
                    <h1 className="w-72 text-center text-7xl m-auto cursor-pointer">Septum</h1>
                </Link>
            </ContenedorAzul>        
        </>
     );
}
 
export default Topbar;