import React, { useState, useContext } from 'react';
import Layout from '../Components/Layouts/Layout';
import Router from 'next/router';
import { Espacio, BotonChico, Error, ErrorCuentaExistente } from '../Components/UI/Formularios';

import firebase from '../Firebase';

import { DarkModeContext } from '../Context/DarkModeContext';

//validaciones
import useValidacion from '../Hooks/useValidacion';
import validarCrearCuenta from '../Validacion/validarCrearCuenta';

const STATE_INICIAL = {
  nombre: '',
  apellido: '',
  email: '',
  emailconfirm: '',
  password: '',
  passwordconfirm: '',
};

const Registrate = () => {

  const [ error, guardarError ] = useState(false)

  const { valores, errores, handleSubmit, handleChange} = useValidacion( STATE_INICIAL, validarCrearCuenta, crearCuenta );

  const { nombre, apellido, email, emailconfirm, password, passwordconfirm } = valores;

  async function crearCuenta() {
    try {
      await firebase.registrar(nombre, apellido, email, password);
      Router.push('/verificacion');
      firebase.verificar();
    } catch (error) {
      console.error('Hubo un error al crear el usuario', error.message);
      guardarError(error.message);
    }
  };

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'transition duration-700 bg-black' : 'transition duration-700'}>
      <Layout />
      <h1 className={darkMode ? "transition duration-700 text-white text-5xl font-bold text-center" : "transition duration-700 text-5xl font-bold text-center"}>Regístrate</h1>

      <form
        onSubmit={handleSubmit}
        noValidate
      >
        <Espacio
          bgColor={darkMode ? 'var(--grisInputDARK)' : 'var(--grisInput)'}
          textColor={darkMode ? 'white' : 'black'}
        >
          <label htmlFor="nombre" className="sr-only">Nombre(s)</label>
          <input 
            type="text"
            id="nombre"
            placeholder="Nombre(s)"
            name="nombre"
            pattern="^[A-ZÁÉÍÓÚÑa-záéíóúñ]+$" 
            maxLength="35"
            value={nombre}
            onChange={handleChange}
          />
        </Espacio>
        {errores.nombre && <Error>{errores.nombre}</Error>}

        <Espacio
          bgColor={darkMode ? 'var(--grisInputDARK)' : 'var(--grisInput)'}
          textColor={darkMode ? 'white' : 'black'}
        >
          <label htmlFor="apellido" className="sr-only">Apellido(s)</label>
          <input 
            type="text"
            id="apellido"
            placeholder="Apellido(s)"
            name="apellido"
            pattern="^[A-ZÁÉÍÓÚÑa-záéíóúñ]+$" 
            maxLength="35"
            value={apellido}
            onChange={handleChange}
          />
        </Espacio>
        {errores.apellido && <Error>{errores.apellido}</Error>}

        <Espacio
          bgColor={darkMode ? 'var(--grisInputDARK)' : 'var(--grisInput)'}
          textColor={darkMode ? 'white' : 'black'}
        >
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

        <Espacio
          bgColor={darkMode ? 'var(--grisInputDARK)' : 'var(--grisInput)'}
          textColor={darkMode ? 'white' : 'black'}
        >
          <label htmlFor="emailconfirm" className="sr-only">Confirma tu correo</label>
          <input 
            type="email"
            id="emailconfirm"
            placeholder="Confirma tu correo"
            name="emailconfirm"
            value={emailconfirm}
            onChange={handleChange}
          />
        </Espacio>
        {errores.emailconfirm && <Error>{errores.emailconfirm}</Error>}

        <Espacio
          bgColor={darkMode ? 'var(--grisInputDARK)' : 'var(--grisInput)'}
          textColor={darkMode ? 'white' : 'black'}
        >
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

        <Espacio
          bgColor={darkMode ? 'var(--grisInputDARK)' : 'var(--grisInput)'}
          textColor={darkMode ? 'white' : 'black'}
        >
          <label htmlFor="passwordconfirm" className="sr-only">Confirma tu contraseña</label>
          <input 
            type="password"
            id="passwordconfirm"
            placeholder="Confirma tu contraseña"
            name="passwordconfirm"
            value={passwordconfirm}
            onChange={handleChange}
          />
        </Espacio>
        {errores.passwordconfirm && <Error>{errores.passwordconfirm}</Error>}

        {error && <ErrorCuentaExistente>{error}</ErrorCuentaExistente>}

        <Espacio>
          <BotonChico
            type="submit"
            value="Crear Cuenta"
            bgColor={darkMode ? "var(--azulDARK)!important" : "var(--azul)!important"}
            className="mb-16"
          />
        </Espacio>
      </form>
    </div>
  )
}

export default Registrate;