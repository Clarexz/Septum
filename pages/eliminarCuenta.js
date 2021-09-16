import React, { useContext } from 'react';
import Link from 'next/link';
import Router from 'next/router';

//Styled Components
import { Espacio, Error } from '../Components/UI/Formularios';
import { BloqueRojo, TextoSistema, BloqueGris } from '../Components/UI/Generales';

//Componentes
import Layout from '../Components/Layouts/Layout';

//Context
import { DarkModeContext } from '../Context/DarkModeContext';
import { FirebaseContext } from '../Firebase';


const eliminarCuenta = () => {

    const { darkMode } = useContext(DarkModeContext);

    const { firebase } = useContext(FirebaseContext);

    //Función de cuenta eliminada
    async function borrarCuenta() {
        await firebase.cuentaEliminada();
        Router.push("/");
    }

    return (
        <div className={darkMode ? 'transition duration-700 bg-black h-screen' : 'transition duration-700'}>
            <Layout />
            <h1 className={darkMode ? "transition duration-700 text-white text-5xl font-bold text-center" : "transition duration-700 text-5xl font-bold text-center"}>Eliminar Cuenta</h1>
            
            <Espacio>
                <Error className="font-bold">ADVERTENCIA:</Error>
                <Error>Realizar esta acción es irreversible y se perderá tu cuenta y todos tus datos inmediatamente, si en un futuro quieres volver, necesitas crear una nueva cuenta</Error>
            </Espacio>

            <Espacio>
                <TextoSistema className={darkMode ? "text-white font-bold" : "font-bold"}>¿Quieres eliminar tu cuenta?</TextoSistema>

                <BloqueRojo
                    onClick={() => {
                        borrarCuenta()
                    }}
                    className="mt-8"
                >
                    Si, eliminar cuenta
                </BloqueRojo>
            </Espacio>

            <Espacio>
                <Link href="/configuracion">
                    <BloqueGris
                        bgColor={darkMode ? "var(--grisInputDARK)" : "var(--grisInput)"}
                        textColor={darkMode ? "white" : "black"}
                    >
                        No, no eliminar cuenta
                    </BloqueGris>
                </Link>
            </Espacio>
        </div>
    )
}
 
export default eliminarCuenta;