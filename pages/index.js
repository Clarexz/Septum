import React, { useState, useContext } from 'react';
import Layout from '../Components/Layouts/Layout';
import Router from 'next/router';
import Link from 'next/link';
import { Espacio, BotonChico, Error, ErrorCuentaExistente } from '../Components/UI/Formularios';
import { TextoLinksAzul } from '../Components/UI/Especificos';

import firebase from '../Firebase';

import { DarkModeContext } from '../Context/DarkModeContext';

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
        Router.push('/materias');
        console.log(usuario);
      } else {
        guardarError(error.message)
      }
      
    } catch (error) {
      guardarError(error.message);
    }
  }

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'transition duration-700 bg-black h-screen' : 'transition duration-700'}>
      <Layout />
      
      <h1 className={darkMode ? "transition duration-700 text-white text-5xl font-bold text-center" : "transition duration-700 text-5xl font-bold text-center"}>Iniciar Sesión</h1>
    
      <Link href="/registrate">
        <TextoLinksAzul 
          className="underline ml-16 cursor-pointer w-72 text-lg sm:m-auto"
          textColor={darkMode ? 'var(--azulLinksDARK)' : 'var(--azulLinks)'}  
        >¿Aún no tienes cuenta? Da clíck aquí</TextoLinksAzul>
      </Link>

      <form
        onSubmit={handleSubmit}
        noValidate
      >
        <Espacio
          bgColor={darkMode ? 'var(--grisInputDARK)' : 'var(--grisInput)'}
        >
          <label htmlFor="email" className="sr-only">Correo electrónico</label>
          <input 
            type="email"
            id="email"
            placeholder="Correo electrónico"
            name="email"
            value={email}
            onChange={handleChange}
            className={darkMode ? "text-white" : ""}
          />
        </Espacio>
        {errores.email && <Error>{errores.email}</Error>}

        <Espacio
          bgColor={darkMode ? 'var(--grisInputDARK)' : 'var(--grisInput)'}
        >
          <label htmlFor="password" className="sr-only">Contraseña</label>
          <input 
            type="password"
            id="password"
            placeholder="Contraseña"
            name="password"
            value={password}
            onChange={handleChange}
            className={darkMode ? "text-white" : ""}
          />
        </Espacio>
        {errores.password && <Error>{errores.password}</Error>}

        {error && <ErrorCuentaExistente>Cuenta no verificada o no existente</ErrorCuentaExistente>}
        
        <Link href="/password">
          <TextoLinksAzul 
          className="underline ml-16 cursor-pointer w-72 text-lg sm:m-auto pt-4"
          textColor={darkMode ? 'var(--azulLinksDARK)' : 'var(--azulLinks)'}
          >¿Olvidaste tu contraseña?</TextoLinksAzul>
        </Link>

        <Espacio>
          <BotonChico
            type="submit"
            value="Entrar"
            bgColor={darkMode ? "var(--azulDARK)!important" : "var(--azul)!important"}
          />
        </Espacio>

        
      </form>
    </div>
  )
}