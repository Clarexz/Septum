import React, { useContext } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { FirebaseContext } from '../../Firebase'

import { DarkModeContext } from '../../Context/DarkModeContext';

const ContenedorLinks = styled.div`
    background-color: ${props => props.bgColor};
    padding-top: 8rem;
    transition: all 0.7s;
`;

const StyledLink = styled.a`
    padding: 2rem 0;
    font-size: 2rem;

    :nth-of-type(1) {
        padding-top: 4rem;
    }
`;

const Sidebar = ({ menu }) => {

    const { usuario } = useContext(FirebaseContext);

    const { darkMode } = useContext(DarkModeContext);

    return ( 
        <>
            <ContenedorLinks 
                className={!menu ? 'barra-oculta' : 'barra-activa'}
                bgColor={darkMode ? 'var(--azulDARK)' : 'var(--azul)'}    
            >
                <nav className="flex flex-col">
                    
                    {usuario
                        ? <Link href="/materias" passHref><StyledLink>Materias</StyledLink></Link>
                        : null
                    }
                    {usuario
                        ? <Link href="/cuestionarios" passHref><StyledLink>Cuestionarios</StyledLink></Link>
                        : null
                    }
                    {usuario 
                        ? <Link href="/configuracion" passHref><StyledLink>Configuración</StyledLink></Link>
                        : <Link href="/" passHref><StyledLink>Iniciar Sesión</StyledLink></Link>    
                    }
                    <Link href="/contacto" passHref><StyledLink>Contacto</StyledLink></Link>
                </nav>
                
                <div className="h-32 w-32 mt-10">
                    <img src="/septum.svg" alt="Septum"/>
                </div>
            </ContenedorLinks>
        </>
     );
}

export default Sidebar;