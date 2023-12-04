export const api_key = `374ec93fae94937f2d3a89913136eedd`;
export const api_url = `https://api.the-odds-api.com/v4/sports`;
// ("https://api.the-odds-api.com/v4/sports/upcoming/odds/?regions=us&markets=h2h&apiKey=4bee65d9276d270a2ae1ef8edc90b205");

const request = {
  // User Api
  getCurrentUser:
    "https://api.maverickhabesha.com/api/v1/auth/get-current-user",
  getUserBalance: "https://api.maverickhabesha.com/api/v1/balance/get-balance",

  // Betting Api
  Upcoming: `${api_url}/upcoming/odds/?regions=us&markets=h2h&oddsFormat=decimal&apiKey=${api_key}`,

  // Upcoming: `${api_url}/sports?apiKey=${api_key}`,
};

export default request;

[
  {
    id: "bfadd52d01868e303a95a1772a657916",
    sport_key: "soccer_turkey_super_league",
    sport_title: "Turkey Super League",
    commence_time: "2023-11-27T17:00:00Z",
    home_team: "Basaksehir",
    away_team: "Pendikspor",
    bookmakers: [
      {
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2023-11-27T10:47:02Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-27T10:47:02Z",
            outcomes: [
              {
                name: "Basaksehir",
                price: 1.8,
              },
              {
                name: "Pendikspor",
                price: 4.4,
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
        last_update: "2023-11-27T10:45:54Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-27T10:45:54Z",
            outcomes: [
              {
                name: "Basaksehir",
                price: 1.8,
              },
              {
                name: "Pendikspor",
                price: 4.3,
              },
              {
                name: "Draw",
                price: 3.7,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "d25213be89ddf3c8a00f3cd8ed7ee943",
    sport_key: "soccer_turkey_super_league",
    sport_title: "Turkey Super League",
    commence_time: "2023-11-27T17:00:00Z",
    home_team: "Sivasspor",
    away_team: "Trabzonspor",
    bookmakers: [
      {
        key: "bovada",
        title: "Bovada",
        last_update: "2023-11-27T10:45:45Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-27T10:45:45Z",
            outcomes: [
              {
                name: "Sivasspor",
                price: 2.9,
              },
              {
                name: "Trabzonspor",
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
        key: "mybookieag",
        title: "MyBookie.ag",
        last_update: "2023-11-27T10:47:02Z",
        markets: [
          {
            key: "h2h",
            last_update: "2023-11-27T10:47:02Z",
            outcomes: [
              {
                name: "Sivasspor",
                price: 2.95,
              },
              {
                name: "Trabzonspor",
                price: 2.32,
              },
              {
                name: "Draw",
                price: 3.4,
              },
            ],
          },
        ],
      },
    ],
  },
];
