
document.addEventListener("keypress",function(e){
    if(e.key === "Enter"){
        buscar()
    }


})

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

    chamadaAPIlongitude(data)
}

function chamadaAPIlongitude(data){
    fetch(`https://nominatim.openstreetmap.org/search?q=${data.logradouro}&format=json`)
  .then(res => res.json())
  .then(data => {
    console.log('Latitude:', data[0].lat);
    console.log('Longitude:', data[0].lon);
    let lat = data[0].lat
    let lon = data[0].lon
    APIclima(lat , lon)
  });




}

function APIclima(lat , lon){

    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
    .then(resposta => resposta.json())
    .then(data =>{
        console.log(data)
        dadosTemperatura(data)
    })
}

function dadosTemperatura(data){
    document.getElementById("temp").innerText ="Temperatura " + data.current_weather.temperature + "°"

}

