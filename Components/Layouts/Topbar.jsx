import React, { useState, useContext } from 'react'
import Link from 'next/link';
import styled from '@emotion/styled';
import BotonMenu from './BotonMenu';
import Sidebar from './Sidebar';

import { FirebaseContext } from '../../Firebase';
import { DarkModeContext } from '../../Context/DarkModeContext';

const ContenedorAzul = styled.div`
    background-color: ${props => props.bgColor};
    color: white;
    display: flex;
    height: 8rem;
    transition: all 0.7s;
`;


const Topbar = () => {
    
    const [ menu, setMenu ] = useState(false);
    
    const abrirMenu = () => {
        setMenu(!menu);
    };

    const { usuario } = useContext(FirebaseContext);

    //Dark Mode
    const { darkMode } = useContext(DarkModeContext);


    return ( 
        <>
            <Sidebar 
                menu={menu}
            />

            <BotonMenu 
                menu={menu}
                handleClick={abrirMenu}
            />

            <ContenedorAzul
                bgColor={darkMode ? "var(--azulDARK)" : "var(--azul)"}
            >
                <Link href={usuario ? "/materias" : "/"}>
                    <h1 className="w-72 text-center text-7xl m-auto cursor-pointer">Septum</h1>
                </Link>
            </ContenedorAzul>        
        </>
     );
}
 
export default Topbar;