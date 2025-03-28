/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://jeclat2k25.in",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    additionalSitemaps: [
      "https://jeclat2k25.in/sitemap.xml",
      "https://jeclat2k25.in/server-sitemap.xml",
    ],
  },
  exclude: ["/server-sitemap.xml"],
  generateIndexSitemap: false,
  changefreq: "daily",
  priority: 0.7,
};
