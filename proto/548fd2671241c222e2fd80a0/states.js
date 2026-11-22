window.PROTO = {
 "name": "moxie-curve",
 "w": 1440,
 "h": 922,
 "start": "settings",
 "states": {
  "settings": {
   "img": "img/settings.webp",
   "alt": "Moxie, Your Settings: the creator coin price curve is Moderate, with an Edit link",
   "say": "Your settings. The price curve is Moderate. Press Edit.",
   "hots": [
    {
     "x": 653,
     "y": 219,
     "w": 62,
     "h": 30,
     "r": 6,
     "label": "Edit the price curve",
     "to": "edit",
     "next": true
    }
   ]
  },
  "edit": {
   "img": "img/edit.webp",
   "alt": "Four price curves to choose from: Conservative, Moderate (selected), Based and Supa Based, each with how much more volatile it is, and Sign and Discard buttons",
   "say": "Four curves, each with how volatile it is next to the others. Moderate is selected. Press Sign to confirm, or Discard.",
   "hots": [
    {
     "x": 400,
     "y": 573,
     "w": 186,
     "h": 46,
     "r": 10,
     "label": "Sign with the wallet",
     "to": "pending",
     "next": true
    },
    {
     "x": 609,
     "y": 580,
     "w": 64,
     "h": 32,
     "r": 6,
     "label": "Discard",
     "to": "settings"
    }
   ]
  },
  "pending": {
   "img": "img/pending.webp",
   "alt": "Your Settings with a note: Price curve will be upgraded to supa based from Moderate in 02d 06h 24m 45s",
   "say": "The change is pending: the curve will be upgraded to Supa Based in about two days. Use Start over to see it again.",
   "hots": []
  }
 },
 "scroll": false
};
