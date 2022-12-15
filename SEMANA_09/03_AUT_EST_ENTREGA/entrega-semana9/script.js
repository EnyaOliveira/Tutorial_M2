function VpVf() {
    var resultado = document.getElementById('resultado');
    var taxa = Number(document.getElementById('taxa').value) / 100;
    var tempo = Number(document.getElementById('tempo').value);

    if (valor == 'VP') {
        let valorFuturo = Number(document.getElementById('ValorF').value);

        let valorPresente = ((valorFuturo) / ((1 + taxa) ** (periodo))).toFixed(2);

        resultado.innerHTML = `O valor aplicado quando se retira R$${valorFuturo} depois de ${periodo} meses a uma taxa mensal de ${taxa * 100}% é de R$${valorPresente}.`;
    }
    if (valor == 'VF') {
        let valorPresente = Number(document.getElementById('ValorP').value);

        let valorFuturo = ((valorPresente) * ((1 + taxa) ** (periodo))).toFixed(2);

        ///resultado.innerHTML = `O valor futuro quando se aplica R$${valorPresente} por ${periodo} meses a uma taxa mensal de ${taxa * 100}% é de R$${valorFuturo}.`;
        document.getElementById('resultado').innerHTML+= `O valor futuro è R$${valorPresente} por ${periodo} meses a uma taxa mensal de ${taxa * 100}% é de R$${valorFuturo}.`;
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function juros() {
    const capital = $('.form2 #capital').val();
    const tempo = $('.form2 #tempo').val();
    const taxaJ = $('.form2 #taxaJ').val();

    const divResultado = $(".form2 .resultado");
    
    divResultado.html(capital * (1 + ((taxaJ / 100) * tempo)).toFixed(2))
}

/////////////////////////////////////////////////////////////////////////////////////////////////

function maluca() {
    const texto = $('.form3 #texto').val();

    const divResposta = $(".form3 .resposta");

    divResposta.html(texto.split('').map((letter, index) => {
        let spaces = "";
        for(let i = 0; i<index; i++){
            spaces = spaces.concat("&nbsp;&nbsp;");
        }

        return `${spaces}${letter}<br>`
    }).join(""))

}

/////////////////////////////////////////////////////////////////////////////////////////////

function binario() {
    let number = Number($('.form4 #number').val());
    const divResposta = $(".form4 .resposta");

    let binario = "";
    let currentBase = Math.pow(2, 100);
    for(currentBase; currentBase >= 1; currentBase = currentBase / 2){
        if(number >= currentBase){
            binario = `${binario}1`;
            number = number - currentBase;
        }else {
            if(binario.length>=1){
                binario = `${binario}0`;
            }
        }
    }

    divResposta.html(binario);

}
}