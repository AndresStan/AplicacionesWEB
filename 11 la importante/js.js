

function ClearConsole() {
    console.clear;
    document.getElementById("consola").innerText = " "
}


function unoSaludar() {
    nombre = prompt("Dime tu nombre:");
    console = nombre;
    document.getElementById("consola").innerText = "Hola " + nombre;
}



function dosParOImpar() {
    numero = prompt("Dime el numero que quieres saber si es par o impar");
    
    if ( numero % 2  == 0) {
        document.getElementById("consola").innerText = "El numero " + numero + " es par" 
    } else {
        document.getElementById("consola").innerText = "El numero " + numero + " es impar" 
    }

}

function tresAreaTriangulo() {
    base = parseInt(prompt("Dime la base de tu triangulo"))
    altura = parseInt(prompt("Dime la altura de tu triangulo"))

    area = base * altura / 2
    document.getElementById("consola").innerText = "El area del triangulo es " + area 
}


function CuatroRepeticionCadena() {

    palabra = prompt("Dime que palabra quieres repetir")
    veces = parseInt(prompt("Dime el numero de veces que quieres repetirlo"))
    
    
    final = palabra.repeat(veces);
    
    document.getElementById("consola").innerText = final;

    
    
   

}


function CincoPromedio() {
  
    num1 = parseInt(prompt("Primera nota"))
    num2 = parseInt(prompt("Segunda nota"))
    num3 = parseInt(prompt("Tercera nota"))    
    let media = (num1 + num2 + num3) / 3
    document.getElementById("consola").innerText = media;
}




function MostrarImagen() {
    // Obtener el elemento <img> y eliminar el atributo hidden
    const imagen = document.getElementById("imagen");
    imagen.removeAttribute("hidden");
  
    // Mostrar el elemento <img> y establecer un tiempo de duración
    imagen.style.display = "block";
    setTimeout(() => {
      imagen.style.display = "none";
    }, 500);
  }



  


  function factorial() {
      let resultado = 1;
      let num1 = parseInt(prompt("Dime el numero que quieres factorial"));

  
      for (let i = num1; i > 1; i--) {
         
      
          resultado = resultado * i;
       
   }
  
   document.getElementById("consola").innerText = resultado;
  }



  function mayorOdeTodos() {
    
    let num1 = parseInt(prompt("Dime el primer numero"))
    let num2 = parseInt(prompt("Dime el segundo numero"))
    let num3 = parseInt(prompt("Dime el tercer numero"))
    

    if (num1 > num2 && num1 > num3) {
        document.getElementById("consola").innerText = "El numero mas grande es " + num1;
    } else if (num2 > num3 && num2 > num1) {
        document.getElementById("consola").innerText = "El numero mas grande es " + num2;
    } else if (num3 > num1 && num3 > num2) {
        document.getElementById("consola").innerText = "El numero mas grande es " + num3;
    }

  }
  
 function CalificacionEscolar() {
    let notaNum = parseInt(prompt("Dime la nota que quieres convertir sobre 100"));
     
    if (notaNum > 100) {
        document.getElementById("consola").innerText = "Nota incorrecta "
    } else if (notaNum <= 100 && notaNum >= 91 ) {
        document.getElementById("consola").innerText = "Sobresaliente "
    } else if (notaNum < 91 && notaNum >= 71) {
        document.getElementById("consola").innerText = "Notable "
    } else if (notaNum < 71 && notaNum >= 61) {
        document.getElementById("consola").innerText = "Bien "
    } else if (notaNum < 61 && notaNum >= 50){
        document.getElementById("consola").innerText = "Suficiente "
    } else if (notaNum < 50 && notaNum >= 0) {
        document.getElementById("consola").innerText = "Insuficiente "
    } else {
        document.getElementById("consola").innerText = "Nota incorrecta "
    }
    
    
 }

 function bisiestoONo() {

    let anio = parseInt(prompt("Dime el año"));
    if (anio % 4 === 0){
        document.getElementById("consola").innerText = "Es bisiesto "
    } else {
        document.getElementById("consola").innerText = "No es bisiesto"
    }
    
 }

 function negopos(){ 
    let n = parseInt(prompt("Dime un numero y te dire si es negativo o positivo"));
    if (n > 0) {
        document.getElementById("consola").innerText = "Es positivo"
    } else if (n === 0) {
        document.getElementById("consola").innerText = "Es neutro"
    } else {
        document.getElementById("consola").innerText = "Es negativo"
    }
    
 }


let frutas = ["ba", "ad", "da", "ca"]
frutas[2] = "puta"

frutas.sort();

for (let i = 0; i < frutas.length; i++) {
    console.log("La fruta es " + frutas[i]);
    

}
console.log("La cantidad de frutas que hay es: " + frutas.length)
