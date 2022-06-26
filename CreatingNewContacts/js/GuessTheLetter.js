function GuessTheLetter(){
    var letters = [
        "T",
        "R",
        "W",
        "I",
        "U",
        "G",
        "M",
        "Y",
        "F",
        "P",
        "D",
        "X",
        "B",
        "N",
        "J",
        "Z",
        "S",
        "Q",
        "V",
        "H",
        "L",
        "C",
        "K",
        "E",
        "A",
        "O",
      ];
      // Elegimos el número
      var numberPrompt = prompt("Selecciona un número del 0 al 25");
    
      //Con un condicional evaluamos que la el valor que ingresamos sea correcto
      if (numberPrompt !== undefined && numberPrompt  !== null) {
        if (numberPrompt => 0 && numberPrompt <= 25) {
          //Para saber la letra del arreglo
          console.log(
            "El número que seleccionaste corresponde a la letra: " +
              letters[numberPrompt]
          );
          //Si el número que elegimos está en esos valores vamos a solicitar que ingrese una letra para ver la 2da parte de la condición
          var letterPromt = prompt("Ahora elije una letra");
          if (letterPromt != undefined || letterPromt != null) {
            if (letterPromt.toUpperCase() == letters[numberPrompt]) {
              console.log("Has ganado! :D");
            } else {
              console.log("Has perdido :(");
            }
          } else {
            alert("Has cancelado el jueguito :(");
          }
        } else {
          alert("El número no puede ser menor que 0 ni tampoco mayor que 25.");
        }
        
      } else {
        alert('Has cancelado el jueguito :(.')
      }
}
