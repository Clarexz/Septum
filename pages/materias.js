import React, { useState, useEffect, useContext } from 'react';
import Layout from '../Components/Layouts/Layout';
import BloquesMaterias from '../Components/UI/BloquesMaterias';

//Context
import { DarkModeContext } from '../Context/DarkModeContext';
import { FirebaseContext } from '../Firebase';

const Materias = () => {

  const { darkMode } = useContext(DarkModeContext);

  //consulta a la base de datos para traer las materias
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const obtenerMaterias = () => {
      firebase.db.collection('materias').orderBy("titulo", "asc").onSnapshot(manejarSnapshot);
    }
    obtenerMaterias();
  }, [])

  const [ materiadb, setMateriadb ] = useState([]);

  function manejarSnapshot(snapshot) {
    const materias = snapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      }
    });

    setMateriadb(materias);
  }

  return (
    <div className={darkMode ? 'transition duration-700 bg-black' : 'transition duration-700'}>
      <Layout />

      <h1 className={darkMode ? "transition duration-700 text-white text-5xl font-bold text-center" : "transition duration-700 text-5xl font-bold text-center"}>Materias</h1>

      {materiadb.map(materia => (
        <BloquesMaterias 
          key={materia.id}
          materia={materia}
        />
      ))}
    </div>
  )
}

export default Materias;