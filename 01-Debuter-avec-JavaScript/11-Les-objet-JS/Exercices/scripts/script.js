class Telephone {
	constructor(marque, modele, ram, stockage, prix) {
		this.marque = marque;
		this.modele = modele;
		this.ram = ram;
		this.stockage = stockage;
		this.prix = prix;
	}

	addPrice(price) {
		this.prix += price;
	}

	soldPrice(price) {
		this.prix -= price;
	}
}

tel = new Telephone("Apple", "Iphone 11", 4, 128, 500);
console.log(tel);

tel.addPrice(25);
console.log(tel);

tel.soldPrice(100);
console.log(tel);
