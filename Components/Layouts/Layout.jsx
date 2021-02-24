import React from 'react';
import BarraLateral from './BarraLateral';
import Head from 'next/head';

const Layout = props => {
    return ( 
        <>
            <Head>
                <html lang="es"/>
                <title>Septum</title>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet"/>
            </Head>

            <BarraLateral>
            </BarraLateral>

            <main>
                {props.children}
            </main>
        </>
     );
}
 
export default Layout;