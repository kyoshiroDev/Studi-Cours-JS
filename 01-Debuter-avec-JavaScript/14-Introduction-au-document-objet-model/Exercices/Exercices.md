# Exercices :

Vous cherchez à mettre au point un système de calendrier basé sur des scripts réalisés en POO. La première étape pour vous est de définir une classe **Event** qui contient les différentes propriétés d’un évènement : son titre, sa date et sa description. Ces trois propriétés sont des propriétés d’instance dont la valeur sera définie à chaque appel du constructeur de **Event**. La propriété **date** sera définie sur un objet Date, qui sera instancié dans le constructeur même. Lors de l’appel du constructeur **Event**, l’utilisateur pourra passer pour le paramètre **date** une chaîne de caractères au format ISO 8601.

## Question 1

Définir la classe Event avec toutes ces informations, et l’instancier.

## Question 2

Définir une méthode d’instance permettant d’afficher pour chaque évènement une chaîne avec le format :

- "-------- jj/mm/aaaa --------
- Titre de l’évènement : {titre}
- Description : {description}"
- Le format "jj/mm/aaaa" correspond si nous prenons un exemple à "12/07/2023".
- Appeler la méthode définie.
