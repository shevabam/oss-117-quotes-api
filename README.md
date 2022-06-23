
![](oss-177-quotes-api_header.png)

# OSS 117 Quotes API

Une API de répliques d'OSS 117 ? Habile !

:globe_with_meridians: Site et démo : https://oss117quotes.xyz/

## URL de l'API

[https://api.oss117quotes.xyz](https://api.oss117quotes.xyz)

## API

### `GET /v1/random`

Obtenir une citation au hasard :

> [https://api.oss117quotes.xyz/v1/random](https://api.oss117quotes.xyz/v1/random)

    {
        "sentence": "Je ne vois pas trop l'intérêt de ressembler à une femme.",
        "character": {
            "name": "Hubert Bonnisseur de La Bath (alias OSS 117)",
            "slug": "hubert"
        }
    }


### `GET /v1/random/{number}`

Retourne `{number}` citations de manière aléatoire.  
Le paramètre `number` est facultatif. Par défaut, une seule citation est retournée.

> [https://api.oss117quotes.xyz/v1/random/3](https://api.oss117quotes.xyz/v1/random/3)

    [
        {
            "sentence": "23-0 ! C'est la piquette Jack !!! Tu sais pas jouer, Jack ! T'es mauvais hahahahaha !!!",
            "character": {
                "name": "Hubert Bonnisseur de La Bath (alias OSS 117)",
                "slug": "hubert"
            }
        },
        {
            "sentence": "Bien, mais dépêchons-nous, je n'ai que quelques heures.",
            "character": {
                "name": "Hubert Bonnisseur de La Bath (alias OSS 117)",
                "slug": "hubert"
            }
        },
        {
            "sentence": "Pour rencontrer M. Li, il vaut mieux avoir une bonne couverture, sinon, je serai dans de beaux draps.",
            "character": {
                "name": "Hubert Bonnisseur de La Bath (alias OSS 117)",
                "slug": "hubert"
            }
        }
    ]


### `GET /v1/author/{character}/{number}`

Retourne les citations d'un personnage.  
Plus d'informations sur le paramètre `character` plus bas.

Le paramètre `number` est facultatif. Par défaut, toutes les citations du personnage sont retournées.

> [https://api.oss117quotes.xyz/v1/author/hubert/2](https://api.oss117quotes.xyz/v1/author/hubert/2)

    [
        {
            "sentence": "Ah ah bravo Bill, en plein dans l'dos !",
            "character": {
                "name": "Hubert Bonnisseur de La Bath (alias OSS 117)",
                "slug": "hubert"
            }
        },
        {
            "sentence": "Fonce, Slimane ! Fooonce !!!",
            "character": {
                "name": "Hubert Bonnisseur de La Bath (alias OSS 117)",
                "slug": "hubert"
            }
        }
    ]


### `GET /v1/characters`

Retourne la liste des personnages avec leurs citations.

> [https://api.oss117quotes.xyz/v1/characters](https://api.oss117quotes.xyz/v1/characters)

    [
        {
            "name": "Hubert Bonnisseur de La Bath (alias OSS 117)",
            "slug": "hubert",
            "quotes": [
                "En tout cas, on peut dire que le Soviet éponge !",
                "Ça fait un peu Jacadi a dit : « Pas de charcuterie ! »",
                "J'aime le bruit blanc de l'eau."
            ]
        },
        {
            "name": "Bill Tremendous",
            "slug": "bill",
            "quotes": [
                "Shut up ! Kiss my ass !"
            ]
        }
    ]


### `GET /v1/character/{name}`

Retourne le détail d'un personnage.  
Le paramètre `name` est le diminutif du personnage (voir plus bas pour plus d'information).

> [https://api.oss117quotes.xyz/v1/character/hubert](https://api.oss117quotes.xyz/v1/character/hubert)

    [
        {
            "name": "Hubert Bonnisseur de La Bath (alias OSS 117)",
            "slug": "hubert",
            "quotes": [
                "En tout cas, on peut dire que le Soviet éponge !",
                "Ça fait un peu Jacadi a dit : « Pas de charcuterie ! »",
                "J'aime le bruit blanc de l'eau."
            ]
        }
    ]



### Comment trouver le diminutif d'un personnage ?

Le diminutif d'un personnage est présent dans l'entrée "slug".  
Vous pouvez aussi les retrouver dans le fichier `datas.json` :

    "characters": {
        "hubert": {
          "name": "Hubert Bonnisseur de La Bath (alias OSS 117)"
        },
        "carlotta": {
          "name": "Carlotta"
        },
        "larmina": {
          "name": "Larmina El Akmar Betouche"
        },
        "zimmel": {
          "name": "Von Zimmel"
        },
        "moeller": {
          "name": "Gerhard Moeller"
        },
        "bill": {
          "name": "Bill Tremendous"
        },
        "raymond": {
          "name": "Raymond Pelletier"
        },
        "dolores": {
          "name": "Dolorès"
        }
        ...
    },

Les diminutifs sont donc : hubert, carlotta, larmina, etc...


## Docker

Vous pouvez trouver le Dockerfile [ici](https://github.com/shevabam/dockerfiles/tree/master/oss-117-quotes-api) et sur [Docker Hub](https://hub.docker.com/r/shevabam/oss-117-quotes-api/).


## Contribuer

Si vous souhaitez ajouter une ou plusieurs citations, suivez les étapes suivantes.

* Fork le projet en cliquant sur le bouton "Fork" en haut à droite de cette page
* Cloner le dépôt (git clone) sur votre machine
* Ouvrir le fichier `datas.json`
* S'assurer que la citation n'existe pas déjà
* S'assurer que le personnage existe bien dans la partie "characters"
* Commit et push les modifications
* Faire un pull request

Merci !