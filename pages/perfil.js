import React, { useContext } from 'react';
import Layout from '../Components/Layouts/Layout';
import { Espacio, BotonChico } from '../Components/UI/Formularios';
import { FirebaseContext } from '../Firebase';

const Perfil = () => {

  const { usuario, firebase } = useContext(FirebaseContext);

  return (
    <div>
      <Layout />
      <h1>Perfil</h1>

      <Espacio>
        <button 
          type="submit"
          onClick={() => 
            firebase.cerrarSesion()}
        >
          Cerrar sesión
        </button>
      </Espacio>
    </div>
  )
}

export default Perfil;