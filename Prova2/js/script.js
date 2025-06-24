
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
       if (contactForm) {
        
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
            validateForm();
        });
    }
});


function clearErrors() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => {
        msg.textContent = '';
    });
    
    document.getElementById('formFeedback').textContent = '';
    document.getElementById('formFeedback').classList.remove('success-message', 'error-message'); 
}

function displayError(fieldId, message) {
    const errorElement = document.getElementById(fieldId + 'Error');
    if (errorElement) {
        errorElement.textContent = message;
    }
}


function displayFeedback(message, isSuccess) {
    const feedbackElement = document.getElementById('formFeedback');
    if (feedbackElement) {
        feedbackElement.textContent = message;
        if (isSuccess) {
            feedbackElement.classList.remove('error-message');
            feedbackElement.classList.add('success-message');
        } else {
            feedbackElement.classList.remove('success-message');
            feedbackElement.classList.add('error-message');
        }
    }
}

function validateForm() {
    clearErrors();

    let isValid = true; 

    const nome = document.getElementById('nome').value.trim(); 
    const email = document.getElementById('email').value.trim();
    const assunto = document.getElementById('assunto').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (nome === '') {
        displayError('nome', 'Por favor, preencha seu nome.');
        isValid = false;
    }
    if (email === '') {
        displayError('email', 'Por favor, preencha seu e-mail.');
        isValid = false;
    }
    if (assunto === '') {
        displayError('assunto', 'Por favor, preencha o assunto.');
        isValid = false;
    }
    if (mensagem === '') {
        displayError('mensagem', 'Por favor, preencha sua mensagem.');
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email !== '' && !emailRegex.test(email)) { 
        displayError('email', 'Por favor, insira um e-mail válido.');
        isValid = false;
    }

    
    if (mensagem !== '' && mensagem.length < 20) { 
        displayError('mensagem', 'A mensagem deve ter no mínimo 20 caracteres.');
        isValid = false;
    }

    if (isValid) {
        displayFeedback('Mensagem enviada com sucesso! Em breve entraremos em contato.', true);
        contactForm.reset(); 
    } else {
        displayFeedback('Por favor, corrija os erros no formulário.', false);
    }
}