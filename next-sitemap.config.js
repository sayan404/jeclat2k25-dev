/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.jeclat2k25.in",
  generateRobotsTxt: false, // Since we're creating it manually
  changefreq: "daily",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: ["https://www.jeclat2k25.in/server-sitemap.xml"],
  },
};
