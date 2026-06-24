// English content layer for the zona pages (hub + service matrix).
// nome / slug / bairros / geo are reused from zonaData.ts; this file only holds
// the English prose and meta, keyed by zona slug.

export interface ZonaContentEn {
  title: string;
  description: string;
  keywords: string;
  intro: string;
  detail: string;
}

export const zonaEn: Record<string, ZonaContentEn> = {
  lisboa: {
    title: 'Blind Installation & Repair in Lisbon | Prime Estores',
    description: 'Electric and manual blind specialists in Lisbon. Professional installation in every neighbourhood, urgent repairs and free quotes. Call us today.',
    keywords: 'blinds Lisbon, electric blinds Lisbon, blind repair Lisbon, blind installation Lisbon, motorized blinds Lisbon, roller blinds Lisbon',
    intro: 'Prime Estores is the reference company for electric and manual blind installation and repair in Lisbon. With years of experience in the capital, our team knows the specifics of every neighbourhood — from the centuries-old windows of Alfama to the modern balconies of Parque das Nações.',
    detail: 'We serve every neighbourhood and parish of Lisbon, with fast response times and certified technicians. Whether installing a motorized blind, repairing a faulty one or motorizing an existing blind, we are available Monday to Saturday from 8am to 8pm.',
  },
  sintra: {
    title: 'Blind Installation & Repair in Sintra | Prime Estores',
    description: 'Installation and repair of electric and manual blinds in Sintra. We cover the whole municipality: Sintra, Agualva-Cacém, Queluz and more. Free quote.',
    keywords: 'blinds Sintra, electric blinds Sintra, blind repair Sintra, blind installation Sintra, blinds Queluz, blinds Cacém',
    intro: 'Prime Estores provides blind installation and repair services across the entire Sintra municipality. From the historic centre of Sintra to the urban areas of Agualva-Cacém and Queluz, our team travels to every locality in the council.',
    detail: 'Sintra is one of the largest municipalities in Greater Lisbon, with a wide variety of homes — from villas with gardens in premium residential areas to apartments in dense urban zones. We adapt to every situation, with blind solutions for each type of window and budget.',
  },
  cascais: {
    title: 'Blind Installation & Repair in Cascais | Prime Estores',
    description: 'Electric and manual blinds in Cascais, Estoril, Parede and Carcavelos. Professional installation with warranty, urgent repairs. Free quote from Prime Estores.',
    keywords: 'blinds Cascais, electric blinds Cascais, blind repair Cascais, blinds Estoril, blinds Carcavelos, blind installation Cascais',
    intro: 'Cascais is one of the areas with the highest demand for quality electric blinds in Greater Lisbon. Prime Estores installs and repairs motorized and manual blinds across the whole municipality, with special attention to the requirements of the villas and apartments along the Cascais coast.',
    detail: 'The Atlantic climate of Cascais and Estoril, with intense sun and sea wind, demands robust, well-installed blinds. We use top-quality motors and materials to guarantee durability even in demanding weather conditions.',
  },
  oeiras: {
    title: 'Blind Installation & Repair in Oeiras | Prime Estores',
    description: 'Electric and manual blinds in Oeiras, Porto Salvo, Carnaxide and Algés. Professional installation with certified technicians. Free, no-obligation quote.',
    keywords: 'blinds Oeiras, electric blinds Oeiras, blind repair Oeiras, blinds Carnaxide, blinds Algés, blind installation Oeiras',
    intro: 'Prime Estores covers the entire Oeiras municipality, from the riverside strip of Algés and Cruz Quebrada to the tech hubs of Porto Salvo and Barcarena. We are the preferred choice for electric blind installation in condominiums and villas in Oeiras.',
    detail: 'Oeiras concentrates many modern condominiums and tech companies that value smart shading solutions. We install blind systems compatible with home automation (Google Home, Alexa, Apple HomeKit), ideal for modern homes in the municipality.',
  },
  almada: {
    title: 'Blind Installation & Repair in Almada | Prime Estores',
    description: 'Electric and manual blinds in Almada, Costa da Caparica, Cacilhas and Trafaria. Technicians on the south bank. Urgent repairs and free quote. Call now.',
    keywords: 'blinds Almada, electric blinds Almada, blind repair Almada, blinds Costa da Caparica, blinds Cacilhas, blind installation Almada',
    intro: 'Prime Estores is present on the south bank of the Tagus, serving Almada and its entire municipality. From Costa da Caparica, with the highest sun exposure in the region, to the historic centre of Cacilhas, we guarantee fast, professional installation of electric and manual blinds.',
    detail: 'The intense sun exposure along the Almada waterfront and Costa da Caparica makes blinds an essential investment for comfort and energy efficiency. We recommend blinds with anti-reflective slats or blackout fabric for these specific areas.',
  },
  setubal: {
    title: 'Blind Installation & Repair in Setúbal | Prime Estores',
    description: 'Electric and manual blinds in Setúbal, Azeitão and São Bernardo. Professional installation with warranty. Prime Estores serves the whole Setúbal council. Free quote.',
    keywords: 'blinds Setúbal, electric blinds Setúbal, blind repair Setúbal, blinds Azeitão, blind installation Setúbal, motorized blinds Setúbal',
    intro: 'Prime Estores extends its coverage to the Setúbal municipality, providing installation and repair of electric and manual blinds. We serve homes, retail and offices in Setúbal city and the surrounding localities.',
    detail: 'Setúbal enjoys a Mediterranean climate with hot, dry summers, which makes efficient shading a real necessity. Electric blinds with light control help regulate indoor temperature and reduce climate-control costs throughout the year.',
  },
  amadora: {
    title: 'Blind Installation & Repair in Amadora | Prime Estores',
    description: 'Electric and manual blinds in Amadora, Alfornelos, Damaia and Reboleira. Fast installation with certified technicians. Free quote from Prime Estores.',
    keywords: 'blinds Amadora, electric blinds Amadora, blind repair Amadora, blinds Damaia, blind installation Amadora',
    intro: 'Amadora is one of the densest municipalities in Greater Lisbon, and Prime Estores serves its entire area with electric and manual blind installation and repair. Our high frequency of jobs in this municipality ensures fast response times.',
    detail: 'With a population living mostly in apartments, Amadora has strong demand for roller blinds and compact electric blinds for balconies and windows. We have specific solutions for apartment blocks and condominiums, with competitive volume pricing.',
  },
  loures: {
    title: 'Blind Installation & Repair in Loures | Prime Estores',
    description: 'Electric and manual blinds in Loures, Sacavém, Moscavide and Prior Velho. Professional installation with warranty. Free, no-obligation quote from Prime Estores.',
    keywords: 'blinds Loures, electric blinds Loures, blind repair Loures, blinds Sacavém, blinds Moscavide, blind installation Loures',
    intro: 'Prime Estores covers the Loures municipality with blind installation and repair services. From the riverside strip of Sacavém and Moscavide to the more rural areas inland, we travel to every locality quickly and professionally.',
    detail: 'Loures has great housing diversity, from modern apartments in Sacavém and Prior Velho to villas in more remote localities. We have solutions for every type of window and budget, always with installation included in the price.',
  },
  odivelas: {
    title: 'Blind Installation & Repair in Odivelas | Prime Estores',
    description: 'Electric and manual blinds in Odivelas, Pontinha, Famões and Ramada. Professional installation and urgent repairs. Free quote from Prime Estores. Call now.',
    keywords: 'blinds Odivelas, electric blinds Odivelas, blind repair Odivelas, blinds Pontinha, blind installation Odivelas',
    intro: 'Prime Estores serves the Odivelas municipality, one of the fastest-growing in Greater Lisbon over the last decade. With high demand for electric blind installation, we keep a frequent schedule in this municipality to guarantee quick service.',
    detail: 'Odivelas is a predominantly urban municipality, with a high concentration of apartments and condominiums. Electric roller blinds and motorized venetian blind systems are the most requested solutions in this area.',
  },
  'vila-franca-de-xira': {
    title: 'Blind Installation in Vila Franca de Xira | Prime Estores',
    description: 'Electric and manual blinds in Vila Franca de Xira, Alverca, Vialonga and Forte da Casa. Installation with warranty. Free quote from Prime Estores.',
    keywords: 'blinds Vila Franca de Xira, blinds Alverca, blinds Vialonga, blind repair Vila Franca, blind installation Alverca',
    intro: 'Prime Estores covers the Vila Franca de Xira municipality, on the right bank of the Tagus. Alverca do Ribatejo, Vialonga, Forte da Casa and Alhandra are localities we serve regularly with electric and manual blind installation and repair.',
    detail: 'Vila Franca de Xira is a municipality with a great housing mix: established residential neighbourhoods in Alverca and expanding areas in Forte da Casa and Vialonga. We offer blind solutions tailored to every profile, with no extra travel cost.',
  },
  mafra: {
    title: 'Blind Installation & Repair in Mafra | Prime Estores',
    description: 'Electric and manual blinds in Mafra, Ericeira and Malveira. Professional installation with warranty. Prime Estores serves the whole Mafra council. Free quote.',
    keywords: 'blinds Mafra, electric blinds Mafra, blind repair Mafra, blinds Ericeira, blind installation Mafra',
    intro: 'Although it is a more peripheral municipality, Prime Estores travels regularly to Mafra and its council for blind installation and repair. Ericeira, with a strong presence of second homes, is one of the areas with the highest demand for electric blinds.',
    detail: 'In coastal areas such as Ericeira, blinds need to withstand humidity and sea wind. We recommend motors with IP44 protective housing or higher and reinforced guides to ensure durability in these demanding environments.',
  },
  sesimbra: {
    title: 'Blind Installation & Repair in Sesimbra | Prime Estores',
    description: 'Electric and manual blinds in Sesimbra, Quinta do Conde and Santana. Professional installation for homes and holiday homes. Free quote from Prime Estores.',
    keywords: 'blinds Sesimbra, electric blinds Sesimbra, blind repair Sesimbra, blinds Quinta do Conde, blind installation Sesimbra',
    intro: 'Sesimbra is a coastal area with high demand for quality blinds, especially in second homes and holiday villas. Prime Estores travels regularly to the municipality for the installation of electric and motorized blinds.',
    detail: 'The intense sun exposure in Sesimbra, especially in summer, makes efficient shading essential for indoor comfort. We install blinds with reflective slats and blackout fabric that significantly reduce indoor temperature without blocking ventilation.',
  },
  palmela: {
    title: 'Blind Installation & Repair in Palmela | Prime Estores',
    description: 'Electric and manual blinds in Palmela, Pinhal Novo and Quinta do Anjo. Professional installation with warranty. Free, no-obligation quote from Prime Estores.',
    keywords: 'blinds Palmela, electric blinds Palmela, blind repair Palmela, blinds Pinhal Novo, blind installation Palmela',
    intro: 'Prime Estores serves the Palmela municipality, including Palmela centre, Pinhal Novo and Quinta do Anjo. This is a municipality experiencing housing growth, with many recent builds choosing electric blind systems from the construction phase.',
    detail: 'Pinhal Novo is the most populous locality in the municipality and where we intervene most frequently. We install electric blinds in condominiums and villas with integrated home automation, taking advantage of the construction phase for built-in wiring.',
  },
};
