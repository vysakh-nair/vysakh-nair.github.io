window.PROTO = {
 "name": "moxie-orders",
 "w": 1440,
 "h": 922,
 "scroll": false,
 "start": "list",
 "states": {
  "list": {
   "img": "img/list.webp",
   "alt": "Moxie, Your Limit Orders: six orders that are open, filled, expired or cancelled, each with a fill bar",
   "say": "Your limit orders. Press the three dots on the first order.",
   "hots": [
    {
     "x": 1278,
     "y": 260,
     "w": 32,
     "h": 34,
     "r": 8,
     "label": "Open the first order's menu",
     "to": "row-menu",
     "next": true
    }
   ]
  },
  "row-menu": {
   "img": "img/row-menu.webp",
   "alt": "The first order's menu is open: Cowswap and Cancel",
   "say": "The order's menu. Press Cancel.",
   "hots": [
    {
     "x": 1164,
     "y": 302,
     "w": 112,
     "h": 34,
     "r": 8,
     "label": "Cancel this order",
     "to": "confirm",
     "next": true
    }
   ]
  },
  "confirm": {
   "img": "img/confirm.webp",
   "alt": "A dialog: Are you sure you want to cancel your limit order? Do not cancel, or Yes, Cancel",
   "say": "Asked to confirm. Press Yes, Cancel.",
   "hots": [
    {
     "x": 662,
     "y": 640,
     "w": 116,
     "h": 30,
     "r": 8,
     "label": "Yes, cancel",
     "to": "wait",
     "next": true
    }
   ]
  },
  "wait": {
   "img": "img/wait.webp",
   "alt": "A dialog: Please wait while we cancel your limit order",
   "say": "Cancelling the order.",
   "auto": {
    "to": "cancelled",
    "ms": 1500
   },
   "hots": []
  },
  "cancelled": {
   "img": "img/cancelled.webp",
   "alt": "A dialog: Your limit order is successfully cancelled, with a Continue button",
   "say": "The order is cancelled. Use Start over to see it again.",
   "hots": []
  }
 }
};
