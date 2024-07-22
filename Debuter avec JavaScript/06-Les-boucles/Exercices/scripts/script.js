const list = [24, 67, 18];
let resultat = [];

for (let number of list) {
	divisors = [];
	for (let i = 1; i <= number; i++) {
		if (number % i === 0) {
			divisors.push(i);
		}
	}
	resultat[number] = divisors;
}

resultat.forEach((divisors, index) => {
	console.log(`Les diviseurs de ${index} sont : ${divisors.join(", ")}`);
});
