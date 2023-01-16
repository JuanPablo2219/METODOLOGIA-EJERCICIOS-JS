const USER="admin";
const PASSWORD_DEFAULT="s3cr3t";
let username= prompt("ingrese su usuario");
let password= prompt("ingrese su contraseña");
if(username==USER && password==PASSWORD_DEFAULT){
    console.log("bienvenido");
}
else{
    console.log("no aceptado")
}
console.log("bye");


