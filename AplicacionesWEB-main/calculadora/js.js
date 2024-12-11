
let operacion = " "
let calculo = 0;

function cero() {
    operacion = operacion + "0"
    document.getElementById("consola").innerText = operacion;
    
};

function uno(){
    operacion = operacion + "1"
    document.getElementById("consola").innerText = operacion;
};

function restar(){
    operacion = operacion + "-"
    document.getElementById("consola").innerText = operacion;
};

function dos(){
    operacion = operacion + "2"
    document.getElementById("consola").innerText = operacion;
};

function tres(){
    operacion = operacion + "3"
    document.getElementById("consola").innerText = operacion;
};

function multiplicar(){
    operacion = operacion + "x"
    document.getElementById("consola").innerText = operacion;
};

function cuatro(){
    operacion = operacion + "4"
    document.getElementById("consola").innerText = operacion;
};

function cinco(){
    operacion = operacion + "5"
    document.getElementById("consola").innerText = operacion;
};

function dividir(){
    operacion = operacion + "/"
    document.getElementById("consola").innerText = operacion;
};

function seis(){
    operacion = operacion + "6"
    document.getElementById("consola").innerText = operacion;
};

function siete(){
    operacion = operacion + "7"
    document.getElementById("consola").innerText = operacion;
};

function sumar(){
    operacion = operacion + "+"
    document.getElementById("consola").innerText = operacion;
};

function ocho(){
    operacion = operacion + "8"
    document.getElementById("consola").innerText = operacion;
};

function nueve(){
    operacion = operacion + "9"
    document.getElementById("consola").innerText = operacion;
};

function clearE() {
    document.getElementById('consola').innerHTML = " "
    operacion = "";
};

function igual(){
    
    document.getElementById("consola").innerText = "Aqui saldria el resultado";
};


