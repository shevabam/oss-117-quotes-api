'use strict';


var datas = require('./datas.json');

try {

    module.exports = {
        getRandom: function getRandom(numberOfQuotes) {

            if (numberOfQuotes > 1)
            {
                var quotesNb = datas.quotes.length;
                var limit = numberOfQuotes > quotesNb ? quotesNb : numberOfQuotes;

                var out = new Array(limit);
                var quotesUsed = new Array(limit);
                var quoteAlreadyUsed;

                for (var i = 0; i < limit; i++)
                {
                    var randomQuote = randomize(datas.quotes);
                    quoteAlreadyUsed = quotesUsed.indexOf(randomQuote) > -1;

                    while (quoteAlreadyUsed) {
                        randomQuote = randomize(datas.quotes);
                        quoteAlreadyUsed = quotesUsed.indexOf(randomQuote) > -1;
                    }

                    quotesUsed[i] = randomQuote;
                    out[i] = formatQuote(randomQuote);
                }
            }
            else
            {
                var randomQuote = randomize(datas.quotes);

                var out = formatQuote(randomQuote);
            }

            return out;
        },

        getByAuthor: function getByAuthor(name, numberOfQuotes) {

            var out = null;


            if (typeof datas.characters[name] === 'undefined')
                return out;


            var quotesList = new Array();

            for (var i in datas.quotes) {
                if (datas.quotes[i].character == name) {
                    quotesList.push(datas.quotes[i]);
                }
            }


            if (quotesList.length > 0) {

                if (numberOfQuotes > 1)
                {
                    var quotesNb = quotesList.length;
                    var limit = numberOfQuotes > quotesNb ? quotesNb : numberOfQuotes;

                    var out = new Array(limit);
                    var quotesUsed = new Array(limit);
                    var quoteAlreadyUsed;

                    for (var i = 0; i < limit; i++)
                    {
                        var randomQuote = randomize(quotesList);
                        quoteAlreadyUsed = quotesUsed.indexOf(randomQuote) > -1;

                        while (quoteAlreadyUsed) {
                            randomQuote = randomize(quotesList);
                            quoteAlreadyUsed = quotesUsed.indexOf(randomQuote) > -1;
                        }

                        quotesUsed[i] = randomQuote;
                        out[i] = formatQuote(randomQuote);
                    }
                }
                else
                {
                    var randomQuote = randomize(quotesList);

                    var out = formatQuote(randomQuote);
                }

            }

            return out;

        },

        getCharacters: function getCharacters(name) {

            var out = new Array();

            var charactersList = datas.characters;
            if (name !== null) {
                if (typeof datas.characters[name] === 'undefined')
                    return out;

                var charactersList = new Array();
                charactersList[name] = datas.characters[name];
            }
        
            var quotesList = new Array();
            for (var q in datas.quotes) {
                if (!(datas.quotes[q].character in quotesList))
                    quotesList[datas.quotes[q].character] = new Array();

                quotesList[datas.quotes[q].character].push(datas.quotes[q].sentence);
            }

            for (var i in charactersList) {
                var character_quotes = null;
                if (i in quotesList && quotesList[i].length > 0) {
                    character_quotes = quotesList[i];
                }

                var character = {
                    name: charactersList[i].name,
                    slug: i,
                    quotes: character_quotes
                };

                out.push(character);
            }
            
            return out;
        }
        
    };

} catch (e) {
    console.log(e);
}

// Randomize quote
function randomize(quotes)
{
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// Format quote result
function formatQuote(randomQuote)
{
    var quote = {};

    quote.sentence = randomQuote.sentence;
    quote.character = {
        name: datas.characters[randomQuote.character].name,
        slug: randomQuote.character
    };

    return quote;
}
