
//CONSTANTES
const botonNumeros = document.getElementsByName('number');
const botonSignos = document.getElementsByName('signo');
const botonIgual = document.getElementsByClassName('igual')[0];
const botonLimpiar = document.getElementsByClassName('clear')[0];
//console.log(botonIgual);
let resultado = document.getElementById('resultado');
//console.log(result);
let opeActual = "";
let opeAnterior = "";
let operacion= "";


//LISTENERS
botonIgual.addEventListener('click', function(){
    calcular();
    actualizar();
  });
  
  botonLimpiar.addEventListener('click', function(){
    clear();
    actualizar();
  });

  //FUNCIONES

botonNumeros.forEach( function(boton){ 
    boton.addEventListener('click', function() 
    {
    agregarNumero(boton.innerText);
}) });

botonSignos.forEach( function(boton){ 
    boton.addEventListener('click', function() 
    {
    seleccionarSigno(boton.innerText);
}) });

function seleccionarSigno(op){
    if(opeActual === '') return;
    if(opeAnterior !== ''){
        calcular()
    }
    operacion = op.toString();
    opeAnterior = opeActual;
    opeActual = '';
 }

function calcular(){
    let calculo;
    const anterior = Number.parseFloat(opeAnterior);
    const actual = Number.parseFloat(opeActual);
        switch(operacion){
            case '+':
                calculo = anterior + actual;
            break;
            case '-':
                calculo = anterior - actual;
            break;
            case 'x':
                calculo = anterior * actual;
            break;
            case '/':
                calculo = anterior / actual;
            break;
            case '^':
                calculo = Math.pow(anterior,actual);
            break;
            case '%':
                calculo = anterior%actual;
            break;    
            default: return;
        }
  opeActual = calculo;
  operacion = '';
  opeAnterior = '';
}

function agregarNumero(n1){
    opeActual = opeActual.toString() + n1.toString();
    actualizar();
}

function actualizar() { 
    resultado.value = opeActual; }

function clear() { 
    opeActual=""; opeAnterior="";}














