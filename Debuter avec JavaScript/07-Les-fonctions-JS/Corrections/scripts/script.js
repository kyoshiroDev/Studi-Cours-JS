let stock = 4029;

let solde = 0;

// Question 1
function vendre(nbProduits, priceUnitaire) {
	stock -= nbProduits;
	let total = nbProduits * priceUnitaire;
	solde += total;
	return total;
}

// Question 2
function infosMagasin() {
	let message =
		"Stock du magasin : " +
		stock +
		" produits\nSolde total : " +
		solde +
		" euros";
	console.log(message);
	return message;
}

console.log(vendre(104, 10.5)); //1092

console.log(stock); //3925

console.log(solde); //1092

infosMagasin();
