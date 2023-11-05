
document.addEventListener("DOMContentLoaded", function(){
    let words = ["galleta", "tomate", "camino", "cambia", "ventil"];
    let wordsinputs = ["galleta", "tomate", "camino", "cambia", "ventil"];
    let index=[];
    let indexs;
    const letters = document.querySelectorAll(".letters");
    const buttonramdon=document.getElementById("ramdon")
    const buttonreset=document.getElementById("reset")
    const inputs = document.querySelectorAll(".inputs");
    const mistakes = document.querySelectorAll(".mistaekes");
    const titletries=document.getElementById("titletries")
    const tries=document.querySelectorAll(".tries")
    let endgame=false;
    const randomwords =()=>{
        for (let i = 0; i < words.length-1; i++) {
            let wordrandom = words[i].split("");
            wordrandom.sort(function(){
                return 0.5 - Math.random();
            })
            words[i]=wordrandom.join("");
           
        }
    } 
    const selectorindex = () => {
        let randomindex = Math.floor(Math.random() * 5);
        indexs=randomindex;
        if (index.length === 5) {
            alert("No quedan más palabras");
        } else if (index.length === 0) {
            index.push(randomindex);
            console.log(randomindex);
            return randomindex;
        } else {
            while (index.length < 5) {
                if (!index.includes(randomindex)) {
                    index.push(randomindex);
                    return randomindex;
                } else {
                    randomindex = Math.floor(Math.random() * 5);
                    indexs=randomindex;
                }
            }
        }
    }
    
    function pushletter(){
        randomwords();
            try{

                let letter = words[selectorindex()].split("");
                for (let i = 0; i < letter.length; i++) {
                letters[i].innerHTML=letter[i];

            }
            }catch(error){
                let letterfinish = "finnnn";
                for (let i = 0; i < letterfinish.length; i++) {
                letters[i].innerHTML=letterfinish[i];
                
            }
            }
    }

    buttonramdon.addEventListener("click",function(){
        pushletter();
        buttonramdon.textContent="Ramdon"

    });

    function reset() {
        endgame=false;
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = "";
        }
        for (let i = 0; i < index.length; i++) {
            index.splice(i, 1);
        }
        for (let i = 0; i < mistakes.length; i++) {
            mistakes[i].innerHTML = "";
            
        }
        for (let i = 0; i < tries.length; i++) {
            tries[i].style.background = "#4A5567";
            
        }
        titletries.innerHTML = `Tries(${0}/5):`;
        pushletter()
        
    }

    buttonreset.addEventListener("click",function(){
       
        reset();
    })

    

    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("input", function () {
            let letter = wordsinputs[indexs].split("");
            
    
            if (inputs[i].value === letter[i]) {
                endgame=true;
                if (i === 5  && endgame===true) { // Verificar si se han ingresado todas las letras correctamente
                    alert("¡Has ganado! La palabra es: " + letter.join(""));
                    // Puedes realizar acciones adicionales aquí, como reiniciar el juego.


                }else if(i === 5  && endgame===false){
                    alert("¡Has perdido! La palabra es: " + letter.join(""));

                }
            } else {
                endgame=false
                // Aquí puedes manejar el caso de una letra incorrecta
                console.log("Letra incorrecta: " + inputs[i].value);
    
                for (let z = 0; z < mistakes.length; z++) {
                    if (mistakes[z].textContent === "") {
                        if (mistakes[0].textContent === "") {
                            mistakes[z].innerHTML = inputs[i].value;
                        } else {
                            mistakes[z].innerHTML += "," + inputs[i].value;
                        }
                        titletries.innerHTML = `Tries(${z + 1}/5):`;
                        tries[z].style.background = "#C951E7";
                        break;
                    }
                }
    
                inputs[i].value = ""; // Restablecer el valor del campo de entrada actual
                alert("Fallo");
            }
    
            if (i < 5 && endgame===true) {
                inputs[i + 1].focus(); // Enfocar el siguiente input
            }else if(i === 5 && endgame===false){
                alert("El juego se termino ")
            }else{
                inputs[i].focus
            }
        });
    }
    




    
    
    


    
    
    
    
    

})