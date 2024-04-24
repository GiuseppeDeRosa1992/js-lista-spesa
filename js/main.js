console.log("Ciao Giuseppe");
//RICHIAMO LA UL IN JS
let ul = document.getElementById("shopping-list")

//CREO LISTA DELLA SPESA CON ARRAY
const shoppingList = [
    "Uova",
    "Latte",
    "Burro",
    "Cioccolata",
    "Salame",
    "Acqua",
    "Coca",
    "Pasta",
    "Banane",
    "Pesce",
];

console.log(shoppingList)

for (let i = 0; i < shoppingList.length; i++ ) {
    console.log(i, shoppingList[i]);
}

//Do alla variabile i il valore 0 che poi userò nel ciclo while e la rendo visibile in console per vedere che valore ha
let i = 0;
console.log(i);
//inizio il ciclo while
while (i < shoppingList.length) {
    //AGGIUNGO IN PAGINA UN LI PER OGNI ELEMENTO DELLA LISTA
    ul.innerHTML += `<li>${shoppingList[i]}</li>`
    //Console.log del valore attuale della i che corrisponde anche al valore della cosa da comprare
    console.log(i, shoppingList[i])
    //aumento la i di 1 per far ripartire il ciclo while finchè non mi ha stampato tutti gli elementi della lista della spesa
    i++
}
//controllo che valore ha il contatore i una volta finito il ciclo while
console.log(i)
//Resetto il valore del contatore i a 0 perchè dopo il ciclo while mi dava valore 10 e può crearmi problemi in futuro
i = 0
console.log(i)