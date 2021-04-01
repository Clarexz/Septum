import styled from '@emotion/styled';

export const Espacio = styled.div`
    text-align: center;
    padding-top: 4rem;

    :nth-of-type(1) {
        padding-top: 3rem;
    }
    :nth-of-type(8) {
        padding-bottom: 6rem;
    }

    input {
        width: 80%;
        font-size: 1.875rem;
        padding: 1.75rem;
        border-radius: 1.5rem;
        background-color: var(--grisInput);
    } 
    
    select {
        width: 80%;
        font-size: 1.875rem;
        padding: 1.75rem;
        border-radius: 1.5rem;
        background-color: var(--grisInput);
    }
`;

export const BotonChico = styled.input`
    background-color: var(--azul)!important;
    color: white;
    font-weight: 600;
    width: 14rem!important;

    :hover {
        cursor: pointer;
    }
`;

export const Error = styled.p`
    font-size: 1.4rem;
    text-align: center;
    margin: 0 auto;
    width: 80%;
    color: var(--rojoError);
    font-weight: 600;
`;

export const ErrorCuentaExistente = styled.p`
    width: 80%;
    font-size: 1.875rem;
    padding: 1.75rem;
    border-radius: 1.5rem;
    background-color: var(--rojoError);
    margin: 4rem auto;
    text-align: center;
    color: white;
    font-weight: 600;
`;