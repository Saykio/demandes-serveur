Application de demande de congés
============
Sommaire
------------
- [Prérequis](#Prérequis)
- [Installation](#Installation)
- [Utilisation](#Utilisation)

##Prérequis:
En effet pour pouvoir installer cette application il y a quelques prérequis a respecter.

Il vous faudra donc installer plusieurs outils tels que :

* [Bower](http://bower.io/) 
* [Nodejs](https://nodejs.org/)
* [Git](https://git-scm.com/)
* [phpmyadmin](http://www.phpmyadmin.net/home_page/index.php/)


##Installation : 
Avant tout il faudra recupérer les dossiers, pour cela utiliser la commande :
```
git clone https://github.com/Saykio/demandes-serveur
```
Il faudra installer bower via cette commande :  
```
bower install
```
Il faudra aussi installer npm : 
```
npm install
```
Il faudra télécharger et installer phpmyadmin pour utiliser une base de données qui est fournie dans le projet. Pour pouvoir utiliser cette base de données, crée dans phpmyadmin une BDD du nom de demande-base. Importez ensuite le document 


##Utilisation :

Pour commencer il faudra d'abord démarrer le serveur nodejs via l'invite de commande. Placez vous dans le répertoire du projet et ouvrez une invite de commande puis entrez dans cette invite la commande suivante : 
```
node demandes-serveur.js 
```

Un message devrait confirmer que votre serveur fonctionne et que vous écoutez sur le port 8080. Si ce n'est pas le cas. Recommencez les étapes depuis le debut.

![Alt text](https://github.com/Saykio/demandes-serveur/blob/master/Doc/image/nodejs.JPG)

Voici en gros ce que vous devriez obtenir. 
![Alt text](https://github.com/Saykio/demandes-serveur/blob/master/Doc/image/calendrier.JPG)


