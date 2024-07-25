const marque = "Apple";
const processeur = "M2";
const ram = 8;
const stockage = 256;

if ((marque == "Apple" || marque == "HP" || marque == "Microsoft") && ram >= 4 && stockage >= 256) {
    console.log("L'ordinateur est pris en charge");
    if (marque == "Apple") {
        switch (processeur) {
            case "Intel core I7":
                console.log("Le temps de réparation est de 25 jours max");
                break;
            case "M1":
                console.log("Le temps de réparation est de 10 jours max");
                break;
            case "M2":
                console.log("Le temps de réparation est de 20 jours max");
                break;
            default:
                console.log("Le temps de réparation est de 35 jours max");
                break;
        }
    } else {
        console.log("Le temps de réparation est de 20 jours max");
    }
} else {
    console.log("L'ordinateur n'est pas pris en charge");
}