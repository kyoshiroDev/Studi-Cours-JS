let marque = "HP";
let modele = "Pavillon";
let stockage = 512;
let ram = 16;
let processeur = "intel core i7";

console.log((marque == "HP" || marque == "Acer") && stockage >= 256 && ram >= 8);

/*code Question 2*/

console.log((marque == "HP" || marque == "Acer") && stockage >= 256 && ram >= 8);

let prix = stockage + (ram * 20) ;

let fiche = marque + " " + modele + ", " + stockage + " GO de stockage, " + ram + " GO de ram, processeur " + processeur + ", prix : " + prix + " euros";

console.log(fiche);

