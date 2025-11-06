

function buscar() {
    let cep = document.getElementById("CEP").value


    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            DadosNaTela(data)
            
        })
        .catch(erro => {
            alert("Não Foi Possivel Verificar esse CEP (Tente Novamente)")
        })


}
function DadosNaTela(data) {
    document.getElementById("cep").innerText = `Cep: ${data.cep}`

    document.getElementById("logradouro").innerText = `Logradouro: ${data.logradouro}`
    document.getElementById("bairro").innerText = `Bairro: ${data.bairro}`
    document.getElementById("localidade").innerText = `Localidade: ${data.localidade}`
    document.getElementById("ddd").innerText = `DDD: ${data.ddd}`
    document.getElementById("estado").innerText = `Estado: ${data.estado}`

}