export default function validarCrearCuenta(valores) {

    let errores = {};

    if(!valores.nombre) {
        errores.nombre = "El nombre es obligatorio y no se aceptan caracteres especiales"
    };

    if(!valores.apellido) {
        errores.apellido = "El apellido es obligatorio y no se aceptan caracteres especiales"
    };

    if(!valores.email) {
        errores.email = "El email es obligatorio y no se aceptan caracteres especiales"
    } else if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(valores.email) ) {
        errores.email = "El email es obligatorio y no se aceptan caracteres especiales"
    };

    if(valores.emailconfirm !== valores.email) {
        errores.emailconfirm = "El email no coincide"
    };

    if(!valores.password) {
        errores.password = "La contraseña es obligatoria"
    } else if (valores.password.length < 8) {
        errores.password = "Mínimo 8 caracteres"
    };

    if(valores.passwordconfirm !== valores.password) {
        errores.passwordconfirm = "La contraseña no coincide"
    };

    return errores;
}