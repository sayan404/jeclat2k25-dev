const https = require("https");

const SITEMAP_URL = "https://jeclat2k25.in/sitemap.xml";

const searchEngines = [
  `https://www.google.com/webmasters/tools/ping?sitemap=${SITEMAP_URL}`,
  `https://www.bing.com/ping?sitemap=${SITEMAP_URL}`,
  `https://blogs.yandex.ru/pings/?status=success&url=${SITEMAP_URL}`,
];

searchEngines.forEach((url) => {
  https
    .get(url, (resp) => {
      console.log(`Pinged ${url} - Status: ${resp.statusCode}`);
    })
    .on("error", (err) => {
      console.error(`Error pinging ${url}: ${err.message}`);
    });
});
