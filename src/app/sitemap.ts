import { MetadataRoute } from 'next'
import { siteConfig } from '@/config/site.config'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/courses',
    '/faculty',
    '/gallery',
    '/results',
    '/testimonials',
    '/contact',
    '/apply'
  ].map((route) => ({
    url: `${'https://medilandclinic.com'}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
}



