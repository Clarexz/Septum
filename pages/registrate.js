import React from 'react';
import Layout from '../Components/Layouts/Layout';
import { Espacio, BotonChico } from '../Components/UI/Formularios';

const Registrate = () => {
  return (
    <div>
      <Layout />
      <h1 className="text-5xl font-bold text-center pt-12">Regístrate</h1>

      <form>
        <Espacio>
          <label htmlFor="nombre" className="sr-only">Nombre(s)</label>
          <input 
            type="text"
            id="nombre"
            placeholder="Nombre(s)"
            name="nombre"
          />
        </Espacio>

        <Espacio>
          <label htmlFor="apellido" className="sr-only">Apellido(s)</label>
          <input 
            type="text"
            id="apellido"
            placeholder="Apellido(s)"
            name="apellido"
          />
        </Espacio>

        <Espacio>
          <label htmlFor="email" className="sr-only">Correo electrónico</label>
          <input 
            type="email"
            id="email"
            placeholder="Correo electrónico"
            name="email"
          />
        </Espacio>

        <Espacio>
          <label htmlFor="emailconfirm" className="sr-only">Confirma tu correo</label>
          <input 
            type="email"
            id="emailconfirm"
            placeholder="Confirma tu correo"
            name="emailconfirm"
          />
        </Espacio>

        <Espacio>
          <label htmlFor="password" className="sr-only">Contraseña</label>
          <input 
            type="password"
            id="password"
            placeholder="Contraseña"
            name="password"
          />
        </Espacio>

        <Espacio>
          <label htmlFor="passwordconfirm" className="sr-only">Confirma tu contraseña</label>
          <input 
            type="password"
            id="passwordconfirm"
            placeholder="Confirma tu contraseña"
            name="passwordconfirm"
          />
        </Espacio>

        <Espacio>
          <select defaultValue="sexo">
            <option value="sexo" disabled>Sexo</option>
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
          </select>
        </Espacio>

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