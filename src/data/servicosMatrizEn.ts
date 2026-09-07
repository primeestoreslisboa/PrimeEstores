import type { ServiceType } from './serviceFAQ';

// English service definitions for the /en/coverage-areas/[zona]/[servico] matrix.
// `z` is a merged object with at least { nome, detail } (English content).
interface ZonaLike { nome: string; detail: string; }

export interface ServicoMatrizEn {
  slug: string;          // EN URL slug, matches /en/services/<slug>
  type: ServiceType;
  nome: string;
  h1: (zona: string) => string;
  title: (zona: string) => string;
  description: (zona: string) => string;
  keywords: (zona: string) => string;
  serviceHref: string;
  intro: (z: ZonaLike) => string;
  detail: (z: ZonaLike) => string;
}

export const servicosMatrizEn: ServicoMatrizEn[] = [
  {
    slug: 'electric-blinds',
    type: 'electric',
    nome: 'Electric Blinds',
    serviceHref: '/en/services/electric-blinds',
    h1: z => `Electric Blinds in ${z}`,
    title: z => `Electric Blinds in ${z} — Installation & Repair`,
    description: z => `Installation and repair of electric and motorized blinds in ${z}. Somfy and Nice motors, smart home, remote control. Certified technicians and free quote.`,
    keywords: z => `electric blinds ${z}, motorized blinds ${z}, smart blinds ${z}, blind motor ${z}, electric blinds ${z} price, blind installation ${z}`,
    intro: z => `Looking for electric blinds in ${z.nome}? Prime Estores installs and repairs motorized blinds with remote control, app and home automation (Google Home, Alexa) across ${z.nome}, with certified technicians and a free quote.`,
    detail: z => `${z.detail} We work with Somfy and Nice motors and tailor the solution to the type of window and the budget of each client in ${z.nome}.`,
  },
  {
    slug: 'manual-blinds',
    type: 'manual',
    nome: 'Manual Blinds',
    serviceHref: '/en/services/manual-blinds',
    h1: z => `Manual Blinds in ${z}`,
    title: z => `Manual Blinds in ${z} — Installation`,
    description: z => `Installation of manual blinds in ${z}: roller blinds, blackout, venetian and solar screen. The most economical solution with labour included. Free quote.`,
    keywords: z => `manual blinds ${z}, roller blinds ${z}, blackout blinds ${z}, venetian blinds ${z}, manual blind installation ${z}, solar screen ${z}`,
    intro: z => `Need manual blinds in ${z.nome}? We install roller blinds, blackout blinds, aluminium venetians and solar screens in ${z.nome} — the most economical solution, with quality materials and labour included.`,
    detail: z => `${z.detail} Manual blinds are ideal for those looking for a reliable, affordable solution, and can later be motorized in ${z.nome} if you wish.`,
  },
  {
    slug: 'blind-repair',
    type: 'repair',
    nome: 'Blind Repair',
    serviceHref: '/en/services/blind-repair',
    h1: z => `Blind Repair in ${z}`,
    title: z => `Blind Repair in ${z} — Technicians`,
    description: z => `Repair of electric and manual blinds in ${z}. Jammed blind, faulty motor, broken strap or cord. Free diagnosis and fast home repair visits.`,
    keywords: z => `blind repair ${z}, repair blind ${z}, blind technician ${z}, fix blind ${z}, faulty blind ${z}, jammed blind ${z}, replace blind motor ${z}`,
    intro: z => `Has your blind broken down in ${z.nome}? Prime Estores repairs electric and manual blinds in ${z.nome} — jammed blind, faulty motor, broken strap or cord, unresponsive remote. Free diagnosis and fast intervention.`,
    detail: z => `We travel to ${z.nome} and surrounding areas, often on the same day, with the most common parts in stock. ${z.detail}`,
  },
  {
    slug: 'electrical-work',
    type: 'electrical',
    nome: 'Electrical Work',
    serviceHref: '/en/services/electrical-work',
    h1: z => `Electrician in ${z}`,
    title: z => `Electrician in ${z} — Electrical Work`,
    description: z => `Electrician services in ${z}: sockets, switches, LED lighting and electrical points for motorized blinds. Certified technicians (RTIEBT). Free quote.`,
    keywords: z => `electrician ${z}, electrical work ${z}, electrical points ${z}, electrician blinds ${z}, LED lighting ${z}, sockets switches ${z}`,
    intro: z => `Need an electrician in ${z.nome}? We install sockets, switches, LED lighting and electrical points for motorized blinds in ${z.nome}, with technicians certified to Portuguese standards (RTIEBT).`,
    detail: z => `Whenever possible we combine the electrical work with the blind installation in the same visit to ${z.nome}, saving time and costs. ${z.detail}`,
  },
  {
    slug: 'blind-strap-replacement',
    type: 'repair',
    nome: 'Strap Replacement',
    serviceHref: '/en/services/blind-strap-replacement/',
    h1: z => `Blind Strap Replacement in ${z}`,
    title: z => `Blind Strap Replacement in ${z} — At Your Home`,
    description: z => `Replacement of the strap of manual blinds in ${z}. Broken or worn strap? Fast home service, no call-out charge. Free quote.`,
    keywords: z => `blind strap replacement ${z}, replace blind strap ${z}, broken blind strap ${z}, blind webbing ${z}, manual blind strap repair ${z}`,
    intro: z => `Has your blind strap snapped or worn out in ${z.nome}? Prime Estores replaces the strap of manual blinds at your home in ${z.nome}, fast and with no call-out charge. We bring the right strap and replace it on site.`,
    detail: z => `We travel to ${z.nome} often on the same day, with straps of various widths in stock. ${z.detail}`,
  },
  {
    slug: 'blind-motor-replacement',
    type: 'repair',
    nome: 'Motor Replacement',
    serviceHref: '/en/services/blind-motor-replacement/',
    h1: z => `Blind Motor Replacement in ${z}`,
    title: z => `Blind Motor Replacement in ${z} — At Your Home`,
    description: z => `Replacement of the motor of electric blinds in ${z}. Burnt-out or unresponsive motor? Fast home service, no call-out charge. Free quote.`,
    keywords: z => `blind motor replacement ${z}, replace blind motor ${z}, faulty blind motor ${z}, burnt blind motor ${z}, electric blind motor repair ${z}`,
    intro: z => `Has your electric blind motor failed in ${z.nome}? Prime Estores replaces electric blind motors at your home in ${z.nome}, with diagnosis, the right motor and limit programming. Free quote.`,
    detail: z => `We travel to ${z.nome} often on the same day, with motors in stock. ${z.detail}`,
  },
];
