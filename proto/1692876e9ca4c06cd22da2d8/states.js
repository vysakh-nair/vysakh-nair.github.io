window.PROTO = {
 "name": "senpi-funding",
 "w": 390,
 "h": 844,
 "phone": true,
 "start": "card-secure",
 "states": {
  "card-secure": {
   "img": "img/card-secure.png",
   "alt": "Deploy card for Beaver Steady, Trade for real: secure your wallet, authorise Senpi, add $100",
   "say": "The agent proposed a strategy. To trade for real there are three steps. Press Secure wallet.",
   "hots": [
    {
     "x": 157,
     "y": 618,
     "w": 196,
     "h": 48,
     "label": "Secure wallet",
     "to": "secure",
     "next": true,
     "r": 24
    }
   ]
  },
  "secure": {
   "img": "img/secure.png",
   "alt": "Secure your wallet, step 1 of 2: authenticator app, SMS or passkey",
   "say": "Secure your wallet, 1 of 2. Press Passkey.",
   "hots": [
    {
     "x": 28,
     "y": 752,
     "w": 334,
     "h": 56,
     "label": "Passkey",
     "to": "verify",
     "next": true,
     "r": 16
    }
   ],
   "html": "<svg class=\"scrim\" viewBox=\"0 0 390 844\" width=\"390\" height=\"844\" aria-hidden=\"true\" style=\"position:absolute;left:0;top:0;pointer-events:none\"><path fill=\"#000\" fill-opacity=\"0.51\" fill-rule=\"evenodd\" d=\"M0 0H390V844H0ZM32 457H358A20 20 0 0 1 378 477V804A20 20 0 0 1 358 824H32A20 20 0 0 1 12 804V477A20 20 0 0 1 32 457Z\"/></svg>"
  },
  "verify": {
   "img": "img/verify.png",
   "alt": "Verify it's you: use Face ID or your fingerprint",
   "say": "Verify it's you. Press Use passkey.",
   "hots": [
    {
     "x": 28,
     "y": 712,
     "w": 334,
     "h": 52,
     "label": "Use passkey",
     "to": "authorise",
     "next": true,
     "r": 26
    },
    {
     "x": 28,
     "y": 768,
     "w": 334,
     "h": 40,
     "label": "Back",
     "to": "secure",
     "r": 20
    }
   ],
   "html": "<svg class=\"scrim\" viewBox=\"0 0 390 844\" width=\"390\" height=\"844\" aria-hidden=\"true\" style=\"position:absolute;left:0;top:0;pointer-events:none\"><path fill=\"#000\" fill-opacity=\"0.51\" fill-rule=\"evenodd\" d=\"M0 0H390V844H0ZM32 565H358A20 20 0 0 1 378 585V804A20 20 0 0 1 358 824H32A20 20 0 0 1 12 804V585A20 20 0 0 1 32 565Z\"/></svg>"
  },
  "authorise": {
   "img": "img/authorise.png",
   "alt": "Authorise Senpi to trade, step 2 of 2: it can open and close positions and move stops, and cannot withdraw or send funds out",
   "say": "Authorise Senpi to trade, 2 of 2. Press Authorise.",
   "hots": [
    {
     "x": 28,
     "y": 712,
     "w": 334,
     "h": 52,
     "label": "Authorise",
     "to": "verify2",
     "next": true,
     "r": 26
    }
   ],
   "html": "<svg class=\"scrim\" viewBox=\"0 0 390 844\" width=\"390\" height=\"844\" aria-hidden=\"true\" style=\"position:absolute;left:0;top:0;pointer-events:none\"><path fill=\"#000\" fill-opacity=\"0.51\" fill-rule=\"evenodd\" d=\"M0 0H390V844H0ZM32 425H358A20 20 0 0 1 378 445V804A20 20 0 0 1 358 824H32A20 20 0 0 1 12 804V445A20 20 0 0 1 32 425Z\"/></svg>"
  },
  "verify2": {
   "img": "img/verify2.png",
   "alt": "Verify it's you, step 2 of 2",
   "say": "Verify once more. Press Use passkey.",
   "hots": [
    {
     "x": 28,
     "y": 712,
     "w": 334,
     "h": 52,
     "label": "Use passkey",
     "to": "card-fund",
     "next": true,
     "r": 26
    },
    {
     "x": 28,
     "y": 768,
     "w": 334,
     "h": 40,
     "label": "Back",
     "to": "authorise",
     "r": 20
    }
   ],
   "html": "<svg class=\"scrim\" viewBox=\"0 0 390 844\" width=\"390\" height=\"844\" aria-hidden=\"true\" style=\"position:absolute;left:0;top:0;pointer-events:none\"><path fill=\"#000\" fill-opacity=\"0.51\" fill-rule=\"evenodd\" d=\"M0 0H390V844H0ZM32 565H358A20 20 0 0 1 378 585V804A20 20 0 0 1 358 824H32A20 20 0 0 1 12 804V585A20 20 0 0 1 32 565Z\"/></svg>"
  },
  "card-fund": {
   "img": "img/card-fund.png",
   "alt": "Deploy card: wallet secured, Senpi authorised, next step add $100 to your wallet",
   "say": "Secured and authorised. Funding is next. Press Add $100.",
   "hots": [
    {
     "x": 157,
     "y": 618,
     "w": 196,
     "h": 48,
     "label": "Add $100",
     "to": "methods",
     "next": true,
     "r": 24
    }
   ]
  },
  "methods": {
   "img": "img/methods.png",
   "alt": "Fund Your Wallet sheet: current balance, Deposit USDC, Buy USDC, Transfer from Exchange, and the trust block",
   "say": "Fund Your Wallet. Press Deposit USDC.",
   "hots": [
    {
     "x": 20,
     "y": 366,
     "w": 350,
     "h": 68,
     "label": "Deposit USDC",
     "to": "deposit",
     "next": true,
     "r": 30
    }
   ]
  },
  "deposit": {
   "img": "img/deposit.png",
   "alt": "Deposit crypto sheet: token and network, the deposit address, and the trust block",
   "say": "Deposit crypto. Press Copy Address.",
   "hots": [
    {
     "x": 36,
     "y": 494,
     "w": 318,
     "h": 48,
     "label": "Copy Address",
     "to": "copied",
     "next": true,
     "r": 24
    },
    {
     "x": 20,
     "y": 240,
     "w": 40,
     "h": 40,
     "label": "Back to funding methods",
     "to": "methods",
     "r": 20
    }
   ]
  },
  "copied": {
   "img": "img/copied.png",
   "alt": "Deposit crypto sheet after copying: the button reads Copied",
   "say": "Address copied. The deposit is sent from outside the app. Press back.",
   "hots": [
    {
     "x": 20,
     "y": 240,
     "w": 40,
     "h": 40,
     "label": "Back to funding methods",
     "to": "methods-again",
     "next": true,
     "r": 20
    }
   ]
  },
  "methods-again": {
   "img": "img/methods-again.png",
   "alt": "Fund Your Wallet sheet",
   "say": "Close the sheet by pressing above it.",
   "hots": [
    {
     "x": 0,
     "y": 0,
     "w": 390,
     "h": 146,
     "label": "Close the funding sheet",
     "to": "checking",
     "next": true,
     "r": 0
    }
   ]
  },
  "checking": {
   "img": "img/checking.png",
   "alt": "Deploy card: checking for your deposit",
   "say": "Checking for your deposit.",
   "auto": {
    "to": "funded",
    "ms": 1500
   },
   "hots": []
  },
  "funded": {
   "img": "img/funded.png",
   "alt": "Deploy card: Funded, $100 ready. Deploy strategy.",
   "say": "Funded, $100 ready. Press Deploy strategy.",
   "hots": [
    {
     "x": 157,
     "y": 618,
     "w": 196,
     "h": 48,
     "label": "Deploy strategy",
     "to": "deploy-01",
     "next": true,
     "r": 24
    }
   ]
  },
  "deploy-01": {
   "img": "img/deploy-01.png",
   "alt": "Deploying 1 of 5: moving $100 to its strategy wallet.",
   "say": "Deploying 1 of 5: moving $100 to its strategy wallet.",
   "auto": {
    "to": "deploy-02",
    "ms": 1300
   },
   "hots": []
  },
  "deploy-02": {
   "img": "img/deploy-02.png",
   "alt": "Deploying 2 of 5: creating the strategy.",
   "say": "Deploying 2 of 5: creating the strategy.",
   "auto": {
    "to": "deploy-03",
    "ms": 1100
   },
   "hots": []
  },
  "deploy-03": {
   "img": "img/deploy-03.png",
   "alt": "Deploying 3 of 5: starting the scanner.",
   "say": "Deploying 3 of 5: starting the scanner.",
   "auto": {
    "to": "deploy-04",
    "ms": 1000
   },
   "hots": []
  },
  "deploy-04": {
   "img": "img/deploy-04.png",
   "alt": "Deploying 4 of 5: arming trailing stops.",
   "say": "Deploying 4 of 5: arming trailing stops.",
   "auto": {
    "to": "deploy-05",
    "ms": 1400
   },
   "hots": []
  },
  "deploy-05": {
   "img": "img/deploy-05.png",
   "alt": "Deploying 5 of 5: going live.",
   "say": "Deploying 5 of 5: going live.",
   "auto": {
    "to": "live",
    "ms": 900
   },
   "hots": []
  },
  "live": {
   "img": "img/live.png",
   "alt": "Deploy card: Beaver Steady is live on BTC, first scan in 30 seconds",
   "say": "Deployed. Live on BTC, first scan in 30 seconds.",
   "hots": []
  }
 }
};
