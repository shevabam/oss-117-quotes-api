
![](oss-177-quotes-api_header.png)

# OSS 117 quotes API

A simple API to retrieve some quotes of the famous OSS 117!

:globe_with_meridians: Website and demo: https://oss117quotes.xyz/

## Production host

[https://api.oss117quotes.xyz](https://api.oss117quotes.xyz)

## API

### `GET /v1/random`

Get a random quote:

> [https://api.oss117quotes.xyz/v1/random](https://api.oss117quotes.xyz/v1/random)

    {
        "sentence": "Je ne vois pas trop l'intérêt de ressembler à une femme.",
        "character": {
            "name": "Hubert Bonnisseur de La Bath (alias OSS 117)",
            "slug": "hubert"
        }
    }


### `GET /v1/random/{number}`

Returns `{number}` quotes.  
`number` parameter is optional. By default, one quote is returned.

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

Returns quotes for a character *(how to find this information explained below)*.  
`number` parameter is optional. By default, all quotes from the character are returned.

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

Returns the list of characters with their quotes.

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

Returns the character's details.  
`name` parameter is the character's diminutive *(how to find this information explained below)*.

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



### How to find the diminutives of the characters?

The diminutives of characters are present in the "slug" entry in the results.  
You can also find them in the `datas.json` file.

For characters:

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

The diminutives are: hubert, carlotta, larmina, etc...


## Docker

You can find the Dockerfile [here](https://github.com/shevabam/dockerfiles/tree/master/oss-117-quotes-api) and on [Docker Hub](https://hub.docker.com/r/shevabam/oss-117-quotes-api/).


## Contributing

If you want to add some quotes, please follow these steps. Make sure you have Git installed on your local computer.

* Fork the projet by clicking on the "Fork" button on the top right corner of this page
* Git clone your fork
* Open the file `datas.json`
* Make sure the quote doesn't already exist!
* Edit the sections. Make sure the character exists.
* Commit and push your changes
* Submit a pull request

Thanks!