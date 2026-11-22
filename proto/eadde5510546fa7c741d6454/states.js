window.PROTO = {
 "name": "airstack-builder",
 "w": 1400,
 "h": 1300,
 "start": "empty",
 "states": {
  "empty": {
   "img": "img/empty.webp",
   "alt": "The no-code query builder before anything is chosen: five kinds of thing to ask about, and Run Query disabled",
   "say": "The query builder. Press NFT Collection to say what you want information about.",
   "hots": [
    {
     "x": 494,
     "y": 344,
     "w": 118,
     "h": 58,
     "r": 8,
     "label": "Choose NFT Collection",
     "to": "entity",
     "next": true
    }
   ]
  },
  "entity": {
   "img": "img/entity.webp",
   "alt": "NFT Collection chosen: a field for a collection name or contract address, general filters, and attributes to display",
   "say": "NFT Collection is chosen. Press the collection field to pick a collection.",
   "hots": [
    {
     "x": 350,
     "y": 455,
     "w": 700,
     "h": 32,
     "r": 6,
     "label": "Add a collection name or contract address",
     "to": "search",
     "next": true
    }
   ]
  },
  "search": {
   "img": "img/search.webp",
   "alt": "A list of collections under the field: Moonbirds, Starbucks NFT, Cryptopunks, Bored Apes, Lost lands",
   "say": "Collections to pick from. Press Starbucks NFT.",
   "hots": [
    {
     "x": 352,
     "y": 529,
     "w": 286,
     "h": 32,
     "r": 6,
     "label": "Choose Starbucks NFT",
     "to": "chosen",
     "next": true
    }
   ]
  },
  "chosen": {
   "img": "img/chosen.webp",
   "alt": "Starbucks NFT chosen, with filters (Polygon, All NFTs) and the attributes to display filled in",
   "say": "Starbucks NFT is chosen, with its filters and the attributes to display. Press the Meta data row to see more attributes.",
   "hots": [
    {
     "x": 518,
     "y": 940,
     "w": 532,
     "h": 34,
     "r": 6,
     "label": "Open the Meta data attributes",
     "to": "attributes",
     "next": true
    }
   ]
  },
  "attributes": {
   "img": "img/attributes.webp",
   "alt": "The Meta data row open, with more attributes to add: Logo, token Traits",
   "say": "More attributes that can be added to the result. This is the end of the flow. Use Back or Start over.",
   "hots": []
  }
 },
 "scroll": false
};
