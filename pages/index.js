import React, { useState } from 'react';
import Layout from '../Components/Layouts/Layout';
import Router from 'next/router';
import Link from 'next/link';
import { Espacio, BotonChico, Error, ErrorCuentaExistente } from '../Components/UI/Formularios';

import firebase from '../Firebase';

//validaciones
import useValidacion from '../Hooks/useValidacion';
import validarIniciarSesion from '../Validacion/validarIniciarSesion';

const STATE_INICIAL = {
  email: '',
  password: ''
};

export default function Home() {

  const [ error, guardarError ] = useState(false)

  const { valores, errores, handleSubmit, handleChange} = useValidacion( STATE_INICIAL, validarIniciarSesion, iniciarSesion );

  const { email, password } = valores;

  async function iniciarSesion() {
    try {
      const usuario = await firebase.login(email, password);
      if(usuario.user.emailVerified === true) {
        Router.push('/perfil');
      } else {
        guardarError(error.message)
      }
      
    } catch (error) {
      guardarError(error.message);
    }
  }

  return (
    <div>
      <Layout />
    
      <h1 className="text-5xl font-bold text-center">Iniciar Sesión</h1>
    
      <Link href="/registrate">
        <p className="text-blue-700 underline ml-16 cursor-pointer w-72 text-lg sm:m-auto">¿Aún no tienes cuenta? Da clíck aquí</p>
      </Link>

      <form
        onSubmit={handleSubmit}
        noValidate
      >
        <Espacio>
          <label htmlFor="email" className="sr-only">Correo electrónico</label>
          <input 
            type="email"
            id="email"
            placeholder="Correo electrónico"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Espacio>
        {errores.email && <Error>{errores.email}</Error>}

        <Espacio>
          <label htmlFor="password" className="sr-only">Contraseña</label>
          <input 
            type="password"
            id="password"
            placeholder="Contraseña"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Espacio>
        {errores.password && <Error>{errores.password}</Error>}

        {error && <ErrorCuentaExistente>Cuenta no verificada o no existente</ErrorCuentaExistente>}

        <Espacio>
          <BotonChico
            type="submit"
            value="Iniciar Sesión"
          />
        </Espacio>

        <p className="text-4xl text-center mt-10"> - o - </p>

        <Espacio>

        </Espacio>
      </form>
    </div>
  )
}