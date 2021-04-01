import '../styles/globals.css'
import '../styles/normalize.css'
import firebase, { FirebaseContext } from '../Firebase';

function MyApp({ Component, pageProps }) {
  return (
      <FirebaseContext.Provider
        value={{
          firebase
        }}
      >
        <Component {...pageProps} />
      </FirebaseContext.Provider>
    )
}

export default MyApp
