var palabras = [
    "Profesor",
    "Velo",
    "Casco",
    "Tijeras",
    "Aceite",
    "Tarta",
    "Derecha",
    "Embajador",
    "Tostar",
    "Flecha",
    "Tarjetas",
    "Sufrir",
    "Madurez",
    "Donde",
    "Cosa",
    "Lamer",
    "Descifrar",
    "Espumar",
    "Postre",
    "Bocadillo",
    "Tornillo",
    "Leer",
    "Pastar",
    "Mantel",
    "Novio",
    "Colectivo",
    "Collar",
    "Cicatrizar",
    "Cambio",
    "Trasplantar",
    "Uniforme",
    "Fracturar",
    "Electricidad",
    "Rotor",
    "Velorio",
    "Persona",
    "Chicos",
    "Apellido",
    "Cometa",
    "Cabalgar",
    "Escalera",
    "Promedio",
    "Carnicero",
    "Nadar",
    "Pesa",
    "Bestia",
    "Pato",
    "Vidrio",
    "Denso",
    "Pintarse",
    "Desayuno",
    "Fiesta",
    "Pera",
    "Minar",
    "Nariz",
    "Raya",
    "Clavo",
    "Suegro",
    "Manta",
    "Ahogar",
    "Cejas",
    "Conflicto",
    "Pararse",
    "Tumba",
    "Envasado",
    "Cuchillo",
    "Republica",
    "Adivino",
    "Francia",
    "Seis",
    "Anchoa",
    "Minorista",
    "Mono",
    "Hiedra",
    "Manejar",
    "Escribir",
    "Tapizar",
    "Tango",
    "Elefante",
    "Caballo",
    "Cabeza",
    "Adelgazar",
    "Obelisco",
    "Malo",
    "Pastel",
    "Venecia",
    "Fugarse",
    "Historieta",
    "Adhesivo",
    "Mantel",
    "Azotar",
    "Caracol",
    "Vuelta",
    "Aspiradora",
    "Caños",
    "Espiga",
    "Oracle",
    "Alura",
    "Educacion",
    "Novia"
]
var tablero = document.getElementById("horca").getContext("2d");
var letras = [];
var palabraCorrecta = "";
var errores = 10;
var palabraSecreta = elegirPalabraSecreta();
var cont = 0;
var soloLetras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var letrasCorrectas = 0;

function elegirPalabraSecreta(){
    var palabra = palabras[Math.floor(Math.random()*palabras.length)].toUpperCase();
    var palabraSecreta = palabra.toUpperCase();
    console.log(palabra)
    return palabraSecreta
}

function dibujarLineas(palabraSecreta){
    tablero.lineWidth = 6;
    tablerolineCap = "round";
    tablero.lineJoin = "round"
    tablero.strokeStyle = "white";
    tablero.beginPath();


    var ancho = 600/palabraSecreta.length
    /*Genera el ancho del espacio que va a aocupar cada linea de la letra. */
    for(let i = 0 ; i < palabraSecreta.length ; i++){
        tablero.moveTo(350+(ancho*i),640);
        tablero.lineTo(400+(ancho*i),640);

    }
    tablero.stroke();
    tablero.closePath();

}dibujarLineas(palabraSecreta)

function horca(x,y,xf,yf){
    tablero.lineWidth = 6;
    tablerolineCap = "round";
    tablero.lineJoin = "round"
    tablero.strokeStyle = "white";
    tablero.beginPath();
    tablero.moveTo(x, y);
    tablero.lineTo(xf,yf)
    tablero.stroke();
    tablero.closePath();
}

function cabezahorca(x,y){
    tablero.lineWidth = 6;
    tablerolineCap = "round";
    tablero.lineJoin = "round"
    tablero.strokeStyle = "white";
    tablero.fillStyle= "white";
    tablero.beginPath();
    tablero.arc(x,y,30,0,2*3.14)
    tablero.fill();
}

function escribirLetraCorrecta(posicion){
    tablero.font = "bold 52px Arial";
    /*Se utiliza font porque es texto y no estamos escribiendo lineas.*/
    tablero.lineWidth = 6
    tablerolineCap = "round";
    tablero.lineJoin = "round"
    tablero.fillStyle = "white";

    var ancho = 600/palabraSecreta.length
    tablero.fillText(palabraSecreta[posicion], 355+(ancho*posicion),620)
}

function escribirLetraIncorrecta(letra, erroresLeft){
    tablero.font = "bold 40px Arial";
    //Se utiliza font porque es texto y no estamos escribiendo lineas.
    tablero.lineWidth = 6
    tablerolineCap = "round";
    tablero.lineJoin = "round"
    tablero.fillStyle = "white";

    tablero.fillText(letra, 350+(40*(10-erroresLeft)),710,40)
}

function verificarLetraElegida(key){
    /* VERIFICA QUE PARA LA PALABRA ELEGIDA AGARRE LETRA POR LETRA. */
    if(letras.length <1 ||  letras.indexOf(key)<0)
    /* Verifica que cada palabra que se elige no se repita y ver si esta correcta.*/

    {
        letras.push(key)
        return false
    }
    else{
        letras.push(key)
        return true
    }

}

function adicionarLetraCorrecta(i){
    palabraCorrecta += palabraSecreta[i].toUpperCase();
}

function adicionarLetraIncorrecta(letra){
    if(palabraSecreta.indexOf(letra)<= 0){
        errores -=1;
        console.log(errores)
        
        
        
    }

}

function draw(){
    //piso
    if( cont == 1){
        horca(370,500,800,500)
    }
   //mastil
    else if(cont == 2){
        horca(372,501,372,199)
    }
   //techo
    else if(cont == 3){
        horca(370,200,650,200)
    }
   //soga
    else if(cont == 4){
        horca(650,197,650,268)
    }
   //cabeza
    else if (cont == 5){
        cabezahorca(650,270)
    }
   //torso
    else if(cont == 6){
        horca(650,270,650,400)
    }
   //Brazo derecho
    else if(cont == 7){
        horca(650,310,680,360)
    }
   //Brazo izquierdo
    else if(cont == 8){
        horca(650,310,620,360)
    }
   //Pierna derecha
    else if(cont == 9){
        horca(650,400,670,465)
    }
   //Pierna izquierda
    else if(cont == 10){
        horca(650,400,630,465)
        alert("GAME OVER, la palabra era " + palabraSecreta)
        
    
    } 
}

document.onkeydown = (e) => {
    let letra=e.key.toUpperCase()
    if (soloLetras.indexOf(letra) >= 0 ){
        if(!verificarLetraElegida(e.key)){
            if(palabraSecreta.includes(letra)){
                console.log(letra)
            adicionarLetraCorrecta(palabraSecreta.indexOf(letra))
            for(let i = 0; i < palabraSecreta.length; i++){
                if(palabraSecreta[i] === letra){
                    escribirLetraCorrecta(i)
                    letrasCorrectas += 1;
                }
                
            }
            if( letrasCorrectas == palabraSecreta.length){
                alert("FELICIDADES, ACERTASTE LA PALABRA")
            }
         }
         else{
             if(!verificarLetraElegida(e.key)) return
             adicionarLetraIncorrecta(letra)
             escribirLetraIncorrecta(letra,errores)
             cont +=1;
             draw()
             console.log(cont)
            }
        }

    }
    else{
        alert("SOLO SE PERMITE EL INGRESO DE LETRAS")
    }
    
    
};