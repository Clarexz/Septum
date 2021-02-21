import React from 'react';
import Link from 'next/link';
import BarraLateral from './BarraLateral';

const Layout = props => {
    return ( 
        <>
            <BarraLateral>
            </BarraLateral>

            <main>
                {props.children}
            </main>
        </>
     );
}
 
export default Layout;