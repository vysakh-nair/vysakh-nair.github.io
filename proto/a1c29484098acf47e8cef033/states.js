window.PROTO = {
 "name": "moxie-curve-app",
 "w": 393,
 "h": 852,
 "start": "settings",
 "states": {
  "settings": {
   "img": "img/settings.webp",
   "h": 1628,
   "alt": "Moxie on a phone, Your Settings: the creator coin price curve is Moderate, with an Edit link",
   "say": "Your settings. The price curve is Moderate. Press Edit.",
   "hots": [
    {
     "x": 301,
     "y": 156,
     "w": 64,
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
   "h": 1628,
   "alt": "Four price curves to choose from: Conservative, Moderate (selected), Based and Supa Based, with Sign and Discard buttons",
   "say": "Four curves. Moderate is selected. Scroll down and press Sign, or Discard.",
   "hots": [
    {
     "x": 38,
     "y": 789,
     "w": 186,
     "h": 44,
     "r": 10,
     "label": "Sign with the wallet",
     "to": "pending",
     "next": true
    },
    {
     "x": 240,
     "y": 796,
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
   "h": 1628,
   "alt": "Your Settings with a note: Price curve will be upgraded to supa based from Moderate in 02d 06h 24m 45s",
   "say": "The change is pending: the curve will be upgraded to Supa Based in about two days. Use Start over to see it again.",
   "hots": []
  }
 }
};
