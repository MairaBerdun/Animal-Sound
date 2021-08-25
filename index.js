
//agregar evento a los botones
let numberOfButtons = document.querySelectorAll(".animal").length; //guardo la cant de valores del array con la clase animal


for (let i = 0; i < numberOfButtons; i++) {

    document.querySelectorAll(".animal")[i].addEventListener("click", function() { //agrego el evento y la accion a ejecutar
        
        let especie = this.innerHTML;

        switch (especie) { //si el inner del boton toma esos valores...
            case "ave":
                let ave = new Audio('sounds/pajaro.mp3'); //creamos una nueva variable que guarda un nuevo ojeto donde especificamos el archivo
                ave.play(); // lo que se ejecutara - play es un metodo
                break;

            case "elefante":
                let elefante  = new Audio('sounds/elefante.mp3'); 
                elefante.play();
                break;
        
            case "perro":
                let perro  = new Audio('sounds/perro.mp3'); 
                perro.play();
                break;

            case "tigre":
                let tigre  = new Audio('sounds/tigre.mp3'); 
                tigre.play();
                break;
        
            case "gato":
                let gato  = new Audio('sounds/gato.mp3'); 
                gato.play();
                break;

            case "vaca":
                let vaca  = new Audio('sounds/vaca.mp3'); 
                vaca.play();
                break;
            
            case "zorro":
                let zorro  = new Audio('sounds/zorro.mp3'); 
                zorro.play();
                break;

            default:
        }
        
    
    });
}



