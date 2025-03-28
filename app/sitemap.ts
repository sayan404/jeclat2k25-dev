import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/events',
    '/social',
    '/archive',
    '/team',
    '/contact',
    '/merchandise',
  ]

  return routes.map((route) => ({
    url: `https://jeclat2k25.in${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
} 