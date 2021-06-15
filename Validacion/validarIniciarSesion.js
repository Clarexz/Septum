export default function validarIniciarSesion(valores) {

    let errores = {};

    if(!valores.email) {
        errores.email = "El email es obligatorio y no se aceptan caracteres especiales"
    } else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email) ) {
        errores.email = "El email es obligatorio y no se aceptan caracteres especiales"
    };

    if(!valores.password) {
        errores.password = "La contraseña es obligatoria"
    } else if (valores.password.length < 8) {
        errores.password = "Mínimo 8 caracteres"
    };

    return errores;
}