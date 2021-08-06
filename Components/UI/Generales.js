import styled from '@emotion/styled';

export const TextoSistema = styled.p`
    font-size: 1.5rem;
    text-align: center;
    font-weight: 600;
    margin: 0 auto;
    max-width: 80%;
`;

export const BloqueGris = styled.button`
    background-color: var(--grisInput);
    font-size: 1.8rem;
    padding: 2rem 1.7rem;
    border-radius: 1.5rem;
    font-weight: 600;
    width: 80%;
`;

export const GridDobleColumna = styled.div`
    max-width: 90%;
    margin: 0 auto;
    display: grid;
`;

export const BloqueRojo = styled.button`
    background-color: var(--rojoError);
    font-size: 1.8rem;
    padding: 2rem 1.7rem;
    border-radius: 1.5rem;
    font-weight: 600;
    width: 80%;
    color: white;
`;