# js-react-redux
Gérer votre flux de données et de changement d'état de votre application grâce à Redux

## Step 0 :

Les 3 principes :
http://redux.js.org/docs/introduction/ThreePrinciples.html

On regarde les exemples :
https://github.com/reactjs/redux/tree/master/examples

On lit la doc : 
http://redux.js.org/

On se fait les tutos videos (au moins le premier) :

* https://egghead.io/courses/getting-started-with-redux
* https://egghead.io/courses/building-react-applications-with-idiomatic-redux

NB : on vérifie regulieremnt la doc et les exemples pour savoir si ça n'a pas changer dans la derniere version. ex. 

## Step 1 :

installer redux et react-redux

``` 
npm i -S redux react-redux

``` 


## Step 2 :

Arborescence de base

Créer 4 dossiers :
- actions
- components
- container
- reducers
- selectors

Mettez vos dumb components dans components 

## Step 3 :

* Quels sont les actions :
	* change_new_color
	* add_color
	* change_color
* créer vos reducers (avec redux combine reducers)
* créer votre store avec votre root reducers et votre preloaded state
* Ajouter redux-logger middleware

## Step 4 :

Ranger tous dans les bons dossiers

## Step5

Connecter vos composants à l'aide de container (react-redux connect)

# Step6

Ajouter redux-thunk middleware pour plus de souplesse sans perte de performance
