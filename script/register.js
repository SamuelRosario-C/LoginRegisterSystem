
// REQUISITOS/FORMULARIO DE CRIAÇÃO DE CONTA
const nomeRegister = document.getElementById("nameRegister")
const emailRegister = document.getElementById("emailRegister")
const passwordRegister = document.getElementById("passwordRegister")
const passwordRegisterConfirm = document.getElementById("passwordRegisterConfirm")
const aniversarioRegister = document.getElementById("data")
const generoRegister = document.getElementById("genero")
// REQUISITOS/FORMULARIO DE CRIAÇÃO DE CONTA



// BOTÃO USADO PARA CRIAR A CONTA
const botaoCreateConfirm = document.getElementById("btn-createRegister")


botaoCreateConfirm.addEventListener('click', () => {
    const account = [{
        name: nomeRegister.value,
        email: emailRegister.value,
        password: passwordRegister.value,
        passwordConfirm: passwordRegisterConfirm.value,
        birthday: aniversarioRegister.value,
        gender: generoRegister.value,
        id: sessionStorage.length
    }]

    account.map((newAccounts) => {

        sessionStorage.setItem(newAccounts.id, JSON.stringify(newAccounts))
        const getAccounts = sessionStorage.getItem(newAccounts.id)
        const accountsConfig = JSON.parse(getAccounts)

        switch (accountsConfig.name !== nomeRegister.value) {
            case (true):
                console.log('são diferentes');
                break;

            case (false):
                console.log(accountsConfig.name !== nomeRegister.value);
                console.log(accountsConfig.name);
                console.log(nomeRegister.value);
                break;
        }




    })

})



