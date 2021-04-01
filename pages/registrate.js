import React from 'react';
import Layout from '../Components/Layouts/Layout';
import { Espacio, BotonChico, Error } from '../Components/UI/Formularios';

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
  sexo: ''

};

const Registrate = () => {

  const { valores, errores, handleSubmit, handleChange} = useValidacion( STATE_INICIAL, validarCrearCuenta, crearCuenta );

  const { nombre, apellido, email, emailconfirm, password, passwordconfirm, sexo } = valores;

  function crearCuenta() {
    console.log("Creando cuenta");
  };

  return (
    <div>
      <Layout />
      <h1 className="text-5xl font-bold text-center pt-12">Regístrate</h1>

      <form
        onSubmit={handleSubmit}
        noValidate
      >
        <Espacio>
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

        <Espacio>
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

        <Espacio>
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

        <Espacio>
          <select
            name="sexo"
            value={sexo}
            onChange={handleChange}  
          >
            <option value="" disabled>Sexo</option>
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
          </select>
        </Espacio>
        {errores.sexo && <Error>{errores.sexo}</Error>}

        <Espacio>
          <BotonChico
            type="submit"
            value="Crear Cuenta"
          />
        </Espacio>
      </form>
    </div>
  )
}

export default Registrate;