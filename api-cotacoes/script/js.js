
function carregarMoedas(){

    const requisicaoHttp = new XMLHttpRequest()
    requisicaoHttp.open("GET","https://economia.awesomeapi.com.br/last/USD-BRL,BTC-USD,BTC-BRL", false)
    requisicaoHttp.send()

    const resposta = JSON.parse(requisicaoHttp.responseText)
    
    const moedaUSDBRL = resposta.USDBRL
    const moedaBTCUSD = resposta.BTCUSD
    const moedaBTCBRL = resposta.BTCBRL
        
    cotacao(moedaUSDBRL)
    cotacao(moedaBTCUSD)
    cotacao(moedaBTCBRL)
}


function cotacao(moeda) {    
    const divMoeda = document.createElement("div")    
    divMoeda.classList.add("col")
    loopMoeda(moeda,divMoeda)
    const divElemento = document.getElementById("conteudo-cotacoes")    
    divElemento.appendChild(divMoeda)
}

function loopMoeda(moeda,div) { /* div é uma referência a variável local da função cotação */
    const nameMoeda = document.createElement("p")
    const valueMoeda = document.createElement("p")
    nameMoeda.innerHTML = moeda.name
    valueMoeda.innerHTML = moeda.bid
    div.appendChild(nameMoeda)
    div.appendChild(valueMoeda)
}
