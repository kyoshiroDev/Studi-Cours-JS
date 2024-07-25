# Exercices:

Vous cherchez à réaliser un programme permettant à un réparateur d’ordinateurs de savoir si un modèle spécifique est
pris en charge par ses équipes. Chaque ordinateur à plusieurs caractéristiques. Voici votre script de base :

```
const marque;

const processeur;

const ram;

const stockage;

//conditions
```

Le réparateur ne prend en charge que les ordinateurs de marque Apple, HP et Microsoft. La ram doit aussi être supérieure
ou égale à 4 GO pour que l’ordinateur soit pris en charge. Les ordinateurs de moins de 256 GO de stockage ne sont pas
pris en charge.

## Question 1:

Construire un système permettant d’indiquer dans la console si l’ordinateur est pris en charge ou non, en fonction de
ces critères. Tester le script en définissant les variables sur des valeurs spécifiques.

## Question 2:

Si la marque est Apple, le réparateur demande que pour plusieurs processeur, l’utilisateur soit informé du temps de
réparation maximum :

- Intel core I7 : "Le temps de réparation est de 25 jours max"
- M1 : "Le temps de réparation est de 10 jours max"
- Autre processeur : "Le temps de réparation est de 35 jours max"

Pour les ordinateurs des autres marques, le temps de réparation sera le même : 20 jours max. L’utilisateur devra aussi
en être informé.

Modifier le script pour que ces changements soient pris en compte.

