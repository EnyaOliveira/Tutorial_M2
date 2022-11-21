function calcularAtv1(){
    const gravidade=10
    let velocidadeInicial = document.getElementById('velocidadeInicial').value
    let alturaMaxima=velocidadeInicial*velocidadeInicial/2*gravidade 
    let tempoSubida= velocidadeInicial/gravidade
    document.getElementById ("resposta").innerHTML=`Altura máxima: ${alturaMaxima}<br> Tempo de Subida: ${tempoSubida}<br>`
}

function calcularAtv2(){
    let valorDea = parseFloat(document.getElementById('valorDea').value)
    let valorDeb = parseFloat(document.getElementById('valorDeb').value)
    let valorDec = parseFloat(document.getElementById('valorDec').value)
    let delta= 0; 
    let xv= 0;
    let yv=0;
    delta = ((-valorDeb)**2) - 4*valorDea*valorDec
    xv = -(valorDeb)/(2*valorDea)
    yv = -(delta)/(4*valorDea)
    document.getElementById("resposta").innerHTML=`Ponto máximo(xv): ${xv}<br> Ponto Mínimo(xy): ${yv}<br>`

}

function calcularAtv3(){
    const caixaSelecao = document.getElementById('temperatura');
    let selectedOption = caixaSelecao.options[caixaSelecao.selectedIndex];
    let celsius = document.getElementById('TemperaturaNumero').value;
    let fahrenheit = document.getElementById('TemperaturaNumero').value;

    if(selectedOption.value == 'celsius'){
        let  fahrenheit = celsius*1.80+32;
        document.getElementById("resposta").innerHTML= `Valor em fahrenheit: ${fahrenheit}`;
    } 
    else if(selectedOption.value == 'fahrenheit'){
        let celsius = (fahrenheit - 32)/1.8
        document.getElementById("resposta").innerHTML= `valor em celsius: ${celsius}`;
    }
}
function calcularAtv4(){
    let KwhConsumidos = document.getElementById('KwhConsumidos').value
    let valorUnitario = document.getElementById('valorUnitario').value
    let consumo = 0
    consumo = KwhConsumidos* valorUnitario
    if(consumo>100){
    consumo= consumo*0.25
    }
    else if(consumo>200){
     consumo= consumo*1.5
    }
    document.getElementById("resposta").innerHTML= `Consumo de energia: ${consumo}`;
}  