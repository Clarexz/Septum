import '../styles/globals.css'
import '../styles/normalize.css'
import firebase, { FirebaseContext } from '../Firebase';
import useAutenticacion from '../Hooks/useAutenticacion';

const MyApp = props => {

  const usuario = useAutenticacion();

  const {Component, pageProps} = props;

  return (
      <FirebaseContext.Provider
        value={{
          firebase,
          usuario
        }}
      >
        <Component {...pageProps} />
      </FirebaseContext.Provider>
    )
}

export default MyApp
