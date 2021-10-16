import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import Router from 'next/router';

import firebaseConfig from './config';

class Firebase {
    constructor() {
        if(!app.apps.length) {
            app.initializeApp(firebaseConfig)
        }
        this.auth = app.auth();
        this.db = app.firestore();
        this.storage = app.storage();
    }

    //Registrar un usuario
    async registrar(nombre, apellido, email, password) {
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

    //Iniciar sesión con Google
        //Algún día lo lograré :(


    //Cerrar sesión del usuario
    async cerrarSesion() {
        await this.auth.signOut();
        Router.push('/');
    }

    //Restablecimiento de contraseña ERROR
    async mandarPassword(email) {
        return this.auth.sendPasswordResetEmail(email)
        .then(() => {
            // Password reset email sent!
            // ..
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
    }

    //Eliminar cuenta
    async cuentaEliminada() {
        var user = this.auth.currentUser;

        // User re-authenticated.
        user.delete().then(() => {
            // User deleted.
        }).catch((error) => {
            // An error ocurred
            // ...
        }); 
    }

    //TIENES QUE HACER LO DE APPCHECK
}

const firebase = new Firebase();

export default firebase;