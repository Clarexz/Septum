import React, { useState, useEffect, useContext } from 'react';
import Layout from '../../Components/Layouts/Layout';
import { useRouter } from 'next/router';
import BloquesTemas from '../../Components/UI/BloquesTemas';

//Contexts
import { FirebaseContext } from '../../Firebase';
import { DarkModeContext } from '../../Context/DarkModeContext';

const Materia = () => {

    //Context de DarkMode
    const { darkMode } = useContext(DarkModeContext);

    //Routing para obtener el id actual
    const router = useRouter();
    const {query: {id}} = router;

    //Context de Firebase
    const { firebase } = useContext(FirebaseContext);


    //Obtener título y temario
    const [ tituloMateria, setTituloMateria ] = useState("");
    const [ temasdb, setTemasdb ] = useState([]);

    useEffect(() => {
        if(id) {
            const obtenerTitulo = async () => {
                const tituloQuery = await firebase.db.collection('materias').doc(id);
                const titulo = await tituloQuery.get();
                setTituloMateria(titulo.data().titulo);
            }
            obtenerTitulo();

            
            const obtenerTemas = async() => {
                firebase.db.collection('materias').doc(id).collection(`temario-${id}`).orderBy("orden", "asc").onSnapshot(manejarSnapshot);
            }
            obtenerTemas();
        }
    }, [id]);

    function manejarSnapshot(snapshot) {
        const temas = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data()
          }
        });
    
        setTemasdb(temas);
      }


    return ( 
        <div className={darkMode ? 'transition duration-700 bg-black' : 'transition duration-700'}>
            <Layout />
            <h1 className={darkMode ? "transition duration-700 text-white text-5xl font-bold text-center" : "transition duration-700 text-5xl font-bold text-center"}>{tituloMateria}</h1>

            {temasdb.map(tema => (
                <BloquesTemas 
                    key={tema.id}
                    tema={tema}
                />
            ))}
        </div>
     );
}
 
export default Materia;