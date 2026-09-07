import { zonas } from '../data/zonaData';

export type Lang = 'pt' | 'en' | 'fr' | 'es' | 'de' | 'it';

// A cluster groups the equivalent page URL across languages. Most clusters cover
// all 6 languages; zona hub/matrix clusters cover only the languages that exist
// (PT + EN) — partial clusters must NOT emit hreflang for missing languages.
type RouteGroup = Partial<Record<Lang, string>>;

// Fully-translated pages (all 6 languages)
const baseRouteMap: RouteGroup[] = [
  { pt: '/',                               en: '/en/',                                      fr: '/fr/',                                      es: '/es/',                                       de: '/de/',                                            it: '/it/',                             ru: '/ru/',                              uk: '/uk/'                              },
  { pt: '/zonas-que-servimos/',            en: '/en/coverage-areas/',                       fr: '/fr/zones-couvertes/',                      es: '/es/zonas-cobertura/',                       de: '/de/versorgungsgebiete/',                         it: '/it/zone-servite/',                ru: '/ru/coverage-areas/',               uk: '/uk/coverage-areas/'               },
  { pt: '/orcamento/',                     en: '/en/quote/',                                fr: '/fr/devis/',                                es: '/es/presupuesto/',                           de: '/de/angebot/',                                    it: '/it/preventivo/',                  ru: '/ru/quote/',                        uk: '/uk/quote/'                        },
  { pt: '/contacto/',                      en: '/en/contact/',                              fr: '/fr/contact/',                              es: '/es/contacto/',                              de: '/de/kontakt/',                                    it: '/it/contatto/',                    ru: '/ru/contact/',                      uk: '/uk/contact/'                      },
  { pt: '/servicos/estores-eletricos/',    en: '/en/services/electric-blinds/',             fr: '/fr/services/stores-electriques/',          es: '/es/servicios/persianas-electricas/',        de: '/de/dienstleistungen/elektrische-jalousien/',     it: '/it/servizi/tende-elettriche/',    ru: '/ru/services/electric-blinds/',     uk: '/uk/services/electric-blinds/'     },
  { pt: '/servicos/estores-manuais/',      en: '/en/services/manual-blinds/',               fr: '/fr/services/stores-manuels/',              es: '/es/servicios/persianas-manuales/',          de: '/de/dienstleistungen/manuelle-jalousien/',        it: '/it/servizi/tende-manuali/',       ru: '/ru/services/manual-blinds/',       uk: '/uk/services/manual-blinds/'       },
  { pt: '/servicos/reparacao-estores/',    en: '/en/services/blind-repair/',                fr: '/fr/services/reparation-stores/',           es: '/es/servicios/reparacion-persianas/',        de: '/de/dienstleistungen/jalousien-reparatur/',       it: '/it/servizi/riparazione-tende/',   ru: '/ru/services/blind-repair/',        uk: '/uk/services/blind-repair/'        },
  { pt: '/servicos/eletricidade/',         en: '/en/services/electrical-work/',             fr: '/fr/services/electricite/',                 es: '/es/servicios/electricidad/',                de: '/de/dienstleistungen/elektroinstallation/',       it: '/it/servizi/impianto-elettrico/',  ru: '/ru/services/electrical-work/',     uk: '/uk/services/electrical-work/'     },
  { pt: '/servicos/casa-inteligente/',     en: '/en/services/smart-home/',                  fr: '/fr/services/maison-connectee/',            es: '/es/servicios/hogar-inteligente/',           de: '/de/dienstleistungen/smart-home/',                it: '/it/servizi/casa-intelligente/',   ru: '/ru/services/smart-home/',          uk: '/uk/services/smart-home/'          },
  { pt: '/servicos/troca-fita-estores/',   en: '/en/services/blind-strap-replacement/',     fr: '/fr/services/remplacement-sangle-store/',   es: '/es/servicios/cambio-cinta-persiana/',       de: '/de/dienstleistungen/gurtwechsel-jalousien/',     it: '/it/servizi/sostituzione-cinghia-tende/', ru: '/ru/services/blind-strap-replacement/', uk: '/uk/services/blind-strap-replacement/' },
  { pt: '/politica-privacidade/',          en: '/en/privacy-policy/',                       fr: '/fr/politique-confidentialite/',            es: '/es/politica-privacidad/',                   de: '/de/datenschutz/',                                it: '/it/informativa-privacy/',         ru: '/ru/privacy-policy/',               uk: '/uk/privacy-policy/'               },
  { pt: '/artigos/',                       en: '/en/articles/',                             fr: '/fr/articles/',                             es: '/es/articulos/',                             de: '/de/artikel/',                                    it: '/it/articoli/',                    ru: '/ru/articles/',                     uk: '/uk/articles/'                     },
  { pt: '/sobre/',                         en: '/en/about/',                                fr: '/fr/a-propos/',                             es: '/es/sobre-nosotros/',                        de: '/de/ueber-uns/',                                  it: '/it/chi-siamo/',                   ru: '/ru/about/',                        uk: '/uk/about/'                        },
];

// PT ↔ EN slug pairing for the Zona × Serviço matrix (only these 2 languages exist)
const zonaServiceSlugs: { pt: string; en: string }[] = [
  { pt: 'estores-eletricos', en: 'electric-blinds' },
  { pt: 'estores-manuais',   en: 'manual-blinds' },
  { pt: 'reparacao-estores', en: 'blind-repair' },
  { pt: 'eletricidade',      en: 'electrical-work' },
  { pt: 'troca-fita-estores', en: 'blind-strap-replacement' },
];

// Generate PT ↔ EN clusters for each zona hub + its service matrix pages.
const zonaRouteMap: RouteGroup[] = zonas.flatMap(z => [
  { pt: `/zonas/${z.slug}/`, en: `/en/coverage-areas/${z.slug}/` },
  ...zonaServiceSlugs.map(s => ({
    pt: `/zonas/${z.slug}/${s.pt}/`,
    en: `/en/coverage-areas/${z.slug}/${s.en}/`,
  })),
]);

export const routeMap: RouteGroup[] = [...baseRouteMap, ...zonaRouteMap];

const normalizePath = (p: string) => (p.endsWith('/') && p.length > 1 ? p.slice(0, -1) : p);

/**
 * Returns the routeMap group (cluster of equivalent URLs across the 6 languages)
 * that `currentPath` belongs to, or null if the page is not part of any cluster.
 * Pages outside any cluster (e.g. articles, /sobre/, /zonas/[zona]/) must emit
 * only a self-referencing hreflang, never the home fallback.
 */
export function findCluster(currentPath: string): RouteGroup | null {
  const normalized = normalizePath(currentPath);
  for (const group of routeMap) {
    if ((Object.values(group) as string[]).some(p => normalizePath(p) === normalized)) {
      return group;
    }
  }
  return null;
}

/**
 * Given the current URL path and a target language, returns the equivalent page URL.
 * Falls back to the target language home if no match is found.
 */
export function getEquivalentPath(currentPath: string, targetLang: Lang): string {
  // Normalize: remove trailing slash except for root
  const normalize = (p: string) => (p.endsWith('/') && p.length > 1 ? p.slice(0, -1) : p);
  const normalized = normalize(currentPath);

  const homeFallback = targetLang === 'pt' ? '/' : `/${targetLang}/`;

  for (const group of routeMap) {
    const hasMatch = (Object.values(group) as string[]).some(
      p => normalize(p) === normalized
    );
    // If the page exists in this cluster but not in the target language
    // (partial clusters like zona pages), fall back to that language's home.
    if (hasMatch) return group[targetLang] ?? homeFallback;
  }

  return homeFallback;
}
