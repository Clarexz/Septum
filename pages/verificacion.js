import React from 'react';
import Layout from '../Components/Layouts/Layout';
import Link from 'next/link';
import Router from 'next/router';
import { Espacio, BotonChico } from '../Components/UI/Formularios'

const Verificacion = () => {



    return (
        <div>
            <Layout />
            <h1 className="text-5xl font-bold text-center flex flex-col justify-center">Se te enviará un correo para que verifiques tu cuenta, una vez hecho eso, presiona el botón de abajo para iniciar sesión</h1>

            <Espacio>
                <Link href="/">
                    <BotonChico
                        type="button"
                        value="Iniciar Sesión"
                    />
                </Link>
                
            </Espacio>
        </div>
  )
}

export default Verificacion;