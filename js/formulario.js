const formulario1 = document.getElementById("formulario1");
const inputs1 = document.querySelectorAll('#formulario1 input');
const formulario2 = document.getElementById("formulario2");
const inputs2 = document.querySelectorAll('#formulario2 input');

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{8}$/ // 7 a 14 numeros.
}

const campos = {
    correo: false,
    password: false,
    nombre: false,
    apellido: false,
    telefono: false,
    nuevo_correo: false,
    new_password: false
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "correo":
            validarCampo(expresiones.correo, e.target, e.target.name);
            break;
        case "password":
            validarCampo(expresiones.password, e.target, e.target.name);
            break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, e.target.name);
            break;
        case "apellido":
            validarCampo(expresiones.nombre, e.target, e.target.name);
            break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, e.target.name);
            break;
        case "nuevo_correo":
            validarCampo(expresiones.correo, e.target, e.target.name);
            break;
        case "new_password":
            validarCampo(expresiones.password, e.target, e.target.name);
            validarPassword2();
            break;
        case "new_password2":
            validarPassword2();
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

const validarPassword2 = () => {
    const inputPassword1 = document.getElementById('new_password');
    const inputPassword2 = document.getElementById('new_password2');

    if (inputPassword1.value !== inputPassword2.value) {
        document.getElementById(`grupo__new_password2`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__new_password2`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__new_password2 i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__new_password2 i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__new_password2 .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos['new_password'] = false;
    } else {
        document.getElementById(`grupo__new_password2`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__new_password2`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__new_password2 i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__new_password2 i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__new_password2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos['new_password'] = true;
    }
}

inputs1.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

inputs2.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario1.addEventListener('submit', (e) => {
    e.preventDefault();

    if (campos.correo && campos.password ) {
        formulario1.reset();

        document.getElementById("formulario__mensaje-exito1").classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById("formulario__mensaje-exito1").classList.remove('formulario__mensaje-exito-activo');
        }, 5000);

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });

        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
});

formulario2.addEventListener('submit', (e) => {
    e.preventDefault();

    const politicas = document.getElementById('politicas');

    if (campos.nombre && campos.apellido && campos.telefono && campos.nuevo_correo && campos.new_password && politicas.checked ) {
        formulario2.reset();

        document.getElementById("formulario__mensaje-exito2").classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById("formulario__mensaje-exito2").classList.remove('formulario__mensaje-exito-activo');
        }, 5000);

        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });

        document.getElementById('formulario__mensaje2').classList.remove('formulario__mensaje-activo');
    } else {
        document.getElementById('formulario__mensaje2').classList.add('formulario__mensaje-activo');
    }
});