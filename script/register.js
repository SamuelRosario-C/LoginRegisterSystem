
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
        person: {
            name: nomeRegister.value,
            email: emailRegister.value,
            password: passwordRegister.value,
            passwordConfirm: passwordRegisterConfirm.value,
            birthday: aniversarioRegister.value,
            gender: generoRegister.value,
            id: sessionStorage.length
        }
    }]

    account.map((allAccounts, quantidade) => {

        sessionStorage.setItem(allAccounts.person.id, JSON.stringify(allAccounts));
        const getAccounts = sessionStorage.getItem(allAccounts.person.id)
        const accountsConfig = JSON.parse(getAccounts)
        

        for (const x in accountsConfig) {
            if (accountsConfig.hasOwnProperty.call(accountsConfig, x)) {
                const newAccounts = {
                    name: accountsConfig.person.name,
                    email: accountsConfig.person.email,
                    password: accountsConfig.person.password,
                    passwordConfirm: accountsConfig.person.passwordConfirm,
                    birthday: accountsConfig.person.birthday,
                    gender: accountsConfig.person.gender,
                    id: accountsConfig.person.id
                }
// Tentando resolver
              //  sessionStorage.setItem('newAccounts', JSON.stringify(newAccounts))
              //  const allNewAccountsInfo = sessionStorage.getItem('newAccounts')
              //  const compactObject = JSON.parse(allNewAccountsInfo)
              //  console.log(compactObject);
// Tentando Resolver
                if (newAccounts.name !== nomeRegister.value) {
                    console.log('nome aprovado');


                }else if(newAccounts.name === allAccounts.person.name){
                    console.log('esse nome já existe ');
                    console.log(newAccounts.name);

                }
            }
        }


    })





})



