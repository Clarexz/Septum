import React, { useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

import Layout from '../../Components/Layouts/Layout';

//Contexts
import { DarkModeContext } from '../../Context/DarkModeContext';
import { FirebaseContext } from '../../Firebase';

const Tema = () => {

    //Context de Firebase
    const { firebase } = useContext(FirebaseContext);

    //Context de DarkMode
    const { darkMode } = useContext(DarkModeContext);

    //Routing para obtener el id actual
    const router = useRouter();
    const { query: {tid}} = router;

    //State y Effect para traer el contenido
    const [ obtenerTema, setObtenerTema ] = useState("");

    useEffect(() => {
        if(tid) {
            if(tid) {
                const obtenerInfoTema = async () => {
                    const infoTemaQuery = await firebase.db.collection('temas').doc(tid);
                    const infoTema = await infoTemaQuery.get();
                    setObtenerTema(infoTema.data().contenido);
                }
                obtenerInfoTema();
            }
        }
    }, [tid])

    return ( 
        <div>
            <Layout/>
            <h1>Desde {tid}</h1>
            <p>{obtenerTema}</p>
        </div>
     );
}
 
export default Tema;