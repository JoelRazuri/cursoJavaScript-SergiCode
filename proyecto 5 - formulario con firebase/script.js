const d = document;
const form = d.getElementById('formulario');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Validar nombre
    const name = d.getElementById('name');
    const nameError = d.getElementById('nameError');

    if (name.value.trim() === '') {
        nameError.textContent = 'Por favor, introduce tu nombre';
        nameError.classList.add('error-message');
    } else {
        nameError.textContent = '';
        nameError.classList.remove('error-message');
    }

    // Validar email
    const email = d.getElementById('email');
    const emailError = d.getElementById('emailError');
    let emailPattern = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if (email.value.trim() === '') {
        emailError.textContent = 'Por favor, introduce tu correo';
        emailError.classList.add('error-message');
    } else {
        if (!emailPattern.test(email.value)) {
            emailError.textContent = 'Por favor, introduce un correo valido';
            emailError.classList.add('error-message');
        } else {
            emailError.textContent = '';
            emailError.classList.remove('error-message');
        }
    }

    // Validar contraseña
    const password = d.getElementById('password');
    const passwordError = d.getElementById('passwordError');

    if (password.value.trim() === '') {
        passwordError.textContent = 'Por favor, introduce tu contraseña';
        passwordError.classList.add('error-message');
    } else {
        if (password.value.length < 8) {
            passwordError.textContent = 'La contraseña debe tener al menos 8 caracteres';
            passwordError.classList.add('error-message');
        } else {
            passwordError.textContent = '';
            passwordError.classList.remove('error-message');
        }
    }

    // Validar formulario
    if (!nameError.textContent && !emailError.textContent && !passwordError.textContent) {
        alert('Formulario enviado correctamente');
        form.reset();
    }
})

