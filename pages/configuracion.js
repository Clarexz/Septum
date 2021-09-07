import React, { useContext } from 'react';
import Layout from '../Components/Layouts/Layout';
import { Espacio } from '../Components/UI/Formularios';
import { BloqueGris, BloqueRojo, GridDobleColumna, DoradoPremium } from '../Components/UI/Generales'

import { FirebaseContext } from '../Firebase';

import { DarkModeContext } from '../Context/DarkModeContext';

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
          <BloqueRojo className="mb-8">
            Eliminar Cuenta
          </BloqueRojo>
        </Espacio>

      </GridDobleColumna>
    </div>
  )
}

export default Configuracion;