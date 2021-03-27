import styled from '@emotion/styled';

export const Espacio = styled.div`
    text-align: center;
    padding-top: 6rem;

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
    } 
    
    select {
        width: 80%;
        font-size: 1.875rem;
        padding: 1.75rem;
        border-radius: 1.5rem;
    }
`;

export const BotonChico = styled.input`
    background-color: var(--azul);
    color: white;
    font-weight: 600;
    width: 14rem!important;
`;