function Tabuadas(){
    let i = 0;
    let valor = parseInt(document.getElementById("num").value)
    let primeiro = parseInt(document.getElementById("primeiro").value)
    let ultimo = parseInt(document.getElementById("ultimo").value)
    let resultado = 0;

    for (i = primeiro; i <= ultimo; i++){
        resultado= i*valor;
        document.getElementById('resultado').innerHTML+= valor + 'X' + i+ '=' + resultado + '<br>';
    }
}

function palíndromo(){
    let valor1 = String(document.getElementById("num").value)
    let contrario = valor1.split('').reverse().join('');

    if(valor1==contrario){
        document.getElementById('resultado').innerHTML="Este número é um palíndromo"
    }
    else{
        document.getElementById('resultado').innerHTML="Este número não é um palíndromo"
    }
}

function tresPi(){
    let i = 0;
    let valor = parseInt((document.getElementById('num').value))
    while(i <= valor){
        document.getElementById('resultado').innerHTML += i + '<br>';
        if(i % 3 == 0)
        document.getElementById('resultado').innerHTML += "Pi <br>";
        i = i+ 1
    }
}

function reforma(){
    let tamAzulejo = (document.getElementById('tam').value)
    tamAzulejo= tamAzulejo / 100
    let altura = (document.getElementById('altura').value)
    let largura = (document.getElementById('larg').value)
    let total = 0;

    let calcAltura = altura/tamAzulejo;
    console.log(calcAltura);
    let calcLargura = largura/tamAzulejo;
    console.log(calcLargura);
    total = calcAltura * calcLargura 
    total = total + (total*0.05)
    
    document.getElementById('resultado').innerHTML = 'Você precisará de ' + Math.ceil(total) + ' azulejos ';
}
