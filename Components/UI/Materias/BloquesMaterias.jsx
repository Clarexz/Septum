import React from 'react'
import styled from '@emotion/styled';

const Titulo = styled.h1`
    background-color: var(--grisInput);
    color: black;
    width: 80%;
    margin: 0 auto;
    font-size: 1.8rem;
    padding: 3.1rem 1.8rem;
    border-radius: 2rem;
    font-weight: 700;
`;

const EspacioMaterias = styled.div`
    text-align: center;
    padding-top: 4rem;
`;

const BloquesMaterias = ({materia}) => {

    const { titulo } = materia;

    return ( 
        <EspacioMaterias>
            <Titulo>{titulo}</Titulo>
        </EspacioMaterias>
     );
}
 
export default BloquesMaterias;