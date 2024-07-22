# Exercices:

Vous cherchez à réaliser un script permettant, à l’aide d’un **switch**, de vérifier le type d’une valeur (pour toutes les valeurs primitives abordées dans ce cours). Si le type est **String**, la console affichera : "C’est une chaîne de caractères", si c’est un **Number**, "C’est un nombre", si c’est un **Bigint**, "C’est un grand entier", etc. Les types à référencer sont :

- **number**
- **bigint**
- **boolean**
- **string**
- **symbol**
- **undefined**
- **null**

Voici votre code de base:

```
let variable;

//code;
```

## Question 1:
Réaliser le script en question, sans référencer le type null.

## Question 2:

Nous n’avons pas référencé le cas où **variable** serait définie sur **null** car, un bug en JavaScript fait que l’expression **typeof null** renvoie **object** et non **null**. Trouver une combine pour que dans le cas ou **variable** est **null**, la console affiche "C’est une valeur nulle".