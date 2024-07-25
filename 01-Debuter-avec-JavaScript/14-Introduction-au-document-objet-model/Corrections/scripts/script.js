// Question 1 :

// creation du tableau contenant les 5 valeurs
var joueurs = ["Tom", "Stéphanie", "Pierre", "Paul", "Maria"];
// creation d’un élément ul > contenant de liste
maListe = document.createElement("ul");
//creation d’un identifiant pour ce contenant
maListe.id = "liste";
// élément est attaché au corps du document
document.body.appendChild(maListe);
//creation des elements de la liste avec une boucle
for (var n in joueurs) {
	monItem = document.createElement("li");
	monItem.innerHTML = joueurs[n];
	maListe.appendChild(monItem);
}

// récupération de l’identifiant du contenant de la liste dans une variable
var monIdListe = document.getElementById("liste");
// pointage sur le dernier élément de la liste
monDernier = monIdListe.lastChild;
//enlèvement de l’élément pointé
monDernier.remove();

// Question 2
// creation du tableau contenant les 5 valeurs
var joueurs = ["Tom", "Stéphanie", "Pierre", "Paul", "Maria"];
// creation d’un élément ul > contenant de liste
maListe = document.createElement("ul");
//creation d’un identifiant pour ce contenant
maListe.id = "liste";
// élément est attaché au corps du document
document.body.appendChild(maListe);
//creation des elements de la liste avec une boucle
for (var n in joueurs) {
	monItem = document.createElement("li");
	monItem.innerHTML = joueurs[n];
	maListe.appendChild(monItem);
}

// récupération de l’identifiant du contenant de la liste dans une variable
var monIdListe = document.getElementById("liste");
// pointage sur le dernier élément de la liste
monDernier = monIdListe.lastChild;
//enlèvement de l’élément pointé
monDernier.remove();
