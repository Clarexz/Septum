import styled from '@emotion/styled';

export const TextoSistema = styled.p`
    font-size: 1.5rem;
    text-align: center;
    font-weight: 600;
    margin: 0 auto;
    max-width: 80%;
`;

export const BloqueGris = styled.button`
    background-color: ${props => props.bgColor};
    color: ${props => props.textColor};
    font-size: 1.8rem;
    padding: 2.1rem 1.8rem;
    border-radius: 1.5rem;
    font-weight: 600;
    width: 80%;
    transition: all 0.7s;
`;

export const GridDobleColumna = styled.div`
    max-width: 90%;
    margin: 0 auto;
    display: grid;
`;

export const BloqueRojo = styled.button`
    background-color: var(--rojoError);
    font-size: 1.8rem;
    padding: 2.1rem 1.8rem;
    border-radius: 1.5rem;
    font-weight: 600;
    width: 80%;
    color: white;
`;

export const DoradoPremium = styled.button`
    background-color: var(--doradoPremium);
    font-size: 1.8rem;
    padding: 2.1rem 1.8rem;
    border-radius: 1.5rem;
    font-weight: 600;
    width: 80%;
    color: white;
`;