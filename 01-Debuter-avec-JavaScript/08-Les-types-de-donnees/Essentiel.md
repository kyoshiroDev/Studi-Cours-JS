# Essentiel:

Dans ce cours, nous nous sommes intéressés aux différents types de données en JavaScript, en nous concentrant sur les types primitifs. Les types primitifs sont les types de données qui définissent des valeurs primitives, donc des valeurs immuables. Les objets ne sont donc pas des types primitifs.

Nous avons vu que JavaScript fournit 2 types de données dédiées aux nombres : le type **Number** et le type **BigInt**. Le type **BigInt** permet de stocker des nombres entiers très grands. Le type **Number** quant à lui permet de stocker des nombres de différents types (entiers et décimaux, etc.).

Nous nous sommes également penchés sur d’autres types primitifs que vous connaissiez pour certains déjà : le type **Boolean** permettant de stocker **true** ou **false**, le type **String** permettant de définir des chaînes de caractères (à utiliser pour les textes), le type **Symbol** permettant notamment de créer des clés vers des propriétés, le type **Null** qui permet d’indiquer l’absence de valeur et le type **Undefined** qui renvoie la valeur **undefined** par défaut lorsqu’on cherche à récupérer une valeur non définie.

Par ailleurs, vous savez désormais que le type **Null** doit être défini, à la différence de **Undefined** dont la valeur primitive est renvoyée par défaut, dans le cas où une valeur n’est pas définie. Un bug de JavaScript est visible lorsqu’on affiche la valeur renvoyée par **typeof null**, on peut voir que le type renvoyé est **object** et non **null**. Mais une fois qu’on le sait, ce n’est pas très handicapant.