const list = [24, 67, 18];

let resultat = "";

// Question 1
for (nb of list) {
	resultat += "Multiples de " + nb + " : ";
	let compteur = 1;
	while (compteur <= nb) {
		if (nb % compteur == 0) {
			resultat += compteur + ", ";
		}
		compteur++;
	}
	resultat += "\n \n";
}

console.log(resultat);

// Question 2
for (nb of list) {
	resultat += "Multiples de " + nb + " : ";
	for (let compteur = 1; compteur <= nb; compteur++) {
		if (nb % compteur == 0) {
			resultat += compteur + ", ";
		}
	}
	resultat += "\n \n";
}

console.log(resultat);