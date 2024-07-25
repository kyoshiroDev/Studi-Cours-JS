// Question 1
class Ecouteur {
	static boite = true;
	static nbEcouteurs = 2;

	constructor(marque, price, sansFil) {
		this.marque = marque;
		this.sansFil = sansFil;
		this.price = price;
	}

	fiche() {
		for (let property in this) {
			console.log(property + " : " + this[property]);
		}
	}
}

const ecouteur1 = new Ecouteur("sony", 80, true);
ecouteur1.fiche();
console.log("-------------------");
const ecouteur2 = new Ecouteur("jbl", 60, false);
ecouteur2.fiche();

console.log("-------------------");

// Question 2
class Panier {
	static contenu = [];

	static addArticle(value) {
		this.contenu.push(value);
	}

	static removeArticle(value) {
		this.contenu.splice(this.contenu.indexOf(value), 1);
	}

	static affPanier() {
		for (let produit of this.contenu) {
			console.log(produit.marque);
		}
	}
}

Panier.addArticle(ecouteur1);
Panier.addArticle(ecouteur2);
Panier.affPanier();
console.log("---------------------");
Panier.removeArticle(ecouteur1);
Panier.affPanier();
