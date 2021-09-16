import React, { useContext } from 'react';
import { Espacio } from '../Components/UI/Formularios';
import { BloqueGris, BloqueRojo, GridDobleColumna, DoradoPremium } from '../Components/UI/Generales'
import Link from 'next/link';

//Contexts
import { FirebaseContext } from '../Firebase';
import { DarkModeContext } from '../Context/DarkModeContext';

//Componentes
import Layout from '../Components/Layouts/Layout';

const Configuracion = () => {

  const { firebase } = useContext(FirebaseContext);

  const {darkMode, cambiarModo} = useContext(DarkModeContext);
  
  return (
    <div className={darkMode ? 'transition duration-700 bg-black' : 'transition duration-700'}>
      <Layout/>
      <h1 className={darkMode ? "transition duration-700 text-white text-5xl font-bold text-center" : "transition duration-700 text-5xl font-bold text-center"}>Configuración</h1>

      <GridDobleColumna>
        <Espacio>
          <DoradoPremium>
            Actualizar a Premium
          </DoradoPremium>
        </Espacio>

        <Espacio>
          <BloqueGris
            onClick={cambiarModo}
            bgColor={darkMode ? "var(--grisInputDARK)" : "var(--grisInput)"}
            textColor={darkMode ? "white" : "black"}
          >
            Modo Oscuro: {darkMode ? 'Si' : 'No'}
          </BloqueGris>
        </Espacio>

        <Espacio>
          <BloqueGris
            bgColor={darkMode ? "var(--grisInputDARK)" : "var(--grisInput)"}
            textColor={darkMode ? "white" : "black"}
          >
            Cambiar Contraseña
          </BloqueGris>
        </Espacio>
        
        <Espacio>
          <BloqueGris 
            type="submit"
            bgColor={darkMode ? "var(--grisInputDARK)" : "var(--grisInput)"}
            textColor={darkMode ? "white" : "black"}
            onClick={() => 
              firebase.cerrarSesion()}
          >
            Cerrar sesión
          </BloqueGris>
        </Espacio>

        <Espacio>
          <BloqueGris
            bgColor={darkMode ? "var(--grisInputDARK)" : "var(--grisInput)"}
            textColor={darkMode ? "white" : "black"}
          >
            Información de pago
          </BloqueGris>
        </Espacio>

        <Espacio>
          <Link href="/eliminarCuenta">
            <BloqueRojo 
              className="mb-72">
              Eliminar Cuenta
            </BloqueRojo>
          </Link>
        </Espacio>
      </GridDobleColumna>
    </div>
  )
}

export default Configuracion;