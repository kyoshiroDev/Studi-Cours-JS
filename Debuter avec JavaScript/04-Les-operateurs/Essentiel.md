# Essentiel

Nous avons abordé des opérateurs en JavaScript. Les opérateurs vont permettre de manipuler et d’analyser les données. Nous avons vu à l’aide d’exemples 4 principaux types d’opérateurs : les opérateurs arithmétiques, les opérateurs d’affectation, les opérateurs de comparaison et les opérateurs logiques.

Les opérateurs d’arithmétique permettent de réaliser des opérations mathématiques. Les opérateurs d’affectation permettent d’affecter une valeur à une variable. Nous avons aussi vu que certains opérateurs peuvent permettre de manipuler des données comme des chaînes de caractères, et de concaténer du texte. Les opérateurs de comparaison permettent quant à eux de comparer des valeurs et de renvoyer un booléen en fonction du résultat de la comparaison. Les opérateurs de logique permettent notamment de combiner de manière logique des expressions. Les opérateurs de logique et de comparaison seront donc essentiels dans l’utilisation des conditions.

Les opérateurs sont donc indispensables lorsqu’on fait du développement web, et plus généralement de la programmation. Ce tableau récapitule les différents opérateurs que nous avons abordés :

### Opérateurs arithmétiques:
|    Opérateur     |  #   |       Exemple        |  Résultat   |
|:----------------:|:----:|:--------------------:|:-----------:|
|     Addition     |  +   |  let a = 10 + 14.5;  |  a = 24.5   |
|   Soustraction   |  -   |  let a = 12 - 10.5;  |   a = 1.5   |
|  Multiplication  |  *   |  let a = 12 * 10.5;  |   a = 126   |
|     Division     |  /   |   let a = 12 / 4;    |    a = 3    |
|      Modulo      |  %   |   let a = 13 % 4;    |    a = 1    |
|    Puissance     |  **  |   let a = 10 ** 4;   |  a = 10000  |
|  Incrémentation  |  ++  |   let a = 14; a++;   |   a = 15    |
|  Décrémentation  |  --  |   let a = 14; a--;   |   a = 13    |

### Opérateur d'affectation:
|             Opérateur              |  #   |       Exemple        |   Résultat    |
|:----------------------------------:|:----:|:--------------------:|:-------------:|
|         Assignation simple         |  =   |   let a = "texte";   |  a = "texte"  |
|     Affectation aprés addition     |  +=  |  let a = 20; a+=10;  |    a = 30     |
|   Affectation aprés soustraction   |  -=  |  let a = 20; a-=10;  |    a = 10     |
|  Affectation aprés multiplication  |  *=  |  let a = 20; a*=10;  |    a = 200    |
|     Affectation aprés division     |  /=  |  let a = 20; a/=10;  |     a = 2     |

### Opérateurs utiles pour les chaînes de caractères:
|            Opérateur             | #  |             Exemple              |      Résultat      |
|:--------------------------------:|:--:|:--------------------------------:|:------------------:|
|          Concaténation           | +  |    let a = "Helle" + "World";    | a = "Hello World"  |
| Affectations aprés concaténation | += | let a = "Hello";let a+= "World"; | a = "Hello World"  |

### Opérateurs de comparaison:
|       Opérateur       |  #  |                  Exemple                  |  Résultat  |
|:---------------------:|:---:|:-----------------------------------------:|:----------:|
|        Égalité        | ==  |  let a = "bla"; console.log(a == "bla")   |    true    |
|       Inégalité       | !=  |  let a = "bla"; console.log(a != "bla")   |   false    |
|    Égalité stricte    | === |    let a = "1"; console.log(a === 1);     |   false    |
|   Inégalité stricte   | !== |    let a = "1"; console.log(a !== 1);     |    true    |
|  Stricte infériorité  |  <  |            console.log(5 < 9);            |    true    |
|  Stricte supériorité  | \>  |            console.log(5 > 9);            |   false    |
|      Infériorité      | <=  |            console.log(5 < 9);            |    true    |
|      Supériorité      | \>= |            console.log(5 < 9);            |    true    |

### Opérateurs de logique:
| Opérateur |  #   |             Exemple             | Résultat |
|:---------:|:----:|:-------------------------------:|:--------:|
|    Et     |  &&  |  console.log(5 == 5 && 4 < 2;)  |  false   |
|    Ou     | \|\| | console.log(5 == 5 \|\| 4 < 2); |   true   |
|    Non    |  !   |       console.log(!true);       |  false   |