// New Api Keys
export const api_key_btts = "10f3043329ed5c0b6cb28bc51611d655";
export const api_key_h2h = "64e9726a47828a362ef98e7958fbc038";
export const api_key_alternate_spreads = "69a60c8ec2e7fd8ce0b6b0297b045625";
export const api_key_alternate_totals = "d507c30414a2a08c3c06232656d4f256";
export const api_key_draw_no_bet = "ea0dea85dc4d0b86913fa5b4c8e0b114";
export const api_key_double_chance = "f21898ece3b2e202233fd31648189f89";
export const api_key_halftime_fulltime = "7e59186032c667266ddf88a15b9ce6f2";
export const api_key_goal_score = "7944748b04376250c9cfb296ba57c484";
export const api_key_upcoming = "587502f59a87bcbb19973dc387c08c54";
export const api_key_sports = "25728a54910c5eea5d8d85bcfd5b0745";

export const api_key = `374ec93fae94937f2d3a89913136eedd`;
export const api_url = `https://api.the-odds-api.com/v4/sports`;
// ("https://api.the-odds-api.com/v4/sports/upcoming/odds/?regions=us&markets=h2h&apiKey=4bee65d9276d270a2ae1ef8edc90b205");

const request = {
  // User Api
  getCurrentUser:
    "https://api.maverickhabesha.com/api/v1/auth/get-current-user",
  getUserBalance: "https://api.maverickhabesha.com/api/v1/balance/get-balance",

  // Betting Api
  upcoming: `${api_url}/upcoming/odds/?regions=us&markets=h2h&oddsFormat=decimal&apiKey=${api_key}`,
  // odds: `${api_url}/${sport}/events/${id}/odds?regions=us,uk,us2,eu,au&markets=alternate_totals,alternate_spreads,btts&oddsFormat=decimal&apiKey=${api_key}`,
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
