import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

const Contenedor = styled.div`
    background-color: rgba(43,53,89,255);
    height: 50rem;
`;
const Espacio = styled.div`
    display: flex;
    align-items: center;
    height: 100vh;
`; 

const BarraLateral = () => {
    return ( 
        <>
            <Espacio>
                <Contenedor className="ml-20 w-80 text-white flex flex-col text-center">
                    <div className="h-60">
                        <h1>Septum</h1>

                        <img src="/" alt="Logo"/>
                    </div>

                    <nav className="flex flex-col text-center">
                        <Link href="/">Regístrate</Link>
                        <Link href="/materias">Materias</Link>
                        <Link href="/banco-de-preguntas">Banco de Preguntas</Link>
                        <Link href="/contacto">Contacto</Link>
                    </nav>
                </Contenedor>
            </Espacio>
        </>
     );
}
 
export default BarraLateral;