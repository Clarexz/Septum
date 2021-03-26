import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const ContenedorLinks = styled.div`
    background-color: rgba(43,53,89,255);
`;

const StyledLink = styled.a`
    padding: 2rem 0;
    font-size: 2rem;

    :nth-child(1) {
        padding-top: 4rem;
    }
`;

const Sidebar = ({ menu, handleClick }) => {

    return ( 
        <>
            <ContenedorLinks className={!menu ? 'barra-oculta' : 'barra-activa'}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-20 mt-8" onClick={handleClick}>
                 <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>

                <div className="flex flex-col">
                    <Link href="/" passHref><StyledLink>Iniciar Sesión</StyledLink></Link>
                    <Link href="/materias" passHref><StyledLink>Materias</StyledLink></Link>
                    <Link href="/cuestionarios" passHref><StyledLink>Cuestionarios</StyledLink></Link>
                    <Link href="/contacto" passHref><StyledLink>Contacto</StyledLink></Link>
                </div>
                
                <div className="h-32 w-32 mt-10">
                    <img src="/septum.svg" alt="Septum"/>
                </div>
            </ContenedorLinks>
        </>
     );
}

export default Sidebar;