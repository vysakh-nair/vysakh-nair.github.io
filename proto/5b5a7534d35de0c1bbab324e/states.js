window.PROTO = {
 "name": "senpi-scans",
 "w": 1440,
 "h": 900,
 "start": "list",
 "states": {
  "list": {
   "img": "img/list.webp",
   "alt": "Senpi Strategies: total balance, the live strategy Hawk, and the agent panel",
   "say": "Strategies. Press Scans to see what the agent has been doing, open Hawk, or add funds.",
   "hots": [
    {
     "x": 1108,
     "y": 12,
     "w": 58,
     "h": 28,
     "label": "Scans: what the agent scanned",
     "r": 14,
     "to": "scans",
     "next": true
    },
    {
     "x": 292,
     "y": 600,
     "w": 716,
     "h": 301,
     "label": "Open the Hawk strategy",
     "r": 22,
     "to": "hawk"
    },
    {
     "x": 175,
     "y": 567,
     "w": 28,
     "h": 28,
     "label": "Add funds",
     "r": 14,
     "to": "fund"
    }
   ]
  },
  "scans": {
   "img": "img/scans.webp",
   "alt": "The scan timeline for the Lion strategy: opened, skipped, errors, and quiet scans",
   "say": "Scans. Every row is a decision: opened, skipped, an error, or scans that found nothing. Press a row.",
   "hots": [
    {
     "x": 1041,
     "y": 510,
     "w": 399,
     "h": 52,
     "label": "Opened META position: its reasoning",
     "r": 0,
     "to": "meta"
    },
    {
     "x": 1041,
     "y": 406,
     "w": 399,
     "h": 52,
     "label": "An error on NVDA",
     "r": 0,
     "to": "nvda"
    },
    {
     "x": 1041,
     "y": 614,
     "w": 399,
     "h": 52,
     "label": "A trade the agent skipped 112 times",
     "r": 0,
     "to": "hype"
    },
    {
     "x": 1041,
     "y": 354,
     "w": 399,
     "h": 52,
     "label": "Scans that found nothing",
     "r": 0,
     "to": "empty"
    },
    {
     "x": 1094,
     "y": 284,
     "w": 73,
     "h": 28,
     "label": "Only opened",
     "r": 14,
     "to": "f-opened"
    },
    {
     "x": 1173,
     "y": 284,
     "w": 74,
     "h": 28,
     "label": "Only skipped",
     "r": 14,
     "to": "f-skipped"
    },
    {
     "x": 1253,
     "y": 284,
     "w": 61,
     "h": 28,
     "label": "Only errors",
     "r": 14,
     "to": "f-errors"
    },
    {
     "x": 1144,
     "y": 240,
     "w": 55,
     "h": 36,
     "label": "The Breakout scanner",
     "r": 0,
     "to": "breakout"
    },
    {
     "x": 1055,
     "y": 12,
     "w": 51,
     "h": 28,
     "label": "Chat",
     "r": 14,
     "to": "list"
    },
    {
     "x": 292,
     "y": 600,
     "w": 716,
     "h": 301,
     "label": "Open the Hawk strategy",
     "r": 22,
     "to": "hawk"
    }
   ]
  },
  "meta": {
   "img": "img/meta.webp",
   "alt": "The META position expanded: direction, signal, risk gates, fill, why it is in, what would make it wrong, conviction 6 of 10",
   "say": "The opened position, with its reasoning: signal, risk gates, fill, why I'm in, wrong if, conviction. Press Ask about this.",
   "hots": [
    {
     "x": 1282,
     "y": 845,
     "w": 130,
     "h": 28,
     "label": "Ask about this",
     "r": 14,
     "to": "ask"
    },
    {
     "x": 1041,
     "y": 510,
     "w": 399,
     "h": 52,
     "label": "Close this row",
     "r": 0,
     "to": "scans"
    },
    {
     "x": 1055,
     "y": 12,
     "w": 51,
     "h": 28,
     "label": "Chat",
     "r": 14,
     "to": "list"
    }
   ]
  },
  "ask": {
   "img": "img/ask.webp",
   "alt": "The agent panel on Chat with the question written in: Why did you open META long at 08:52?",
   "say": "The question is written into the chat, ready to send: Why did you open META long at 08:52?",
   "hots": [
    {
     "x": 1108,
     "y": 12,
     "w": 58,
     "h": 28,
     "label": "Back to Scans",
     "r": 14,
     "to": "meta"
    },
    {
     "x": 292,
     "y": 600,
     "w": 716,
     "h": 301,
     "label": "Open the Hawk strategy",
     "r": 22,
     "to": "hawk"
    }
   ]
  },
  "empty": {
   "img": "img/empty.webp",
   "alt": "Quiet scans expanded: each scan that found no signal, with its time",
   "say": "Scans that found nothing are still shown, grouped, with their times.",
   "hots": [
    {
     "x": 1041,
     "y": 354,
     "w": 399,
     "h": 52,
     "label": "Close this row",
     "r": 0,
     "to": "scans"
    },
    {
     "x": 1055,
     "y": 12,
     "w": 51,
     "h": 28,
     "label": "Chat",
     "r": 14,
     "to": "list"
    }
   ]
  },
  "hype": {
   "img": "img/hype.webp",
   "alt": "A skipped row expanded: already in HYPE, with the risk gates that passed and the one that did not",
   "say": "Skipped 112 times: the agent was already in HYPE. The gate that stopped it is marked.",
   "hots": [
    {
     "x": 1041,
     "y": 614,
     "w": 399,
     "h": 52,
     "label": "Close this row",
     "r": 0,
     "to": "scans"
    },
    {
     "x": 1055,
     "y": 12,
     "w": 51,
     "h": 28,
     "label": "Chat",
     "r": 14,
     "to": "list"
    }
   ]
  },
  "nvda": {
   "img": "img/nvda.webp",
   "alt": "An error row expanded: the entry order did not fill, no funds at risk, what the agent did",
   "say": "An error is a row too: what went wrong, the impact, and what the agent did.",
   "hots": [
    {
     "x": 1041,
     "y": 406,
     "w": 399,
     "h": 52,
     "label": "Close this row",
     "r": 0,
     "to": "scans"
    },
    {
     "x": 1055,
     "y": 12,
     "w": 51,
     "h": 28,
     "label": "Chat",
     "r": 14,
     "to": "list"
    }
   ]
  },
  "f-opened": {
   "img": "img/f-opened.webp",
   "alt": "The timeline filtered to opened",
   "say": "Only opened.",
   "hots": [
    {
     "x": 1049,
     "y": 284,
     "w": 39,
     "h": 28,
     "label": "All",
     "r": 14,
     "to": "scans"
    },
    {
     "x": 1173,
     "y": 284,
     "w": 74,
     "h": 28,
     "label": "Only skipped",
     "r": 14,
     "to": "f-skipped"
    },
    {
     "x": 1253,
     "y": 284,
     "w": 61,
     "h": 28,
     "label": "Only errors",
     "r": 14,
     "to": "f-errors"
    },
    {
     "x": 1055,
     "y": 12,
     "w": 51,
     "h": 28,
     "label": "Chat",
     "r": 14,
     "to": "list"
    }
   ]
  },
  "f-skipped": {
   "img": "img/f-skipped.webp",
   "alt": "The timeline filtered to skipped",
   "say": "Only skipped.",
   "hots": [
    {
     "x": 1049,
     "y": 284,
     "w": 39,
     "h": 28,
     "label": "All",
     "r": 14,
     "to": "scans"
    },
    {
     "x": 1094,
     "y": 284,
     "w": 73,
     "h": 28,
     "label": "Only opened",
     "r": 14,
     "to": "f-opened"
    },
    {
     "x": 1253,
     "y": 284,
     "w": 61,
     "h": 28,
     "label": "Only errors",
     "r": 14,
     "to": "f-errors"
    },
    {
     "x": 1055,
     "y": 12,
     "w": 51,
     "h": 28,
     "label": "Chat",
     "r": 14,
     "to": "list"
    }
   ]
  },
  "f-errors": {
   "img": "img/f-errors.webp",
   "alt": "The timeline filtered to errors",
   "say": "Only errors.",
   "hots": [
    {
     "x": 1049,
     "y": 284,
     "w": 39,
     "h": 28,
     "label": "All",
     "r": 14,
     "to": "scans"
    },
    {
     "x": 1094,
     "y": 284,
     "w": 73,
     "h": 28,
     "label": "Only opened",
     "r": 14,
     "to": "f-opened"
    },
    {
     "x": 1173,
     "y": 284,
     "w": 74,
     "h": 28,
     "label": "Only skipped",
     "r": 14,
     "to": "f-skipped"
    },
    {
     "x": 1055,
     "y": 12,
     "w": 51,
     "h": 28,
     "label": "Chat",
     "r": 14,
     "to": "list"
    }
   ]
  },
  "breakout": {
   "img": "img/breakout.webp",
   "alt": "The Breakout scanner's timeline: quiet scans and one recovered error",
   "say": "A strategy can run several scanners. This is Breakout: mostly quiet, one error it recovered from.",
   "hots": [
    {
     "x": 1041,
     "y": 406,
     "w": 399,
     "h": 52,
     "label": "The error on BTC",
     "r": 0,
     "to": "btc"
    },
    {
     "x": 1053,
     "y": 240,
     "w": 71,
     "h": 36,
     "label": "The Momentum scanner",
     "r": 0,
     "to": "scans"
    },
    {
     "x": 1055,
     "y": 12,
     "w": 51,
     "h": 28,
     "label": "Chat",
     "r": 14,
     "to": "list"
    }
   ]
  },
  "btc": {
   "img": "img/btc.webp",
   "alt": "The BTC error expanded: the stop-loss did not reach the exchange, the impact, and what the agent did",
   "say": "The stop-loss did not reach the exchange. The row says what that meant and what the agent did.",
   "hots": [
    {
     "x": 1041,
     "y": 406,
     "w": 399,
     "h": 52,
     "label": "Close this row",
     "r": 0,
     "to": "breakout"
    },
    {
     "x": 1053,
     "y": 240,
     "w": 71,
     "h": 36,
     "label": "The Momentum scanner",
     "r": 0,
     "to": "scans"
    }
   ]
  },
  "hawk": {
   "img": "img/hawk.webp",
   "alt": "The Hawk strategy: account value, profit, positions, and its own scan timeline beside it",
   "say": "Hawk: what the strategy holds, with everything it scanned beside it.",
   "hots": [
    {
     "x": 284,
     "y": 10,
     "w": 32,
     "h": 32,
     "label": "Back to strategies",
     "r": 16,
     "to": "list"
    }
   ]
  },
  "fund": {
   "img": "img/fund.webp",
   "alt": "Fund Your Wallet: a deposit address, and a block saying the wallet, the funds and the control are yours",
   "say": "Fund Your Wallet. The trust block sits under the deposit address. Press Buy USDC.",
   "hots": [
    {
     "x": 722,
     "y": 263,
     "w": 241,
     "h": 34,
     "label": "Buy USDC",
     "r": 17,
     "to": "buy"
    },
    {
     "x": 967,
     "y": 167,
     "w": 16,
     "h": 16,
     "label": "Close",
     "r": 8,
     "to": "list"
    }
   ],
   "html": "<svg class=\"scrim\" viewBox=\"0 0 1440 900\" width=\"1440\" height=\"900\" aria-hidden=\"true\" style=\"position:absolute;left:0;top:0;pointer-events:none\"><path fill=\"#000\" fill-opacity=\"0.44\" fill-rule=\"evenodd\" d=\"M0 0H1440V900H0ZM472 150.13H968A32 32 0 0 1 1000 182.13V717.88A32 32 0 0 1 968 749.88H472A32 32 0 0 1 440 717.88V182.13A32 32 0 0 1 472 150.13Z\"/></svg>"
  },
  "buy": {
   "img": "img/buy.webp",
   "alt": "Fund Your Wallet, Buy USDC tab: pay by card, with the same trust block",
   "say": "Buy with a card. The same trust block stays in view. Press Buy USDC.",
   "hots": [
    {
     "x": 494,
     "y": 446,
     "w": 452,
     "h": 44,
     "label": "Buy USDC",
     "r": 22,
     "to": "checkout"
    },
    {
     "x": 477,
     "y": 326,
     "w": 241,
     "h": 34,
     "label": "Deposit Crypto",
     "r": 17,
     "to": "fund"
    },
    {
     "x": 967,
     "y": 231,
     "w": 16,
     "h": 16,
     "label": "Close",
     "r": 8,
     "to": "list"
    }
   ],
   "html": "<svg class=\"scrim\" viewBox=\"0 0 1440 900\" width=\"1440\" height=\"900\" aria-hidden=\"true\" style=\"position:absolute;left:0;top:0;pointer-events:none\"><path fill=\"#000\" fill-opacity=\"0.44\" fill-rule=\"evenodd\" d=\"M0 0H1440V900H0ZM472 213.94H968A32 32 0 0 1 1000 245.94V654.07A32 32 0 0 1 968 686.07H472A32 32 0 0 1 440 654.07V245.94A32 32 0 0 1 472 213.94Z\"/></svg>"
  },
  "checkout": {
   "img": "img/checkout.webp",
   "alt": "The card checkout: buy 50 dollars of USDC, protected by Privy",
   "say": "The card checkout. Press Continue.",
   "hots": [
    {
     "x": 540,
     "y": 587,
     "w": 360,
     "h": 52,
     "label": "Continue",
     "r": 12,
     "to": "landed"
    }
   ],
   "html": "<svg class=\"scrim\" viewBox=\"0 0 1440 900\" width=\"1440\" height=\"900\" aria-hidden=\"true\" style=\"position:absolute;left:0;top:0;pointer-events:none\"><path fill=\"#000\" fill-opacity=\"0.44\" fill-rule=\"evenodd\" d=\"M0 0H1440V900H0ZM532 187.5H908A12 12 0 0 1 920 199.5V700.5A12 12 0 0 1 908 712.5H532A12 12 0 0 1 520 700.5V199.5A12 12 0 0 1 532 187.5Z\"/></svg>"
  },
  "landed": {
   "img": "img/landed.webp",
   "alt": "Deposit landed: total balance 7,285.16 dollars, 100 dollars just landed",
   "say": "Deposit landed. Press Put it to work.",
   "hots": [
    {
     "x": 473,
     "y": 542,
     "w": 494,
     "h": 44,
     "label": "Put it to work",
     "r": 22,
     "to": "work"
    }
   ],
   "html": "<svg class=\"scrim\" viewBox=\"0 0 1440 900\" width=\"1440\" height=\"900\" aria-hidden=\"true\" style=\"position:absolute;left:0;top:0;pointer-events:none\"><path fill=\"#000\" fill-opacity=\"0.44\" fill-rule=\"evenodd\" d=\"M0 0H1440V900H0ZM472 256.75H968A32 32 0 0 1 1000 288.75V611.25A32 32 0 0 1 968 643.25H472A32 32 0 0 1 440 611.25V288.75A32 32 0 0 1 472 256.75Z\"/></svg>"
  },
  "work": {
   "img": "img/work.webp",
   "alt": "The agent asks what matters most: steady growth, catching big moves, or earning in any market",
   "say": "Put it to work handed over to the agent, which asks what matters most before it suggests a strategy.",
   "hots": []
  }
 }
};
