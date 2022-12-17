// FORMULARIOS
const formLogin = document.getElementById("formularioLogin")
const formRegister = document.getElementById("formularioRegister")
// BOTÕES
const botaoLogin = document.getElementById("btn-login")
const botaoRegister = document.getElementById("btn-register")

botaoLogin.addEventListener('click', () =>{
    formLogin.style.display = "flex"
    formRegister.style.display = "none"
})

botaoRegister.addEventListener('click', () =>{
    formRegister.style.display = "flex"
    formLogin.style.display = "none"

})