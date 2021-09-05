import '../styles/globals.css'
import '../styles/normalize.css'
import firebase, { FirebaseContext } from '../Firebase';
import useAutenticacion from '../Hooks/useAutenticacion';

import DarkModeProvider from '../Context/DarkModeContext';

const MyApp = props => {

  const usuario = useAutenticacion();

  const {Component, pageProps} = props;

  return (
    <DarkModeProvider>
      <FirebaseContext.Provider
        value={{
          firebase,
          usuario
        }}
      >
        <Component {...pageProps} />
      </FirebaseContext.Provider>
    </DarkModeProvider>
      
  )
}

export default MyApp
