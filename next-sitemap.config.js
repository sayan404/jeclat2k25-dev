/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://jeclat2k25.in',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*', '/_next/*', '/static/*'],
      },
    ],
    additionalSitemaps: [
      'https://jeclat2k25.in/sitemap.xml',
      'https://jeclat2k25.in/server-sitemap.xml',
    ],
  },
  exclude: ['/api/*', '/server-sitemap.xml'],
  outDir: './public',
} 