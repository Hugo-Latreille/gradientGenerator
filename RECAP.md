# Redux

## Idées générales

Nos applications grossissent de plus en plus. Au début ca allait, mais on se retrouve depuis quelques jours avec des composants App gigantesques, avec plein de fonctions dedans pour gérer notre état. C'est dur a lire, c'est dur a écrire, et c'est dur a débugguer.

Nous aimerions déporter toute notre logique de gestion d'état dans un endroit a part, pour revenir a une séparation des responsabilités plus saine.

## Vocabulaire

### Action

Une action est un objet comportant a minima un type et optionnellement des paramètres.
Elle caractérise précisément la modification attendue de l'état. (Julien G)

### Action creator

Optionnel. Comme donner des objets action a dispatch est un peu verbeux, on pourrait se bricoler une petite fonction dont la responsabilité serait de fabriquer l'action

Ainsi nous passerions de 

```javascript
store.dispatch({ type: 'FAIRE_TRUC', bidule: 'machin' })
```
à
```javascript
store.dispatch(faireTruc('machin'))
```

Point bonus : on n'aura du coup plus besoin d'importer nos constantes avec le nom des actions.


### Reducer

Un reducer est une fonction "entonnoir" qui prend le state actuel et une action en paramètre et retourne un nouvel état modifié par l'action (Pierre A)

### Dispatch

Dispatch est une méthode de l'objet store. Elle prend en paramètre une action et se charge de la donner au reducer et de sauvegarder le résultat du reducer. Enfin, elle appellera tous les abonnements, c'est a dire les fonctions données a subscribe.

### Subscribe

Subscribe est une méthode de l'objet store. Elle prend en paramètre un callback et la stocke pour qu'il soit rappelé plus tard (par le dispatch).

Permet aux listener d’être notifié en cas de modification du Store.
Nos divers callbacks vont souscrire au store pour ensuite être "notifié" des modifications afin d'effectuer la mise à jour de notre interface en conséquence. (Romain P)

### getState

Retourne l’état courant du store. L’objet retourné ne doit pas être modifié. (Romain P)

### createStore

createStore construit à partir d'un reducer un objet store comportant notamment les méthode getState, dispatch et subscribe. (Julien G)

## Bonnes pratiques

- si je veux modifier une donnée, je dois toujours passer par dispatch et lui donner une action
- si je veux juste récupérer des données, j'utilise store.getState()
- je ne refais mes rendus a la main, je les déclenche depuis la méthode subscribe
- pour mes actions, je m'applique a ce que leur nom soit en MAJUSCULES_COMME_CA et a ce qu'elles contiennent un VERBE.
  - si j'ai une action sans verbe -> je suis probablement en train de coder quelque chose qui n'a aucun sens !
- si j'utilise redux, j'y vais a fond ! Je mets TOUT dedans ! Tout l'intérêt est d'avoir tout au même endroit (la fameuse source unique de vérité dont on parle depuis 2 semaines).
  - ne surtout pas essayer de mix bizarre useState / redux, car dès que vous voudrez croiser 2 données de source différente => catastrophe
- on retrouvera les principes fondateurs du state
  - on ne modifie pas directement
  - on ne stocke que le strict nécessaire, tout ce qui peut être recalculé a la volée (donnée dérivée) n'a aucune raison d'être dans notre état.

## Le paragraphe pour les nerds

Redux est une machine a état fini s'appuyant sur un principe d'event sourcing. Notre reducer est une fonction pure, ce qui la rend déterministe.
