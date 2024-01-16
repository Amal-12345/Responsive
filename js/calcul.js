let myFirstNumber = document.querySelector(".firstNumber");
let result = document.querySelector(".result");
let mySecondNumber = document.querySelector (".secondNumber");
let myOperator = document.querySelector('.result')

let calculButton = document.querySelector(".calcul");
calculButton.addEventListener("click", logger);

function logger() {
  console.log(myFirstNumber.value);
}

// ICI , Rajouter du code pour cibler le secondNumber et l'operation

function logger() {
    console.log(myFirstNumber.value, myOperator.value, mySecondNumber.value);
}

result.innerText = "Mon paragraphe";

function calculatrice() {
  let resultat = "";
  let a = Number(myFirstNumber.value);
  let b = Number(mySecondNumber.value);

  if (myOperator.value == "+") {
    resultat = a + b;
  }
  if (myOperator.value == "-") {
    resultat = a - b;
  }

  result.innerHTML = resultat;
}
