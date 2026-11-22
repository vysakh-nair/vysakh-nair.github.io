window.PROTO = {
 "name": "airstack-studio",
 "w": 1440,
 "h": 988,
 "start": "focused",
 "states": {
  "focused": {
   "img": "img/focused.webp",
   "alt": "Airstack Studio with the AI Assistant field focused, showing its hint text",
   "say": "Studio, with the AI Assistant field at the top. Press the field to type the request.",
   "hots": [
    {
     "x": 272,
     "y": 12,
     "w": 490,
     "h": 50,
     "r": 8,
     "label": "Type the request: Get the token holders of the",
     "to": "typing",
     "next": true
    }
   ]
  },
  "typing": {
   "img": "img/typing.webp",
   "alt": "The AI Assistant field with 'Get the token holders of the' typed",
   "say": "Typed: Get the token holders of the. Press the field to mention a collection with @.",
   "hots": [
    {
     "x": 272,
     "y": 12,
     "w": 490,
     "h": 50,
     "r": 8,
     "label": "Type @ to mention a collection",
     "to": "at",
     "next": true
    }
   ]
  },
  "at": {
   "img": "img/at.webp",
   "alt": "The request with an @ typed",
   "say": "An @ is typed. Press the field to type Moo.",
   "hots": [
    {
     "x": 272,
     "y": 12,
     "w": 490,
     "h": 50,
     "r": 8,
     "label": "Type Moo after the @",
     "to": "suggestions",
     "next": true
    }
   ]
  },
  "suggestions": {
   "img": "img/suggestions.webp",
   "alt": "Suggestions under '@Moo': Mooabites, Moonblades, Moonbirds, Sell moons, FlightMoods, Kate Mooows Kate",
   "say": "Suggestions for @Moo. Press Moonbirds.",
   "hots": [
    {
     "x": 472,
     "y": 106,
     "w": 192,
     "h": 30,
     "r": 6,
     "label": "Choose Moonbirds",
     "to": "chosen",
     "next": true
    }
   ]
  },
  "chosen": {
   "img": "img/chosen.webp",
   "alt": "The request with Moonbirds chosen and highlighted",
   "say": "Moonbirds is chosen. Press the field to finish the sentence.",
   "hots": [
    {
     "x": 272,
     "y": 12,
     "w": 490,
     "h": 50,
     "r": 8,
     "label": "Keep typing: Collection and the NFTs they",
     "to": "sentence",
     "next": true
    }
   ]
  },
  "sentence": {
   "img": "img/sentence.webp",
   "alt": "The request reads 'Get the token holders of the Moonbirds Collection & the NFTs they'",
   "say": "The request is nearly written. Press Generate.",
   "hots": [
    {
     "x": 770,
     "y": 13,
     "w": 120,
     "h": 42,
     "r": 6,
     "label": "Generate the query",
     "to": "generating",
     "next": true
    }
   ]
  },
  "generating": {
   "img": "img/generating.webp",
   "alt": "The request 'Get the token holders of the Moonbirds Collection & the NFTs they hold' with the Generate button showing a spinner",
   "say": "Generating the query.",
   "auto": {
    "to": "generated",
    "ms": 1600
   },
   "hots": []
  },
  "generated": {
   "img": "img/generated.webp",
   "alt": "The generated GraphQL query in the editor, with its response on the right",
   "say": "The assistant wrote the GraphQL query into the editor, and the response is on the right. Use Start over to see it again.",
   "hots": []
  }
 },
 "scroll": false
};
