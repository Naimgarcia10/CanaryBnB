/* campos no vacíos */
function nonEmptyFields(inputsClass) {
    var empty = false;
    if (inputsClass.length == 1) {
        var inputs = document.querySelectorAll(inputsClass[0]);
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].value == "") {
                empty = true;
                break;
            }
        }
        return empty;
    } else {
        for (var i = 0; i < inputsClass.length; i++) {
            var inputs = document.querySelectorAll(inputsClass[i]);
            for (var j = 0; j < inputs.length; j++) {
                if (inputs[j].value == "") {
                    empty = true;
                    break;
                }
            }
        }
    }
}

/* validar campos */
const expresiones = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // Validar correo
    cvv: /^[0-9]{3}$/,
    card_number: /^[0-9]{16}$/, // 16 digitos
    expired_date: /^[0-9]{2}\/[0-9]{4}$/ // 2 digitos para el mes y 4 para el año
}

function fieldsValidation(formId, inputsClass) {
    var inputs = document.querySelectorAll(inputsClass[0]);
    if (formId == '#login_form') {
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].name == 'email') {
                if (expresiones.correo.test(inputs[i].value)) {
                    document.querySelector('#email').classList.remove('error');
                } else {
                    window.alert("Correo inválido, un ejemplo de correo válido es: john@correo.com");
                }
            }
            if (inputs[i].name == 'password') {
                if (expresiones.password.test(inputs[i].value)) {
                    document.querySelector('#password').classList.remove('error');
                } else {
                    window.alert("Contraseña inválida, por favor introduzca una contraseña de 4 a 12 dígitos");
                    e.preventDefault();
                }
            }
        }
    } else if (formId == '#register_form') {
        for (var i = 0; i < inputs.length; i++) {
            if (inputs[i].name == 'full_name') {
                if (expresiones.name.test(inputs[i].value)) {
                    document.querySelector('#full_name').classList.remove('error');
                } else {
                    window.alert("Nombre inválido, por favor introduzca un nombre válido, sin caracteres especiales ni números");
                }
            }
            if (inputs[i].name == 'email') {
                if (expresiones.correo.test(inputs[i].value)) {
                    document.querySelector('#email').classList.remove('error');
                } else {
                    window.alert("Correo inválido, un ejemplo de correo válido es: john@correo.com");
                }
            }
            if (inputs[i].name == 'password') {
                if (expresiones.password.test(inputs[i].value)) {
                    document.querySelector('#password').classList.remove('error');
                } else {
                    window.alert("Contraseña inválida, por favor introduzca una contraseña de 4 a 12 dígitos");
                }
            }
            if (inputs[i].name == 'password2') {
                if (inputs[i].value != inputs[i - 1].value) {
                    window.alert("Las contraseñas deben coincidir");
                    e.preventDefault();
                } else {
                    document.querySelector('#password2').classList.remove('error');
                }
            }
        }
    } else if (formId == '#paymentGateaway_form') {
        for (var i = 0; i < inputsClass.length; i++) {
            inputs = document.querySelectorAll(inputsClass[i]);
            for (var j = 0; j < inputs.length; j++) {
                if (inputs[j].name == 'card_number') {
                    if (expresiones.card_number.test(inputs[j].value)) {
                        document.querySelector('#card_number').classList.remove('error');
                    } else {
                        window.alert("Número de tarjeta inválido, por favor introduzca un número de tarjeta de 16 digitos");
                    }
                }
                if (inputs[j].name == 'card_owner') {
                    if (expresiones.name.test(inputs[j].value)) {
                        document.querySelector('#card_owner').classList.remove('error');
                    } else {
                        window.alert("Nombre de tarjeta inválido, por favor introduzca un nombre válido, sin caracteres especiales ni números");
                    }
                }
                if (inputs[j].name == 'expired_date') {
                    if (expresiones.expired_date.test(inputs[j].value)) {
                        document.querySelector('#expired_date').classList.remove('error');
                    } else {
                        window.alert("Fecha de expiración inválida, por favor introduzca una fecha válida, en el formato MM/AAAA");
                    }
                }
                if (inputs[j].name == 'cvv') {
                    if (expresiones.cvv.test(inputs[j].value)) {
                        document.querySelector('#cvv').classList.remove('error');
                    } else {
                        window.alert("CVV inválido, por favor introduzca un CVV de 3 digitos");
                    }
                }
            }
        }
    }

}

/* validar formulario */
function validateForm(formId, inputsClass) {
    if (nonEmptyFields(inputsClass)) {
        window.alert('Todos los campos son obligatorios');
        e.preventDefault();
        return false;
    }
    fieldsValidation(formId, inputsClass);
}


/* registro de usuarios */
var usersList = []
function addUserToSystem() {
    var user = {
        full_name: document.querySelector('#full_name').value,
        email: document.querySelector('#email').value,
        birthdate: document.querySelector('#birthdate').value,
        password: document.querySelector('#password').value
    }
    if (usersList == null) {
        usersList = [];
    }
    usersList.push(user);
    localStorage.setItem('users', JSON.stringify(usersList));
    console.log(user);
    // Cargar el archivo JSON existente
    fetch('../data/users.json')
        .then(response => response.json())
        .then(data => {
            // Agregar el nuevo objeto al final del arreglo
            data.push();

            // Convertir el objeto actualizado a una cadena JSON
            const updatedData = JSON.stringify(data);

            // Guardar la cadena JSON actualizada en el archivo
            fetch('../data/users.json', {
                method: 'PUT',
                body: updatedData,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        });

    /* a cambiar pal siguiente sprint */
    window.alert('Usuario registrado con éxito');
    window.location.href = 'login.html';
}

/* register */
function registerAction(formId, inputsClass) {
    if (nonEmptyFields(inputsClass)) {
        window.alert('Todos los campos son obligatorios');
        e.preventDefault();
        return false;
    }
    fieldsValidation(formId, inputsClass);
    addUserToSystem();
}

/* validar usuarios */
function validateUser() {
    var users = JSON.parse(localStorage.getItem('users'));
    var email = document.querySelector('#email').value;
    var password = document.querySelector('#password').value;
    var user = users.find(user => user.email == email && user.password == password);
    if (user == null) {
        window.alert('Usuario no registrado');
        e.preventDefault();
        return false;
    }
    var userName = user.full_name.split(' ');
    window.alert('Bienvenido ' + userName[0]);
    window.location.href = 'homePage_logged.html';
    document.getElementById("userName").innerHTML = "hola";
}

/* login */
function loginAction(formId, inputsClass) {
    if (nonEmptyFields(inputsClass)) {
        window.alert('Todos los campos son obligatorios');
        e.preventDefault();
        return false;
    }
    fieldsValidation(formId, inputsClass);
    validateUser();
}