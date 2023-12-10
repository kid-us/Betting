import {
  home,
  sports,
  game,
  tournament,
  wallet,
  promotion,
  guide,
  faq,
  like,
  soccer,
  basketball,
  boxing,
  cricket,
  rugby,
  ice_hockey,
  american,
  mma,
  golf,
  logo1,
  logo2,
} from "../assets";

export const sidebar = [
  {
    title: "Promotion",
    id: 5,
    link: "http://maverickhabesha.com/promotion.html",
    img: promotion,
  },
  {
    title: "Guidelines",
    id: 6,
    link: "http://maverickhabesha.com/guide.html",
    img: guide,
  },

  {
    title: "FAQs",
    id: 7,
    img: faq,
    btn: true,
  },
  {
    title: "Social Media",
    id: 8,
    img: like,
    btn: true,
  },
];

export const top_sport = [
  {
    name: "Soccer",
    key: "soccer_soccer",
    img: soccer,
    top: [
      {
        league: "Upcoming",
        key: "up",
        class: "text-secondary fs-6 ",
      },
      {
        league: "Premier League",
        key: "epl",
        class: "text-warning fs-6 ",
      },
      {
        league: "LaLiga",
        key: "laligas",
        class: "text-warning fs-6 ",
      },
      {
        league: "Budesliga",
        key: "bundesliga1",
        class: "text-warning fs-6 ",
      },
      {
        league: "Seria A",
        key: "seria",
        class: "text-warning fs-6 ",
      },
      {
        league: "League 1",
        key: "league",
        class: "text-warning fs-6 ",
      },
      { league: "All", key: "all", class: "text-primary text-uppercase" },
    ],
    icon: "bi-caret-down-fill",
  },
  {
    name: "Basketball",
    key: "nba",
    img: basketball,
    icon: "bi-caret-down-fill",
    top: [
      {
        league: "Upcoming",
        key: "up",
        class: "text-info fs-6 ",
      },
      {
        league: "NBA",
        key: "nbaa",
        class: "text-warning fs-6 ",
      },
    ],
  },
  {
    name: "MMA",
    key: "mma_ufc",
    img: mma,
    icon: "bi-caret-down-fill",
    top: [
      {
        league: "Upcoming",
        key: "up",
        class: "text-info fs-6 ",
      },
      {
        league: "MMA",
        key: "ufc",
        class: "text-warning fs-6 ",
      },
    ],
  },
  {
    name: "American Football",
    key: "nfl",
    img: american,
    icon: "bi-caret-down-fill",
    top: [
      {
        league: "Upcoming",
        key: "up",
        class: "text-info fs-6 ",
      },
      {
        league: "NFL",
        key: "nfls",
        class: "text-warning fs-6 ",
      },
    ],
  },
  {
    name: "Boxing",
    key: "boxing",
    img: boxing,
    icon: "bi-caret-down-fill",
    top: [
      {
        league: "Upcoming",
        key: "up",
        class: "text-info fs-6 ",
      },
      {
        league: "Boxing",
        key: "boxings",
        class: "text-warning fs-6 ",
      },
    ],
  },
  {
    name: "Cricket",
    key: "cric",
    img: cricket,
    icon: "bi-caret-down-fill",
    top: [
      {
        league: "Upcoming",
        key: "up",
        class: "text-info fs-6 ",
      },
      {
        league: "Cricket",
        key: "criecket",
        class: "text-warning fs-6 ",
      },
    ],
  },
];
