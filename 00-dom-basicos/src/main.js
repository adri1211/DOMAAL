
// const handlerClickSpan = (e) => {

//     const span = e.target;
//     const randomColor = Math.floor(Math.random()*16777215).toString(16);
//     span.style.backgroundColor = `#${randomColor}`;
// };

// const handlerDobleClickParrafo = (e) => {
//     const parrafo = e.target;
//     alert(parrafo.textContent);
// };


document.addEventListener('DOMContentLoaded', ()=> {

//RELACCIÓN 1

// //1.Selecciona el elemento h1 por su ID.
// const elementDiv = document.getElementById("contenedorPrincipal");
// const elementH1 = elementDiv.querySelector("h1");
// console.log(elementH1);
// console.log(elementH1.textContent);
// //forma rapida
// const elementH1v2 = document
//     .getElementById("contenedorPrincipal")
//     .querySelector("h1");
// console.log(elementH1v2);

// //2.Selecciona todos los párrafos con la clase "parrafo" dentro del contenedorSecundario.
// const elementP = document.querySelectorAll("#contenedorPrincipal .parrafo");
// console.log(elementP);

// //3.Selecciona el elemento img por su atributo src.
// const elementImg = document.querySelector("img[src='imagen.png']");
// console.log(elementImg);

// //4.Selecciona todos los elementos <span> dentro del contenedorSecundario.
// const elementsSpan = document.querySelectorAll("#contenedorSecundario span");
// console.log(elementsSpan);

// //5.Selecciona el primer párrafo con la clase "importante".
// const primerParrafoImportante = document.querySelector(".parrafo.importante");
// console.log(primerParrafoImportante);

// //6.Selecciona todos los párrafos que están dentro de un elemento con el id "contenedorPrincipal".
// const parrafosContenedorPrincipal = document.querySelectorAll("#contenedorPrincipal p");
// console.log(parrafosContenedorPrincipal);

// //7.Selecciona todos los elementos que tienen el atributo data-atributo con valor "valor1".
// const elementosConAtributo = document.querySelectorAll("[data-atributo='valor1']");
// console.log(elementosConAtributo);

// //8.Selecciona el segundo párrafo que está dentro de un elemento con la clase "importante".
// const parrafosImportante = document.querySelectorAll(".parrafo.importante");
// parrafosImportante.length > 1
//     ?console.log(parrafosImportante[1])
//     :null;

// //9.Selecciona todos los elementos <span> que están dentro de cualquier elemento con la clase "contenedor".
// // const elementosSpanContenedorSecundario = document.querySelectorAll("#contenedorSecundario span"); 

// //10.Selecciona el tercer párrafo dentro del contenedorPrincipal que tiene la clase "parrafo".
// const tercerParrafoContPrincipal = document.querySelectorAll("#contenedorPrincipal .parrafo");
// tercerParrafoContPrincipal.length > 2
//     ?console.log(tercerParrafoContPrincipal[2])
//     :null;




// RELACCIÓN 2

//1.Añade un evento de clic a todos los elementos <span> dentro del contenedorSecundario. Cuando se haga clic, cambia el color de fondo del elemento al azar.
// document.querySelectorAll("#contenedorSecundario span")
//     .forEach(span =>{
//         span.addEventListener("click", handlerClickSpan)
//     });

//2.Crea una función que muestre una alerta con el contenido de cualquier párrafo que tenga la clase "parrafo" cuando se haga doble clic en él.
// document.querySelectorAll(".parrafo").forEach((parrafo) =>{
//     parrafo.addEventListener("dblclick", handlerDobleClickParrafo);
       
// });


//4.Crea una función que cambie el contenido de todos los párrafos dentro del contenedorSecundario cuando se presione la tecla "Enter". 
//El nuevo contenido debe ser un texto aleatorio (por ejemplo, "Nuevo contenido").
document.addEventListener("keydown", (event)=>{
    if(event.key==="Enter"){
        document.querySelectorAll("#contenedorSecundario p").forEach((parrafo) =>{
            parrafo.textContent = "Nuevo contenido";
        });
    }
})


// //5.Añade un evento de clic a cualquier elemento con la clase "etiqueta". Cuando se haga clic, elimina el elemento del DOM.
// document.querySelectorAll(".etiqueta").forEach((elemento)=>{
//     elemento.addEventListener("click", ()=>{
//         elemento.remove();
//     })
// })

//6.Crea una función que cambie el color de todos los elementos <span> dentro del contenedorSecundario cuando se mueva el mouse sobre ellos. 
//El nuevo color debe ser azul.
document.querySelectorAll("#contenedorSecundario span").forEach((span)=>{
    span.addEventListener("mouseover", ()=>{
        span.style.color = "blue";
    });
    span.addEventListener("mouseout", ()=>{
        span.style.color = "";
    });
    
});

//7.Añade un evento de carga a la página. Cuando la página se cargue, muestra una alerta con el texto "Página cargada".


//8.Crea una función que cambie el tamaño del texto de todos los párrafos dentro del contenedorPrincipal cuando se haga clic en el elemento img. 
//El nuevo tamaño debe ser el doble del tamaño actual.
document
    .querySelector("#contenedorPrincipal img")
    .addEventListener("click", ()=>{
        document.querySelectorAll("#contenedorPrincipal p").forEach((parrafo)=>{
            const currentSize = window.getComputedStyle(parrafo).fontSize;
            parrafo.style.fontSize = `${parseInt(currentSize)*2}px`;
        })
    });
        

//9.Añade un evento de teclado a la página. Cuando se presione cualquier tecla, muestra una alerta con el código de la tecla presionada.
document.addEventListener("keydown", (event) => {
    alert(`tecla pulsada: ${event.code}`);
});

//10.Crea una función que cambie el color de fondo del contenedorPrincipal cuando se haga clic en cualquier elemento dentro de él. El nuevo color debe ser verde.
document.querySelectorAll("#contenedorPrincipal").forEach((elemento)=>{
    elemento.addEventListener("click", ()=>{
        elemento.style.backgroundColor = "green";
    })
})





});