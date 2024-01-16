console.log('it works')
alert('it works');

let myName = 'Spoticlone'
const service = 'Streaming'

console.log(myName, service)

// Différente entre variable et constante

myName = 'Amal'
//service = 'Peinture'
// La tentative de changement de valeur de service échoue car c'est une constante, et donc la valeur ne peut être modifiée
// console.log(myName, service);

// En javascript on peut utiliser des fonctions, cela se passe en deux étapes

//1) Créer la fonction
function barbecue() {
      let playedText = 'fonction jouée';

  console.log(playedText)
}

// 2) Appeler la fonction

barbecue()



function barbecueWithParameters(charbon, viande) {
  console.log(charbon, viande);
}

barbecueWithParameters("Charbon de bois", " Poulet mayo");

function displayArtist(name) {
  console.log(name);
}

function calculator(a, b, operation) {
  if ((operation == "+")) {
    let value = a + b;
  console.log(value)
}
}
calculator(5, 9, "+");
calculator(15, 29);

