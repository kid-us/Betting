// Default View
const api_key_upcoming = "a3ba56b3e6d90020db675eabec7833ab";
const api_key_sports = "5742d1d034b9f81e6773a464e76ef1be";
// More Odds
const api_key_h2h = "64d490df04d29443d3274b5303dc3477";
const api_key_btts = "f1ae8e96ffcf24c56551ffc98948f8c1";
const api_key_draw_no_bet = "6c6892c8bac9b123a62723d97c4b3631";
const api_key_double_chance = "b1efe9a109543460c0869318ab3e7d3a";
const api_key_first_half = "b736216ed22f754d3f9b3265af167385";
const api_key_second_half = "297dad8259ec68bf5df9fbc1fc226c32";
const api_key_alternate_totals = "a05115925350effe2c98ddf5d4387205";
const api_key_alternate_spreads = "7dd5285b7d0dea60424fd88a6bc4d82d";

const api_url = `https://api.the-odds-api.com/v4/sports`;

const request = {
  // User Api
  getCurrentUser:
    "https://api.maverickhabesha.com/api/v1/auth/get-current-user",
  getUserBalance: "https://api.maverickhabesha.com/api/v1/balance/get-balance",

  // Betting Api
  upcoming_odds: `${api_url}/upcoming/odds/?regions=us&markets=h2h&oddsFormat=decimal&apiKey=${api_key_upcoming}`,
  sport_with_key: `/odds?regions=us&markets=h2h&oddsFormat=decimal&apiKey=${api_key_sports}`,
  h2h: `/odds?regions=us&&markets=h2h_3_way&oddsFormat=decimal&apiKey=${api_key_h2h}`,
  btts: `/odds?regions=us&markets=btts&oddsFormat=decimal&apiKey=${api_key_btts}`,
  draw: `/odds?regions=us&markets=draw_no_bet&oddsFormat=decimal&apiKey=${api_key_draw_no_bet}`,
  double: `/odds?regions=us&markets=double_chance&oddsFormat=decimal&apiKey=${api_key_double_chance}`,
  first_half: `/odds?regions=us&markets=h2h_h1&oddsFormat=decimal&apiKey=${api_key_first_half}`,
  second_half: `/odds?regions=us&markets=h2h_h2&oddsFormat=decimal&apiKey=${api_key_second_half}`,
  totals: `/odds?regions=eu&markets=alternate_totals&oddsFormat=decimal&apiKey=${api_key_alternate_totals}`,
  spreads: `/odds?regions=eu&markets=alternate_spreads&oddsFormat=decimal&apiKey=${api_key_alternate_spreads}`,
  // API
  api_url: `https://api.the-odds-api.com/v4/sports`,
};
export default request;
