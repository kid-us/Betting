import {
  sports,
  soccer,
  basketball,
  boxing,
  cricket,
  american,
  mma,
} from "../assets";

export const bet_sports = [
  // Soccer
  {
    key: "soccer",
    group: "Soccer",
    top: [
      // {
      //   title: "Upcoming",
      //   key: "upcoming",
      // },

      {
        title: "Premier League",
        key: "soccer_epl",
        description: "English Premier League",
      },

      {
        title: "La Liga",
        key: "soccer_spain_la_liga",
        description: "Spanish Soccer",
      },

      {
        title: "Bundesliga",
        key: "soccer_germany_bundesliga",
        description: "German Soccer",
      },

      {
        title: "Serie A",
        key: "soccer_italy_serie_a",
        description: "Italian Soccer",
      },

      {
        title: "Ligue 1",
        key: "soccer_france_ligue_one",
        description: "French Soccer",
      },

      {
        title: "UEFA Champions League",
        key: "soccer_uefa_champs_league",
        description: "European Champions League",
      },
      {
        title: "UEFA Euro Qualification",
        key: "soccer_uefa_euro_qualification",
        description: "European Championship Qualification",
      },
      {
        title: "UEFA Conference League",
        key: "soccer_uefa_europa_conference_league",
        description: "UEFA Europa Conference League",
      },
      {
        title: "UEFA Europa League",
        key: "soccer_uefa_europa_league",
        description: "European Europa League",
      },
      {
        title: "Primeira Liga",
        key: "soccer_portugal_primeira_liga",
        description: "Portugese Soccer",
      },

      {
        title: "Eredivisie",
        key: "soccer_netherlands_eredivisie",
        description: "Dutch Soccer",
      },

      {
        title: "Premiership",
        key: "soccer_spl",
        description: "Scottish Premiership",
      },

      {
        title: "England Championship",
        key: "soccer_efl_champ",
        description: "EFL Championship",
      },

      {
        title: "England FA Cup",
        key: "soccer_fa_cup",
        description: "Football Association Challenge Cup",
      },

      {
        title: "MLS",
        key: "soccer_usa_mls",
        description: "Major League Soccer",
      },

      {
        title: "A-League",
        key: "soccer_australia_aleague",
        description: "Aussie Soccer",
      },
      {
        title: "Austrian Bundesliga",
        key: "soccer_austria_bundesliga",
        description: "Austrian Soccer",
      },
      {
        title: "Belgium Division A",
        key: "soccer_belgium_first_div",
        description: "Belgian First Division A",
      },
      {
        title: "Brazil Série A",
        key: "soccer_brazil_campeonato",
        description: "Brasileirão Série A",
      },

      {
        title: "Primera División - Chile",
        key: "soccer_chile_campeonato",
        description: "Campeonato Chileno",
      },
      {
        title: "Denmark Superliga",
        key: "soccer_denmark_superliga",
        description: "Danish Soccer",
      },

      {
        title: "England League 1",
        key: "soccer_england_league1",
        description: "EFL League 1",
      },

      {
        title: "England League 2",
        key: "soccer_england_league2",
        description: "EFL League 2 ",
      },

      // {
      //   title: "FIFA World Cup Winner",
      //   key: "soccer_fifa_world_cup_winner",
      //   description: "FIFA World Cup Winner 2026",
      // },

      {
        title: "Ligue 2",
        key: "soccer_france_ligue_two",
        description: "French Soccer",
      },

      {
        title: "Bundesliga 2",
        key: "soccer_germany_bundesliga2",
        description: "German Soccer",
      },
      {
        title: "3. Liga",
        key: "soccer_germany_liga3",
        description: "German Soccer",
      },
      {
        title: "Greece Super League",
        key: "soccer_greece_super_league",
        description: "Greek Soccer",
      },

      {
        title: "Serie B",
        key: "soccer_italy_serie_b",
        description: "Italian Soccer",
      },
      {
        title: "J League",
        key: "soccer_japan_j_league",
        description: "Japan Soccer League",
      },
      {
        title: "K League 1",
        key: "soccer_korea_kleague1",
        description: "Korean Soccer",
      },
      {
        title: "Liga Mexico",
        key: "soccer_mexico_ligamx",
        description: "Mexican Soccer",
      },

      {
        title: "Eliteserien",
        key: "soccer_norway_eliteserien",
        description: "Norwegian Soccer",
      },
      {
        title: "Ekstraklasa",
        key: "soccer_poland_ekstraklasa",
        description: "Polish Soccer",
      },

      {
        title: "La Liga 2",
        key: "soccer_spain_segunda_division",
        description: "Spanish Soccer",
      },

      {
        title: "Swiss Superleague",
        key: "soccer_switzerland_superleague",
        description: "Swiss Soccer",
      },
      {
        title: "Turkey Super League",
        key: "soccer_turkey_super_league",
        description: "Turkish Soccer",
      },
    ],
    img: soccer,
  },

  // Basketball
  {
    key: "basketball",
    group: "Basketball",
    img: basketball,
    top: [
      // {
      //   title: "Upcoming",
      //   key: "upcoming",
      // },
      {
        title: "NBA",
        key: "basketball_nba",
        description: "US Basketball",
      },
      // {
      //   title: "NBA Championship",
      //   key: "basketball_nba_championship_winner",
      //   description: "Championship Winner 2023/2024",
      // },
    ],
  },

  // American
  {
    key: "americanfootball",
    group: "American Football",
    description: "US Football",
    top: [
      // {
      //   title: "Upcoming",
      //   key: "upcoming",
      // },
      { title: "NFL", key: "americanfootball_nfl", description: "US Football" },
    ],
    img: american,
  },

  // Boxing
  {
    key: "boxing",
    group: "Boxing",
    top: [
      // {
      //   title: "Upcoming",
      //   key: "upcoming",
      // },
      { title: "Boxing", key: "boxing_boxing", description: "Boxing Bouts" },
    ],
    img: boxing,
  },

  // MMA
  {
    key: "ufc",
    group: "Mixed Martial Arts",
    title: "MMA",
    top: [
      // {
      //   title: "Upcoming",
      //   key: "upcoming",
      // },
      {
        title: "MMA",
        key: "mma_mixed_martial_arts",
        description: "Mixed Martial Arts",
      },
    ],
    img: mma,
  },

  // Cricket
  {
    key: "cricket",
    group: "Cricket",
    top: [
      // {
      //   title: "Upcoming",
      //   key: "upcoming",
      // },
      {
        title: "Big Bash",
        key: "cricket_big_bash",
        description: "Big Bash League",
      },
    ],
    img: cricket,
  },
];
