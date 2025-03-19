import mudah from "./assets/mudah.webp";
import slimming from "./assets/slimming.webp";
import tayara from "./assets/tayara.webp";
import westwing from "./assets/westwing.webp";
import portfolio from "./assets/portfolio.webp";
import kritzer from "./assets/kritzer.webp";

const KPI_TITLES = {
  traffic: "Traffic",
  bounce: "Bounce Rate",
  visit: "Page / Visit",
};

const BOUNCE_ICON = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNkYjI5ODgiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS13YXlwb2ludHMiPjxjaXJjbGUgY3g9IjEyIiBjeT0iNC41IiByPSIyLjUiLz48cGF0aCBkPSJtMTAuMiA2LjMtMy45IDMuOSIvPjxjaXJjbGUgY3g9IjQuNSIgY3k9IjEyIiByPSIyLjUiLz48cGF0aCBkPSJNNyAxMmgxMCIvPjxjaXJjbGUgY3g9IjE5LjUiIGN5PSIxMiIgcj0iMi41Ii8+PHBhdGggZD0ibTEzLjggMTcuNyAzLjktMy45Ii8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxOS41IiByPSIyLjUiLz48L3N2Zz4=";
const TRAFFIC_ICON = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNhYjI5ZGIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1hcnJvdy1kb3duLXVwIj48cGF0aCBkPSJtMyAxNiA0IDQgNC00Ii8+PHBhdGggZD0iTTcgMjBWNCIvPjxwYXRoIGQ9Im0yMSA4LTQtNC00IDQiLz48cGF0aCBkPSJNMTcgNHYxNiIvPjwvc3ZnPg==";
const VISIT_ICON = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMyOWI3ZGIiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS10ZWxlc2NvcGUiPjxwYXRoIGQ9Im0xMC4wNjUgMTIuNDkzLTYuMTggMS4zMThhLjkzNC45MzQgMCAwIDEtMS4xMDgtLjcwMmwtLjUzNy0yLjE1YTEuMDcgMS4wNyAwIDAgMSAuNjkxLTEuMjY1bDEzLjUwNC00LjQ0Ii8+PHBhdGggZD0ibTEzLjU2IDExLjc0NyA0LjMzMi0uOTI0Ii8+PHBhdGggZD0ibTE2IDIxLTMuMTA1LTYuMjEiLz48cGF0aCBkPSJNMTYuNDg1IDUuOTRhMiAyIDAgMCAxIDEuNDU1LTIuNDI1bDEuMDktLjI3MmExIDEgMCAwIDEgMS4yMTIuNzI3bDEuNTE1IDYuMDZhMSAxIDAgMCAxLS43MjcgMS4yMTNsLTEuMDkuMjcyYTIgMiAwIDAgMS0yLjQyNS0xLjQ1NXoiLz48cGF0aCBkPSJtNi4xNTggOC42MzMgMS4xMTQgNC40NTYiLz48cGF0aCBkPSJtOCAyMSAzLjEwNS02LjIxIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMyIgcj0iMiIvPjwvc3ZnPg==";
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
      {
        title: KPI_TITLES.bounce,
        metric: "26.23%",
        icon: BOUNCE_ICON,
      },
      {
        title: KPI_TITLES.visit,
        metric: "8.80",
        icon: VISIT_ICON,
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
      {
        title: KPI_TITLES.bounce,
        metric: "35.52%",
        icon: BOUNCE_ICON,
      },
      {
        title: KPI_TITLES.visit,
        metric: "5.46",
        icon: VISIT_ICON,
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
      {
        title: KPI_TITLES.bounce,
        metric: "31.87%",
        icon: BOUNCE_ICON,
      },
      {
        title: KPI_TITLES.visit,
        metric: "8.00",
        icon: VISIT_ICON,
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
      {
        title: KPI_TITLES.bounce,
        metric: "34.72%",
        icon: BOUNCE_ICON,
      },
      {
        title: KPI_TITLES.visit,
        metric: "4.44",
        icon: VISIT_ICON,
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
