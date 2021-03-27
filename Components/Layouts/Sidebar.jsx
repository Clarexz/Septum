import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const ContenedorLinks = styled.div`
    background-color: rgba(43,53,89,255);
    padding-top: 8rem;
`;

const StyledLink = styled.a`
    padding: 2rem 0;
    font-size: 2rem;

    :nth-child(1) {
        padding-top: 4rem;
    }
`;

const Sidebar = ({ menu }) => {

    return ( 
        <>
            <ContenedorLinks className={!menu ? 'barra-oculta' : 'barra-activa'}>
                <nav className="flex flex-col">
                    <Link href="/" passHref><StyledLink>Iniciar Sesión</StyledLink></Link>
                    <Link href="/materias" passHref><StyledLink>Materias</StyledLink></Link>
                    <Link href="/cuestionarios" passHref><StyledLink>Cuestionarios</StyledLink></Link>
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