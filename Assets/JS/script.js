/*
Case Sensitive = reconhece letras maiusculas e minusculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let telefone = document.querySelector('#telefone')
let mapa = document.querySelector('#mapa')
let nomeOk = false
let emailOk = false
let assuntoOk = false

nome.style.width = '100%'
email.style.width = '100%'
telefone.style.width='100%'



function validaNome() {

    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 3) {
       txtNome.innerHTML = 'Nome Inválido'
       txtNome.style.color = 'red' 
    } else {
       txtNome.innerHTML = 'Nome Válido'
       txtNome.style.color = 'yellow'
       nomeOk = true
    }
 
 }

 function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail') 
 
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1 ) {
       txtEmail.innerHTML = 'E-mail inválido'
       txtEmail.style.color = 'red'
    } else {
       txtEmail.innerHTML = 'E-mail válido'
       txtEmail.style.color = 'yellow'
       emailOk = true
    }
 }

 function validaAssunto(){
     let textAssunto = document.querySelector('#txtAssunto')

     if (assunto.value.length >= 10){
        textAssunto.innerHTML = 'Máximo de 100 caracteres'
        textAssunto.style.color = 'red'
        textAssunto.style.display = 'block'
        assuntoOk = true
     } else {
         textAssunto.style.display = 'none'
         assuntoOk = true
     }
 }

 function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
       alert ('Formulário enviado com sucesso!')
    } else {
       alert ('Preencha o formulário corretamente antes de enviar...')
    }
 }

 function mapaZoom(){
    mapa.style.width = '700px'
    mapa.style.height = '500px'
 }

 function mapaNormal(){
    mapa.style.width = '450px'
    mapa.style.height = '250px'
 }