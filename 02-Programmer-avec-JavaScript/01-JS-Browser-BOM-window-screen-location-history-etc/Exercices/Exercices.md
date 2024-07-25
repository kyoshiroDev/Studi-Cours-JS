# Exercices :

Vous cherchez à créer un système d’authentification rapide avec un identifiant et un mot de passe sans passer par un formulaire HTML. L’authentification se fera via deux prompts interrogeant l’utilisateur sur son identifiant et son mot de passe. Attention, ce système ne sera pas du tout conventionnel ni sécurisé, c’est simplement un exemple pour utiliser les notions développées.

## Question 1 :

- Créez un projet avec une page connexion.html où les prompts seront lancés.
- Créez une page traitement.html ainsi que deux scripts : connexion.js et traitement.js.
- Créez une page connected.html contenant simplement un paragraphe « vous êtes connectés » et une page incorrect.html avec un paragraphe « l’identifiant ou mot de passe est incorrect ».
- Importez dans connexion.html le script connexion.js et dans traitement.html le script taitement.js.
- Créez dans connexion.js le système de prompt et créez des cookies stockant l’identifiant et le mot de passe à partir des entrées utilisateur pendant 1 heure.

## Question 2 :

Utilisez l’objet window.location pour ouvrir la page traitement.html depuis le script connexion.js une fois qu’un bouton connexion est cliqué, en ajoutant une nouvelle entrée dans l’historique de navigation. Le bouton connexion devra être créé avec JS. Créez dans traitement.js un script permettant de vérifier si les informations de connexion correspondent à :

- identifiant : TonyStark
- mdp : starktower

Si c’est bien le cas, quand un bouton « espace utilisateur » est cliqué, ouvrir dans un nouvel onglet la page connected.html sinon la page incorrect.html. Le bouton espace utilisateur devra être créé avec JS. La fenêtre ouverte devra avoir une dimension de 400 / 400 px.
