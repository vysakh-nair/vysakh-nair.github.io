window.PROTO = {
 "name": "airstack-explorer",
 "w": 1440,
 "h": 1080,
 "start": "home",
 "states": {
  "home": {
   "img": "img/home.webp",
   "h": 3926,
   "alt": "Airstack Explorer home: search, Recommended Frames For You, Top Farcaster Creators this month, and lists of frames, tokens and mints",
   "say": "Explorer home. Press betashop under Top Farcaster Creators to open that identity, or scroll to Trending Mints and press View all.",
   "hots": [
    { "x": 313, "y": 757, "w": 202, "h": 193, "r": 14, "label": "Open betashop, a top Farcaster creator", "to": "profile", "next": true },
    { "x": 1070, "y": 1180, "w": 322, "h": 58, "r": 10, "label": "Open betashop.eth from Not A Token Leaders", "to": "profile" },
    { "x": 1312, "y": 2848, "w": 80, "h": 30, "r": 8, "label": "View all trending mints", "to": "mints-table" }
   ]
  },
  "profile": {
   "img": "img/profile.webp",
   "h": 1292,
   "alt": "Identity view for betashop.eth: profile, casts, Not A Token rank and earnings, top frames",
   "say": "The identity view for betashop.eth: profile, casts, rank, and top frames. Use Back to return.",
   "hots": []
  },
  "mints-table": {
   "img": "img/mints-table.webp",
   "h": 1163,
   "alt": "Trending Mints as a table: name, symbol, unique mints, token type, blockchain, address, last transfer",
   "say": "Trending Mints as a table. Press the grid button to see the same list as a grid.",
   "hots": [
    { "x": 1257, "y": 121, "w": 40, "h": 40, "r": 20, "label": "Show as a grid", "to": "mints-grid", "next": true },
    { "x": 72, "y": 125, "w": 74, "h": 32, "r": 8, "label": "Home", "to": "home" }
   ]
  },
  "mints-grid": {
   "img": "img/mints-grid.webp",
   "h": 1163,
   "alt": "Trending Mints as a grid of artwork",
   "say": "Trending Mints as a grid. Press the list button to go back to the table.",
   "hots": [
    { "x": 1297, "y": 121, "w": 40, "h": 40, "r": 20, "label": "Show as a table", "to": "mints-table", "next": true },
    { "x": 72, "y": 125, "w": 74, "h": 32, "r": 8, "label": "Home", "to": "home" }
   ]
  }
 }
};
