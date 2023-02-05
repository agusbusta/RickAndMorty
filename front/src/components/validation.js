const validation = (userData) => {

    let errors = [];

    if (!userData.username) {
        return "El nombre de usuario no puede estar vacío.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.username)) {
        errors.username = "El nombre de usuario debe ser un email válido.";
    } else if (userData.username.length > 35) {
        errors.username = "El nombre de usuario no puede tener más de 35 caracteres.";
    }
    if (!userData.password.match(/\d/)) {
        errors.password = "La contraseña debe tener al menos un número.";
    } else if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = "La contraseña debe tener una longitud entre 6 y 10 caracteres.";
    }
    return errors;
}


export default validation; 