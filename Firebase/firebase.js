import app from 'firebase/app';
import 'firebase/auth';
import Router from 'next/router';

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

    //Verificación de email por correo
    async verificar() {
        var user = this.auth.currentUser;

        user.sendEmailVerification().then(function() {
        // Email sent.
        }).catch(function(error) {
        // An error happened.
        });
    }

    //Iniciar sesión
    async login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    //Cerrar sesión del usuario
    async cerrarSesion() {
        await this.auth.signOut();
        Router.push('/');
    }
}

const firebase = new Firebase();

export default firebase;