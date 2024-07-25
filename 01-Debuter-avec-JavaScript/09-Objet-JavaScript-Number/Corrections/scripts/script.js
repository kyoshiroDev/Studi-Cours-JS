// Question 1
const prix = new Number(500);

function verifPrice(pr) {
	if (
		Number.isInteger(pr.valueOf()) &&
		pr.valueOf() >= 500 &&
		pr.valueOf() <= 1500
	) {
		console.log("Le prix est valide");
	} else {
		console.log("Le prix n'est pas valide");
	}
}

verifPrice(prix);

// Question 2
const prix2 = new Number(678);

function verifPrice(pr) {
	if (
		typeof pr == "object" &&
		Number.isInteger(pr.valueOf()) &&
		pr.valueOf() >= 500 &&
		pr.valueOf() <= 2000
	) {
		console.log("Le prix est valide");
	} else {
		console.log("Le prix n'est pas valide");
	}
}

verifPrice(prix2);
