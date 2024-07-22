# Essentiel:

Dans ce cours, nous avons parlé de l’objet JS **Number**. Les objets sont des entités permettant de manipuler les données d’une manière spécifique. Chaque objet se caractérise par un ensemble de propriétés, qui seront de simples variables (des attributs), ou des méthodes (qui sont finalement des fonctions).

L’objet *Number** est un objet qui permet d’envelopper un type primitif **Number** dans un objet. Il permet de traiter et de manipuler les nombres comme des objets. Nous avons pu voir que les objets **Number** peuvent stocker des nombres compris dans une certaine limite.

Pour construire un objet **Number**, il faut utiliser le constructeur **Number**, en le précédant du mot clé new, et en passant comme argument la valeur primitive (le nombre) stockée. Nous avons vu qu’il est très facile de réaliser des opérations arithmétiques avec des objets de type **Number**.

**Number** donne accès à des méthodes statiques, c’est-à-dire des méthodes qu’on peut appeler directement via le mot **Number**. Les méthodes commençant par « is » permettent de renvoyer un booléen pour déterminer si un nombre est entier, fini, etc.

Chaque instance de **Number**, c’est-à-dire chaque objet créé avec le constructeur **Number** a accès à des méthodes (non statiques) héritées de l’objet **Number.prototype**. Nous avons abordé dans ce cours la méthode plus qu’essentielle **valueOf()** permettant de récupérer la valeur du type primitif (du nombre) stocké par l’objet **Number**. Nous avons par ailleurs parlé des méthodes de conversion **toString()** et **toExponential()**.