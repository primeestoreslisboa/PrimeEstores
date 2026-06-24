// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const LAST_MOD = new Date();

/** @param {string} url */
function getPriority(url) {
  const path = url.replace('https://primeestores.pt', '').replace(/\/$/, '');
  // Home pages — máxima prioridade
  if (path === '' || path === '/en' || path === '/fr' || path === '/es' || path === '/de' || path === '/it') return 1.0;
  // Páginas de serviço — capturam tráfego orgânico ("reparação estores Lisboa")
  if (path.includes('servico') || path.includes('service') || path.includes('dienst') || path.includes('servizi') || path.includes('servic')) return 0.9;
  // Orçamento e contacto — páginas de conversão
  if (path.includes('orcamento') || path.includes('quote') || path.includes('devis') ||
      path.includes('presupuesto') || path.includes('angebot') || path.includes('preventivo')) return 0.8;
  if (path.includes('contacto') || path.includes('contact') || path.includes('kontakt') || path.includes('contatto')) return 0.8;
  // Zonas — SEO local secundário
  if (path.includes('zona') || path.includes('zone') || path.includes('coverage') || path.includes('versorgung')) return 0.7;
  return 0.6;
}

/** @param {string} url */
function getChangefreq(url) {
  const path = url.replace('https://primeestores.pt', '');
  if (path === '/' || path === '/en/' || path === '/fr/' || path === '/es/' || path === '/de/' || path === '/it/') return 'weekly';
  return 'monthly';
}

// https://astro.build/config
export default defineConfig({
  site: 'https://primeestores.pt',
  build: {
    inlineStylesheets: 'always',
  },
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: 'pt',
        locales: {
          pt: 'pt-PT',
          en: 'en-GB',
          fr: 'fr-FR',
          es: 'es-ES',
          de: 'de-DE',
          it: 'it-IT',
        },
      },
      serialize(item) {
        return {
          ...item,
          priority: getPriority(item.url),
          changefreq: getChangefreq(item.url),
          lastmod: LAST_MOD,
        };
      },
    }),
  ],
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en', 'fr', 'es', 'de', 'it'],
    routing: {
      prefixDefaultLocale: false,
    }
  }
});
