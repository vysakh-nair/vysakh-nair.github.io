window.PROTO = {
 "name": "moxie-trade",
 "w": 1440,
 "h": 922,
 "scroll": false,
 "start": "skill-before",
 "states": {
  "skill-before": {
   "img": "img/skill-before.webp",
   "alt": "Moxie, the Social Alpha skill page: the list has betashop.eth and markcarey, with a Buy & Add Users button",
   "say": "The Social Alpha skill. Press Buy and Add Users to add a creator to the list.",
   "hots": [
    {
     "x": 617,
     "y": 545,
     "w": 121,
     "h": 37,
     "r": 10,
     "label": "Buy and Add Users",
     "to": "search",
     "next": true
    }
   ]
  },
  "search": {
   "img": "img/search.webp",
   "alt": "'da' typed in the field, with matching users and the coins each one requires",
   "say": "Users matching 'da', each with the coins required. Press david.",
   "hots": [
    {
     "x": 626,
     "y": 670,
     "w": 304,
     "h": 30,
     "r": 8,
     "label": "Choose david",
     "to": "need",
     "next": true
    }
   ]
  },
  "need": {
   "img": "img/need.webp",
   "alt": "A dialog: you need to hold 2.55 ($50.56) @david coins to add them to your Social Alpha list; you currently hold 2.1. Ask AI to Buy, or Buy Yourself",
   "say": "You need 2.55 david coins and hold 2.1. Press Or, Buy Yourself.",
   "hots": [
    {
     "x": 650,
     "y": 646,
     "w": 140,
     "h": 30,
     "r": 8,
     "label": "Or, Buy Yourself",
     "to": "buy",
     "next": true
    }
   ]
  },
  "buy": {
   "img": "img/buy.webp",
   "alt": "The buy widget: 45,781 Moxie for 561.75 david, with a BUY button",
   "say": "The buy widget: what you pay in Moxie and what you get in david. Press BUY.",
   "hots": [
    {
     "x": 558,
     "y": 608,
     "w": 324,
     "h": 52,
     "r": 10,
     "label": "Buy",
     "to": "success",
     "next": true
    }
   ]
  },
  "success": {
   "img": "img/success.webp",
   "alt": "A dialog: You've successfully bought 300 @david, with a Continue button",
   "say": "Bought. Press Continue.",
   "hots": [
    {
     "x": 587,
     "y": 526,
     "w": 272,
     "h": 44,
     "r": 10,
     "label": "Continue",
     "to": "added",
     "next": true
    }
   ]
  },
  "added": {
   "img": "img/added.webp",
   "alt": "The Social Alpha list now has betashop.eth, markcarey and david",
   "say": "david is on the list. That is the whole purchase. Use Start over to see it again.",
   "hots": []
  }
 }
};
