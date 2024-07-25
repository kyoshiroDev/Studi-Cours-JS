//Question1
let produit = new Object();
produit = {
	marque: new String("Apple"),
	modele: new String("Iphone 11"),
	ram: new Number(4),
	stockage: new Number(128),
	prix: new Number(500),
	//Question 2
	addPrice: function (montant) {
		this.prix += montant;
	},
	moinsPrice: function (montant) {
		this.prix -= montant;
	},
	affPrice: function () {
		console.log(this.prix);
	},
};
console.log(produit.marque.valueOf());
console.log(produit.ram.valueOf());

produit.moinsPrice(40);
produit.addPrice(80);
produit.affPrice();
