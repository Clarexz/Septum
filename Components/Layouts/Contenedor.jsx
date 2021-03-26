import React from 'react';
import styled from '@emotion/styled';

const Fondo = styled.div`
    display: flex;
    align-items: center;
`;
//AGREGA JUSTIFY CONTENT//
const ContBlanco = styled.div`
    @media(min-width: 1310px) {
        width: 97rem;
        height: 52rem;
        border-radius: 4rem;
    }
    
`;

const Contenedor = () => {
    return ( 
        <Fondo>
            <ContBlanco className="md:bg-white md:shadow-2xl"></ContBlanco>
        </Fondo>
        
     );
}
 
export default Contenedor;