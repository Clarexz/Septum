import React, { useContext } from 'react';
import Layout from '../Components/Layouts/Layout';
import { Espacio } from '../Components/UI/Formularios';
import { BloqueGris, BloqueRojo, GridDobleColumna } from '../Components/UI/Generales'

import { FirebaseContext } from '../Firebase';

const Perfil = () => {

  const { usuario, firebase } = useContext(FirebaseContext);

  return (
    <div>
      <Layout />
      <h1 className="text-5xl font-bold text-center">Configuración</h1>

      <GridDobleColumna>
        <Espacio>
          <BloqueRojo>
            Actualizar a Premium
          </BloqueRojo>
        </Espacio>

        <Espacio>
          <BloqueGris 
            type="submit"
            onClick={() => 
              firebase.cerrarSesion()}
          >
            Cerrar sesión
          </BloqueGris>
        </Espacio>

        <Espacio>
          <BloqueGris>
            Editar Cuenta
          </BloqueGris>
        </Espacio>

        <Espacio>
          <BloqueGris>
            Modo Oscuro
          </BloqueGris>
        </Espacio>

        <Espacio>
          <BloqueGris>
            Información de pago
          </BloqueGris>
        </Espacio>
      </GridDobleColumna>
    </div>
  )
}

export default Perfil;