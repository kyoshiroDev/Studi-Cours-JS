const marque = "Apple";
const processeur = "M1";
const ram = 4;
const stockage = 520;

//Question 1
if ((marque === "Apple" || marque === "HP" || marque === "Microsoft") && ram >= 4 && stockage > 256) {
    console.log("Pris en charge");
}
// Question 2
if (marque === "Apple") {
    switch (processeur) {
        case "M1":
            console.log("Le temps de réparation est de 10 jours max")
            break;
        case "Intel core I7":
            console.log("Le temps de réparation est de 25 jours max")
            break;
        case "M2":
            console.log("Le temps de réparation est de 20 jours max")
            break;
        default:
            console.log("Le temps de réparation est de 35 jours max")
            break;
    }
}else {
    console.log("Ordinateur non pris en charge");
}





