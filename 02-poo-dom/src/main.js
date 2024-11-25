//1. Crear una clase para modelar un siste,a de usuarios que puedan iniciar sesion
//y cerrar ses y actualizar su perfil

import { Producto } from "./components/Producto";

//---------SOLUCION CON FUNCIONES CONTRUCTORAS------------
// function Usuario(nombre, email, password){
//     this.nombre = nombre; //Vriables de instancia publica
//     this.email = email;
//     let _password = password; //Vriables de instancia privada

//     //---------metodos publicos------------
//     this.login = function(email, password){ // no usar arrow function 
//         if(this.email === email && _password === password){
//             return `Bienvenido ${this.nombre}`;
//         }
//         return "Email o contraseña incorrectos"
//     };

//     this.updateEmail = function(newEmail) {
//         this.email = newEmail;
//         return `Email actualizado a ${this.email}`;
//     };


// }

// const user1= new Usuario("Adrian","aal@gmail.com", "121105");



// //--------Mostramos en el DOM--------

// const app = document.getElementById("app");

// function renderUsuario (){
//     // Funcion que pinta en el app el usuario
//     app.innerHTML = `
//     <h2>Usuario: ${user1.nombre}</h2>
//     <p>Email: ${user1.email}</p>
//     <button id="btnLogin">Login</button>
//     `;

//     const btnLogin= document.getElementById("btnLogin");
//     btnLogin.addEventListener('click', ()=>{
//         alert(user1.login("aal@gmail.com", "121105"));
//     });

// }



// //--------SOLUCIÓN CON CLASES--------

// class UsuarioClass {
//     // Las variables privadas se declaran anteponiendo una almohadilla al nombre
//     #password;
//     nombre;
//     email;
//     constructor(nombre, email, password){
//         this.nombre = nombre; 
//         this.email = email;
//         this.#password = password;
//     }

//     login(email, password){ // no usar arrow function 
//         if(this.email === email && this.#password === password){
//             return `Bienvenido ${this.nombre}`;
//         }
//         return "Email o contraseña incorrectos"
//     };

//     updateEmail (newEmail) {
//         this.email = newEmail;
//         return `Email actualizado a ${this.email}`;
//     };

    
// }

// const user2 = new UsuarioClass("Adrian", "12@gmail.com0", "121105")



//2.Implementar un modelo de producto con funciones contructoras y calses que permita: obtener informacion de producto,
//actualizar el stock y que guarde el nombre, precio y stock.

//---------PRODUCTO-----------

const productos = [
    new Producto("Portatil", 500, 10),
    new Producto("Movil", 1200, 20),
    new Producto("Tablet", 300, 5)
]

const app = document.getElementById("app");

app.innerHTML = `
<h2>Gestion de productos</h2>
${productos.map((producto,index) => {
    return `
    <li>${producto.obtenerInfo()}
    <button class="btn-actualizar-stock" data-index="${index}">Actializar</button>
    </li>
    `
    }).join("")
}

`;

document.querySelectorAll(".btn-actualizar-stock")
    .forEach((btn)=>{
        btn.addEventListener('clik', ()=>{
            alert("Actualizar Stock");
        });

        
    })


