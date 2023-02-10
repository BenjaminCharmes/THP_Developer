<div align="center">

# Mini social network API

[![THP Badge](https://raw.githubusercontent.com/Beygs/Beygs/main/assets/the-hacking-project-badge.svg)](https://www.thehackingproject.org/)
[![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/powered-by-black-magic.svg)](https://forthebadge.com)

API pour le projet de **mini réseau social** de la semaine 7 de ✨ **THP Next** ✨<br/>
For educational purpose
  
[Installation](#installation) | 
[Configuration des autorisations](#configuration-des-autorisations) | 
[Endpoints](#endpoints)<br/>

</div>

Salut jeune (ou moins jeune 👴) moussaillon, je te présente la version améliorée (askip) de l'API de mini réseau social de THP.

J'espère que tu en feras bon usage, bon courage 😉

## Installation

Avec npm :
```shell
git clone git@github.com:Beygs/shmeeter-server.git
cd shmeeter-server
npm i
npm run develop
```

Avec yarn :
```shell
git clone git@github.com:Beygs/shmeeter-server.git
cd shmeeter-server
yarn
yarn develop
```

Ensuite, tu peux te rendre sur [http://localhost:1337/admin](http://localhost:1337/admin) dans ton navigateur préféré, créer tes identifiants administrateurs, et c'est parti !

## Configuration des autorisations

Une fois l'installation initiale faite, rends-toi dans "Paramètres", puis dans "Rôles & Permissions".

Voici la configuration :

- Pour le rôle "Authenticated":
  - Dans "Posts" (dans la section "Application"), coche *tout*.
  - Dans "User" (dans la section "Users-Permissions"), coche "find", "findone", "me", et "updateme".
  - Clique sur "Save".
- Pour le rôle "Public":
  - Dans "Posts" (toujours dans la section "Application"), coche uniquement "find".
  - Clique sur "Save".

Bravo, la configuration est terminée ! 🎉

## Endpoints

*Cliquez sur les liens pour plus de détails.*

### Public

- [Register](./docs/register.md)&nbsp;: `POST /auth/local/register`<br/>
- [Login](./docs/login.md)&nbsp;: `POST /auth/local`<br/>
- [Liste des posts](./docs/posts/get.md)&nbsp;: `GET /posts`<br/>

### Authentifié

- [Créer un post](./docs/posts/post.md)&nbsp;: `POST /posts`<br/>
- [Trouver un post](./docs/posts/post_id/get.md)&nbsp;: `GET /posts/[post_id]`
- [Modifier un post](./docs/posts.md/post_id/put.md)&nbsp;: `PUT /posts/[post_id]`
- [Supprimer un post](./docs/posts/post_id/delete.md)&nbsp;: `DELETE /posts/[post_id]`
- [Liste des utilisateurs](./docs/users/get.md)&nbsp;: `GET /users`
- [Profil d'un utilisateur](./docs/users/user_id/get.md)&nbsp;: `GET /users/[user_id]`
- [Mon profil](./docs/users/me/get.md)&nbsp;: `GET /users/me`
- [Modifier mon profil](./docs/users/me/put.md)&nbsp;: `PUT /users/me`
