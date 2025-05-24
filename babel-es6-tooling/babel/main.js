const nome = "Luis";
const obj = { nome };
const novoObj = { ...nome };

const numbers = [1,2,3]

const estados = await fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(response => {
        return response.json()
    });

    console.log(estados[0])