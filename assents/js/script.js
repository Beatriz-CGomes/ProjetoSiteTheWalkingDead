/*
- por Tag = getElementByTagName()
- por Id = getElementById()
- por Nome = getElementByName()
- por Classe = getElementsByClassName()
- por  Seletor = querySelector()
*/

let nome = window.document.getElementById("nome");
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');

let nomeOk = false;
let emailOk = false;
let assuntoOk = false;



function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome invalido!'
        txtNome.style.color = 'red';
        txtNome.style.fontSize = '13px'
        txtNome.style.textAlign = 'center';
        txtNome.style.marginTop = '6px';
     
    } else {
        txtNome.innerHTML = 'Nome valido'
        txtNome.style.color = 'green';
        txtNome.style.fontSize = '13px'
        txtNome.style.textAlign = 'center';
        txtNome.style.marginTop = '6px';
        nomeOk = true;
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail');
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail invalido';
        txtEmail.style.color = 'red';
        txtEmail.style.fontSize = '13px'
        txtEmail.style.textAlign = 'center';
        txtEmail.style.marginTop = '6px';

    } else {
        txtEmail.innerHTML = 'E-mail valido!';
        txtEmail.style.color = 'green';
        txtEmail.style.fontSize = '13px'
        txtEmail.style.textAlign = 'center';
        txtEmail.style.marginTop = '6px';
        emailOk = true
    }

}

function validaAssunto() {
   let  txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres';
        txtAssunto.style.color = 'red';
        txtAssunto.style.display = 'block';
        txtAssunto.style.fontSize = '13px'
        txtAssunto.style.textAlign = 'center';
        txtAssunto.style.marginTop = '6px';
    } else {
        txtAssunto.style.display = 'none';
        txtAssunto.style.fontSize = '13px'
        txtAssunto.style.textAlign = 'center';
        txtAssunto.style.marginTop = '6px';
        assuntoOk = true
    }

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert("Formulário enviado com sucesso")
    } else {
        alert('Preencha o formalário corretamente antes de enviar');
    }
}

}