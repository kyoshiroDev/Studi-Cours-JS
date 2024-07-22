let variable;

// Question 1
switch (typeof variable) {
	case "number":
		console.log("C'est un nombre");
		break;
	case "bigint":
		console.log("C'est un grand entier");
		break;
	case "NaN":
		console.log("Ce n'est pas un nombre");
		break;
	case "boolean":
		console.log("C'est un booléen");
		break;
	case "string":
		console.log("C'est une chaîne de caractères");
		break;
	case "symbol":
		console.log("C'est un symbole");
		break;
	case "undefined":
		console.log("C'est une valeur non définie");
		break;
    // Question 2
	default:
		if (variable == null) {
			console.log("La valeur est nulle");
		} else {
			console.log("Ce type n'est pas référencé");
		}
		break;
}
