let nombre = "jhon";
let edad = 20;
let ciudad = "sibate";

const pais = "colombia";

 //if y else operadores logicos 

 let nota = 2.2;
 if(nota >= 3){
    console.log("aprobaste");
 }
 else{
    console.log("reprobaste");
 }

 let trimestre = 4;
 if(trimestre >=4){
    console.log("ya tienes buenas bases de programacion")
 }
 else{
    console.log("sigue aprendiendo vas bienn");
 }


 let ahorro = 800000;
let precioPC = 2600000;

if(ahorro >= precioPC){
    console.log("ya puedes comprar el pc ");
}
else{
    console.log("tienes que segur ahorrando ");
}

let dia = "viernes";
if(dia=="viernes"){
    console.log("hoy es viernes toca estudiar adso");
}
else{
    console.log("hoy tambien hay que estudiar adso");
}


//entradas por teclado

let NombreDeusuario = prompt("¿cual es tu nombre ? " );
let EdadDeusuario = Number(prompt("¿cual es tu edad tu edad?" ));
let licenciaDeConducion = prompt("¿tienes licencia de conduccion ?" );
let nombreUsuario = prompt("¿Cuál es tu nombre?");
let edadUsuario = Number(prompt("¿Cuál es tu edad?"));
let licenciaConduccion = prompt("¿Tienes licencia de conducción? (si/no)");

if (edadUsuario >= 18 && licenciaConduccion == "si") {

    alert(
        nombreUsuario +
        ", eres mayor de edad, tienes licencia y puedes conducir tu moto."
    );

} else {

    alert(
        nombreUsuario +
        ", todavía no puedes conducir tu moto."
    );

}
