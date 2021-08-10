
const xhr = new XMLHttpRequest();
const url = "https://covid-api.mmediagroup.fr/v1/vaccines?country=Brazil";

xhr.responseType = 'json';
xhr.onreadystatechange = () =>{
    if(xhr.readyState === XMLHttpRequest.DONE){
        resposta = xhr.response;
        porcentagem(resposta);
  }
}

xhr.open('GET',url);
xhr.send();

const porcentagem = (resposta) => {
    populacao = resposta.All.population;
    populacao_vacinada = resposta.All.people_vaccinated;
    porcentagem_vacinados = (populacao_vacinada / populacao) * 100;
    divResposta = document.querySelector("#resposta")
    if(0.8 * populacao <= porcentagem_vacinados){
        console.log("pode lamber corrimão");
        divResposta.innerHTML= "<h1 style='font-size: 3rem'>Pode lamber corrimão</h1> a porcentagem de vacinados contra o covid no Brasil é: "
        + porcentagem_vacinados.toFixed(2) + "%";
    }else{
        console.log("não pode lamber corrimão (ainda) a porcentagem de vacinados hoje é: "
        + porcentagem_vacinados.toFixed(2));
        divResposta.innerHTML= "<h1 style='font-size: 3rem'> não pode lamber corrimão (ainda)</h1> a porcentagem de vacinados contra o covid no Brasil é: "
        + porcentagem_vacinados.toFixed(2) + "%";
        
    }
}
