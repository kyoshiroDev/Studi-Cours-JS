# Essentiel:

Dans ce cours, nous avons parlé des boucles en JavaScript. Les boucles permettent de réitérer des instructions, ce qui
évite d’avoir à écrire toutes les itérations une par une. Il existe plusieurs boucles dans de nombreux langages de
programmation, que l’on retrouve en JavaScript.

Tout d’abord, on retrouve la boucle **for** qui est, en règle générale, utilisée lorsque, juste avant la première
itération
de la boucle, le nombre d’itérations est fixé. On peut l’utiliser en spécifiant 3 paramètres : l’initialisation d’un
compteur, la condition et l’incrémentation du compteur. On peut aussi l’utiliser avec le mot clé in permettant de
parcourir les propriétés d’un objet et le mot clé of permettant de parcourir les valeurs d’un objet étirable, par
exemple les valeurs des éléments d’un tableau.

Nous avons ensuite la boucle **while** qui, quant à elle, est en général utilisée quand le nombre d’itérations dépend
des
instructions présentes dans le corps de la boucle. Elle est donc utilisée quand, juste avant la première itération, le
nombre total d’itérations n’est pas fixé. Il faut simplement spécifier une condition en paramètre qui permettra
d’exécuter les itérations de la boucle tant que cette condition renvoie **true**.

Le système **do/while** permet d’opérer une première itération de la boucle avant que la condition soit contrôlée.

Le mot clé **break** permet de stopper l’exécution d’une boucle et de passer aux instructions suivantes (après la
boucle).
Le mot clé **continue** permet d’interrompre une itération de la boucle à un endroit donné pour passer directement à
l’itération suivante.

Enfin, un point auquel il faut constamment veiller est celui d’éviter absolument les boucles infinies qui font planter
le programme.