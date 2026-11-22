window.PROTO = {
 "name": "senpi-approval",
 "w": 728,
 "h": 403,
 "start": "ask",
 "states": {
  "ask": {
   "img": "img/card.png",
   "alt": "Approval prompt: Close your ETH position? Asset ETH, Market order, strategy wallet. No action is taken until you allow. Deny, Allow always, Allow once.",
   "say": "The agent is asking before it acts. Deny (Esc), Allow always, or Allow once (Cmd or Ctrl + Enter).",
   "keys": {
    "Escape": "denied",
    "mod+Enter": "once"
   },
   "hots": [
    {
     "x": 561,
     "y": 318,
     "w": 118,
     "h": 36,
     "label": "Allow once",
     "to": "once",
     "next": true,
     "r": 18
    },
    {
     "x": 442,
     "y": 317,
     "w": 111,
     "h": 38,
     "label": "Allow always",
     "to": "always",
     "r": 18
    },
    {
     "x": 344,
     "y": 317,
     "w": 90,
     "h": 38,
     "label": "Deny",
     "to": "denied",
     "r": 18
    }
   ]
  },
  "once": {
   "html": "<div class=\"toolrow\"><span class=\"ic ok\"><svg viewBox=\"0 0 24 24\"><path d=\"M5 12.5l4.2 4.2L19 7\"/></svg></span><span class=\"lab ok\">Allowed</span><span class=\"tool\">close_position</span></div>",
   "say": "Allowed once. In the product the prompt collapses to this line and the agent carries on.",
   "hots": []
  },
  "always": {
   "html": "<div class=\"toolrow\"><span class=\"ic ok\"><svg viewBox=\"0 0 24 24\"><path d=\"M5 12.5l4.2 4.2L19 7\"/></svg></span><span class=\"lab ok\">Allowed</span><span class=\"tool\">close_position</span></div>",
   "say": "Allowed. In the product this choice also stops the agent asking about this action again.",
   "hots": []
  },
  "denied": {
   "html": "<div class=\"toolrow\"><span class=\"ic no\"><svg viewBox=\"0 0 24 24\"><path d=\"M6 6l12 12M18 6L6 18\"/></svg></span><span class=\"lab no\">Denied</span><span class=\"tool\">close_position</span></div>",
   "say": "Denied. Nothing was done; the prompt collapses to this line.",
   "hots": []
  }
 }
};
