export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

const DOMAIN = "https://zafar-saleem.github.io";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (window.location.hostname !== DOMAIN) return;
  // @ts-ignore
  window?.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
// @ts-ignore
export const event = ({ action, category, label, value }) => {
  if (window.location.hostname !== DOMAIN) return;
  // @ts-ignore
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
