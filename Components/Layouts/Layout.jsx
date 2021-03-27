import React from 'react';
import Head from 'next/head';
import Topbar from './Topbar';

const Layout = props => {
    return ( 
        <>
            <Head>
                <title>Septum</title>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet"/>
            </Head>
            <div>
                <Topbar />
            </div>

            <main>
                {props.children}
            </main>
        </>
     );
}
 
export default Layout;