import {
  soccer,
  basketball,
  boxing,
  cricket,
  rugby,
  ice_hockey,
  american,
  mma,
  golf,
} from "../assets";

export const sports = [
  { img: soccer, title: "Soccer" },
  { img: basketball, title: "Basketball" },
  { img: american, title: "American Football" },
  { img: golf, title: "Golf" },
  { img: cricket, title: "Cricket" },
  { img: rugby, title: "Rugby" },
  { img: mma, title: "Mixed Martial Arts" },
  { img: ice_hockey, title: "Ice Hockey" },
  { img: boxing, title: "Boxing" },
];

// const soccerAndNBAData = allData.filter(
//   (game) => game.sport_title === "soccer" || game.sport_title === "NBA"
// );

// const handleSidebar = () => {
//   if (betsWidth === "bet-1") {
//     setSidebarWidth("side-2");
//     setBetsWidth("bet-2");
//   } else if (sidebarWidth === "side-2") {
//     if (betsWidth === "bet-2") {
//       setSidebarWidth("side-1");
//       setBetsWidth("bet-1");
//     } else if (betsWidth == "bet-3") {
//       setSidebarWidth("side-1");
//       setBetsWidth("bet-4");
//     }
//   } else if (betsWidth === "bet-2" || betsWidth === "bet-4") {
//     setSidebarWidth("side-2");
//     setBetsWidth("bet-3");
//     setSlipWidth("slip-2");
//   }
// };

// const handleBets = (id, key, name, price) => {
//   const newBet = { id, key, name, odd: price };

//   const existingBetIndex = bets.findIndex(
//     (bet) => bet.id === id && bet.key === key
//   );

//   if (existingBetIndex !== -1) {
//     // Update the existing bet
//     setBets((prevBets) => {
//       const updatedBets = [...prevBets];
//       updatedBets[existingBetIndex] = {
//         ...updatedBets[existingBetIndex],
//         name,
//         odd: price,
//       };
//       return updatedBets;
//     });
//   } else {
//     setBets((prevBets) => [...prevBets, newBet]);
//   }
// };

export const upcoming = [
  {
    id: "fee9da6c4a9c162c9c036aa6ce11e04b",
    sport_key: "soccer_greece_super_league",
    sport_title: "Super League - Greece",
    commence_time: "2023-11-29T15:00:00Z",
    home_team: "Volos FC",
    away_team: "Panserraikos FC",
    bookmakers: [
      {
        key: "fanduel",
        title: "FanDuel",
        last_update: "2023-11-29T10:16:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:16:17Z",
            outcomes: [
              {
                name: "Panserraikos FC",
                price: 2.9,
              },
              {
                name: "Volos FC",
                price: 2.3,
              },
              {
                name: "Draw",
                price: 3.2,
              },
            ],
          },
        ],
      },
      {
        key: "bovada",
        title: "Bovada",
        last_update: "2023-11-29T10:17:45Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:17:45Z",
            outcomes: [
              {
                name: "Panserraikos FC",
                price: 2.95,
              },
              {
                name: "Volos FC",
                price: 2.35,
              },
              {
                name: "Draw",
                price: 3.2,
              },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2023-11-29T10:17:58Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:17:58Z",
            outcomes: [
              {
                name: "Panserraikos FC",
                price: 3.0,
              },
              {
                name: "Volos FC",
                price: 2.31,
              },
              {
                name: "Draw",
                price: 3.4,
              },
            ],
          },
        ],
      },
      {
        key: "betmgm",
        title: "BetMGM",
        last_update: "2023-11-29T10:16:58Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:16:58Z",
            outcomes: [
              {
                name: "Panserraikos FC",
                price: 3.0,
              },
              {
                name: "Volos FC",
                price: 2.3,
              },
              {
                name: "Draw",
                price: 3.25,
              },
            ],
          },
        ],
      },
      {
        key: "draftkings",
        title: "DraftKings",
        last_update: "2023-11-29T10:17:31Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:17:31Z",
            outcomes: [
              {
                name: "Panserraikos FC",
                price: 3.15,
              },
              {
                name: "Volos FC",
                price: 2.3,
              },
              {
                name: "Draw",
                price: 3.3,
              },
            ],
          },
        ],
      },
      {
        key: "unibet_us",
        title: "Unibet",
        last_update: "2023-11-29T10:18:12Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:18:12Z",
            outcomes: [
              {
                name: "Panserraikos FC",
                price: 2.88,
              },
              {
                name: "Volos FC",
                price: 2.4,
              },
              {
                name: "Draw",
                price: 3.15,
              },
            ],
          },
        ],
      },
      {
        key: "betus",
        title: "BetUS",
        last_update: "2023-11-29T10:16:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:16:51Z",
            outcomes: [
              {
                name: "Panserraikos FC",
                price: 2.95,
              },
              {
                name: "Volos FC",
                price: 2.35,
              },
              {
                name: "Draw",
                price: 3.2,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "4401328d204745bf85a34e4d4268e761",
    sport_key: "basketball_ncaab",
    sport_title: "NCAAB",
    commence_time: "2023-11-29T17:00:00Z",
    home_team: "Lipscomb Bisons",
    away_team: "Chattanooga Mocs",
    bookmakers: [
      {
        key: "draftkings",
        title: "DraftKings",
        last_update: "2023-11-29T10:17:54Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:17:54Z",
            outcomes: [
              {
                name: "Chattanooga Mocs",
                price: 2.14,
              },
              {
                name: "Lipscomb Bisons",
                price: 1.74,
              },
            ],
          },
        ],
      },
      {
        key: "pointsbetus",
        title: "PointsBet (US)",
        last_update: "2023-11-29T10:17:12Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:17:12Z",
            outcomes: [
              {
                name: "Chattanooga Mocs",
                price: 2.15,
              },
              {
                name: "Lipscomb Bisons",
                price: 1.71,
              },
            ],
          },
        ],
      },
      {
        key: "williamhill_us",
        title: "Caesars",
        last_update: "2023-11-29T10:14:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:14:51Z",
            outcomes: [
              {
                name: "Chattanooga Mocs",
                price: 2.1,
              },
              {
                name: "Lipscomb Bisons",
                price: 1.77,
              },
            ],
          },
        ],
      },
      {
        key: "fanduel",
        title: "FanDuel",
        last_update: "2023-11-29T10:17:23Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:17:23Z",
            outcomes: [
              {
                name: "Chattanooga Mocs",
                price: 2.14,
              },
              {
                name: "Lipscomb Bisons",
                price: 1.73,
              },
            ],
          },
        ],
      },
      {
        key: "unibet_us",
        title: "Unibet",
        last_update: "2023-11-29T10:16:59Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:16:59Z",
            outcomes: [
              {
                name: "Chattanooga Mocs",
                price: 2.2,
              },
              {
                name: "Lipscomb Bisons",
                price: 1.68,
              },
            ],
          },
        ],
      },
      {
        key: "betrivers",
        title: "BetRivers",
        last_update: "2023-11-29T10:16:39Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:16:39Z",
            outcomes: [
              {
                name: "Chattanooga Mocs",
                price: 2.2,
              },
              {
                name: "Lipscomb Bisons",
                price: 1.68,
              },
            ],
          },
        ],
      },
      {
        key: "twinspires",
        title: "TwinSpires",
        last_update: "2023-11-29T10:18:06Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:18:06Z",
            outcomes: [
              {
                name: "Chattanooga Mocs",
                price: 2.2,
              },
              {
                name: "Lipscomb Bisons",
                price: 1.68,
              },
            ],
          },
        ],
      },
      {
        key: "wynnbet",
        title: "WynnBET",
        last_update: "2023-11-29T10:17:10Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:17:10Z",
            outcomes: [
              {
                name: "Chattanooga Mocs",
                price: 2.32,
              },
              {
                name: "Lipscomb Bisons",
                price: 1.65,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "fc1e263384945b5e705ddd7ac41fb48e",
    sport_key: "soccer_uefa_champs_league",
    sport_title: "UEFA Champions League",
    commence_time: "2023-11-29T17:45:00Z",
    home_team: "Galatasaray",
    away_team: "Manchester United",
    bookmakers: [
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2023-11-29T10:17:34Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:17:34Z",
            outcomes: [
              {
                name: "Galatasaray",
                price: 2.65,
              },
              {
                name: "Manchester United",
                price: 2.5,
              },
              {
                name: "Draw",
                price: 3.7,
              },
            ],
          },
        ],
      },
      {
        key: "betmgm",
        title: "BetMGM",
        last_update: "2023-11-29T10:16:13Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:16:13Z",
            outcomes: [
              {
                name: "Galatasaray",
                price: 2.65,
              },
              {
                name: "Manchester United",
                price: 2.5,
              },
              {
                name: "Draw",
                price: 3.6,
              },
            ],
          },
        ],
      },
      {
        key: "fanduel",
        title: "FanDuel",
        last_update: "2023-11-29T10:15:40Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:15:40Z",
            outcomes: [
              {
                name: "Galatasaray",
                price: 2.7,
              },
              {
                name: "Manchester United",
                price: 2.45,
              },
              {
                name: "Draw",
                price: 3.7,
              },
            ],
          },
        ],
      },
      {
        key: "bovada",
        title: "Bovada",
        last_update: "2023-11-29T10:16:38Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:16:38Z",
            outcomes: [
              {
                name: "Galatasaray",
                price: 2.6,
              },
              {
                name: "Manchester United",
                price: 2.5,
              },
              {
                name: "Draw",
                price: 3.75,
              },
            ],
          },
        ],
      },
      {
        key: "pointsbetus",
        title: "PointsBet (US)",
        last_update: "2023-11-29T10:16:20Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:16:20Z",
            outcomes: [
              {
                name: "Galatasaray",
                price: 2.6,
              },
              {
                name: "Manchester United",
                price: 2.45,
              },
              {
                name: "Draw",
                price: 3.6,
              },
            ],
          },
        ],
      },
      {
        key: "betrivers",
        title: "BetRivers",
        last_update: "2023-11-29T10:17:03Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:17:03Z",
            outcomes: [
              {
                name: "Galatasaray",
                price: 2.63,
              },
              {
                name: "Manchester United",
                price: 2.55,
              },
              {
                name: "Draw",
                price: 3.75,
              },
            ],
          },
        ],
      },
      {
        key: "unibet_us",
        title: "Unibet",
        last_update: "2023-11-29T10:16:55Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:16:55Z",
            outcomes: [
              {
                name: "Galatasaray",
                price: 2.63,
              },
              {
                name: "Manchester United",
                price: 2.55,
              },
              {
                name: "Draw",
                price: 3.75,
              },
            ],
          },
        ],
      },
      {
        key: "draftkings",
        title: "DraftKings",
        last_update: "2023-11-29T10:16:20Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:16:20Z",
            outcomes: [
              {
                name: "Galatasaray",
                price: 2.7,
              },
              {
                name: "Manchester United",
                price: 2.45,
              },
              {
                name: "Draw",
                price: 3.75,
              },
            ],
          },
        ],
      },
      {
        key: "williamhill_us",
        title: "Caesars",
        last_update: "2023-11-29T10:14:46Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:14:46Z",
            outcomes: [
              {
                name: "Galatasaray",
                price: 2.65,
              },
              {
                name: "Manchester United",
                price: 2.45,
              },
              {
                name: "Draw",
                price: 3.6,
              },
            ],
          },
        ],
      },
      {
        key: "betus",
        title: "BetUS",
        last_update: "2023-11-29T10:17:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:17:15Z",
            outcomes: [
              {
                name: "Galatasaray",
                price: 2.65,
              },
              {
                name: "Manchester United",
                price: 2.5,
              },
              {
                name: "Draw",
                price: 3.75,
              },
            ],
          },
        ],
      },
      {
        key: "superbook",
        title: "SuperBook",
        last_update: "2023-11-29T10:17:03Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:17:03Z",
            outcomes: [
              {
                name: "Galatasaray",
                price: 2.6,
              },
              {
                name: "Manchester United",
                price: 2.5,
              },
              {
                name: "Draw",
                price: 3.65,
              },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2023-11-29T10:17:14Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:17:14Z",
            outcomes: [
              {
                name: "Galatasaray",
                price: 2.75,
              },
              {
                name: "Manchester United",
                price: 2.48,
              },
              {
                name: "Draw",
                price: 3.73,
              },
            ],
          },
        ],
      },
      {
        key: "lowvig",
        title: "LowVig.ag",
        last_update: "2023-11-29T10:18:10Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:18:10Z",
            outcomes: [
              {
                name: "Galatasaray",
                price: 2.75,
              },
              {
                name: "Manchester United",
                price: 2.48,
              },
              {
                name: "Draw",
                price: 3.73,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "0729529fa4192c59e71a348738138b7b",
    sport_key: "soccer_uefa_champs_league",
    sport_title: "UEFA Champions League",
    commence_time: "2023-11-29T17:45:00Z",
    home_team: "Sevilla",
    away_team: "PSV Eindhoven",
    bookmakers: [
      {
        key: "fanduel",
        title: "FanDuel",
        last_update: "2023-11-29T10:15:40Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:15:40Z",
            outcomes: [
              {
                name: "PSV Eindhoven",
                price: 2.5,
              },
              {
                name: "Sevilla",
                price: 2.75,
              },
              {
                name: "Draw",
                price: 3.5,
              },
            ],
          },
        ],
      },
      {
        key: "bovada",
        title: "Bovada",
        last_update: "2023-11-29T10:16:38Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:16:38Z",
            outcomes: [
              {
                name: "PSV Eindhoven",
                price: 2.55,
              },
              {
                name: "Sevilla",
                price: 2.7,
              },
              {
                name: "Draw",
                price: 3.55,
              },
            ],
          },
        ],
      },
      {
        key: "pointsbetus",
        title: "PointsBet (US)",
        last_update: "2023-11-29T10:16:20Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:16:20Z",
            outcomes: [
              {
                name: "PSV Eindhoven",
                price: 2.5,
              },
              {
                name: "Sevilla",
                price: 2.65,
              },
              {
                name: "Draw",
                price: 3.5,
              },
            ],
          },
        ],
      },
      {
        key: "betrivers",
        title: "BetRivers",
        last_update: "2023-11-29T10:17:03Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:17:03Z",
            outcomes: [
              {
                name: "PSV Eindhoven",
                price: 2.55,
              },
              {
                name: "Sevilla",
                price: 2.75,
              },
              {
                name: "Draw",
                price: 3.55,
              },
            ],
          },
        ],
      },
      {
        key: "unibet_us",
        title: "Unibet",
        last_update: "2023-11-29T10:16:55Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:16:55Z",
            outcomes: [
              {
                name: "PSV Eindhoven",
                price: 2.55,
              },
              {
                name: "Sevilla",
                price: 2.75,
              },
              {
                name: "Draw",
                price: 3.55,
              },
            ],
          },
        ],
      },
      {
        key: "draftkings",
        title: "DraftKings",
        last_update: "2023-11-29T10:16:20Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:16:20Z",
            outcomes: [
              {
                name: "PSV Eindhoven",
                price: 2.55,
              },
              {
                name: "Sevilla",
                price: 2.8,
              },
              {
                name: "Draw",
                price: 3.5,
              },
            ],
          },
        ],
      },
      {
        key: "williamhill_us",
        title: "Caesars",
        last_update: "2023-11-29T10:14:46Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:14:46Z",
            outcomes: [
              {
                name: "PSV Eindhoven",
                price: 2.45,
              },
              {
                name: "Sevilla",
                price: 2.7,
              },
              {
                name: "Draw",
                price: 3.5,
              },
            ],
          },
        ],
      },
      {
        key: "betus",
        title: "BetUS",
        last_update: "2023-11-29T10:17:15Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:17:15Z",
            outcomes: [
              {
                name: "PSV Eindhoven",
                price: 2.53,
              },
              {
                name: "Sevilla",
                price: 2.77,
              },
              {
                name: "Draw",
                price: 3.58,
              },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2023-11-29T10:17:14Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:17:14Z",
            outcomes: [
              {
                name: "PSV Eindhoven",
                price: 2.53,
              },
              {
                name: "Sevilla",
                price: 2.77,
              },
              {
                name: "Draw",
                price: 3.58,
              },
            ],
          },
        ],
      },
      {
        key: "lowvig",
        title: "LowVig.ag",
        last_update: "2023-11-29T10:18:10Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:18:10Z",
            outcomes: [
              {
                name: "PSV Eindhoven",
                price: 2.53,
              },
              {
                name: "Sevilla",
                price: 2.77,
              },
              {
                name: "Draw",
                price: 3.58,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "3713102f7152f501713bb755a08fa4a4",
    sport_key: "soccer_germany_liga3",
    sport_title: "3. Liga - Germany",
    commence_time: "2023-11-29T18:00:00Z",
    home_team: "1. FC Saarbrücken",
    away_team: "MSV Duisburg",
    bookmakers: [
      {
        key: "bovada",
        title: "Bovada",
        last_update: "2023-11-29T10:16:35Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:16:35Z",
            outcomes: [
              {
                name: "1. FC Saarbrücken",
                price: 1.54,
              },
              {
                name: "MSV Duisburg",
                price: 5.4,
              },
              {
                name: "Draw",
                price: 4.1,
              },
            ],
          },
        ],
      },
      {
        key: "unibet_us",
        title: "Unibet",
        last_update: "2023-11-29T10:18:05Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:18:05Z",
            outcomes: [
              {
                name: "1. FC Saarbrücken",
                price: 1.49,
              },
              {
                name: "MSV Duisburg",
                price: 5.2,
              },
              {
                name: "Draw",
                price: 4.25,
              },
            ],
          },
        ],
      },
      {
        key: "lowvig",
        title: "LowVig.ag",
        last_update: "2023-11-29T10:18:12Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:18:12Z",
            outcomes: [
              {
                name: "1. FC Saarbrücken",
                price: 1.54,
              },
              {
                name: "MSV Duisburg",
                price: 5.4,
              },
              {
                name: "Draw",
                price: 4.05,
              },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2023-11-29T10:16:42Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:16:42Z",
            outcomes: [
              {
                name: "1. FC Saarbrücken",
                price: 1.54,
              },
              {
                name: "MSV Duisburg",
                price: 5.4,
              },
              {
                name: "Draw",
                price: 4.05,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "c2536a4274219509a951a184039427d4",
    sport_key: "icehockey_sweden_allsvenskan",
    sport_title: "HockeyAllsvenskan",
    commence_time: "2023-11-29T18:00:00Z",
    home_team: "Mora IK",
    away_team: "AIK",
    bookmakers: [
      {
        key: "unibet_us",
        title: "Unibet",
        last_update: "2023-11-29T10:17:09Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:17:09Z",
            outcomes: [
              {
                name: "AIK",
                price: 2.4,
              },
              {
                name: "Mora IK",
                price: 1.57,
              },
            ],
          },
        ],
      },
      {
        key: "bovada",
        title: "Bovada",
        last_update: "2023-11-29T10:17:59Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:17:59Z",
            outcomes: [
              {
                name: "AIK",
                price: 2.35,
              },
              {
                name: "Mora IK",
                price: 1.57,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "847f84ef133ea53fb15d627d81893928",
    sport_key: "icehockey_sweden_allsvenskan",
    sport_title: "HockeyAllsvenskan",
    commence_time: "2023-11-29T18:00:00Z",
    home_team: "Västerviks IK",
    away_team: "Almtuna IS",
    bookmakers: [
      {
        key: "unibet_us",
        title: "Unibet",
        last_update: "2023-11-29T10:17:09Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:17:09Z",
            outcomes: [
              {
                name: "Almtuna IS",
                price: 1.77,
              },
              {
                name: "Västerviks IK",
                price: 2.08,
              },
            ],
          },
        ],
      },
      {
        key: "bovada",
        title: "Bovada",
        last_update: "2023-11-29T10:17:59Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:17:59Z",
            outcomes: [
              {
                name: "Almtuna IS",
                price: 1.77,
              },
              {
                name: "Västerviks IK",
                price: 2.0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "ccc9daf8bb7ff6ab9ff13975f547aea3",
    sport_key: "icehockey_sweden_allsvenskan",
    sport_title: "HockeyAllsvenskan",
    commence_time: "2023-11-29T18:00:00Z",
    home_team: "BIK Karlskoga",
    away_team: "Kalmar HC",
    bookmakers: [
      {
        key: "unibet_us",
        title: "Unibet",
        last_update: "2023-11-29T10:17:09Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:17:09Z",
            outcomes: [
              {
                name: "BIK Karlskoga",
                price: 1.55,
              },
              {
                name: "Kalmar HC",
                price: 2.48,
              },
            ],
          },
        ],
      },
      {
        key: "bovada",
        title: "Bovada",
        last_update: "2023-11-29T10:17:59Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:17:59Z",
            outcomes: [
              {
                name: "BIK Karlskoga",
                price: 1.54,
              },
              {
                name: "Kalmar HC",
                price: 2.4,
              },
            ],
          },
        ],
      },
    ],
  },
];

export const champ = [
  {
    id: "fc1e263384945b5e705ddd7ac41fb48e",
    sport_key: "soccer_uefa_champs_league",
    sport_title: "UEFA Champions League",
    commence_time: "2023-11-29T17:45:00Z",
    home_team: "Galatasaray",
    away_team: "Manchester United",
    bookmakers: [
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2023-11-29T10:25:45Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:25:45Z",
            outcomes: [
              {
                name: "Galatasaray",
                price: 2.65,
              },
              {
                name: "Manchester United",
                price: 2.5,
              },
              {
                name: "Draw",
                price: 3.7,
              },
            ],
          },
        ],
      },
      {
        key: "betmgm",
        title: "BetMGM",
        last_update: "2023-11-29T10:26:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:29Z",
            outcomes: [
              {
                name: "Galatasaray",
                price: 2.65,
              },
              {
                name: "Manchester United",
                price: 2.5,
              },
              {
                name: "Draw",
                price: 3.6,
              },
            ],
          },
        ],
      },
      {
        key: "fanduel",
        title: "FanDuel",
        last_update: "2023-11-29T10:24:47Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:24:47Z",
            outcomes: [
              {
                name: "Galatasaray",
                price: 2.7,
              },
              {
                name: "Manchester United",
                price: 2.45,
              },
              {
                name: "Draw",
                price: 3.7,
              },
            ],
          },
        ],
      },
      {
        key: "bovada",
        title: "Bovada",
        last_update: "2023-11-29T10:26:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:51Z",
            outcomes: [
              {
                name: "Galatasaray",
                price: 2.6,
              },
              {
                name: "Manchester United",
                price: 2.5,
              },
              {
                name: "Draw",
                price: 3.75,
              },
            ],
          },
        ],
      },
      {
        key: "pointsbetus",
        title: "PointsBet (US)",
        last_update: "2023-11-29T10:26:32Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:32Z",
            outcomes: [
              {
                name: "Galatasaray",
                price: 2.6,
              },
              {
                name: "Manchester United",
                price: 2.45,
              },
              {
                name: "Draw",
                price: 3.6,
              },
            ],
          },
        ],
      },
      {
        key: "betrivers",
        title: "BetRivers",
        last_update: "2023-11-29T10:27:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:17Z",
            outcomes: [
              {
                name: "Galatasaray",
                price: 2.7,
              },
              {
                name: "Manchester United",
                price: 2.48,
              },
              {
                name: "Draw",
                price: 3.75,
              },
            ],
          },
        ],
      },
      {
        key: "unibet_us",
        title: "Unibet",
        last_update: "2023-11-29T10:27:10Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:10Z",
            outcomes: [
              {
                name: "Galatasaray",
                price: 2.7,
              },
              {
                name: "Manchester United",
                price: 2.48,
              },
              {
                name: "Draw",
                price: 3.75,
              },
            ],
          },
        ],
      },
      {
        key: "draftkings",
        title: "DraftKings",
        last_update: "2023-11-29T10:26:32Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:32Z",
            outcomes: [
              {
                name: "Galatasaray",
                price: 2.7,
              },
              {
                name: "Manchester United",
                price: 2.45,
              },
              {
                name: "Draw",
                price: 3.75,
              },
            ],
          },
        ],
      },
      {
        key: "williamhill_us",
        title: "Caesars",
        last_update: "2023-11-29T10:26:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:50Z",
            outcomes: [
              {
                name: "Galatasaray",
                price: 2.65,
              },
              {
                name: "Manchester United",
                price: 2.45,
              },
              {
                name: "Draw",
                price: 3.6,
              },
            ],
          },
        ],
      },
      {
        key: "betus",
        title: "BetUS",
        last_update: "2023-11-29T10:27:27Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:27Z",
            outcomes: [
              {
                name: "Galatasaray",
                price: 2.65,
              },
              {
                name: "Manchester United",
                price: 2.5,
              },
              {
                name: "Draw",
                price: 3.75,
              },
            ],
          },
        ],
      },
      {
        key: "superbook",
        title: "SuperBook",
        last_update: "2023-11-29T10:27:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:16Z",
            outcomes: [
              {
                name: "Galatasaray",
                price: 2.6,
              },
              {
                name: "Manchester United",
                price: 2.5,
              },
              {
                name: "Draw",
                price: 3.65,
              },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2023-11-29T10:27:27Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:27Z",
            outcomes: [
              {
                name: "Galatasaray",
                price: 2.75,
              },
              {
                name: "Manchester United",
                price: 2.48,
              },
              {
                name: "Draw",
                price: 3.73,
              },
            ],
          },
        ],
      },
      {
        key: "lowvig",
        title: "LowVig.ag",
        last_update: "2023-11-29T10:26:39Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:39Z",
            outcomes: [
              {
                name: "Galatasaray",
                price: 2.75,
              },
              {
                name: "Manchester United",
                price: 2.48,
              },
              {
                name: "Draw",
                price: 3.73,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "0729529fa4192c59e71a348738138b7b",
    sport_key: "soccer_uefa_champs_league",
    sport_title: "UEFA Champions League",
    commence_time: "2023-11-29T17:45:00Z",
    home_team: "Sevilla",
    away_team: "PSV Eindhoven",
    bookmakers: [
      {
        key: "fanduel",
        title: "FanDuel",
        last_update: "2023-11-29T10:24:47Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:24:47Z",
            outcomes: [
              {
                name: "PSV Eindhoven",
                price: 2.4,
              },
              {
                name: "Sevilla",
                price: 2.85,
              },
              {
                name: "Draw",
                price: 3.5,
              },
            ],
          },
        ],
      },
      {
        key: "bovada",
        title: "Bovada",
        last_update: "2023-11-29T10:26:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:51Z",
            outcomes: [
              {
                name: "PSV Eindhoven",
                price: 2.5,
              },
              {
                name: "Sevilla",
                price: 2.75,
              },
              {
                name: "Draw",
                price: 3.55,
              },
            ],
          },
        ],
      },
      {
        key: "pointsbetus",
        title: "PointsBet (US)",
        last_update: "2023-11-29T10:26:32Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:32Z",
            outcomes: [
              {
                name: "PSV Eindhoven",
                price: 2.4,
              },
              {
                name: "Sevilla",
                price: 2.75,
              },
              {
                name: "Draw",
                price: 3.5,
              },
            ],
          },
        ],
      },
      {
        key: "betrivers",
        title: "BetRivers",
        last_update: "2023-11-29T10:27:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:17Z",
            outcomes: [
              {
                name: "PSV Eindhoven",
                price: 2.55,
              },
              {
                name: "Sevilla",
                price: 2.75,
              },
              {
                name: "Draw",
                price: 3.55,
              },
            ],
          },
        ],
      },
      {
        key: "unibet_us",
        title: "Unibet",
        last_update: "2023-11-29T10:27:10Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:10Z",
            outcomes: [
              {
                name: "PSV Eindhoven",
                price: 2.55,
              },
              {
                name: "Sevilla",
                price: 2.75,
              },
              {
                name: "Draw",
                price: 3.55,
              },
            ],
          },
        ],
      },
      {
        key: "draftkings",
        title: "DraftKings",
        last_update: "2023-11-29T10:26:32Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:32Z",
            outcomes: [
              {
                name: "PSV Eindhoven",
                price: 2.45,
              },
              {
                name: "Sevilla",
                price: 2.85,
              },
              {
                name: "Draw",
                price: 3.5,
              },
            ],
          },
        ],
      },
      {
        key: "williamhill_us",
        title: "Caesars",
        last_update: "2023-11-29T10:26:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:50Z",
            outcomes: [
              {
                name: "PSV Eindhoven",
                price: 2.45,
              },
              {
                name: "Sevilla",
                price: 2.7,
              },
              {
                name: "Draw",
                price: 3.5,
              },
            ],
          },
        ],
      },
      {
        key: "betus",
        title: "BetUS",
        last_update: "2023-11-29T10:27:27Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:27Z",
            outcomes: [
              {
                name: "PSV Eindhoven",
                price: 2.53,
              },
              {
                name: "Sevilla",
                price: 2.77,
              },
              {
                name: "Draw",
                price: 3.58,
              },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2023-11-29T10:27:27Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:27Z",
            outcomes: [
              {
                name: "PSV Eindhoven",
                price: 2.53,
              },
              {
                name: "Sevilla",
                price: 2.77,
              },
              {
                name: "Draw",
                price: 3.58,
              },
            ],
          },
        ],
      },
      {
        key: "lowvig",
        title: "LowVig.ag",
        last_update: "2023-11-29T10:26:39Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:39Z",
            outcomes: [
              {
                name: "PSV Eindhoven",
                price: 2.53,
              },
              {
                name: "Sevilla",
                price: 2.77,
              },
              {
                name: "Draw",
                price: 3.58,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "061c9670cddc5cfcb2246455cb501c0c",
    sport_key: "soccer_uefa_champs_league",
    sport_title: "UEFA Champions League",
    commence_time: "2023-11-29T20:00:00Z",
    home_team: "Arsenal",
    away_team: "RC Lens",
    bookmakers: [
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2023-11-29T10:25:45Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:25:45Z",
            outcomes: [
              {
                name: "Arsenal",
                price: 1.4,
              },
              {
                name: "RC Lens",
                price: 7.75,
              },
              {
                name: "Draw",
                price: 4.75,
              },
            ],
          },
        ],
      },
      {
        key: "betmgm",
        title: "BetMGM",
        last_update: "2023-11-29T10:26:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:29Z",
            outcomes: [
              {
                name: "Arsenal",
                price: 1.4,
              },
              {
                name: "RC Lens",
                price: 8.0,
              },
              {
                name: "Draw",
                price: 4.8,
              },
            ],
          },
        ],
      },
      {
        key: "fanduel",
        title: "FanDuel",
        last_update: "2023-11-29T10:24:47Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:24:47Z",
            outcomes: [
              {
                name: "Arsenal",
                price: 1.37,
              },
              {
                name: "RC Lens",
                price: 8.0,
              },
              {
                name: "Draw",
                price: 5.0,
              },
            ],
          },
        ],
      },
      {
        key: "bovada",
        title: "Bovada",
        last_update: "2023-11-29T10:26:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:51Z",
            outcomes: [
              {
                name: "Arsenal",
                price: 1.4,
              },
              {
                name: "RC Lens",
                price: 7.5,
              },
              {
                name: "Draw",
                price: 4.9,
              },
            ],
          },
        ],
      },
      {
        key: "pointsbetus",
        title: "PointsBet (US)",
        last_update: "2023-11-29T10:26:32Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:32Z",
            outcomes: [
              {
                name: "Arsenal",
                price: 1.4,
              },
              {
                name: "RC Lens",
                price: 8.0,
              },
              {
                name: "Draw",
                price: 4.75,
              },
            ],
          },
        ],
      },
      {
        key: "betrivers",
        title: "BetRivers",
        last_update: "2023-11-29T10:27:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:17Z",
            outcomes: [
              {
                name: "Arsenal",
                price: 1.38,
              },
              {
                name: "RC Lens",
                price: 9.0,
              },
              {
                name: "Draw",
                price: 4.9,
              },
            ],
          },
        ],
      },
      {
        key: "unibet_us",
        title: "Unibet",
        last_update: "2023-11-29T10:27:10Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:10Z",
            outcomes: [
              {
                name: "Arsenal",
                price: 1.38,
              },
              {
                name: "RC Lens",
                price: 9.0,
              },
              {
                name: "Draw",
                price: 4.9,
              },
            ],
          },
        ],
      },
      {
        key: "draftkings",
        title: "DraftKings",
        last_update: "2023-11-29T10:26:32Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:32Z",
            outcomes: [
              {
                name: "Arsenal",
                price: 1.39,
              },
              {
                name: "RC Lens",
                price: 8.5,
              },
              {
                name: "Draw",
                price: 4.9,
              },
            ],
          },
        ],
      },
      {
        key: "williamhill_us",
        title: "Caesars",
        last_update: "2023-11-29T10:26:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:50Z",
            outcomes: [
              {
                name: "Arsenal",
                price: 1.38,
              },
              {
                name: "RC Lens",
                price: 8.5,
              },
              {
                name: "Draw",
                price: 4.6,
              },
            ],
          },
        ],
      },
      {
        key: "betus",
        title: "BetUS",
        last_update: "2023-11-29T10:27:27Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:27Z",
            outcomes: [
              {
                name: "Arsenal",
                price: 1.39,
              },
              {
                name: "RC Lens",
                price: 8.55,
              },
              {
                name: "Draw",
                price: 5.05,
              },
            ],
          },
        ],
      },
      {
        key: "superbook",
        title: "SuperBook",
        last_update: "2023-11-29T10:27:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:16Z",
            outcomes: [
              {
                name: "Arsenal",
                price: 1.39,
              },
              {
                name: "RC Lens",
                price: 7.5,
              },
              {
                name: "Draw",
                price: 4.8,
              },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2023-11-29T10:27:27Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:27Z",
            outcomes: [
              {
                name: "Arsenal",
                price: 1.39,
              },
              {
                name: "RC Lens",
                price: 8.55,
              },
              {
                name: "Draw",
                price: 5.05,
              },
            ],
          },
        ],
      },
      {
        key: "lowvig",
        title: "LowVig.ag",
        last_update: "2023-11-29T10:26:39Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:39Z",
            outcomes: [
              {
                name: "Arsenal",
                price: 1.39,
              },
              {
                name: "RC Lens",
                price: 8.55,
              },
              {
                name: "Draw",
                price: 5.05,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "19d0dc90cc1004c9c95a7c78931f814e",
    sport_key: "soccer_uefa_champs_league",
    sport_title: "UEFA Champions League",
    commence_time: "2023-11-29T20:00:00Z",
    home_team: "Bayern München",
    away_team: "FC Copenhagen",
    bookmakers: [
      {
        key: "bovada",
        title: "Bovada",
        last_update: "2023-11-29T10:26:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:51Z",
            outcomes: [
              {
                name: "Bayern München",
                price: 1.22,
              },
              {
                name: "FC Copenhagen",
                price: 11.0,
              },
              {
                name: "Draw",
                price: 7.0,
              },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2023-11-29T10:25:45Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:25:45Z",
            outcomes: [
              {
                name: "Bayern München",
                price: 1.21,
              },
              {
                name: "FC Copenhagen",
                price: 12.0,
              },
              {
                name: "Draw",
                price: 7.25,
              },
            ],
          },
        ],
      },
      {
        key: "betmgm",
        title: "BetMGM",
        last_update: "2023-11-29T10:26:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:29Z",
            outcomes: [
              {
                name: "Bayern München",
                price: 1.22,
              },
              {
                name: "FC Copenhagen",
                price: 11.5,
              },
              {
                name: "Draw",
                price: 7.0,
              },
            ],
          },
        ],
      },
      {
        key: "fanduel",
        title: "FanDuel",
        last_update: "2023-11-29T10:24:47Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:24:47Z",
            outcomes: [
              {
                name: "Bayern München",
                price: 1.2,
              },
              {
                name: "FC Copenhagen",
                price: 13.0,
              },
              {
                name: "Draw",
                price: 7.0,
              },
            ],
          },
        ],
      },
      {
        key: "pointsbetus",
        title: "PointsBet (US)",
        last_update: "2023-11-29T10:26:32Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:32Z",
            outcomes: [
              {
                name: "Bayern München",
                price: 1.2,
              },
              {
                name: "FC Copenhagen",
                price: 12.0,
              },
              {
                name: "Draw",
                price: 7.0,
              },
            ],
          },
        ],
      },
      {
        key: "betrivers",
        title: "BetRivers",
        last_update: "2023-11-29T10:27:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:17Z",
            outcomes: [
              {
                name: "Bayern München",
                price: 1.21,
              },
              {
                name: "FC Copenhagen",
                price: 14.0,
              },
              {
                name: "Draw",
                price: 7.0,
              },
            ],
          },
        ],
      },
      {
        key: "unibet_us",
        title: "Unibet",
        last_update: "2023-11-29T10:27:10Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:10Z",
            outcomes: [
              {
                name: "Bayern München",
                price: 1.21,
              },
              {
                name: "FC Copenhagen",
                price: 14.0,
              },
              {
                name: "Draw",
                price: 7.0,
              },
            ],
          },
        ],
      },
      {
        key: "draftkings",
        title: "DraftKings",
        last_update: "2023-11-29T10:26:32Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:32Z",
            outcomes: [
              {
                name: "Bayern München",
                price: 1.21,
              },
              {
                name: "FC Copenhagen",
                price: 12.0,
              },
              {
                name: "Draw",
                price: 7.5,
              },
            ],
          },
        ],
      },
      {
        key: "williamhill_us",
        title: "Caesars",
        last_update: "2023-11-29T10:26:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:50Z",
            outcomes: [
              {
                name: "Bayern München",
                price: 1.21,
              },
              {
                name: "FC Copenhagen",
                price: 12.0,
              },
              {
                name: "Draw",
                price: 6.5,
              },
            ],
          },
        ],
      },
      {
        key: "betus",
        title: "BetUS",
        last_update: "2023-11-29T10:27:27Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:27Z",
            outcomes: [
              {
                name: "Bayern München",
                price: 1.23,
              },
              {
                name: "FC Copenhagen",
                price: 12.75,
              },
              {
                name: "Draw",
                price: 7.05,
              },
            ],
          },
        ],
      },
      {
        key: "superbook",
        title: "SuperBook",
        last_update: "2023-11-29T10:27:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:16Z",
            outcomes: [
              {
                name: "Bayern München",
                price: 1.22,
              },
              {
                name: "FC Copenhagen",
                price: 11.0,
              },
              {
                name: "Draw",
                price: 6.75,
              },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2023-11-29T10:27:27Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:27Z",
            outcomes: [
              {
                name: "Bayern München",
                price: 1.23,
              },
              {
                name: "FC Copenhagen",
                price: 12.75,
              },
              {
                name: "Draw",
                price: 7.05,
              },
            ],
          },
        ],
      },
      {
        key: "lowvig",
        title: "LowVig.ag",
        last_update: "2023-11-29T10:26:39Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:39Z",
            outcomes: [
              {
                name: "Bayern München",
                price: 1.23,
              },
              {
                name: "FC Copenhagen",
                price: 12.75,
              },
              {
                name: "Draw",
                price: 7.05,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "17d576033bf8c4d5521933b444a0d97a",
    sport_key: "soccer_uefa_champs_league",
    sport_title: "UEFA Champions League",
    commence_time: "2023-11-29T20:00:00Z",
    home_team: "Benfica",
    away_team: "Internazionale Milano",
    bookmakers: [
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2023-11-29T10:25:45Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:25:45Z",
            outcomes: [
              {
                name: "Benfica",
                price: 2.5,
              },
              {
                name: "Internazionale Milano",
                price: 2.8,
              },
              {
                name: "Draw",
                price: 3.45,
              },
            ],
          },
        ],
      },
      {
        key: "betmgm",
        title: "BetMGM",
        last_update: "2023-11-29T10:26:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:29Z",
            outcomes: [
              {
                name: "Benfica",
                price: 2.5,
              },
              {
                name: "Internazionale Milano",
                price: 2.8,
              },
              {
                name: "Draw",
                price: 3.4,
              },
            ],
          },
        ],
      },
      {
        key: "fanduel",
        title: "FanDuel",
        last_update: "2023-11-29T10:24:47Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:24:47Z",
            outcomes: [
              {
                name: "Benfica",
                price: 2.5,
              },
              {
                name: "Internazionale Milano",
                price: 2.8,
              },
              {
                name: "Draw",
                price: 3.4,
              },
            ],
          },
        ],
      },
      {
        key: "bovada",
        title: "Bovada",
        last_update: "2023-11-29T10:26:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:51Z",
            outcomes: [
              {
                name: "Benfica",
                price: 2.55,
              },
              {
                name: "Internazionale Milano",
                price: 2.7,
              },
              {
                name: "Draw",
                price: 3.45,
              },
            ],
          },
        ],
      },
      {
        key: "pointsbetus",
        title: "PointsBet (US)",
        last_update: "2023-11-29T10:26:32Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:32Z",
            outcomes: [
              {
                name: "Benfica",
                price: 2.5,
              },
              {
                name: "Internazionale Milano",
                price: 2.85,
              },
              {
                name: "Draw",
                price: 3.3,
              },
            ],
          },
        ],
      },
      {
        key: "betrivers",
        title: "BetRivers",
        last_update: "2023-11-29T10:27:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:17Z",
            outcomes: [
              {
                name: "Benfica",
                price: 2.5,
              },
              {
                name: "Internazionale Milano",
                price: 2.85,
              },
              {
                name: "Draw",
                price: 3.4,
              },
            ],
          },
        ],
      },
      {
        key: "unibet_us",
        title: "Unibet",
        last_update: "2023-11-29T10:27:10Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:10Z",
            outcomes: [
              {
                name: "Benfica",
                price: 2.5,
              },
              {
                name: "Internazionale Milano",
                price: 2.85,
              },
              {
                name: "Draw",
                price: 3.4,
              },
            ],
          },
        ],
      },
      {
        key: "draftkings",
        title: "DraftKings",
        last_update: "2023-11-29T10:26:32Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:32Z",
            outcomes: [
              {
                name: "Benfica",
                price: 2.6,
              },
              {
                name: "Internazionale Milano",
                price: 2.85,
              },
              {
                name: "Draw",
                price: 3.25,
              },
            ],
          },
        ],
      },
      {
        key: "williamhill_us",
        title: "Caesars",
        last_update: "2023-11-29T10:26:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:50Z",
            outcomes: [
              {
                name: "Benfica",
                price: 2.5,
              },
              {
                name: "Internazionale Milano",
                price: 2.8,
              },
              {
                name: "Draw",
                price: 3.3,
              },
            ],
          },
        ],
      },
      {
        key: "betus",
        title: "BetUS",
        last_update: "2023-11-29T10:27:27Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:27Z",
            outcomes: [
              {
                name: "Benfica",
                price: 2.55,
              },
              {
                name: "Internazionale Milano",
                price: 2.7,
              },
              {
                name: "Draw",
                price: 3.45,
              },
            ],
          },
        ],
      },
      {
        key: "superbook",
        title: "SuperBook",
        last_update: "2023-11-29T10:27:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:16Z",
            outcomes: [
              {
                name: "Benfica",
                price: 2.55,
              },
              {
                name: "Internazionale Milano",
                price: 2.7,
              },
              {
                name: "Draw",
                price: 3.35,
              },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2023-11-29T10:27:27Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:27Z",
            outcomes: [
              {
                name: "Benfica",
                price: 2.55,
              },
              {
                name: "Internazionale Milano",
                price: 2.88,
              },
              {
                name: "Draw",
                price: 3.38,
              },
            ],
          },
        ],
      },
      {
        key: "lowvig",
        title: "LowVig.ag",
        last_update: "2023-11-29T10:26:39Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:39Z",
            outcomes: [
              {
                name: "Benfica",
                price: 2.55,
              },
              {
                name: "Internazionale Milano",
                price: 2.88,
              },
              {
                name: "Draw",
                price: 3.38,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "d35eb4749344e64e8e3d91905b19982d",
    sport_key: "soccer_uefa_champs_league",
    sport_title: "UEFA Champions League",
    commence_time: "2023-11-29T20:00:00Z",
    home_team: "Real Madrid",
    away_team: "Napoli",
    bookmakers: [
      {
        key: "betmgm",
        title: "BetMGM",
        last_update: "2023-11-29T10:26:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:29Z",
            outcomes: [
              {
                name: "Napoli",
                price: 3.9,
              },
              {
                name: "Real Madrid",
                price: 1.87,
              },
              {
                name: "Draw",
                price: 3.75,
              },
            ],
          },
        ],
      },
      {
        key: "bovada",
        title: "Bovada",
        last_update: "2023-11-29T10:26:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:51Z",
            outcomes: [
              {
                name: "Napoli",
                price: 3.85,
              },
              {
                name: "Real Madrid",
                price: 1.87,
              },
              {
                name: "Draw",
                price: 3.95,
              },
            ],
          },
        ],
      },
      {
        key: "fanduel",
        title: "FanDuel",
        last_update: "2023-11-29T10:24:47Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:24:47Z",
            outcomes: [
              {
                name: "Napoli",
                price: 3.9,
              },
              {
                name: "Real Madrid",
                price: 1.87,
              },
              {
                name: "Draw",
                price: 3.8,
              },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2023-11-29T10:25:45Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:25:45Z",
            outcomes: [
              {
                name: "Napoli",
                price: 4.0,
              },
              {
                name: "Real Madrid",
                price: 1.87,
              },
              {
                name: "Draw",
                price: 3.85,
              },
            ],
          },
        ],
      },
      {
        key: "pointsbetus",
        title: "PointsBet (US)",
        last_update: "2023-11-29T10:26:32Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:32Z",
            outcomes: [
              {
                name: "Napoli",
                price: 4.0,
              },
              {
                name: "Real Madrid",
                price: 1.87,
              },
              {
                name: "Draw",
                price: 3.8,
              },
            ],
          },
        ],
      },
      {
        key: "betrivers",
        title: "BetRivers",
        last_update: "2023-11-29T10:27:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:17Z",
            outcomes: [
              {
                name: "Napoli",
                price: 4.1,
              },
              {
                name: "Real Madrid",
                price: 1.87,
              },
              {
                name: "Draw",
                price: 3.85,
              },
            ],
          },
        ],
      },
      {
        key: "unibet_us",
        title: "Unibet",
        last_update: "2023-11-29T10:27:10Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:10Z",
            outcomes: [
              {
                name: "Napoli",
                price: 4.1,
              },
              {
                name: "Real Madrid",
                price: 1.87,
              },
              {
                name: "Draw",
                price: 3.85,
              },
            ],
          },
        ],
      },
      {
        key: "draftkings",
        title: "DraftKings",
        last_update: "2023-11-29T10:26:32Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:32Z",
            outcomes: [
              {
                name: "Napoli",
                price: 3.9,
              },
              {
                name: "Real Madrid",
                price: 1.91,
              },
              {
                name: "Draw",
                price: 3.9,
              },
            ],
          },
        ],
      },
      {
        key: "williamhill_us",
        title: "Caesars",
        last_update: "2023-11-29T10:26:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:50Z",
            outcomes: [
              {
                name: "Napoli",
                price: 4.0,
              },
              {
                name: "Real Madrid",
                price: 1.83,
              },
              {
                name: "Draw",
                price: 3.8,
              },
            ],
          },
        ],
      },
      {
        key: "betus",
        title: "BetUS",
        last_update: "2023-11-29T10:27:27Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:27Z",
            outcomes: [
              {
                name: "Napoli",
                price: 4.02,
              },
              {
                name: "Real Madrid",
                price: 1.89,
              },
              {
                name: "Draw",
                price: 3.87,
              },
            ],
          },
        ],
      },
      {
        key: "superbook",
        title: "SuperBook",
        last_update: "2023-11-29T10:27:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:16Z",
            outcomes: [
              {
                name: "Napoli",
                price: 3.8,
              },
              {
                name: "Real Madrid",
                price: 1.87,
              },
              {
                name: "Draw",
                price: 3.85,
              },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2023-11-29T10:27:27Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:27Z",
            outcomes: [
              {
                name: "Napoli",
                price: 4.02,
              },
              {
                name: "Real Madrid",
                price: 1.89,
              },
              {
                name: "Draw",
                price: 3.87,
              },
            ],
          },
        ],
      },
      {
        key: "lowvig",
        title: "LowVig.ag",
        last_update: "2023-11-29T10:26:39Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:39Z",
            outcomes: [
              {
                name: "Napoli",
                price: 4.02,
              },
              {
                name: "Real Madrid",
                price: 1.89,
              },
              {
                name: "Draw",
                price: 3.87,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "148dc9a6d1f35d46ffe818e9ac3318d6",
    sport_key: "soccer_uefa_champs_league",
    sport_title: "UEFA Champions League",
    commence_time: "2023-11-29T20:00:00Z",
    home_team: "Real Sociedad",
    away_team: "Salzburg",
    bookmakers: [
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2023-11-29T10:25:45Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:25:45Z",
            outcomes: [
              {
                name: "Real Sociedad",
                price: 1.49,
              },
              {
                name: "Salzburg",
                price: 6.5,
              },
              {
                name: "Draw",
                price: 4.5,
              },
            ],
          },
        ],
      },
      {
        key: "fanduel",
        title: "FanDuel",
        last_update: "2023-11-29T10:24:47Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:24:47Z",
            outcomes: [
              {
                name: "Real Sociedad",
                price: 1.48,
              },
              {
                name: "Salzburg",
                price: 7.0,
              },
              {
                name: "Draw",
                price: 4.5,
              },
            ],
          },
        ],
      },
      {
        key: "bovada",
        title: "Bovada",
        last_update: "2023-11-29T10:26:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:51Z",
            outcomes: [
              {
                name: "Real Sociedad",
                price: 1.48,
              },
              {
                name: "Salzburg",
                price: 6.25,
              },
              {
                name: "Draw",
                price: 4.6,
              },
            ],
          },
        ],
      },
      {
        key: "betmgm",
        title: "BetMGM",
        last_update: "2023-11-29T10:26:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:29Z",
            outcomes: [
              {
                name: "Real Sociedad",
                price: 1.48,
              },
              {
                name: "Salzburg",
                price: 6.5,
              },
              {
                name: "Draw",
                price: 4.4,
              },
            ],
          },
        ],
      },
      {
        key: "pointsbetus",
        title: "PointsBet (US)",
        last_update: "2023-11-29T10:26:32Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:32Z",
            outcomes: [
              {
                name: "Real Sociedad",
                price: 1.44,
              },
              {
                name: "Salzburg",
                price: 7.0,
              },
              {
                name: "Draw",
                price: 4.5,
              },
            ],
          },
        ],
      },
      {
        key: "betrivers",
        title: "BetRivers",
        last_update: "2023-11-29T10:27:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:17Z",
            outcomes: [
              {
                name: "Real Sociedad",
                price: 1.47,
              },
              {
                name: "Salzburg",
                price: 7.0,
              },
              {
                name: "Draw",
                price: 4.5,
              },
            ],
          },
        ],
      },
      {
        key: "unibet_us",
        title: "Unibet",
        last_update: "2023-11-29T10:27:10Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:10Z",
            outcomes: [
              {
                name: "Real Sociedad",
                price: 1.47,
              },
              {
                name: "Salzburg",
                price: 7.0,
              },
              {
                name: "Draw",
                price: 4.5,
              },
            ],
          },
        ],
      },
      {
        key: "draftkings",
        title: "DraftKings",
        last_update: "2023-11-29T10:26:32Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:32Z",
            outcomes: [
              {
                name: "Real Sociedad",
                price: 1.48,
              },
              {
                name: "Salzburg",
                price: 7.0,
              },
              {
                name: "Draw",
                price: 4.6,
              },
            ],
          },
        ],
      },
      {
        key: "williamhill_us",
        title: "Caesars",
        last_update: "2023-11-29T10:26:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:50Z",
            outcomes: [
              {
                name: "Real Sociedad",
                price: 1.48,
              },
              {
                name: "Salzburg",
                price: 7.0,
              },
              {
                name: "Draw",
                price: 4.2,
              },
            ],
          },
        ],
      },
      {
        key: "betus",
        title: "BetUS",
        last_update: "2023-11-29T10:27:27Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:27Z",
            outcomes: [
              {
                name: "Real Sociedad",
                price: 1.48,
              },
              {
                name: "Salzburg",
                price: 6.25,
              },
              {
                name: "Draw",
                price: 4.6,
              },
            ],
          },
        ],
      },
      {
        key: "superbook",
        title: "SuperBook",
        last_update: "2023-11-29T10:27:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:16Z",
            outcomes: [
              {
                name: "Real Sociedad",
                price: 1.48,
              },
              {
                name: "Salzburg",
                price: 6.5,
              },
              {
                name: "Draw",
                price: 4.4,
              },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2023-11-29T10:27:27Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:27Z",
            outcomes: [
              {
                name: "Real Sociedad",
                price: 1.5,
              },
              {
                name: "Salzburg",
                price: 6.9,
              },
              {
                name: "Draw",
                price: 4.52,
              },
            ],
          },
        ],
      },
      {
        key: "lowvig",
        title: "LowVig.ag",
        last_update: "2023-11-29T10:26:39Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:39Z",
            outcomes: [
              {
                name: "Real Sociedad",
                price: 1.5,
              },
              {
                name: "Salzburg",
                price: 6.9,
              },
              {
                name: "Draw",
                price: 4.52,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "b26c7ba193525f83e7a785d8daa08979",
    sport_key: "soccer_uefa_champs_league",
    sport_title: "UEFA Champions League",
    commence_time: "2023-11-29T20:00:00Z",
    home_team: "SC Braga",
    away_team: "Union Berlin",
    bookmakers: [
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2023-11-29T10:25:45Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:25:45Z",
            outcomes: [
              {
                name: "SC Braga",
                price: 2.1,
              },
              {
                name: "Union Berlin",
                price: 3.3,
              },
              {
                name: "Draw",
                price: 3.6,
              },
            ],
          },
        ],
      },
      {
        key: "betmgm",
        title: "BetMGM",
        last_update: "2023-11-29T10:26:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:29Z",
            outcomes: [
              {
                name: "SC Braga",
                price: 2.05,
              },
              {
                name: "Union Berlin",
                price: 3.4,
              },
              {
                name: "Draw",
                price: 3.6,
              },
            ],
          },
        ],
      },
      {
        key: "bovada",
        title: "Bovada",
        last_update: "2023-11-29T10:26:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:51Z",
            outcomes: [
              {
                name: "SC Braga",
                price: 2.1,
              },
              {
                name: "Union Berlin",
                price: 3.3,
              },
              {
                name: "Draw",
                price: 3.65,
              },
            ],
          },
        ],
      },
      {
        key: "fanduel",
        title: "FanDuel",
        last_update: "2023-11-29T10:24:47Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:24:47Z",
            outcomes: [
              {
                name: "SC Braga",
                price: 2.05,
              },
              {
                name: "Union Berlin",
                price: 3.4,
              },
              {
                name: "Draw",
                price: 3.6,
              },
            ],
          },
        ],
      },
      {
        key: "pointsbetus",
        title: "PointsBet (US)",
        last_update: "2023-11-29T10:26:32Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:32Z",
            outcomes: [
              {
                name: "SC Braga",
                price: 2.05,
              },
              {
                name: "Union Berlin",
                price: 3.4,
              },
              {
                name: "Draw",
                price: 3.6,
              },
            ],
          },
        ],
      },
      {
        key: "betrivers",
        title: "BetRivers",
        last_update: "2023-11-29T10:27:17Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:17Z",
            outcomes: [
              {
                name: "SC Braga",
                price: 2.07,
              },
              {
                name: "Union Berlin",
                price: 3.5,
              },
              {
                name: "Draw",
                price: 3.65,
              },
            ],
          },
        ],
      },
      {
        key: "unibet_us",
        title: "Unibet",
        last_update: "2023-11-29T10:27:10Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:10Z",
            outcomes: [
              {
                name: "SC Braga",
                price: 2.07,
              },
              {
                name: "Union Berlin",
                price: 3.5,
              },
              {
                name: "Draw",
                price: 3.65,
              },
            ],
          },
        ],
      },
      {
        key: "draftkings",
        title: "DraftKings",
        last_update: "2023-11-29T10:26:32Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:32Z",
            outcomes: [
              {
                name: "SC Braga",
                price: 2.1,
              },
              {
                name: "Union Berlin",
                price: 3.45,
              },
              {
                name: "Draw",
                price: 3.65,
              },
            ],
          },
        ],
      },
      {
        key: "williamhill_us",
        title: "Caesars",
        last_update: "2023-11-29T10:26:50Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:50Z",
            outcomes: [
              {
                name: "SC Braga",
                price: 2.05,
              },
              {
                name: "Union Berlin",
                price: 3.4,
              },
              {
                name: "Draw",
                price: 3.6,
              },
            ],
          },
        ],
      },
      {
        key: "betus",
        title: "BetUS",
        last_update: "2023-11-29T10:27:27Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:27Z",
            outcomes: [
              {
                name: "SC Braga",
                price: 2.1,
              },
              {
                name: "Union Berlin",
                price: 3.52,
              },
              {
                name: "Draw",
                price: 3.63,
              },
            ],
          },
        ],
      },
      {
        key: "superbook",
        title: "SuperBook",
        last_update: "2023-11-29T10:27:16Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:16Z",
            outcomes: [
              {
                name: "SC Braga",
                price: 2.1,
              },
              {
                name: "Union Berlin",
                price: 3.3,
              },
              {
                name: "Draw",
                price: 3.55,
              },
            ],
          },
        ],
      },
      {
        key: "betonlineag",
        title: "BetOnline.ag",
        last_update: "2023-11-29T10:27:27Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:27:27Z",
            outcomes: [
              {
                name: "SC Braga",
                price: 2.1,
              },
              {
                name: "Union Berlin",
                price: 3.52,
              },
              {
                name: "Draw",
                price: 3.63,
              },
            ],
          },
        ],
      },
      {
        key: "lowvig",
        title: "LowVig.ag",
        last_update: "2023-11-29T10:26:39Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:39Z",
            outcomes: [
              {
                name: "SC Braga",
                price: 2.1,
              },
              {
                name: "Union Berlin",
                price: 3.52,
              },
              {
                name: "Draw",
                price: 3.63,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "160f99271048cb5a8a7365c957b7cf37",
    sport_key: "soccer_uefa_champs_league",
    sport_title: "UEFA Champions League",
    commence_time: "2023-12-13T17:45:00Z",
    home_team: "Red Star Belgrade",
    away_team: "Manchester City",
    bookmakers: [
      {
        key: "fanduel",
        title: "FanDuel",
        last_update: "2023-11-29T10:24:47Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:24:47Z",
            outcomes: [
              {
                name: "Manchester City",
                price: 1.23,
              },
              {
                name: "Red Star Belgrade",
                price: 10.5,
              },
              {
                name: "Draw",
                price: 7.0,
              },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2023-11-29T10:25:45Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:25:45Z",
            outcomes: [
              {
                name: "Manchester City",
                price: 1.24,
              },
              {
                name: "Red Star Belgrade",
                price: 9.5,
              },
              {
                name: "Draw",
                price: 6.25,
              },
            ],
          },
        ],
      },
      {
        key: "pointsbetus",
        title: "PointsBet (US)",
        last_update: "2023-11-29T10:26:32Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:32Z",
            outcomes: [
              {
                name: "Manchester City",
                price: 1.25,
              },
              {
                name: "Red Star Belgrade",
                price: 10.0,
              },
              {
                name: "Draw",
                price: 6.5,
              },
            ],
          },
        ],
      },
      {
        key: "betmgm",
        title: "BetMGM",
        last_update: "2023-11-29T10:26:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:29Z",
            outcomes: [
              {
                name: "Manchester City",
                price: 1.25,
              },
              {
                name: "Red Star Belgrade",
                price: 10.5,
              },
              {
                name: "Draw",
                price: 6.75,
              },
            ],
          },
        ],
      },
      {
        key: "bovada",
        title: "Bovada",
        last_update: "2023-11-29T10:26:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:51Z",
            outcomes: [
              {
                name: "Manchester City",
                price: 1.25,
              },
              {
                name: "Red Star Belgrade",
                price: 9.5,
              },
              {
                name: "Draw",
                price: 6.75,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "11f08960aab23c2a7a5bc9bdd8e72e6f",
    sport_key: "soccer_uefa_champs_league",
    sport_title: "UEFA Champions League",
    commence_time: "2023-12-13T17:45:00Z",
    home_team: "RB Leipzig",
    away_team: "Young Boys",
    bookmakers: [
      {
        key: "fanduel",
        title: "FanDuel",
        last_update: "2023-11-29T10:24:47Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:24:47Z",
            outcomes: [
              {
                name: "RB Leipzig",
                price: 1.3,
              },
              {
                name: "Young Boys",
                price: 9.5,
              },
              {
                name: "Draw",
                price: 5.8,
              },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2023-11-29T10:25:45Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:25:45Z",
            outcomes: [
              {
                name: "RB Leipzig",
                price: 1.33,
              },
              {
                name: "Young Boys",
                price: 7.5,
              },
              {
                name: "Draw",
                price: 5.5,
              },
            ],
          },
        ],
      },
      {
        key: "pointsbetus",
        title: "PointsBet (US)",
        last_update: "2023-11-29T10:26:32Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:32Z",
            outcomes: [
              {
                name: "RB Leipzig",
                price: 1.29,
              },
              {
                name: "Young Boys",
                price: 9.0,
              },
              {
                name: "Draw",
                price: 5.75,
              },
            ],
          },
        ],
      },
      {
        key: "betmgm",
        title: "BetMGM",
        last_update: "2023-11-29T10:26:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:29Z",
            outcomes: [
              {
                name: "RB Leipzig",
                price: 1.33,
              },
              {
                name: "Young Boys",
                price: 7.5,
              },
              {
                name: "Draw",
                price: 5.75,
              },
            ],
          },
        ],
      },
      {
        key: "bovada",
        title: "Bovada",
        last_update: "2023-11-29T10:26:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:51Z",
            outcomes: [
              {
                name: "RB Leipzig",
                price: 1.33,
              },
              {
                name: "Young Boys",
                price: 7.5,
              },
              {
                name: "Draw",
                price: 5.75,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "8bf3ff426947dcd102cba5d4819d1929",
    sport_key: "soccer_uefa_champs_league",
    sport_title: "UEFA Champions League",
    commence_time: "2023-12-13T20:00:00Z",
    home_team: "Newcastle United",
    away_team: "AC Milan",
    bookmakers: [
      {
        key: "fanduel",
        title: "FanDuel",
        last_update: "2023-11-29T10:24:47Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:24:47Z",
            outcomes: [
              {
                name: "AC Milan",
                price: 4.7,
              },
              {
                name: "Newcastle United",
                price: 1.71,
              },
              {
                name: "Draw",
                price: 4.0,
              },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2023-11-29T10:25:45Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:25:45Z",
            outcomes: [
              {
                name: "AC Milan",
                price: 4.5,
              },
              {
                name: "Newcastle United",
                price: 1.71,
              },
              {
                name: "Draw",
                price: 3.85,
              },
            ],
          },
        ],
      },
      {
        key: "pointsbetus",
        title: "PointsBet (US)",
        last_update: "2023-11-29T10:26:32Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:32Z",
            outcomes: [
              {
                name: "AC Milan",
                price: 4.75,
              },
              {
                name: "Newcastle United",
                price: 1.71,
              },
              {
                name: "Draw",
                price: 3.8,
              },
            ],
          },
        ],
      },
      {
        key: "betmgm",
        title: "BetMGM",
        last_update: "2023-11-29T10:26:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:29Z",
            outcomes: [
              {
                name: "AC Milan",
                price: 4.6,
              },
              {
                name: "Newcastle United",
                price: 1.74,
              },
              {
                name: "Draw",
                price: 3.8,
              },
            ],
          },
        ],
      },
      {
        key: "bovada",
        title: "Bovada",
        last_update: "2023-11-29T10:26:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:51Z",
            outcomes: [
              {
                name: "AC Milan",
                price: 4.5,
              },
              {
                name: "Newcastle United",
                price: 1.74,
              },
              {
                name: "Draw",
                price: 3.95,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "91261c06b8669dff92ea7c43654502d3",
    sport_key: "soccer_uefa_champs_league",
    sport_title: "UEFA Champions League",
    commence_time: "2023-12-13T20:00:00Z",
    home_team: "Atlético Madrid",
    away_team: "SS Lazio",
    bookmakers: [
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2023-11-29T10:25:45Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:25:45Z",
            outcomes: [
              {
                name: "Atlético Madrid",
                price: 1.65,
              },
              {
                name: "SS Lazio",
                price: 5.0,
              },
              {
                name: "Draw",
                price: 3.85,
              },
            ],
          },
        ],
      },
      {
        key: "fanduel",
        title: "FanDuel",
        last_update: "2023-11-29T10:24:47Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:24:47Z",
            outcomes: [
              {
                name: "Atlético Madrid",
                price: 1.62,
              },
              {
                name: "SS Lazio",
                price: 5.6,
              },
              {
                name: "Draw",
                price: 4.0,
              },
            ],
          },
        ],
      },
      {
        key: "pointsbetus",
        title: "PointsBet (US)",
        last_update: "2023-11-29T10:26:32Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:32Z",
            outcomes: [
              {
                name: "Atlético Madrid",
                price: 1.59,
              },
              {
                name: "SS Lazio",
                price: 5.5,
              },
              {
                name: "Draw",
                price: 4.0,
              },
            ],
          },
        ],
      },
      {
        key: "betmgm",
        title: "BetMGM",
        last_update: "2023-11-29T10:26:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:29Z",
            outcomes: [
              {
                name: "Atlético Madrid",
                price: 1.62,
              },
              {
                name: "SS Lazio",
                price: 5.25,
              },
              {
                name: "Draw",
                price: 3.9,
              },
            ],
          },
        ],
      },
      {
        key: "bovada",
        title: "Bovada",
        last_update: "2023-11-29T10:26:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:51Z",
            outcomes: [
              {
                name: "Atlético Madrid",
                price: 1.67,
              },
              {
                name: "SS Lazio",
                price: 5.0,
              },
              {
                name: "Draw",
                price: 4.0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "f114d82eed37610b030518c282828ed9",
    sport_key: "soccer_uefa_champs_league",
    sport_title: "UEFA Champions League",
    commence_time: "2023-12-13T20:00:00Z",
    home_team: "Royal Antwerp FC",
    away_team: "Barcelona",
    bookmakers: [
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2023-11-29T10:25:45Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:25:45Z",
            outcomes: [
              {
                name: "Barcelona",
                price: 1.38,
              },
              {
                name: "Royal Antwerp FC",
                price: 6.75,
              },
              {
                name: "Draw",
                price: 5.0,
              },
            ],
          },
        ],
      },
      {
        key: "fanduel",
        title: "FanDuel",
        last_update: "2023-11-29T10:24:47Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:24:47Z",
            outcomes: [
              {
                name: "Barcelona",
                price: 1.4,
              },
              {
                name: "Royal Antwerp FC",
                price: 7.0,
              },
              {
                name: "Draw",
                price: 5.1,
              },
            ],
          },
        ],
      },
      {
        key: "pointsbetus",
        title: "PointsBet (US)",
        last_update: "2023-11-29T10:26:32Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:32Z",
            outcomes: [
              {
                name: "Barcelona",
                price: 1.42,
              },
              {
                name: "Royal Antwerp FC",
                price: 6.5,
              },
              {
                name: "Draw",
                price: 5.0,
              },
            ],
          },
        ],
      },
      {
        key: "betmgm",
        title: "BetMGM",
        last_update: "2023-11-29T10:26:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:29Z",
            outcomes: [
              {
                name: "Barcelona",
                price: 1.4,
              },
              {
                name: "Royal Antwerp FC",
                price: 6.75,
              },
              {
                name: "Draw",
                price: 5.0,
              },
            ],
          },
        ],
      },
      {
        key: "bovada",
        title: "Bovada",
        last_update: "2023-11-29T10:26:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:51Z",
            outcomes: [
              {
                name: "Barcelona",
                price: 1.38,
              },
              {
                name: "Royal Antwerp FC",
                price: 7.0,
              },
              {
                name: "Draw",
                price: 5.2,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "41fdfdce77ab7e87b65ed36a96e54741",
    sport_key: "soccer_uefa_champs_league",
    sport_title: "UEFA Champions League",
    commence_time: "2023-12-13T20:00:00Z",
    home_team: "Borussia Dortmund",
    away_team: "Paris Saint Germain",
    bookmakers: [
      {
        key: "fanduel",
        title: "FanDuel",
        last_update: "2023-11-29T10:24:47Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:24:47Z",
            outcomes: [
              {
                name: "Borussia Dortmund",
                price: 3.6,
              },
              {
                name: "Paris Saint Germain",
                price: 2.0,
              },
              {
                name: "Draw",
                price: 3.7,
              },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2023-11-29T10:25:45Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:25:45Z",
            outcomes: [
              {
                name: "Borussia Dortmund",
                price: 3.3,
              },
              {
                name: "Paris Saint Germain",
                price: 2.05,
              },
              {
                name: "Draw",
                price: 3.6,
              },
            ],
          },
        ],
      },
      {
        key: "pointsbetus",
        title: "PointsBet (US)",
        last_update: "2023-11-29T10:26:32Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:32Z",
            outcomes: [
              {
                name: "Borussia Dortmund",
                price: 3.5,
              },
              {
                name: "Paris Saint Germain",
                price: 1.93,
              },
              {
                name: "Draw",
                price: 4.0,
              },
            ],
          },
        ],
      },
      {
        key: "betmgm",
        title: "BetMGM",
        last_update: "2023-11-29T10:26:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:29Z",
            outcomes: [
              {
                name: "Borussia Dortmund",
                price: 3.4,
              },
              {
                name: "Paris Saint Germain",
                price: 2.0,
              },
              {
                name: "Draw",
                price: 3.7,
              },
            ],
          },
        ],
      },
      {
        key: "bovada",
        title: "Bovada",
        last_update: "2023-11-29T10:26:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:51Z",
            outcomes: [
              {
                name: "Borussia Dortmund",
                price: 3.3,
              },
              {
                name: "Paris Saint Germain",
                price: 2.1,
              },
              {
                name: "Draw",
                price: 3.75,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "985aa6593a77cb4b3ee6fff75270ae05",
    sport_key: "soccer_uefa_champs_league",
    sport_title: "UEFA Champions League",
    commence_time: "2023-12-13T20:00:00Z",
    home_team: "Celtic",
    away_team: "Feyenoord",
    bookmakers: [
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2023-11-29T10:25:45Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:25:45Z",
            outcomes: [
              {
                name: "Celtic",
                price: 2.5,
              },
              {
                name: "Feyenoord",
                price: 2.6,
              },
              {
                name: "Draw",
                price: 3.45,
              },
            ],
          },
        ],
      },
      {
        key: "fanduel",
        title: "FanDuel",
        last_update: "2023-11-29T10:24:47Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:24:47Z",
            outcomes: [
              {
                name: "Celtic",
                price: 2.55,
              },
              {
                name: "Feyenoord",
                price: 2.6,
              },
              {
                name: "Draw",
                price: 3.5,
              },
            ],
          },
        ],
      },
      {
        key: "pointsbetus",
        title: "PointsBet (US)",
        last_update: "2023-11-29T10:26:32Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:32Z",
            outcomes: [
              {
                name: "Celtic",
                price: 2.65,
              },
              {
                name: "Feyenoord",
                price: 2.4,
              },
              {
                name: "Draw",
                price: 3.6,
              },
            ],
          },
        ],
      },
      {
        key: "betmgm",
        title: "BetMGM",
        last_update: "2023-11-29T10:26:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:29Z",
            outcomes: [
              {
                name: "Celtic",
                price: 2.6,
              },
              {
                name: "Feyenoord",
                price: 2.55,
              },
              {
                name: "Draw",
                price: 3.5,
              },
            ],
          },
        ],
      },
      {
        key: "bovada",
        title: "Bovada",
        last_update: "2023-11-29T10:26:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:51Z",
            outcomes: [
              {
                name: "Celtic",
                price: 2.55,
              },
              {
                name: "Feyenoord",
                price: 2.65,
              },
              {
                name: "Draw",
                price: 3.55,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "e709825346160007c2969a212c6d5097",
    sport_key: "soccer_uefa_champs_league",
    sport_title: "UEFA Champions League",
    commence_time: "2023-12-13T20:00:00Z",
    home_team: "Porto",
    away_team: "Shakhtar Donetsk",
    bookmakers: [
      {
        key: "fanduel",
        title: "FanDuel",
        last_update: "2023-11-29T10:24:47Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:24:47Z",
            outcomes: [
              {
                name: "Porto",
                price: 1.53,
              },
              {
                name: "Shakhtar Donetsk",
                price: 6.0,
              },
              {
                name: "Draw",
                price: 4.3,
              },
            ],
          },
        ],
      },
      {
        key: "pointsbetus",
        title: "PointsBet (US)",
        last_update: "2023-11-29T10:26:32Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:32Z",
            outcomes: [
              {
                name: "Porto",
                price: 1.56,
              },
              {
                name: "Shakhtar Donetsk",
                price: 5.75,
              },
              {
                name: "Draw",
                price: 4.3,
              },
            ],
          },
        ],
      },
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2023-11-29T10:25:45Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:25:45Z",
            outcomes: [
              {
                name: "Porto",
                price: 1.5,
              },
              {
                name: "Shakhtar Donetsk",
                price: 5.75,
              },
              {
                name: "Draw",
                price: 4.25,
              },
            ],
          },
        ],
      },
      {
        key: "betmgm",
        title: "BetMGM",
        last_update: "2023-11-29T10:26:29Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:29Z",
            outcomes: [
              {
                name: "Porto",
                price: 1.53,
              },
              {
                name: "Shakhtar Donetsk",
                price: 6.0,
              },
              {
                name: "Draw",
                price: 4.33,
              },
            ],
          },
        ],
      },
      {
        key: "bovada",
        title: "Bovada",
        last_update: "2023-11-29T10:26:51Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-29T10:26:51Z",
            outcomes: [
              {
                name: "Porto",
                price: 1.53,
              },
              {
                name: "Shakhtar Donetsk",
                price: 5.75,
              },
              {
                name: "Draw",
                price: 4.5,
              },
            ],
          },
        ],
      },
    ],
  },
];

export const filteredData = {
  id: "fc1e263384945b5e705ddd7ac41fb48e",
  sport_key: "soccer_uefa_champs_league",
  sport_title: "UEFA Champions League",
  commence_time: "2023-11-29T17:45:00Z",
  home_team: "Galatasaray",
  away_team: "Manchester United",
  bookmakers: [
    {
      key: "sportsbet",
      title: "SportsBet",
      markets: [
        {
          key: "btts",
          last_update: "2023-11-29T11:53:16Z",
          outcomes: [
            {
              name: "Yes",
              price: 1.48,
            },
            {
              name: "No",
              price: 2.6,
            },
          ],
        },
      ],
    },
    {
      key: "betmgm",
      title: "BetMGM",
      markets: [
        {
          key: "btts",
          last_update: "2023-11-29T11:52:45Z",
          outcomes: [
            {
              name: "Yes",
              price: 1.48,
            },
            {
              name: "No",
              price: 2.4,
            },
          ],
        },
      ],
    },
    {
      key: "coolbet",
      title: "Coolbet",
      markets: [
        {
          key: "alternate_totals",
          last_update: "2023-11-29T11:53:07Z",
          outcomes: [
            {
              name: "Over",
              price: 1.93,
              point: 3.0,
            },
            {
              name: "Over",
              price: 4.4,
              point: 4.5,
            },
            {
              name: "Over",
              price: 1.19,
              point: 1.5,
            },
            {
              name: "Over",
              price: 3.65,
              point: 4.0,
            },
            {
              name: "Over",
              price: 8.3,
              point: 5.5,
            },
            {
              name: "Over",
              price: 2.44,
              point: 3.5,
            },
            {
              name: "Over",
              price: 7.6,
              point: 5.0,
            },
            {
              name: "Over",
              price: 1.59,
              point: 2.5,
            },
            {
              name: "Over",
              price: 1.26,
              point: 2.0,
            },
            {
              name: "Over",
              price: 1.03,
              point: 1.0,
            },
            {
              name: "Under",
              price: 1.92,
              point: 3.0,
            },
            {
              name: "Under",
              price: 1.23,
              point: 4.5,
            },
            {
              name: "Under",
              price: 5.1,
              point: 1.5,
            },
            {
              name: "Under",
              price: 1.31,
              point: 4.0,
            },
            {
              name: "Under",
              price: 1.09,
              point: 5.5,
            },
            {
              name: "Under",
              price: 1.58,
              point: 3.5,
            },
            {
              name: "Under",
              price: 1.1,
              point: 5.0,
            },
            {
              name: "Under",
              price: 2.44,
              point: 2.5,
            },
            {
              name: "Under",
              price: 4.05,
              point: 2.0,
            },
            {
              name: "Under",
              price: 13.5,
              point: 1.0,
            },
          ],
        },
      ],
    },
    {
      key: "onexbet",
      title: "1xBet",
      markets: [
        {
          key: "btts",
          last_update: "2023-11-29T11:54:27Z",
          outcomes: [
            {
              name: "Yes",
              price: 1.5,
            },
            {
              name: "No",
              price: 2.51,
            },
          ],
        },
      ],
    },
    {
      key: "tab",
      title: "TAB",
      markets: [
        {
          key: "btts",
          last_update: "2023-11-29T11:53:03Z",
          outcomes: [
            {
              name: "Yes",
              price: 1.5,
            },
            {
              name: "No",
              price: 2.5,
            },
          ],
        },
        {
          key: "alternate_spreads",
          last_update: "2023-11-29T11:53:03Z",
          outcomes: [
            {
              name: "Galatasaray",
              price: 1.58,
              point: 0.5,
            },
            {
              name: "Galatasaray",
              price: 1.25,
              point: 1.0,
            },
            {
              name: "Galatasaray",
              price: 2.7,
              point: -0.5,
            },
            {
              name: "Galatasaray",
              price: 4.5,
              point: -1.0,
            },
            {
              name: "Manchester United",
              price: 2.3,
              point: -0.5,
            },
            {
              name: "Manchester United",
              price: 3.8,
              point: -1.0,
            },
            {
              name: "Manchester United",
              price: 1.48,
              point: 0.5,
            },
            {
              name: "Manchester United",
              price: 1.2,
              point: 1.0,
            },
          ],
        },
        {
          key: "alternate_totals",
          last_update: "2023-11-29T11:53:03Z",
          outcomes: [
            {
              name: "Over",
              price: 1.02,
              point: 0.5,
            },
            {
              name: "Over",
              price: 1.18,
              point: 1.5,
            },
            {
              name: "Over",
              price: 1.55,
              point: 2.5,
            },
            {
              name: "Over",
              price: 2.4,
              point: 3.5,
            },
            {
              name: "Over",
              price: 4.2,
              point: 4.5,
            },
            {
              name: "Over",
              price: 7.5,
              point: 5.5,
            },
            {
              name: "Under",
              price: 11.0,
              point: 0.5,
            },
            {
              name: "Under",
              price: 4.5,
              point: 1.5,
            },
            {
              name: "Under",
              price: 2.35,
              point: 2.5,
            },
            {
              name: "Under",
              price: 1.52,
              point: 3.5,
            },
            {
              name: "Under",
              price: 1.2,
              point: 4.5,
            },
            {
              name: "Under",
              price: 1.07,
              point: 5.5,
            },
          ],
        },
      ],
    },
    {
      key: "pinnacle",
      title: "Pinnacle",
      markets: [
        {
          key: "alternate_spreads",
          last_update: "2023-11-29T11:54:28Z",
          outcomes: [
            {
              name: "Galatasaray",
              price: 4.6,
              point: -1.0,
            },
            {
              name: "Galatasaray",
              price: 3.37,
              point: -0.75,
            },
            {
              name: "Galatasaray",
              price: 2.77,
              point: -0.5,
            },
            {
              name: "Galatasaray",
              price: 2.41,
              point: -0.25,
            },
            {
              name: "Galatasaray",
              price: 1.76,
              point: 0.25,
            },
            {
              name: "Galatasaray",
              price: 1.6,
              point: 0.5,
            },
            {
              name: "Galatasaray",
              price: 1.44,
              point: 0.75,
            },
            {
              name: "Galatasaray",
              price: 1.29,
              point: 1.0,
            },
            {
              name: "Manchester United",
              price: 1.23,
              point: 1.0,
            },
            {
              name: "Manchester United",
              price: 1.37,
              point: 0.75,
            },
            {
              name: "Manchester United",
              price: 1.51,
              point: 0.5,
            },
            {
              name: "Manchester United",
              price: 1.64,
              point: 0.25,
            },
            {
              name: "Manchester United",
              price: 2.19,
              point: -0.25,
            },
            {
              name: "Manchester United",
              price: 2.51,
              point: -0.5,
            },
            {
              name: "Manchester United",
              price: 2.99,
              point: -0.75,
            },
            {
              name: "Manchester United",
              price: 3.96,
              point: -1.0,
            },
          ],
        },
        {
          key: "alternate_totals",
          last_update: "2023-11-29T11:54:28Z",
          outcomes: [
            {
              name: "Over",
              price: 2.01,
              point: 3.0,
            },
            {
              name: "Over",
              price: 1.27,
              point: 2.0,
            },
            {
              name: "Over",
              price: 1.45,
              point: 2.25,
            },
            {
              name: "Over",
              price: 1.64,
              point: 2.5,
            },
            {
              name: "Over",
              price: 1.78,
              point: 2.75,
            },
            {
              name: "Over",
              price: 2.27,
              point: 3.25,
            },
            {
              name: "Over",
              price: 2.53,
              point: 3.5,
            },
            {
              name: "Over",
              price: 2.95,
              point: 3.75,
            },
            {
              name: "Over",
              price: 3.7,
              point: 4.0,
            },
            {
              name: "Under",
              price: 1.9,
              point: 3.0,
            },
            {
              name: "Under",
              price: 4.04,
              point: 2.0,
            },
            {
              name: "Under",
              price: 2.9,
              point: 2.25,
            },
            {
              name: "Under",
              price: 2.4,
              point: 2.5,
            },
            {
              name: "Under",
              price: 2.14,
              point: 2.75,
            },
            {
              name: "Under",
              price: 1.7,
              point: 3.25,
            },
            {
              name: "Under",
              price: 1.58,
              point: 3.5,
            },
            {
              name: "Under",
              price: 1.44,
              point: 3.75,
            },
            {
              name: "Under",
              price: 1.31,
              point: 4.0,
            },
          ],
        },
      ],
    },
    {
      key: "suprabets",
      title: "Suprabets",
      markets: [
        {
          key: "alternate_spreads",
          last_update: "2023-11-29T11:53:42Z",
          outcomes: [
            {
              name: "Galatasaray",
              price: 13.5,
              point: -2.25,
            },
            {
              name: "Galatasaray",
              price: 1.05,
              point: 2.75,
            },
            {
              name: "Galatasaray",
              price: 1.08,
              point: 2.25,
            },
            {
              name: "Galatasaray",
              price: 2.72,
              point: -0.5,
            },
            {
              name: "Galatasaray",
              price: 1.62,
              point: 0.5,
            },
            {
              name: "Galatasaray",
              price: 7.7,
              point: -1.75,
            },
            {
              name: "Galatasaray",
              price: 5.2,
              point: -1.25,
            },
            {
              name: "Galatasaray",
              price: 3.3,
              point: -0.75,
            },
            {
              name: "Galatasaray",
              price: 2.38,
              point: -0.25,
            },
            {
              name: "Galatasaray",
              price: 11.5,
              point: -2.0,
            },
            {
              name: "Galatasaray",
              price: 5.6,
              point: -1.5,
            },
            {
              name: "Galatasaray",
              price: 4.7,
              point: -1.0,
            },
            {
              name: "Galatasaray",
              price: 1.15,
              point: 1.75,
            },
            {
              name: "Galatasaray",
              price: 1.25,
              point: 1.25,
            },
            {
              name: "Galatasaray",
              price: 1.43,
              point: 0.75,
            },
            {
              name: "Galatasaray",
              price: 1.08,
              point: 2.5,
            },
            {
              name: "Galatasaray",
              price: 1.09,
              point: 2.0,
            },
            {
              name: "Galatasaray",
              price: 1.22,
              point: 1.5,
            },
            {
              name: "Galatasaray",
              price: 1.29,
              point: 1.0,
            },
            {
              name: "Galatasaray",
              price: 1.78,
              point: 0.25,
            },
            {
              name: "Galatasaray",
              price: 13.5,
              point: -2.5,
            },
            {
              name: "Manchester United",
              price: 1.06,
              point: 2.25,
            },
            {
              name: "Manchester United",
              price: 15.0,
              point: -2.75,
            },
            {
              name: "Manchester United",
              price: 10.5,
              point: -2.25,
            },
            {
              name: "Manchester United",
              price: 1.5,
              point: 0.5,
            },
            {
              name: "Manchester United",
              price: 2.45,
              point: -0.5,
            },
            {
              name: "Manchester United",
              price: 1.12,
              point: 1.75,
            },
            {
              name: "Manchester United",
              price: 1.2,
              point: 1.25,
            },
            {
              name: "Manchester United",
              price: 1.37,
              point: 0.75,
            },
            {
              name: "Manchester United",
              price: 1.65,
              point: 0.25,
            },
            {
              name: "Manchester United",
              price: 1.07,
              point: 2.0,
            },
            {
              name: "Manchester United",
              price: 1.18,
              point: 1.5,
            },
            {
              name: "Manchester United",
              price: 1.23,
              point: 1.0,
            },
            {
              name: "Manchester United",
              price: 6.5,
              point: -1.75,
            },
            {
              name: "Manchester United",
              price: 4.4,
              point: -1.25,
            },
            {
              name: "Manchester United",
              price: 2.95,
              point: -0.75,
            },
            {
              name: "Manchester United",
              price: 10.5,
              point: -2.5,
            },
            {
              name: "Manchester United",
              price: 9.5,
              point: -2.0,
            },
            {
              name: "Manchester United",
              price: 4.85,
              point: -1.5,
            },
            {
              name: "Manchester United",
              price: 3.95,
              point: -1.0,
            },
            {
              name: "Manchester United",
              price: 2.17,
              point: -0.25,
            },
            {
              name: "Manchester United",
              price: 1.06,
              point: 2.5,
            },
          ],
        },
        {
          key: "alternate_totals",
          last_update: "2023-11-29T11:53:42Z",
          outcomes: [
            {
              name: "Over",
              price: 13.5,
              point: 5.75,
            },
            {
              name: "Over",
              price: 9.0,
              point: 5.25,
            },
            {
              name: "Over",
              price: 5.9,
              point: 4.75,
            },
            {
              name: "Over",
              price: 4.15,
              point: 4.25,
            },
            {
              name: "Over",
              price: 2.95,
              point: 3.75,
            },
            {
              name: "Over",
              price: 2.27,
              point: 3.25,
            },
            {
              name: "Over",
              price: 1.45,
              point: 2.25,
            },
            {
              name: "Over",
              price: 1.24,
              point: 1.75,
            },
            {
              name: "Over",
              price: 1.13,
              point: 1.25,
            },
            {
              name: "Over",
              price: 9.5,
              point: 5.5,
            },
            {
              name: "Over",
              price: 8.4,
              point: 5.0,
            },
            {
              name: "Over",
              price: 4.6,
              point: 4.5,
            },
            {
              name: "Over",
              price: 3.85,
              point: 4.0,
            },
            {
              name: "Over",
              price: 2.54,
              point: 3.5,
            },
            {
              name: "Over",
              price: 2.02,
              point: 3.0,
            },
            {
              name: "Over",
              price: 1.55,
              point: 2.5,
            },
            {
              name: "Over",
              price: 1.28,
              point: 2.0,
            },
            {
              name: "Over",
              price: 1.2,
              point: 1.5,
            },
            {
              name: "Over",
              price: 1.03,
              point: 1.0,
            },
            {
              name: "Over",
              price: 1.69,
              point: 2.75,
            },
            {
              name: "Under",
              price: 1.06,
              point: 5.75,
            },
            {
              name: "Under",
              price: 1.1,
              point: 5.25,
            },
            {
              name: "Under",
              price: 1.17,
              point: 4.75,
            },
            {
              name: "Under",
              price: 1.27,
              point: 4.25,
            },
            {
              name: "Under",
              price: 1.43,
              point: 3.75,
            },
            {
              name: "Under",
              price: 1.71,
              point: 3.25,
            },
            {
              name: "Under",
              price: 2.9,
              point: 2.25,
            },
            {
              name: "Under",
              price: 4.6,
              point: 1.75,
            },
            {
              name: "Under",
              price: 7.3,
              point: 1.25,
            },
            {
              name: "Under",
              price: 1.06,
              point: 5.5,
            },
            {
              name: "Under",
              price: 1.08,
              point: 5.0,
            },
            {
              name: "Under",
              price: 1.24,
              point: 4.5,
            },
            {
              name: "Under",
              price: 1.3,
              point: 4.0,
            },
            {
              name: "Under",
              price: 1.57,
              point: 3.5,
            },
            {
              name: "Under",
              price: 1.92,
              point: 3.0,
            },
            {
              name: "Under",
              price: 2.3,
              point: 2.5,
            },
            {
              name: "Under",
              price: 4.05,
              point: 2.0,
            },
            {
              name: "Under",
              price: 5.2,
              point: 1.5,
            },
            {
              name: "Under",
              price: 18.0,
              point: 1.0,
            },
            {
              name: "Under",
              price: 2.04,
              point: 2.75,
            },
          ],
        },
      ],
    },
    {
      key: "williamhill",
      title: "William Hill",
      markets: [
        {
          key: "btts",
          last_update: "2023-11-29T11:53:20Z",
          outcomes: [
            {
              name: "Yes",
              price: 1.5,
            },
            {
              name: "No",
              price: 2.5,
            },
          ],
        },
        {
          key: "alternate_totals",
          last_update: "2023-11-29T11:53:20Z",
          outcomes: [
            {
              name: "Over",
              price: 1.57,
              point: 2.5,
            },
            {
              name: "Over",
              price: 1.17,
              point: 1.5,
            },
            {
              name: "Under",
              price: 2.3,
              point: 2.5,
            },
            {
              name: "Under",
              price: 4.5,
              point: 1.5,
            },
          ],
        },
      ],
    },
    {
      key: "virginbet",
      title: "Virgin Bet",
      markets: [
        {
          key: "btts",
          last_update: "2023-11-29T11:52:55Z",
          outcomes: [
            {
              name: "Yes",
              price: 1.48,
            },
            {
              name: "No",
              price: 2.55,
            },
          ],
        },
        {
          key: "alternate_totals",
          last_update: "2023-11-29T11:52:55Z",
          outcomes: [
            {
              name: "Over",
              price: 1.15,
              point: 1.5,
            },
            {
              name: "Over",
              price: 1.53,
              point: 2.5,
            },
            {
              name: "Over",
              price: 2.38,
              point: 3.5,
            },
            {
              name: "Over",
              price: 4.0,
              point: 4.5,
            },
            {
              name: "Over",
              price: 1.0,
              point: 0.5,
            },
            {
              name: "Over",
              price: 7.0,
              point: 5.5,
            },
            {
              name: "Over",
              price: 13.0,
              point: 6.5,
            },
            {
              name: "Over",
              price: 19.0,
              point: 7.5,
            },
            {
              name: "Under",
              price: 4.8,
              point: 1.5,
            },
            {
              name: "Under",
              price: 2.38,
              point: 2.5,
            },
            {
              name: "Under",
              price: 1.55,
              point: 3.5,
            },
            {
              name: "Under",
              price: 1.2,
              point: 4.5,
            },
            {
              name: "Under",
              price: 15.0,
              point: 0.5,
            },
            {
              name: "Under",
              price: 1.07,
              point: 5.5,
            },
            {
              name: "Under",
              price: 1.0,
              point: 6.5,
            },
            {
              name: "Under",
              price: 1.0,
              point: 7.5,
            },
          ],
        },
      ],
    },
    {
      key: "livescorebet_eu",
      title: "LiveScore Bet (EU)",
      markets: [
        {
          key: "btts",
          last_update: "2023-11-29T11:53:23Z",
          outcomes: [
            {
              name: "Yes",
              price: 1.47,
            },
            {
              name: "No",
              price: 2.55,
            },
          ],
        },
        {
          key: "alternate_totals",
          last_update: "2023-11-29T11:53:23Z",
          outcomes: [
            {
              name: "Over",
              price: 1.15,
              point: 1.5,
            },
            {
              name: "Over",
              price: 1.52,
              point: 2.5,
            },
            {
              name: "Over",
              price: 2.35,
              point: 3.5,
            },
            {
              name: "Over",
              price: 3.95,
              point: 4.5,
            },
            {
              name: "Over",
              price: 1.0,
              point: 0.5,
            },
            {
              name: "Over",
              price: 6.75,
              point: 5.5,
            },
            {
              name: "Over",
              price: 12.0,
              point: 6.5,
            },
            {
              name: "Over",
              price: 17.0,
              point: 7.5,
            },
            {
              name: "Under",
              price: 4.75,
              point: 1.5,
            },
            {
              name: "Under",
              price: 2.35,
              point: 2.5,
            },
            {
              name: "Under",
              price: 1.53,
              point: 3.5,
            },
            {
              name: "Under",
              price: 1.2,
              point: 4.5,
            },
            {
              name: "Under",
              price: 15.0,
              point: 0.5,
            },
            {
              name: "Under",
              price: 1.07,
              point: 5.5,
            },
            {
              name: "Under",
              price: 1.0,
              point: 6.5,
            },
            {
              name: "Under",
              price: 1.0,
              point: 7.5,
            },
          ],
        },
      ],
    },
    {
      key: "livescorebet",
      title: "LiveScore Bet",
      markets: [
        {
          key: "btts",
          last_update: "2023-11-29T11:53:23Z",
          outcomes: [
            {
              name: "Yes",
              price: 1.48,
            },
            {
              name: "No",
              price: 2.55,
            },
          ],
        },
        {
          key: "alternate_totals",
          last_update: "2023-11-29T11:53:23Z",
          outcomes: [
            {
              name: "Over",
              price: 1.14,
              point: 1.5,
            },
            {
              name: "Over",
              price: 1.53,
              point: 2.5,
            },
            {
              name: "Over",
              price: 2.3,
              point: 3.5,
            },
            {
              name: "Over",
              price: 4.0,
              point: 4.5,
            },
            {
              name: "Over",
              price: 1.0,
              point: 0.5,
            },
            {
              name: "Over",
              price: 6.5,
              point: 5.5,
            },
            {
              name: "Over",
              price: 12.0,
              point: 6.5,
            },
            {
              name: "Over",
              price: 17.0,
              point: 7.5,
            },
            {
              name: "Under",
              price: 4.75,
              point: 1.5,
            },
            {
              name: "Under",
              price: 2.3,
              point: 2.5,
            },
            {
              name: "Under",
              price: 1.53,
              point: 3.5,
            },
            {
              name: "Under",
              price: 1.2,
              point: 4.5,
            },
            {
              name: "Under",
              price: 15.0,
              point: 0.5,
            },
            {
              name: "Under",
              price: 1.06,
              point: 5.5,
            },
            {
              name: "Under",
              price: 1.0,
              point: 6.5,
            },
            {
              name: "Under",
              price: 1.0,
              point: 7.5,
            },
          ],
        },
      ],
    },
    {
      key: "williamhill_us",
      title: "Caesars",
      markets: [
        {
          key: "btts",
          last_update: "2023-11-29T11:52:00Z",
          outcomes: [
            {
              name: "Yes",
              price: 1.5,
            },
            {
              name: "No",
              price: 2.5,
            },
          ],
        },
      ],
    },
    {
      key: "coral",
      title: "Coral",
      markets: [
        {
          key: "btts",
          last_update: "2023-11-29T11:53:12Z",
          outcomes: [
            {
              name: "Yes",
              price: 1.5,
            },
            {
              name: "No",
              price: 2.5,
            },
          ],
        },
        {
          key: "alternate_totals",
          last_update: "2023-11-29T11:53:12Z",
          outcomes: [
            {
              name: "Over",
              price: 1.03,
              point: 0.5,
            },
            {
              name: "Over",
              price: 1.18,
              point: 1.5,
            },
            {
              name: "Over",
              price: 1.57,
              point: 2.5,
            },
            {
              name: "Over",
              price: 2.4,
              point: 3.5,
            },
            {
              name: "Over",
              price: 4.2,
              point: 4.5,
            },
            {
              name: "Over",
              price: 8.0,
              point: 5.5,
            },
            {
              name: "Over",
              price: 19.0,
              point: 6.5,
            },
            {
              name: "Over",
              price: 46.0,
              point: 7.5,
            },
            {
              name: "Over",
              price: 101.0,
              point: 8.5,
            },
            {
              name: "Under",
              price: 15.0,
              point: 0.5,
            },
            {
              name: "Under",
              price: 4.6,
              point: 1.5,
            },
            {
              name: "Under",
              price: 2.25,
              point: 2.5,
            },
            {
              name: "Under",
              price: 1.5,
              point: 3.5,
            },
            {
              name: "Under",
              price: 1.2,
              point: 4.5,
            },
            {
              name: "Under",
              price: 1.07,
              point: 5.5,
            },
            {
              name: "Under",
              price: 1.03,
              point: 6.5,
            },
            {
              name: "Under",
              price: 1.01,
              point: 7.5,
            },
            {
              name: "Under",
              price: 1.0,
              point: 8.5,
            },
          ],
        },
      ],
    },
    {
      key: "ladbrokes_uk",
      title: "Ladbrokes",
      markets: [
        {
          key: "btts",
          last_update: "2023-11-29T11:53:12Z",
          outcomes: [
            {
              name: "Yes",
              price: 1.5,
            },
            {
              name: "No",
              price: 2.5,
            },
          ],
        },
        {
          key: "alternate_totals",
          last_update: "2023-11-29T11:53:12Z",
          outcomes: [
            {
              name: "Over",
              price: 1.03,
              point: 0.5,
            },
            {
              name: "Over",
              price: 1.18,
              point: 1.5,
            },
            {
              name: "Over",
              price: 1.57,
              point: 2.5,
            },
            {
              name: "Over",
              price: 2.4,
              point: 3.5,
            },
            {
              name: "Over",
              price: 4.2,
              point: 4.5,
            },
            {
              name: "Over",
              price: 8.0,
              point: 5.5,
            },
            {
              name: "Over",
              price: 19.0,
              point: 6.5,
            },
            {
              name: "Over",
              price: 46.0,
              point: 7.5,
            },
            {
              name: "Over",
              price: 101.0,
              point: 8.5,
            },
            {
              name: "Under",
              price: 15.0,
              point: 0.5,
            },
            {
              name: "Under",
              price: 4.6,
              point: 1.5,
            },
            {
              name: "Under",
              price: 2.25,
              point: 2.5,
            },
            {
              name: "Under",
              price: 1.5,
              point: 3.5,
            },
            {
              name: "Under",
              price: 1.2,
              point: 4.5,
            },
            {
              name: "Under",
              price: 1.07,
              point: 5.5,
            },
            {
              name: "Under",
              price: 1.03,
              point: 6.5,
            },
            {
              name: "Under",
              price: 1.01,
              point: 7.5,
            },
            {
              name: "Under",
              price: 1.0,
              point: 8.5,
            },
          ],
        },
      ],
    },
  ],
};
