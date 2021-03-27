import React from 'react'
import styled from '@emotion/styled';

const Tacha = styled.div`
    left: 5.75rem;
`;

const BotonMenu = ({ menu, handleClick }) => {
    return ( 
        (menu 
            ? 
            <Tacha className="w-28 flex justify-center cursor-pointer absolute text-white top-3.5" onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg> 
            </Tacha>
            
            :
            <div className="w-28 flex justify-center cursor-pointer absolute text-white top-3.5" onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="pl-2 lg:hidden">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
            </div>
            
        )
        
     );
}
 
export default BotonMenu;