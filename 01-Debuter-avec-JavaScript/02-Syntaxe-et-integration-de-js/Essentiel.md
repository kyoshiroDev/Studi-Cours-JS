# Essentiel

Nous avons vu comment intégrer un script JavaScript dans une page HTML. Nous avons compris que cʼest la balise
```<script>``` qui permet dʼintégrer du JS. Il existe 2 méthodes permettant dʼintégrer des scripts JS.

La méthode interne revient à écrire directement le code JavaScript dans le code HTML, à lʼintérieur dʼune balise
```<script>```. Cette méthode peut être pratique pour des courts extraits de codes, mais nʼest pas recommandée car le
code HTML peut vite devenir illisible.

La méthode externe quant à elle revient à écrire le script dans un fichier **.js** à part. On utilise la
balise ```<script>``` dans le code HTML et lʼattribut **src** pour spécifier un chemin vers le fichier. Cette méthode
est préconisée, car elle permet de rendre plus lisible le code HTML et par ailleurs dʼorganiser ses scripts dans des fichiers classés dans des
répertoires.

Dʼun point de vue conventionnel, cʼest dans la balise ```<head>``` quʼon va intégrer nos scripts (via des balises
scripts avec bien évidemment la méthode externe). Il vaut mieux intégrer les scripts après les liens vers les feuilles de style
(.css). Cependant, dans le cas presque systématique ou le script JS essaye de récupérer des éléments HTML, des
erreurs vont se produire. En eﬀet, les scripts vont être exécutés avant le chargement de la page. Donc pour éviter ce problème, nous pouvons utiliser lʼattribut **defer** qui permet dʼexécuter un script après le
chargement de la page.