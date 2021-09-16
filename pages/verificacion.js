import React, { useContext } from 'react';
import Layout from '../Components/Layouts/Layout';
import Link from 'next/link';
import { Espacio, BotonChico } from '../Components/UI/Formularios'

//Context
import { DarkModeContext } from '../Context/DarkModeContext';

const Verificacion = () => {

    const { darkMode } = useContext(DarkModeContext);

    return (
        <div className={darkMode ? 'transition duration-700 bg-black h-screen' : 'transition duration-700'}>
            <Layout />
            <h1 
                className={darkMode 
                    ? "text-white text-5xl font-bold text-center flex flex-col justify-center" 
                    : "text-5xl font-bold text-center flex flex-col justify-center"}
            >Se te enviará un correo para que verifiques tu cuenta, una vez hecho eso, presiona el botón de abajo para iniciar sesión
            </h1>

            <Espacio>
                <Link href="/">
                    <BotonChico
                        type="button"
                        value="Iniciar Sesión"
                        bgColor={darkMode ? "var(--azulDARK)!important" : "var(--azul)!important"}
                    />
                </Link>
                
            </Espacio>
        </div>
  )
}

export default Verificacion;