import React, { useContext } from 'react'
import styled from '@emotion/styled';
import Link from 'next/link';

import { DarkModeContext } from '../../Context/DarkModeContext';

const Titulo = styled.button`
    background-color: ${props => props.bgColor};
    color: ${props => props.textColor};
    width: 80%;
    margin: 0 auto;
    font-size: 1.8rem;
    padding: 3.1rem 1.8rem;
    border-radius: 2rem;
    font-weight: 700;
    transition: all 0.7s;
`;

const EspacioMaterias = styled.div`
    text-align: center;
    padding-top: 4rem;
`;

const BloquesTemas = ({tema}) => {

    const { darkMode } = useContext(DarkModeContext);

    const { id, tituloTema } = tema;

    return ( 
        <EspacioMaterias>
            <Link href="/listaDeTemas/[tid]" as={`/listaDeTemas/${id}`}>
                <Titulo
                    bgColor={darkMode ? "var(--grisInputDARK)" : "var(--grisInput)"}
                    textColor={darkMode ? "white" : "black"}
                >
                    {tituloTema}
                </Titulo>
            </Link>
        </EspacioMaterias>
     );
}
 
export default BloquesTemas;