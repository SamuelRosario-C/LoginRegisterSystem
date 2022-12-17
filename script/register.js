
// REQUISITOS/FORMULARIO DE CRIAÇÃO DE CONTA
const nomeRegister = document.getElementById("nameRegister")
const emailRegister = document.getElementById("emailRegister")
const passwordRegister = document.getElementById("nameRegister")
const passwordRegisterConfirm = document.getElementById("passwordRegisterConfirm")
const AniversarioRegister = document.getElementById("data")
const generoRegister = document.getElementById("genero")
// REQUISITOS/FORMULARIO DE CRIAÇÃO DE CONTA



// BOTÃO USADO PARA CRIAR A CONTA
const botaoCreateConfirm = document.getElementById("btn-createRegister")
 
const account = [{
    name: 'Samuel Rosário',
    email: 'teste@teste.com',
    password: 'teste123',
    birthday: 09102203,
    gender: 'Cisgênero'
}, {
    name: 'Samuel Nego',
    email: 'teste@testão.com',
    password: 'teste123',
    birthday: 09102203,
    gender: 'Cisgênero'
}]

botaoCreateConfirm.addEventListener('click', () =>{
    account.map((account, position) => {
        if (account.name === 'Samuel Nego') {
            return console.log(account)
        }
    
    })
})
