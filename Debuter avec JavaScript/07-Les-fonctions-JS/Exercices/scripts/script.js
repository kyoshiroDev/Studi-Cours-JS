let stock = 4029;
let solde = 0;

// Question 1
function vente(produit, prix) {
	let gain = produit * prix;
	solde += gain;
	stock -= produit;
  return gain;
}

console.log(vente(104, 10.5));
console.log("Stock apres vente: " + stock);
console.log("solde apres vente: " + solde);

// Question 2
function informationDuMagasin(){
  return console.log(`Stock du magasin: ${stock}, Solde total: ${solde}`);
}
informationDuMagasin()