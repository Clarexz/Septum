import app from 'firebase/app';
import 'firebase/auth';

import firebaseConfig from './config';

class Firebase {
    constructor() {
        if(!app.apps.length) {
            app.initializeApp(firebaseConfig)
        }
        this.auth = app.auth();
    }

    //Registrar un usuario
    async registrar(nombre, apellido, sexo, email, password) {
        const nuevoUsuario = await this.auth.createUserWithEmailAndPassword(email, password);

        return await nuevoUsuario.user.updateProfile({
            displayName : nombre + ' ' + apellido
        })
    }

    async verificar() {
        var user = this.auth.currentUser;

        user.sendEmailVerification().then(function() {
        // Email sent.
        }).catch(function(error) {
        // An error happened.
        });
    }
}

const firebase = new Firebase();

export default firebase;