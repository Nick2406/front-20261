import './style.css';

const formLogin = document.getElementById('formLogin');
const inputEmail = document.getElementById('email');
const inputSenha = document.getElementById('senha');
const errorEmail = document.getElementById('errorEmail');
const errorSenha = document.getElementById('errorSenha');

if (formLogin) {
    formLogin.addEventListener('submit', function(event) {
        event.preventDefault();
        errorEmail.textContent = '';
        errorSenha.textContent = '';
        let formularioValido = true;
        if(
            inputEmail.value.trim() === ''
        ) { errorEmail.textContent = 'O campo de e-mail é obrigatório.';
            formularioValido = false;
        }
        
        if(
            inputSenha.value.trim() === ''
        ) { errorSenha.textContent = 'O campo de senha é obrigatório.';
            formularioValido = false;
        }
        if(formularioValido === true) {
            window.location.href = 'index.html';
        } 
    });
}