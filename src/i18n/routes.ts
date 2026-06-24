export type Lang = 'pt' | 'en' | 'fr' | 'es' | 'de' | 'it';

// Each entry groups the equivalent page URL across all languages
export const routeMap: Record<Lang, string>[] = [
  { pt: '/',                               en: '/en/',                                      fr: '/fr/',                                      es: '/es/',                                       de: '/de/',                                            it: '/it/'                            },
  { pt: '/zonas-que-servimos/',            en: '/en/coverage-areas/',                       fr: '/fr/zones-couvertes/',                      es: '/es/zonas-cobertura/',                       de: '/de/versorgungsgebiete/',                         it: '/it/zone-servite/'               },
  { pt: '/orcamento/',                     en: '/en/quote/',                                fr: '/fr/devis/',                                es: '/es/presupuesto/',                           de: '/de/angebot/',                                    it: '/it/preventivo/'                 },
  { pt: '/contacto/',                      en: '/en/contact/',                              fr: '/fr/contact/',                              es: '/es/contacto/',                              de: '/de/kontakt/',                                    it: '/it/contatto/'                   },
  { pt: '/servicos/estores-eletricos/',    en: '/en/services/electric-blinds/',             fr: '/fr/services/stores-electriques/',          es: '/es/servicios/persianas-electricas/',        de: '/de/dienstleistungen/elektrische-jalousien/',     it: '/it/servizi/tende-elettriche/'   },
  { pt: '/servicos/estores-manuais/',      en: '/en/services/manual-blinds/',               fr: '/fr/services/stores-manuels/',              es: '/es/servicios/persianas-manuales/',          de: '/de/dienstleistungen/manuelle-jalousien/',        it: '/it/servizi/tende-manuali/'      },
  { pt: '/servicos/reparacao-estores/',    en: '/en/services/blind-repair/',                fr: '/fr/services/reparation-stores/',           es: '/es/servicios/reparacion-persianas/',        de: '/de/dienstleistungen/jalousien-reparatur/',       it: '/it/servizi/riparazione-tende/'  },
  { pt: '/servicos/eletricidade/',         en: '/en/services/electrical-work/',             fr: '/fr/services/electricite/',                 es: '/es/servicios/electricidad/',                de: '/de/dienstleistungen/elektroinstallation/',       it: '/it/servizi/impianto-elettrico/' },
  { pt: '/politica-privacidade/',          en: '/en/privacy-policy/',                       fr: '/fr/politique-confidentialite/',            es: '/es/politica-privacidad/',                   de: '/de/datenschutz/',                                it: '/it/informativa-privacy/'        },
];

/**
 * Given the current URL path and a target language, returns the equivalent page URL.
 * Falls back to the target language home if no match is found.
 */
export function getEquivalentPath(currentPath: string, targetLang: Lang): string {
  // Normalize: remove trailing slash except for root
  const normalize = (p: string) => (p.endsWith('/') && p.length > 1 ? p.slice(0, -1) : p);
  const normalized = normalize(currentPath);

  for (const group of routeMap) {
    const hasMatch = (Object.values(group) as string[]).some(
      p => normalize(p) === normalized
    );
    if (hasMatch) return group[targetLang];
  }

  // Fallback: home of the target language
  return targetLang === 'pt' ? '/' : `/${targetLang}/`;
}
