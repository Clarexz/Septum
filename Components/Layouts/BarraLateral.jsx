import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const Contenedor = styled.div`
    background-color: rgba(43,53,89,255);
    height: 50rem;
    border-radius: 4rem;
`;
const Espacio = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
`; 
const PreNav = styled.div`
    height: 30rem;
`;
const Navegacion = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    font-size: 1.6rem;
`;
const StyledLink = styled.a`
   transition: .2s ease-in;
   padding: 2.05rem 0;
   border-radius: 2rem;

   &:hover {
       background-color: white;
       color: black;
   }
`;
//ARREGLA EL WIDTH DEL ESPACIO!!!//

const BarraLateral = () => {
    return ( 
        <>
            {/*El espacio es el area de 100vh donde se encuentra la Barra lateral*/}
            <Espacio>
                <Contenedor className="ml-20 w-96 text-white flex flex-col text-center">

                    {/*La etiqueta PreNav es para el espacio del título y del logo*/}
                    <PreNav>
                        <h1>Septum</h1>

                        <img src="/" alt="Logo"/>
                    </PreNav>

                    {/*Para ponerle estilos a los Link hay que agregar despues del href la etiqueta passHref y al crear el styled component se lo asignas a un "a" y luego la etiqueta del styled component la pones alrededor del html, o sea dentro del link*/}
                    <Navegacion className="text-center py-12">
                        <Link href="/" passHref><StyledLink>Regístrate</StyledLink></Link>
                        <Link href="/materias" passHref><StyledLink>Materias</StyledLink></Link>
                        <Link href="/banco-de-preguntas" passHref><StyledLink>BP</StyledLink></Link>
                        <Link href="/contacto" passHref><StyledLink>Contacto</StyledLink></Link>
                    </Navegacion>
                </Contenedor>
            </Espacio>
        </>
     );
}

export default BarraLateral;