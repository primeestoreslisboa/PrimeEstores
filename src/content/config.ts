import { defineCollection, z } from 'astro:content';

const artigoSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.date(),
  keywords: z.string().optional(),
  image: z.string().default('/og-image.jpg'),
  readingTime: z.number().optional(),
});

const artigos = defineCollection({ type: 'content', schema: artigoSchema });
const artigosEn = defineCollection({ type: 'content', schema: artigoSchema });
const artigosFr = defineCollection({ type: 'content', schema: artigoSchema });
const artigosEs = defineCollection({ type: 'content', schema: artigoSchema });
const artigosDe = defineCollection({ type: 'content', schema: artigoSchema });
const artigosIt = defineCollection({ type: 'content', schema: artigoSchema });

export const collections = {
  artigos,
  'artigos-en': artigosEn,
  'artigos-fr': artigosFr,
  'artigos-es': artigosEs,
  'artigos-de': artigosDe,
  'artigos-it': artigosIt,
};
