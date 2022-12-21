
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

// conta do administrador

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
    // conta do Administrador


    account.map((allAccounts, quantidade) => {

        function criadorDeCotnas() {

            // ESSA EXPRESSÃO ADICIONA ITENS AO STORAGE
            sessionStorage.setItem(allAccounts.person.id, JSON.stringify(allAccounts));
            const getAccounts = sessionStorage.getItem(allAccounts.person.id)
            JSON.parse(getAccounts)
            // ESSA EXPRESSÃO ADICIONA ITENS AO STORAGE
        }

        sessionStorage.getItem(sessionStorage.length, JSON.stringify(sessionStorage));
        const pegaContaStorage = sessionStorage.getItem(sessionStorage)
        JSON.parse(pegaContaStorage)

        for (let i = 0; i < sessionStorage.length; i++) {
            const allAccounts = JSON.parse(sessionStorage.getItem(i))

            for (const x in allAccounts) {
                const allAccountsConfig = allAccounts[x];

                // colocar switch case quando
                console.log('o nome que você escolheu já existe, ele não foi atribuido nos dados');
                console.log('os nomes são diferentes o seu nome foi atribuido nos dados');
                criadorDeCotnas()
                // colocar switch case quando

            }
        }
        // EXPRESSÃO PARA PEGAR INFORMAÇÕES

        // EXPRESSÃO PARA PEGAR INFORMAÇÕES

    })

})



