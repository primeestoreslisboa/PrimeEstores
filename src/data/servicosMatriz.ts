import type { ZonaData } from './zonaData';
import type { ServiceType } from './serviceFAQ';

// Service definitions for the Zona × Serviço local landing-page matrix.
// Kept in a data module (not page frontmatter) so getStaticPaths can import it.
export interface ServicoMatriz {
  slug: string;
  type: ServiceType;
  nome: string;
  h1: (zona: string) => string;
  title: (zona: string) => string;
  description: (zona: string) => string;
  keywords: (zona: string) => string;
  serviceHref: string;
  intro: (z: ZonaData) => string;
  detail: (z: ZonaData) => string;
}

export const servicosMatriz: ServicoMatriz[] = [
  {
    slug: 'estores-eletricos',
    type: 'electric',
    nome: 'Estores Elétricos',
    serviceHref: '/servicos/estores-eletricos',
    h1: z => `Estores Elétricos em ${z}`,
    title: z => `Estores Elétricos em ${z} — Instalação e Reparação`,
    description: z => `Instalação e reparação de estores elétricos e motorizados em ${z}. Motores Somfy e Nice, domótica, telecomando. Técnicos certificados e orçamento gratuito.`,
    keywords: z => `estores elétricos ${z}, instalação estores elétricos ${z}, estores motorizados ${z}, motor estore ${z}, estores elétricos ${z} preço, automatizar estores ${z}`,
    intro: z => `Procura estores elétricos em ${z.nome}? A Prime Estores instala e repara estores motorizados com telecomando, app e domótica (Google Home, Alexa) em toda a zona de ${z.nome}, com técnicos certificados e orçamento gratuito.`,
    detail: z => `${z.detail} Trabalhamos com motores Somfy e Nice e adaptamos a solução ao tipo de janela e ao orçamento de cada cliente em ${z.nome}.`,
  },
  {
    slug: 'estores-manuais',
    type: 'manual',
    nome: 'Estores Manuais',
    serviceHref: '/servicos/estores-manuais',
    h1: z => `Estores Manuais em ${z}`,
    title: z => `Estores Manuais em ${z} — Instalação`,
    description: z => `Instalação de estores manuais em ${z}: estores de rolo, blackout, venezianas e tela solar. Solução económica com mão de obra incluída. Orçamento gratuito.`,
    keywords: z => `estores manuais ${z}, estores de rolo ${z}, estore blackout ${z}, venezianas ${z}, instalação estores manuais ${z}, estore tela solar ${z}`,
    intro: z => `Precisa de estores manuais em ${z.nome}? Instalamos estores de rolo, blackout, venezianas de alumínio e telas solares em ${z.nome} — a solução mais económica, com material de qualidade e mão de obra incluída.`,
    detail: z => `${z.detail} Os estores manuais são ideais para quem procura uma solução fiável e acessível, e podem mais tarde ser motorizados em ${z.nome} se assim o desejar.`,
  },
  {
    slug: 'reparacao-estores',
    type: 'repair',
    nome: 'Reparação de Estores',
    serviceHref: '/servicos/reparacao-estores',
    h1: z => `Reparação de Estores em ${z}`,
    title: z => `Reparação de Estores em ${z} — Técnicos`,
    description: z => `Reparação de estores elétricos e manuais em ${z}. Estore encravado, motor avariado, fita ou corda partida. Diagnóstico gratuito e intervenção rápida ao domicílio.`,
    keywords: z => `reparação estores ${z}, reparar estore ${z}, técnico estores ${z}, arranjar estore ${z}, estore avariado ${z}, estore encravado ${z}, trocar motor estore ${z}`,
    intro: z => `O seu estore avariou em ${z.nome}? A Prime Estores repara estores elétricos e manuais em ${z.nome} — estore encravado, motor avariado, fita ou corda partida, telecomando sem resposta. Diagnóstico gratuito e intervenção rápida.`,
    detail: z => `Deslocamo-nos a ${z.nome} e arredores, muitas vezes no próprio dia, com stock das peças mais comuns. ${z.detail}`,
  },
  {
    slug: 'eletricidade',
    type: 'electrical',
    nome: 'Eletricidade',
    serviceHref: '/servicos/eletricidade',
    h1: z => `Eletricista em ${z}`,
    title: z => `Eletricista em ${z} — Instalação Elétrica`,
    description: z => `Serviços de eletricista em ${z}: tomadas, interruptores, iluminação LED e pontos elétricos para estores motorizados. Técnicos certificados (RTIEBT). Orçamento grátis.`,
    keywords: z => `eletricista ${z}, instalação elétrica ${z}, pontos elétricos ${z}, eletricista estores ${z}, iluminação LED ${z}, tomadas interruptores ${z}`,
    intro: z => `Precisa de um eletricista em ${z.nome}? Realizamos instalação de tomadas, interruptores, iluminação LED e pontos elétricos para estores motorizados em ${z.nome}, com técnicos certificados segundo as normas portuguesas (RTIEBT).`,
    detail: z => `Sempre que possível combinamos o trabalho elétrico com a instalação do estore na mesma visita a ${z.nome}, poupando tempo e custos. ${z.detail}`,
  },
  {
    slug: 'troca-fita-estores',
    type: 'repair',
    nome: 'Troca de Fita',
    serviceHref: '/servicos/troca-fita-estores/',
    h1: z => `Troca de Fita de Estore em ${z}`,
    title: z => `Troca de Fita de Estore em ${z} — Ao Domicílio`,
    description: z => `Troca e substituição da fita de estores manuais em ${z}. Fita partida ou gasta? Serviço rápido ao domicílio, sem custo de deslocação. Orçamento gratuito.`,
    keywords: z => `troca de fita estore ${z}, substituir fita estore ${z}, fita estore partida ${z}, mudar fita estore ${z}, reparar fita persiana ${z}`,
    intro: z => `A fita do seu estore partiu ou está gasta em ${z.nome}? A Prime Estores faz a troca de fita de estores manuais ao domicílio em ${z.nome}, com rapidez e sem custo de deslocação. Levamos a fita adequada e substituímos no local.`,
    detail: z => `Deslocamo-nos a ${z.nome} muitas vezes no próprio dia, com fita de várias larguras em stock. ${z.detail}`,
  },
  {
    slug: 'troca-motor-estores',
    type: 'repair',
    nome: 'Troca de Motor',
    serviceHref: '/servicos/troca-motor-estores/',
    h1: z => `Troca de Motor de Estore em ${z}`,
    title: z => `Troca de Motor de Estore em ${z} — Ao Domicílio`,
    description: z => `Troca e substituição do motor de estores elétricos em ${z}. Motor queimado ou sem resposta? Serviço rápido ao domicílio, sem custo de deslocação. Orçamento gratuito.`,
    keywords: z => `troca de motor estore ${z}, substituir motor estore ${z}, motor estore avariado ${z}, motor estore queimado ${z}, reparar motor estore ${z}`,
    intro: z => `O motor do seu estore elétrico avariou em ${z.nome}? A Prime Estores faz a troca de motor de estores elétricos ao domicílio em ${z.nome}, com diagnóstico, motor adequado e programação dos fins de curso. Orçamento gratuito.`,
    detail: z => `Deslocamo-nos a ${z.nome} muitas vezes no próprio dia, com motores em stock. ${z.detail}`,
  },
];
