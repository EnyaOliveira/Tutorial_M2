function VpVf(valor) {

    var resultado = document.getElementById('resultado');
    var taxa = Number(document.getElementById('taxa').value) / 100;
    var tempo = Number(document.getElementById('tempo').value);

    if (valor == 'VP') {
        let valorFuturo = Number(document.getElementById('VF').value);

        let valorPresente = ((valorFuturo) / ((1 + taxa) ** (tempo))).toFixed(2);

        resultado.innerHTML = `O valor aplicado quando se retira R$${valorFuturo} depois de ${tempo} meses a uma taxa mensal de ${taxa * 100}% é de R$${valorPresente}.`;
    }
    if (valor == 'VF') {
        let valorPresente = Number(document.getElementById('VP').value);

        let valorFuturo = ((valorPresente) * ((1 + taxa) ** (tempo))).toFixed(2);

        resultado.innerHTML = `O valor futuro quando se aplica R$${valorPresente} por ${tempo} meses a uma taxa mensal de ${taxa * 100}% é de R$${valorFuturo}.`;
        // document.getElementById('resultado').innerHTML+= `O valor futuro è R$${valorPresente} por ${tempo} meses a uma taxa mensal de ${taxa * 100}% é de R$${valorFuturo}.`;
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function juros() {
    console.log('aa')
    const capital = $('.form2 #capital').val();
    console.log(capital)
    const tempo = $('.form2 #tempo').val();
    const taxaJ = $('.form2 #taxaJ').val();

    const divResultado = $(".form2 .resultado");
    
    divResultado.html(capital * (1 + ((taxaJ / 100) * tempo)).toFixed(2))
};

/////////////////////////////////////////////////////////////////////////////////////////////////

function maluca() {
    var impressao = document.getElementById('ml').value;
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    for (let i = 0; i < texto.length; i++) {
        resultado.innerHTML += `${impressao[i]} <br/>`;
        for (let k = -1; k < i; k++) {
            resultado.innerHTML += 'ㅤ';
        }
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////

function binario() {
    let valor = Number($('.form4 #number').val());
    const divResposta = $(".form4 .resposta");

    let binario = "";
    let numero = Math.pow(2, 100);
    for(; numero >= 1; numero = numero / 2){
        if(valor >= numero){
            binario = `${binario}1`;
            valor = valor - numero;
        }else {
            if(binario.length>=1){
                binario = `${binario}0`;
            }
        }
    }

    divResposta.html(binario);
}
}