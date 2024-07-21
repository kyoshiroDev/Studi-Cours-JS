# Exercice

Vous cherchez à réaliser un système vérifiant qu’un ordinateur répond à différents critères.
Cet ordinateur a plusieurs caractéristiques, voici le script de base :

```
let marque = "HP";
let modele = "Pavillon";
let stockage = 512;
let ram = 16;
let processeur = "intel core i7";
console.log(/*code Question 1*/);
/*code Question 2*/
```

La console doit afficher **true** si et seulement si l’ordinateur est de marque « HP » ou « Acer », qu’il a un stockage
supérieur ou égal à 256 GO et une ram supérieure ou égale à 8 GO.

## Question 1:

Dans le console.log (à l’emplacement /*code Question 1*/) écrivez le code permettant de réaliser ce test.

## Question 2:

Dans la suite du code (à l’emplacement /* code Question 2 */), écrivez des instructions permettant d’assembler dans une
chaîne la marque, le nom du modèle, la ram et le processeur de l’ordinateur. La chaîne pourra ressembler à « HP
Pavillon, 512 GO de stockage, 16 GO de ram, processeur intel core i7 ». Bien évidemment, les données ne seront pas les
mêmes quand vous changerez la valeur des variables.

Ensuite, définissez une variable **prix**. Celle-ci contiendra le prix de l’ordinateur qui sera calculé en additionnant le
**stockage**, et la **ram** multipliée par 20. Enfin, rajouter le prix dans la chaîne concaténée pour que la chaîne ressemble
à : « HP Pavillon, 512 GO de stockage, 16 GO de ram, processeur intel core i7, prix : {prix} euros ». Afficher la chaîne
dans la console.