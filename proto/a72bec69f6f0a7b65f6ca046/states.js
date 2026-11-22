window.PROTO = {
 "name": "senpi-simulations-app",
 "w": 390,
 "h": 844,
 "start": "start",
 "states": {
  "start": {
   "img": "img/start.webp",
   "alt": "Senpi app home: a greeting, the message box, and Get started",
   "say": "The app, in a new chat. Press Get started.",
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
     "to": "asked",
     "next": true
    },
    {
     "x": 12,
     "y": 661,
     "w": 140,
     "h": 39,
     "label": "Close the list",
     "r": 20,
     "to": "start"
    }
   ]
  },
  "asked": {
   "img": "img/asked.webp",
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
     "to": "sent",
     "next": true
    }
   ]
  },
  "sent": {
   "img": "img/sent.webp",
   "alt": "The request sent; the agent is answering",
   "say": "Sent. The agent is answering.",
   "hots": [],
   "auto": {
    "to": "q1",
    "ms": 1070
   }
  },
  "q1": {
   "img": "img/q1.webp",
   "alt": "The agent asks what matters most, with three options",
   "say": "The agent asks its first question, with options. Press Steady growth.",
   "hots": [
    {
     "x": 20,
     "y": 573,
     "w": 350,
     "h": 61,
     "label": "Steady growth",
     "r": 16,
     "to": "a1",
     "next": true
    }
   ]
  },
  "a1": {
   "img": "img/a1.webp",
   "alt": "Steady growth chosen; the agent is answering",
   "say": "Steady growth. The agent is answering.",
   "hots": [],
   "auto": {
    "to": "q2",
    "ms": 1330
   }
  },
  "q2": {
   "img": "img/q2.webp",
   "alt": "The agent asks how hands-on you want to be",
   "say": "Second question. Press Fully hands-off.",
   "hots": [
    {
     "x": 20,
     "y": 636,
     "w": 350,
     "h": 61,
     "label": "Fully hands-off",
     "r": 16,
     "to": "a2",
     "next": true
    }
   ]
  },
  "a2": {
   "img": "img/a2.webp",
   "alt": "Fully hands-off chosen; the agent is choosing a strategy",
   "say": "Fully hands-off. The agent is choosing a strategy.",
   "hots": [],
   "auto": {
    "to": "card",
    "ms": 3760
   }
  },
  "card": {
   "img": "img/card.webp",
   "alt": "The agent's pick, Beaver Steady, as a card with two ways to start: Simulation, suggested, or Trade for real",
   "say": "The agent suggests a strategy and two ways to start. Simulation is suggested. Press Confirm simulation.",
   "hots": [
    {
     "x": 157,
     "y": 618,
     "w": 196,
     "h": 48,
     "label": "Confirm simulation",
     "r": 24,
     "to": "deploy-1",
     "next": true
    }
   ]
  },
  "deploy-1": {
   "img": "img/deploy-1.webp",
   "alt": "Starting the simulation, step 1 of 5: set up a simulation wallet",
   "say": "Starting the simulation: set up a simulation wallet.",
   "hots": [],
   "auto": {
    "to": "deploy-2",
    "ms": 1280
   }
  },
  "deploy-2": {
   "img": "img/deploy-2.webp",
   "alt": "Starting the simulation, step 2 of 5: create the strategy",
   "say": "Starting the simulation: create the strategy.",
   "hots": [],
   "auto": {
    "to": "deploy-3",
    "ms": 1130
   }
  },
  "deploy-3": {
   "img": "img/deploy-3.webp",
   "alt": "Starting the simulation, step 3 of 5: start the scanner",
   "say": "Starting the simulation: start the scanner.",
   "hots": [],
   "auto": {
    "to": "deploy-4",
    "ms": 990
   }
  },
  "deploy-4": {
   "img": "img/deploy-4.webp",
   "alt": "Starting the simulation, step 4 of 5: arm trailing stops",
   "say": "Starting the simulation: arm trailing stops.",
   "hots": [],
   "auto": {
    "to": "deploy-5",
    "ms": 1400
   }
  },
  "deploy-5": {
   "img": "img/deploy-5.webp",
   "alt": "Starting the simulation, step 5 of 5: go live in simulation",
   "say": "Starting the simulation: go live in simulation.",
   "hots": [],
   "auto": {
    "to": "sim-started",
    "ms": 890
   }
  },
  "sim-started": {
   "img": "img/sim-started.webp",
   "alt": "The card now reads Simulation started: simulating BTC, first scan in 30 seconds, with Take it live and View strategy",
   "say": "The simulation is running. Press View strategy.",
   "hots": [
    {
     "x": 158,
     "y": 492,
     "w": 195,
     "h": 48,
     "label": "View strategy",
     "r": 24,
     "to": "sim",
     "next": true
    }
   ]
  },
  "sim": {
   "img": "img/sim.webp",
   "alt": "The new simulation's own page, Beaver Steady v1, marked Simulation",
   "say": "The simulation's page, marked Simulation. Press back to see it among all simulations.",
   "hots": [
    {
     "x": 12,
     "y": 12,
     "w": 36,
     "h": 36,
     "label": "Back to the simulations",
     "r": 0,
     "to": "sims",
     "next": true
    }
   ]
  },
  "sims": {
   "img": "img/sims.webp",
   "alt": "Strategies in the app, Simulations tab: 198 simulations, the running cost, and the new one, Beaver Steady v1, first",
   "say": "All simulations: 198 of them, the new one first. Change the view, group them, sort them, or scroll on.",
   "hots": [
    {
     "x": 16,
     "y": 153,
     "w": 81,
     "h": 32,
     "label": "Compact list",
     "r": 16,
     "to": "compact",
     "next": true
    },
    {
     "x": 105,
     "y": 153,
     "w": 59,
     "h": 32,
     "label": "Group by idea",
     "r": 16,
     "to": "group"
    },
    {
     "x": 172,
     "y": 153,
     "w": 108,
     "h": 32,
     "label": "Sort",
     "r": 16,
     "to": "sort"
    },
    {
     "x": 289,
     "y": 153,
     "w": 83,
     "h": 32,
     "label": "Filters",
     "r": 16,
     "to": "filters"
    },
    {
     "x": 17,
     "y": 247,
     "w": 356,
     "h": 224,
     "label": "Open Beaver Steady v1",
     "r": 20,
     "to": "sim"
    },
    {
     "x": 16,
     "y": 700,
     "w": 358,
     "h": 50,
     "label": "Scroll down to more simulations",
     "r": 12,
     "to": "cards"
    }
   ]
  },
  "cards": {
   "img": "img/cards.webp",
   "alt": "More simulation cards: return, virtual value, the chart, win rate, drawdown, Sharpe, profit factor, and a strip of today's scans",
   "say": "Each simulation is a card, marked virtual. Press one to open it.",
   "hots": [
    {
     "x": 17,
     "y": 246,
     "w": 356,
     "h": 225,
     "label": "Open TSLA gap fill v65",
     "r": 20,
     "to": "detail",
     "next": true
    }
   ]
  },
  "compact": {
   "img": "img/compact.webp",
   "alt": "The same simulations as a compact list: each variant, what changed, and its Sharpe",
   "say": "Compact: one line per variant, showing only what changed and its Sharpe.",
   "hots": [
    {
     "x": 16,
     "y": 153,
     "w": 102,
     "h": 32,
     "label": "Card view",
     "r": 16,
     "to": "sims"
    },
    {
     "x": 126,
     "y": 153,
     "w": 59,
     "h": 32,
     "label": "Group by idea",
     "r": 16,
     "to": "group"
    },
    {
     "x": 16,
     "y": 319,
     "w": 358,
     "h": 73,
     "label": "Open TSLA gap fill v65",
     "r": 0,
     "to": "detail",
     "next": true
    }
   ]
  },
  "group": {
   "img": "img/group.webp",
   "alt": "Grouped by idea: each idea, then its variants",
   "say": "Grouped: the idea first, then its variants.",
   "hots": [
    {
     "x": 126,
     "y": 282,
     "w": 59,
     "h": 32,
     "label": "Ungroup",
     "r": 16,
     "to": "compact"
    },
    {
     "x": 16,
     "y": 427,
     "w": 358,
     "h": 73,
     "label": "Open Beaver Steady v1",
     "r": 0,
     "to": "sim"
    }
   ]
  },
  "sort": {
   "img": "img/sort.webp",
   "alt": "Sort: Sharpe, Return, Win rate, Max drawdown, Profit factor, Age, Credits per hour",
   "say": "Ranked on Sharpe by default. Press Return to rank on return.",
   "hots": [
    {
     "x": 20,
     "y": 532,
     "w": 350,
     "h": 44,
     "label": "Return",
     "r": 22,
     "to": "by-return",
     "next": true
    },
    {
     "x": 334,
     "y": 436,
     "w": 36,
     "h": 36,
     "label": "Close",
     "r": 18,
     "to": "sims"
    }
   ],
   "html": "<svg class=\"scrim\" viewBox=\"0 0 390 844\" width=\"390\" height=\"844\" aria-hidden=\"true\" style=\"position:absolute;left:0;top:0;pointer-events:none\"><path fill=\"#000\" fill-opacity=\"0.27\" fill-rule=\"evenodd\" d=\"M0 0H390V844H0ZM28 415H362A28 28 0 0 1 390 443V846H0V443A28 28 0 0 1 28 415Z\"/></svg>"
  },
  "by-return": {
   "img": "img/by-return.webp",
   "alt": "The same list ranked by return",
   "say": "Ranked by return: the order changes.",
   "hots": []
  },
  "filters": {
   "img": "img/filters.webp",
   "alt": "Filters: asset, when it started, and a minimum number of trades",
   "say": "Filter by asset, start date, or a minimum number of trades.",
   "hots": [
    {
     "x": 199,
     "y": 788,
     "w": 171,
     "h": 40,
     "label": "Done",
     "r": 20,
     "to": "sims"
    },
    {
     "x": 334,
     "y": 478,
     "w": 36,
     "h": 36,
     "label": "Close",
     "r": 18,
     "to": "sims"
    }
   ],
   "html": "<svg class=\"scrim\" viewBox=\"0 0 390 844\" width=\"390\" height=\"844\" aria-hidden=\"true\" style=\"position:absolute;left:0;top:0;pointer-events:none\"><path fill=\"#000\" fill-opacity=\"0.27\" fill-rule=\"evenodd\" d=\"M0 0H390V844H0ZM28 456.5H362A28 28 0 0 1 390 484.5V846H0V484.5A28 28 0 0 1 28 456.5Z\"/></svg>"
  },
  "detail": {
   "img": "img/detail.webp",
   "alt": "One simulation, TSLA gap fill v65, marked Simulation: account value, profit, the chart, and Take it live at the bottom",
   "say": "One simulation. Take it live, or see it among its 80 variants.",
   "hots": [
    {
     "x": 16,
     "y": 780,
     "w": 97,
     "h": 48,
     "label": "Take it live",
     "r": 24,
     "to": "live-ask",
     "next": true
    },
    {
     "x": 148,
     "y": 733,
     "w": 85,
     "h": 18,
     "label": "1 of 80 variants: the idea",
     "r": 9,
     "to": "idea"
    },
    {
     "x": 277,
     "y": 782,
     "w": 44,
     "h": 44,
     "label": "Compare variants",
     "r": 22,
     "to": "idea"
    }
   ]
  },
  "live-ask": {
   "img": "img/live-ask.webp",
   "alt": "The chat with the request written in: take the simulation live with real funds, same settings, check the balance, deploy when I confirm",
   "say": "Take it live wrote the request into the chat. Press send.",
   "hots": [
    {
     "x": 331,
     "y": 778,
     "w": 34,
     "h": 34,
     "label": "Send",
     "r": 17,
     "to": "live-reply",
     "next": true
    }
   ]
  },
  "live-reply": {
   "img": "img/live-reply.webp",
   "alt": "The agent's go-live card: the simulation's settings, an amount of 500 dollars, and two steps before real money moves: secure your wallet, authorise Senpi to trade",
   "say": "The agent answers with a go-live card: same settings, an amount, and the steps before real money moves.",
   "hots": []
  },
  "idea": {
   "img": "img/idea.webp",
   "alt": "The idea page: 80 variants, Senpi's read of them in three lines, and the next moves as buttons",
   "say": "The idea: 80 variants, Senpi's read of what matters, and the next moves as buttons.",
   "hots": [
    {
     "x": 36,
     "y": 633,
     "w": 318,
     "h": 36,
     "label": "Run a tighter sweep around the robust zone",
     "r": 18,
     "to": "sweep-ask",
     "next": true
    },
    {
     "x": 16,
     "y": 754,
     "w": 358,
     "h": 34,
     "label": "Scroll down to every variant",
     "r": 12,
     "to": "idea-variants"
    }
   ]
  },
  "idea-variants": {
   "img": "img/idea-variants.webp",
   "alt": "Every variant on one chart, with the median and the best one marked",
   "say": "Every variant on one chart: the median, the best, and the spread.",
   "hots": []
  },
  "sweep-ask": {
   "img": "img/sweep-ask.webp",
   "alt": "The chat with the sweep request written in",
   "say": "The button wrote the request into the chat. Press send.",
   "hots": [
    {
     "x": 331,
     "y": 778,
     "w": 34,
     "h": 34,
     "label": "Send",
     "r": 17,
     "to": "sweep-reply",
     "next": true
    }
   ]
  },
  "sweep-reply": {
   "img": "img/sweep-reply.webp",
   "alt": "The agent's answer: three variants to run, as a simulation by default or for real",
   "say": "The agent proposes three variants, to run as simulations by default.",
   "hots": []
  }
 },
 "phone": true,
 "skip": {
  "to": "sims",
  "label": "Skip to simulations",
  "from": [
   "start",
   "started",
   "asked",
   "sent",
   "q1",
   "a1",
   "q2",
   "a2",
   "card",
   "deploy-1",
   "deploy-2",
   "deploy-3",
   "deploy-4",
   "deploy-5",
   "sim-started",
   "sim"
  ]
 }
};
