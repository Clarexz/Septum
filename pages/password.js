import React, { useState } from 'react';
import Layout from '../Components/Layouts/Layout';
import { TextoSistema } from '../Components/UI/Generales';
import { Espacio, BotonChico } from '../Components/UI/Formularios';
import Router from 'next/router';

import firebase from '../Firebase';

const Password = () => {

  const [ email, guardarEmail ] = useState('');

  const handleChange = e => {
    e.preventDefault();
    guardarEmail(e.target.value);
  };
  
  return (
    <div>
      <Layout />
        <h1 className="text-5xl font-bold text-center">¿Contraseña olvidada?</h1>
        <TextoSistema>Con tanto estudiar, es normal que a veces no recordemos algunas cosas... Escribe el correo con el que inicias sesión y te mandaremos la información para que obtengas una nueva contraseña tu contraseña.</TextoSistema>

        <Espacio>
          <label htmlFor="email" className="sr-only">Correo electrónico</label>
          <input 
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={handleChange}
          />
        </Espacio>

        <Espacio>
          <BotonChico
            type="submit"
            value="Enviar"
            onClick={() => {
              firebase.mandarPassword(guardarEmail);
              console.log("Eureka")
            }}
          />
        </Espacio>
    </div>
  )
}

export default Password;