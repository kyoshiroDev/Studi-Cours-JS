# Exercices :

Vous êtes un vendeur d’écouteurs audio et vous cherchez à mettre au point un système de e-commerce pour vendre vos produits. Les écouteurs que vous vendez ont tous des propriétés communes :

- boite = true;
- nbEcouteurs = 2;

En revanche, chaque produit a des propriétés spécifiques :

- marque;(chaine)
- sansFil;(booléen)
- price;(nombre)

## Question 1 :

Créez une classe définissant le type **Ecouteur**. Définissez une méthode d’instance **fiche()** permettant grâce à une boucle d’afficher les différentes propriétés (clé et valeur) de l’instance d’**Ecouteur**. Instanciez 2 fois **Ecouteur** pour créer deux objets différents de type **Ecouteur**, et appelez pour chaque instance la méthode **fiche()**.

## Question 2 :

Créez une classe **Panier** permettant de définir des objets de type **Panier**. Cette classe ne définira pas d’attributs d’instance, nous n’avons donc pas besoin de définir le constructeur, un constructeur par défaut sera créé et appelé automatiquement lors de l’instanciation. Définissez une propriété statique **contenu** qui sera définie sur un tableau. Définissez trois méthodes statiques :

- UNe permettant d'ajouter un écouter au tableau (la référence de l'objet)
- Une permettant de supprimer un écouteur au tableau (la référence de l'objet)
- Une permettant d'afficher la marque de chaque produit présent dans le panier

Appelez chaque méthode
