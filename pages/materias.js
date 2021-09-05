import React, { useContext } from 'react';
import Layout from '../Components/Layouts/Layout';

import { DarkModeContext } from '../Context/DarkModeContext';

const Materias = () => {

  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'transition duration-700 bg-black' : 'transition duration-700'}>
      <Layout />
      <h1 className={darkMode ? "transition duration-700 text-white text-5xl font-bold text-center" : "transition duration-700 text-5xl font-bold text-center"}>Materias</h1>
    </div>
  )
}

export default Materias;