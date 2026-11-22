window.PROTO = {
 "name": "senpi-trust-app",
 "w": 390,
 "h": 844,
 "start": "home",
 "states": {
  "home": {
   "img": "img/home.webp",
   "alt": "Senpi app home: a greeting, the Fund button, and Get started",
   "say": "The app, just after signing up. Press Get started.",
   "hots": [
    {
     "x": 12,
     "y": 661,
     "w": 140,
     "h": 39,
     "label": "Get started",
     "r": 20,
     "to": "started",
     "next": true
    }
   ]
  },
  "started": {
   "img": "img/started.webp",
   "alt": "Get started: five steps, the fourth is Launch a strategy based on your goals and risk style",
   "say": "Five steps for a new account. Press step 4, Launch a strategy.",
   "hots": [
    {
     "x": 16,
     "y": 525,
     "w": 358,
     "h": 61,
     "label": "Launch a strategy based on your goals and risk style",
     "r": 16,
     "to": "ask",
     "next": true
    },
    {
     "x": 12,
     "y": 661,
     "w": 140,
     "h": 39,
     "label": "Close the list",
     "r": 20,
     "to": "home"
    }
   ]
  },
  "ask": {
   "img": "img/ask.webp",
   "alt": "The request written into the message box: Help me pick and launch a starter strategy that fits me",
   "say": "The step wrote the request into the message box. Press send.",
   "hots": [
    {
     "x": 331,
     "y": 778,
     "w": 34,
     "h": 34,
     "label": "Send",
     "r": 17,
     "to": "q1",
     "next": true
    }
   ]
  },
  "q1": {
   "img": "img/q1.webp",
   "alt": "The agent asks what matters most: steady growth, catching big moves, or earning in any market",
   "say": "The agent asks what matters most. Press Steady growth.",
   "hots": [
    {
     "x": 20,
     "y": 573,
     "w": 350,
     "h": 61,
     "label": "Steady growth",
     "r": 16,
     "to": "q2",
     "next": true
    }
   ]
  },
  "q2": {
   "img": "img/q2.webp",
   "alt": "The agent asks how involved you want to be",
   "say": "Second question: how hands-on. Press Fully hands-off.",
   "hots": [
    {
     "x": 20,
     "y": 636,
     "w": 350,
     "h": 61,
     "label": "Fully hands-off",
     "r": 16,
     "to": "card",
     "next": true
    }
   ]
  },
  "card": {
   "img": "img/card.webp",
   "alt": "The agent's suggested strategy as a card, with a choice: simulate first or trade for real",
   "say": "The agent suggests a strategy. It can run as a simulation or trade for real. Press Trade for real.",
   "hots": [
    {
     "x": 37,
     "y": 454,
     "w": 316,
     "h": 77,
     "label": "Trade for real",
     "r": 16,
     "to": "card-secure",
     "next": true
    }
   ]
  },
  "card-secure": {
   "img": "img/card-secure.webp",
   "alt": "Trade for real: three steps before it goes live. Secure your wallet is first",
   "say": "Before real money: secure the wallet, authorise the agent, add funds. Press Secure wallet.",
   "hots": [
    {
     "x": 157,
     "y": 618,
     "w": 196,
     "h": 48,
     "label": "Secure wallet",
     "r": 24,
     "to": "secure",
     "next": true
    }
   ]
  },
  "secure": {
   "img": "img/secure.webp",
   "alt": "Secure your wallet, step 1 of 2: authenticator app, SMS or passkey",
   "say": "Secure your wallet, 1 of 2. Press Passkey.",
   "hots": [
    {
     "x": 28,
     "y": 752,
     "w": 334,
     "h": 56,
     "label": "Passkey",
     "r": 16,
     "to": "verify",
     "next": true
    }
   ],
   "html": "<svg class=\"scrim\" viewBox=\"0 0 390 844\" width=\"390\" height=\"844\" aria-hidden=\"true\" style=\"position:absolute;left:0;top:0;pointer-events:none\"><path fill=\"#000\" fill-opacity=\"0.51\" fill-rule=\"evenodd\" d=\"M0 0H390V844H0ZM32 457H358A20 20 0 0 1 378 477V804A20 20 0 0 1 358 824H32A20 20 0 0 1 12 804V477A20 20 0 0 1 32 457Z\"/></svg>"
  },
  "verify": {
   "img": "img/verify.webp",
   "alt": "Verify it's you with a passkey",
   "say": "Verify it's you. Press Use passkey.",
   "hots": [
    {
     "x": 28,
     "y": 712,
     "w": 334,
     "h": 52,
     "label": "Use passkey",
     "r": 26,
     "to": "authorise",
     "next": true
    },
    {
     "x": 28,
     "y": 768,
     "w": 334,
     "h": 40,
     "label": "Back",
     "r": 0,
     "to": "secure"
    }
   ],
   "html": "<svg class=\"scrim\" viewBox=\"0 0 390 844\" width=\"390\" height=\"844\" aria-hidden=\"true\" style=\"position:absolute;left:0;top:0;pointer-events:none\"><path fill=\"#000\" fill-opacity=\"0.51\" fill-rule=\"evenodd\" d=\"M0 0H390V844H0ZM32 565H358A20 20 0 0 1 378 585V804A20 20 0 0 1 358 824H32A20 20 0 0 1 12 804V585A20 20 0 0 1 32 565Z\"/></svg>"
  },
  "authorise": {
   "img": "img/authorise.webp",
   "alt": "Authorise Senpi to trade, step 2 of 2: what the agent can and cannot do",
   "say": "Authorise Senpi to trade, 2 of 2. It can trade; it cannot withdraw. Press Authorise.",
   "hots": [
    {
     "x": 28,
     "y": 712,
     "w": 334,
     "h": 52,
     "label": "Authorise",
     "r": 26,
     "to": "verify2",
     "next": true
    }
   ],
   "html": "<svg class=\"scrim\" viewBox=\"0 0 390 844\" width=\"390\" height=\"844\" aria-hidden=\"true\" style=\"position:absolute;left:0;top:0;pointer-events:none\"><path fill=\"#000\" fill-opacity=\"0.51\" fill-rule=\"evenodd\" d=\"M0 0H390V844H0ZM32 425H358A20 20 0 0 1 378 445V804A20 20 0 0 1 358 824H32A20 20 0 0 1 12 804V445A20 20 0 0 1 32 425Z\"/></svg>"
  },
  "verify2": {
   "img": "img/verify2.webp",
   "alt": "Verify it's you again, to sign the authorisation",
   "say": "Verify once more to sign it. Press Use passkey.",
   "hots": [
    {
     "x": 28,
     "y": 712,
     "w": 334,
     "h": 52,
     "label": "Use passkey",
     "r": 26,
     "to": "card-fund",
     "next": true
    },
    {
     "x": 28,
     "y": 768,
     "w": 334,
     "h": 40,
     "label": "Back",
     "r": 0,
     "to": "authorise"
    }
   ],
   "html": "<svg class=\"scrim\" viewBox=\"0 0 390 844\" width=\"390\" height=\"844\" aria-hidden=\"true\" style=\"position:absolute;left:0;top:0;pointer-events:none\"><path fill=\"#000\" fill-opacity=\"0.51\" fill-rule=\"evenodd\" d=\"M0 0H390V844H0ZM32 565H358A20 20 0 0 1 378 585V804A20 20 0 0 1 358 824H32A20 20 0 0 1 12 804V585A20 20 0 0 1 32 565Z\"/></svg>"
  },
  "card-fund": {
   "img": "img/card-fund.webp",
   "alt": "The deploy card: wallet secured, agent authorised, add 100 dollars is next",
   "say": "Secured and authorised. Press Add $100.",
   "hots": [
    {
     "x": 157,
     "y": 618,
     "w": 196,
     "h": 48,
     "label": "Add $100",
     "r": 24,
     "to": "methods",
     "next": true
    }
   ]
  },
  "methods": {
   "img": "img/methods.webp",
   "alt": "Fund Your Wallet: ways to add money, above a block saying the wallet, the funds and the control are yours",
   "say": "Fund Your Wallet, with the trust block under the choices. Press Deposit USDC.",
   "hots": [
    {
     "x": 20,
     "y": 366,
     "w": 350,
     "h": 68,
     "label": "Deposit USDC",
     "r": 34,
     "to": "deposit",
     "next": true
    }
   ]
  },
  "deposit": {
   "img": "img/deposit.webp",
   "alt": "Deposit crypto: USDC from Base, a deposit address to copy, and the same trust block",
   "say": "Deposit crypto. Press Copy Address.",
   "hots": [
    {
     "x": 36,
     "y": 494,
     "w": 318,
     "h": 48,
     "label": "Copy Address",
     "r": 24,
     "to": "copied",
     "next": true
    },
    {
     "x": 20,
     "y": 240,
     "w": 40,
     "h": 40,
     "label": "Back to funding methods",
     "r": 20,
     "to": "methods"
    }
   ]
  },
  "copied": {
   "img": "img/copied.webp",
   "alt": "The address is copied",
   "say": "Copied. Go back, then close the sheet to return to the card.",
   "hots": [
    {
     "x": 20,
     "y": 240,
     "w": 40,
     "h": 40,
     "label": "Back to funding methods",
     "r": 20,
     "to": "methods-again",
     "next": true
    }
   ]
  },
  "methods-again": {
   "img": "img/methods-again.webp",
   "alt": "Fund Your Wallet again",
   "say": "Press above the sheet to close it. The app then checks for the deposit.",
   "hots": [
    {
     "x": 0,
     "y": 0,
     "w": 390,
     "h": 144,
     "label": "Close the funding sheet",
     "r": 0,
     "to": "checking",
     "next": true
    }
   ]
  },
  "checking": {
   "img": "img/checking.webp",
   "alt": "The deploy card checking for the deposit",
   "say": "Checking for the deposit.",
   "hots": [],
   "auto": {
    "to": "funded",
    "ms": 1500
   }
  },
  "funded": {
   "img": "img/funded.webp",
   "alt": "The deploy card: Funded, 100 dollars ready, with Deploy strategy",
   "say": "Funded: $100 ready. Press Deploy strategy.",
   "hots": [
    {
     "x": 157,
     "y": 618,
     "w": 196,
     "h": 48,
     "label": "Deploy strategy",
     "r": 24,
     "to": "deploy-01",
     "next": true
    }
   ]
  },
  "deploy-01": {
   "img": "img/deploy-01.webp",
   "alt": "Deploying, step 1 of 5",
   "say": "Deploying, step 1 of 5.",
   "hots": [],
   "auto": {
    "to": "deploy-02",
    "ms": 1300
   }
  },
  "deploy-02": {
   "img": "img/deploy-02.webp",
   "alt": "Deploying, step 2 of 5",
   "say": "Deploying, step 2 of 5.",
   "hots": [],
   "auto": {
    "to": "deploy-03",
    "ms": 1100
   }
  },
  "deploy-03": {
   "img": "img/deploy-03.webp",
   "alt": "Deploying, step 3 of 5",
   "say": "Deploying, step 3 of 5.",
   "hots": [],
   "auto": {
    "to": "deploy-04",
    "ms": 1000
   }
  },
  "deploy-04": {
   "img": "img/deploy-04.webp",
   "alt": "Deploying, step 4 of 5",
   "say": "Deploying, step 4 of 5.",
   "hots": [],
   "auto": {
    "to": "deploy-05",
    "ms": 1400
   }
  },
  "deploy-05": {
   "img": "img/deploy-05.webp",
   "alt": "Deploying, step 5 of 5",
   "say": "Deploying, step 5 of 5.",
   "hots": [],
   "auto": {
    "to": "live",
    "ms": 900
   }
  },
  "live": {
   "img": "img/live.webp",
   "alt": "The strategy is live, watching for its first entry",
   "say": "Live, watching for its first entry. Press View strategy to see what it does.",
   "hots": [
    {
     "x": 111,
     "y": 479,
     "w": 242,
     "h": 48,
     "label": "View strategy",
     "r": 24,
     "to": "strategy",
     "next": true
    }
   ]
  },
  "strategy": {
   "img": "img/strategy.webp",
   "alt": "The strategy's own page: account value, profit, positions, with View Scans at the bottom",
   "say": "The strategy's page. Press View Scans to see every decision it made.",
   "hots": [
    {
     "x": 16,
     "y": 784,
     "w": 175,
     "h": 48,
     "label": "View Scans",
     "r": 24,
     "to": "scans",
     "next": true
    }
   ]
  },
  "scans": {
   "img": "img/scans.webp",
   "alt": "The strategy's scan timeline: opened and skipped scans, newest first, each with its reason",
   "say": "Every scan is a row, with the reason it did or did not trade. Use the filter to find the one it opened.",
   "hots": [
    {
     "x": 301,
     "y": 66,
     "w": 73,
     "h": 38,
     "label": "Filter the timeline",
     "r": 19,
     "to": "filter",
     "next": true
    },
    {
     "x": 338,
     "y": 12,
     "w": 36,
     "h": 36,
     "label": "Close",
     "r": 18,
     "to": "strategy"
    }
   ]
  },
  "filter": {
   "img": "img/filter.webp",
   "alt": "The filter: All, Opened, Skipped, Errors",
   "say": "Press Opened.",
   "hots": [
    {
     "x": 243,
     "y": 156,
     "w": 130,
     "h": 40,
     "label": "Opened",
     "r": 0,
     "to": "scans-opened",
     "next": true
    }
   ]
  },
  "scans-opened": {
   "img": "img/scans-opened.webp",
   "alt": "The timeline filtered to the position it opened",
   "say": "The one position it opened. Press it.",
   "hots": [
    {
     "x": 0,
     "y": 162,
     "w": 390,
     "h": 52,
     "label": "The opened position",
     "r": 0,
     "to": "opened",
     "next": true
    },
    {
     "x": 338,
     "y": 12,
     "w": 36,
     "h": 36,
     "label": "Close",
     "r": 18,
     "to": "strategy"
    }
   ]
  },
  "opened": {
   "img": "img/opened.webp",
   "alt": "The opened position expanded: why it is in, what would make it wrong, and a conviction of 6 out of 10",
   "say": "The opened position, with its reasoning: why it is in, what would make it wrong, and how sure it is.",
   "hots": [
    {
     "x": 0,
     "y": 162,
     "w": 390,
     "h": 52,
     "label": "Close this row",
     "r": 0,
     "to": "scans-opened"
    },
    {
     "x": 338,
     "y": 12,
     "w": 36,
     "h": 36,
     "label": "Close",
     "r": 18,
     "to": "strategy"
    }
   ]
  }
 },
 "phone": true
};
