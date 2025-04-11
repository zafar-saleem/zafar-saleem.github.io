import mudah from "./assets/mudah.webp";
import slimming from "./assets/slimming.webp";
import tayara from "./assets/tayara.webp";
import westwing from "./assets/westwing.webp";
import portfolio from "./assets/portfolio.webp";
import kritzer from "./assets/kritzer.webp";
import corotos from "./assets/corotos.webp";

const KPI_TITLES = {
  traffic: "Traffic",
  bounce: "Bounce Rate",
  visit: "Page / Visit",
};

const TRAFFIC_ICON = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNhYjI5ZGIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1hcnJvdy1kb3duLXVwIj48cGF0aCBkPSJtMyAxNiA0IDQgNC00Ii8+PHBhdGggZD0iTTcgMjBWNCIvPjxwYXRoIGQ9Im0yMSA4LTQtNC00IDQiLz48cGF0aCBkPSJNMTcgNHYxNiIvPjwvc3ZnPg==";
const NOT_FOUND_ICON = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNkYjI5MjkiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS10cmlhbmdsZS1hbGVydCI+PHBhdGggZD0ibTIxLjczIDE4LTgtMTRhMiAyIDAgMCAwLTMuNDggMGwtOCAxNEEyIDIgMCAwIDAgNCAyMWgxNmEyIDIgMCAwIDAgMS43My0zIi8+PHBhdGggZD0iTTEyIDl2NCIvPjxwYXRoIGQ9Ik0xMiAxN2guMDEiLz48L3N2Zz4=";

export const contents = [
  {
    title: "Mudah Marketplace",
    src: mudah,
    link: "https://mudah.my/",
    alt: "Mudah Marketplace Case Study",
    kpi: [
      {
        title: KPI_TITLES.traffic,
        metric: "1.9m",
        icon: TRAFFIC_ICON,
      },
    ],
  },
  {
    title: "Slimming World Fitness",
    src: slimming,
    link: "https://slimmingworld.co.uk",
    alt: "Slimming World Health Case Study",
    kpi: [
      {
        title: KPI_TITLES.traffic,
        metric: "2.4M",
        icon: TRAFFIC_ICON,
      },
    ],
  },
  {
    title: "Tayara marketplace",
    src: tayara,
    link: "https://tayara.tn",
    alt: "Marketplace Case Study",
    kpi: [
      {
        title: KPI_TITLES.traffic,
        metric: "2.2M",
        icon: TRAFFIC_ICON,
      },
    ],
  },
  {
    title: "Corotos marketplace",
    src: corotos,
    link: "https://corotos.com.do",
    alt: "Marketplace Case Study",
    kpi: [
      {
        title: KPI_TITLES.traffic,
        metric: "1.3M",
        icon: TRAFFIC_ICON,
      },
    ],
  },
  {
    title: "Westwing e-commerce",
    src: westwing,
    link: "https://westwing.de",
    alt: "E-Commerce Case Study",
    kpi: [
      {
        title: KPI_TITLES.traffic,
        metric: "2.4m",
        icon: TRAFFIC_ICON,
      },
    ],
  },
  {
    title: "Portfolio Website",
    src: portfolio,
    link: "https://zafar-saleem.github.io",
    alt: "Personal Portfolio Website Case Study",
    kpi: [
      {
        title: "Metrics",
        metric: "Unavailable",
        icon: NOT_FOUND_ICON,
      },
    ],
  },
  {
    title: "kritzer Portfolio",
    src: kritzer,
    link: "https://www.la-kritzer.ch/",
    alt: "Kritzer Portfolio Case Study",
    kpi: [
      {
        title: "Metrics",
        metric: "Unavailable",
        icon: NOT_FOUND_ICON,
      },
    ],
  }
];
