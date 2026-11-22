window.PROTO = {
 "name": "senpi-simulations",
 "w": 1440,
 "h": 900,
 "start": "start",
 "states": {
  "start": {
   "img": "img/start.webp",
   "alt": "A new chat with Senpi: the message box, and Get started with four steps, the third being Help me choose a trading strategy",
   "say": "A new chat. Press step 3, Help me choose a trading strategy.",
   "hots": [
    {
     "x": 520,
     "y": 673,
     "w": 660,
     "h": 44,
     "label": "Help me choose a trading strategy",
     "r": 22,
     "to": "asked",
     "next": true
    }
   ]
  },
  "asked": {
   "img": "img/asked.webp",
   "alt": "The request written into the message box: Help me choose a trading strategy",
   "say": "The step wrote the request into the message box. Press send.",
   "hots": [
    {
     "x": 1137,
     "y": 419,
     "w": 30,
     "h": 30,
     "label": "Send",
     "r": 15,
     "to": "sent",
     "next": true
    }
   ]
  },
  "sent": {
   "img": "img/sent.webp",
   "alt": "The request sent; the agent's answer is arriving",
   "say": "Sent. The agent is answering.",
   "hots": [],
   "auto": {
    "to": "q1",
    "ms": 380
   }
  },
  "q1": {
   "img": "img/q1.webp",
   "alt": "The agent asks what matters most, with three options: steady growth, catch big moves, earn in any market",
   "say": "The agent asks its first question, with options. Press Steady growth.",
   "hots": [
    {
     "x": 479,
     "y": 636,
     "w": 742,
     "h": 60,
     "label": "Steady growth",
     "r": 16,
     "to": "a1",
     "next": true
    }
   ]
  },
  "a1": {
   "img": "img/a1.webp",
   "alt": "Steady growth chosen; the agent's next question is arriving",
   "say": "Steady growth. The agent is answering.",
   "hots": [],
   "auto": {
    "to": "q2",
    "ms": 580
   }
  },
  "q2": {
   "img": "img/q2.webp",
   "alt": "The agent asks how hands-on you want to be: fully hands-off, or check in daily",
   "say": "Second question. Press Fully hands-off.",
   "hots": [
    {
     "x": 479,
     "y": 698,
     "w": 742,
     "h": 60,
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
    "ms": 1360
   }
  },
  "card": {
   "img": "img/card.webp",
   "alt": "The agent's pick, Beaver, as a card with two ways to start: Simulation, suggested, with 100 dollars of virtual money, or Trade for real",
   "say": "The agent suggests a strategy and two ways to start. Simulation is suggested. Press Start simulation.",
   "hots": [
    {
     "x": 615,
     "y": 573,
     "w": 594,
     "h": 44,
     "label": "Start simulation",
     "r": 22,
     "to": "deploy-0",
     "next": true
    }
   ]
  },
  "deploy-0": {
   "img": "img/deploy-0.webp",
   "alt": "Starting the simulation, step 1 of 5: set up a paper wallet",
   "say": "Starting the simulation: setting up a paper wallet.",
   "hots": [],
   "auto": {
    "to": "deploy-1",
    "ms": 1200
   }
  },
  "deploy-1": {
   "img": "img/deploy-1.webp",
   "alt": "Starting the simulation, step 2 of 5: create the strategy",
   "say": "Starting the simulation: creating the strategy.",
   "hots": [],
   "auto": {
    "to": "deploy-2",
    "ms": 1210
   }
  },
  "deploy-2": {
   "img": "img/deploy-2.webp",
   "alt": "Starting the simulation, step 3 of 5: start the scanner",
   "say": "Starting the simulation: starting the scanner.",
   "hots": [],
   "auto": {
    "to": "deploy-3",
    "ms": 1190
   }
  },
  "deploy-3": {
   "img": "img/deploy-3.webp",
   "alt": "Starting the simulation, step 4 of 5: arm trailing stops",
   "say": "Starting the simulation: arming trailing stops.",
   "hots": [],
   "auto": {
    "to": "deploy-4",
    "ms": 1220
   }
  },
  "deploy-4": {
   "img": "img/deploy-4.webp",
   "alt": "Starting the simulation, step 5 of 5: go live on paper",
   "say": "Starting the simulation: going live on paper.",
   "hots": [],
   "auto": {
    "to": "started",
    "ms": 1230
   }
  },
  "started": {
   "img": "img/started.webp",
   "alt": "The card now reads Simulation started: simulating BTC, first scan in 30 seconds, with Take it live and View strategy",
   "say": "The simulation is running. Press View strategy.",
   "hots": [
    {
     "x": 615,
     "y": 461,
     "w": 594,
     "h": 44,
     "label": "View strategy",
     "r": 22,
     "to": "sim",
     "next": true
    }
   ]
  },
  "sim": {
   "img": "img/sim.webp",
   "alt": "The new simulation's own page, Beaver v1, marked Simulation, with its scans beside it",
   "say": "The simulation's page, marked Simulation. Press the back arrow to see it among all simulations.",
   "hots": [
    {
     "x": 284,
     "y": 10,
     "w": 32,
     "h": 32,
     "label": "Back to Simulations",
     "r": 16,
     "to": "sims",
     "next": true
    }
   ]
  },
  "sims": {
   "img": "img/sims.webp",
   "alt": "Your strategies, Simulations tab: 198 simulations, with the new one, Beaver v1, at the top of the table",
   "say": "Back among all simulations: 198 of them, the new one first. Scroll down to the table.",
   "hots": [
    {
     "x": 292,
     "y": 620,
     "w": 736,
     "h": 270,
     "label": "Scroll down to the table",
     "r": 16,
     "to": "table",
     "next": true
    }
   ]
  },
  "table": {
   "img": "img/table.webp",
   "alt": "Simulations: every variant of an idea in one table, ranked by Sharpe, with the running cost above",
   "say": "Simulations. Tick two variants to compare them, open one, group them by idea, or change the view.",
   "hots": [
    {
     "x": 300,
     "y": 428,
     "w": 16,
     "h": 16,
     "label": "Select Penguin v43",
     "r": 4,
     "to": "one",
     "next": true
    },
    {
     "x": 332,
     "y": 398,
     "w": 656,
     "h": 79,
     "label": "Open Penguin v43",
     "r": 12,
     "to": "detail"
    },
    {
     "x": 596,
     "y": 143,
     "w": 44,
     "h": 24,
     "label": "Group by strategy",
     "r": 12,
     "to": "grouped"
    },
    {
     "x": 887,
     "y": 141,
     "w": 60,
     "h": 28,
     "label": "Card view",
     "r": 14,
     "to": "cards"
    },
    {
     "x": 772,
     "y": 139,
     "w": 107,
     "h": 32,
     "label": "Sort",
     "r": 16,
     "to": "sort"
    },
    {
     "x": 292,
     "y": 96,
     "w": 44,
     "h": 31,
     "label": "Live strategies",
     "r": 16,
     "to": "live"
    },
    {
     "x": 996,
     "y": 300,
     "w": 44,
     "h": 560,
     "label": "Scroll the table sideways to its actions",
     "r": 8,
     "to": "right"
    },
    {
     "x": 12,
     "y": 153,
     "w": 235,
     "h": 36,
     "label": "Discover: everyone's simulations",
     "r": 18,
     "to": "explorer"
    }
   ]
  },
  "one": {
   "img": "img/one.webp",
   "alt": "One variant selected",
   "say": "One variant selected. Tick another to compare.",
   "hots": [
    {
     "x": 300,
     "y": 506,
     "w": 16,
     "h": 16,
     "label": "Select Penguin v36",
     "r": 4,
     "to": "two",
     "next": true
    },
    {
     "x": 300,
     "y": 428,
     "w": 16,
     "h": 16,
     "label": "Unselect Penguin v43",
     "r": 4,
     "to": "table"
    }
   ]
  },
  "two": {
   "img": "img/two.webp",
   "alt": "Two variants selected, with Compare, Ask Senpi, Fork and Stop",
   "say": "Two selected. Press Compare.",
   "hots": [
    {
     "x": 394,
     "y": 843,
     "w": 89,
     "h": 32,
     "label": "Compare",
     "r": 16,
     "to": "compare",
     "next": true
    },
    {
     "x": 963,
     "y": 843,
     "w": 32,
     "h": 32,
     "label": "Clear selection",
     "r": 16,
     "to": "table"
    },
    {
     "x": 300,
     "y": 506,
     "w": 16,
     "h": 16,
     "label": "Unselect Penguin v36",
     "r": 4,
     "to": "one"
    }
   ]
  },
  "compare": {
   "img": "img/compare.webp",
   "alt": "The comparison request written into the agent panel",
   "say": "Compare did not open a new screen. It wrote the request into the agent panel. Press send.",
   "hots": [
    {
     "x": 1386,
     "y": 812,
     "w": 36,
     "h": 36,
     "label": "Send",
     "r": 18,
     "to": "compare-reply",
     "next": true
    }
   ]
  },
  "compare-reply": {
   "img": "img/compare-reply.webp",
   "alt": "The agent's answer: both variants side by side in words, which one to keep, and a caution about a low trade count",
   "say": "The agent compares the two, says which to keep, and flags the low trade count.",
   "hots": []
  },
  "right": {
   "img": "img/right.webp",
   "alt": "The same table scrolled to its last columns, with an actions button on each row",
   "say": "The table scrolled to its actions. Press the three dots on Penguin v43.",
   "hots": [
    {
     "x": 980,
     "y": 422,
     "w": 28,
     "h": 28,
     "label": "Actions for Penguin v43",
     "r": 14,
     "to": "menu",
     "next": true
    }
   ]
  },
  "menu": {
   "img": "img/menu.webp",
   "alt": "Variant actions: Take it live, Fork, Run variations, Stop",
   "say": "Variant actions. Press Take it live.",
   "hots": [
    {
     "x": 833,
     "y": 460,
     "w": 170,
     "h": 32,
     "label": "Take it live",
     "r": 16,
     "to": "live-ask",
     "next": true
    }
   ]
  },
  "live-ask": {
   "img": "img/live-ask.webp",
   "alt": "The take-it-live request written into the agent panel",
   "say": "Take it live wrote the request into the agent panel. Press send.",
   "hots": [
    {
     "x": 1386,
     "y": 812,
     "w": 36,
     "h": 36,
     "label": "Send",
     "r": 18,
     "to": "live-reply",
     "next": true
    }
   ]
  },
  "live-reply": {
   "img": "img/live-reply.webp",
   "alt": "The agent's answer: the wallet balance, a suggested 500 dollar budget, and the strategy with the same settings",
   "say": "The agent checked the balance, suggests a budget, and waits for a yes.",
   "hots": [
    {
     "x": 1390,
     "y": 754,
     "w": 36,
     "h": 36,
     "label": "Jump to latest",
     "r": 18,
     "to": "live-reply-end"
    }
   ]
  },
  "live-reply-end": {
   "img": "img/live-reply-end.webp",
   "alt": "The end of the proposal: the amount, and what has to happen before it goes live",
   "say": "Before it goes live: the amount, and securing the wallet first.",
   "hots": []
  },
  "grouped": {
   "img": "img/grouped.webp",
   "alt": "The same table grouped by strategy: each idea, then its variants; the new Beaver simulation first, then Penguin",
   "say": "Grouped by strategy: the idea first, then its variants, each showing only what changed.",
   "hots": [
    {
     "x": 596,
     "y": 143,
     "w": 44,
     "h": 24,
     "label": "Group by strategy off",
     "r": 12,
     "to": "table"
    },
    {
     "x": 308,
     "y": 402,
     "w": 720,
     "h": 32,
     "label": "Collapse the Penguin idea",
     "r": 8,
     "to": "collapsed"
    }
   ]
  },
  "collapsed": {
   "img": "img/collapsed.webp",
   "alt": "The Penguin idea folded to a single row, with the next idea, Mantis, below it",
   "say": "The Penguin idea folded to one row. The next idea follows.",
   "hots": [
    {
     "x": 308,
     "y": 402,
     "w": 720,
     "h": 32,
     "label": "Expand the Penguin idea",
     "r": 8,
     "to": "grouped"
    },
    {
     "x": 934,
     "y": 183,
     "w": 74,
     "h": 28,
     "label": "Expand all",
     "r": 14,
     "to": "grouped"
    }
   ]
  },
  "cards": {
   "img": "img/cards.webp",
   "alt": "Simulations as cards, each with its chart",
   "say": "Card view: the same simulations, each with its chart.",
   "hots": [
    {
     "x": 949,
     "y": 141,
     "w": 57,
     "h": 28,
     "label": "Table view",
     "r": 14,
     "to": "table"
    }
   ]
  },
  "sort": {
   "img": "img/sort.webp",
   "alt": "Sort options: Sharpe, Return, Max drawdown, Trades and more",
   "say": "Ranked on Sharpe by default. Press Return to rank on return instead.",
   "hots": [
    {
     "x": 756,
     "y": 212,
     "w": 118,
     "h": 32,
     "label": "Sort by return",
     "r": 8,
     "to": "by-return"
    }
   ]
  },
  "by-return": {
   "img": "img/by-return.webp",
   "alt": "The same table ranked by return",
   "say": "Ranked by return. The order changes: return alone rewards luck, which is why Sharpe is the default.",
   "hots": []
  },
  "live": {
   "img": "img/live.webp",
   "alt": "The Live tab: strategies trading real funds, drawn solid and green",
   "say": "Live strategies trade real funds. Simulated ones never look like these.",
   "hots": [
    {
     "x": 360,
     "y": 97,
     "w": 119,
     "h": 31,
     "label": "Simulations",
     "r": 16,
     "to": "table"
    }
   ]
  },
  "detail": {
   "img": "img/detail.webp",
   "alt": "One simulation, Penguin v43: its account value, profit, and position, marked Simulation",
   "say": "One simulation. It is one of 80 variants of the same idea. Press 1 of 80 variants.",
   "hots": [
    {
     "x": 429,
     "y": 721,
     "w": 85,
     "h": 16,
     "label": "1 of 80 variants: the idea",
     "r": 0,
     "to": "idea",
     "next": true
    }
   ]
  },
  "idea": {
   "img": "img/idea.webp",
   "alt": "The Penguin idea: 80 variants, and Senpi's read of them in three lines with next moves as buttons",
   "say": "The idea page. Senpi's read sits above the data: what matters most, the robust zone, the leader. Then the next moves as buttons.",
   "hots": [
    {
     "x": 324,
     "y": 640,
     "w": 308,
     "h": 44,
     "label": "Run a tighter sweep around the robust zone",
     "r": 22,
     "to": "sweep",
     "next": true
    }
   ]
  },
  "sweep": {
   "img": "img/sweep.webp",
   "alt": "The sweep request written into the agent panel",
   "say": "The button wrote the request into the agent panel: same logic, tighter ranges, cost first. Press send.",
   "hots": [
    {
     "x": 1386,
     "y": 812,
     "w": 36,
     "h": 36,
     "label": "Send",
     "r": 18,
     "to": "sweep-reply",
     "next": true
    }
   ]
  },
  "sweep-reply": {
   "img": "img/sweep-reply.webp",
   "alt": "The agent's answer: three simulations of the same idea, differing only in leverage or the profit lock, to review before they start",
   "say": "The agent proposes three simulations of the same idea to review before they start with virtual money.",
   "hots": []
  },
  "explorer": {
   "img": "img/explorer.webp",
   "alt": "Discover: every simulation Senpi users ran, on one chart, with the median and the top fifteen",
   "say": "Everyone's simulations in the open, losers included. Scroll down to the list.",
   "hots": [
    {
     "x": 272,
     "y": 836,
     "w": 756,
     "h": 56,
     "label": "Scroll down to the list",
     "r": 12,
     "to": "explorer-list",
     "next": true
    }
   ]
  },
  "explorer-list": {
   "img": "img/explorer-list.webp",
   "alt": "The list of simulations with their return, Sharpe, drawdown, trades and forks, each with a Fork button",
   "say": "Each simulation can be forked. Press Fork on the first one.",
   "hots": [
    {
     "x": 939,
     "y": 566,
     "w": 48,
     "h": 28,
     "label": "Fork Funding Fade",
     "r": 14,
     "to": "fork",
     "next": true
    }
   ]
  },
  "fork": {
   "img": "img/fork.webp",
   "alt": "The fork request written into the agent panel",
   "say": "Fork wrote the request into the agent panel: someone else's setup becomes the first variant of your own idea.",
   "hots": []
  }
 },
 "skip": {
  "to": "table",
  "label": "Skip to the table",
  "from": [
   "start",
   "asked",
   "sent",
   "q1",
   "a1",
   "q2",
   "a2",
   "card",
   "deploy-0",
   "deploy-1",
   "deploy-2",
   "deploy-3",
   "deploy-4",
   "started",
   "sim",
   "sims"
  ]
 }
};
