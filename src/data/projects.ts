/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

type Project = {
  id: string;
  name: string;
  client: string;
  city: string;
  country: string;
  lat: number;
  lng: number;
  type: string;
  materials: string[];
  year: number;
  description: string;
  image: string;
  isMaisonDeLuxe: boolean;
};

export const projects: Project[] = [
  {
    id: '1',
    name: 'Cartier Dubaï',
    client: 'Maison Cartier',
    city: 'Dubaï',
    country: 'Émirats Arabes Unis',
    lat: 25.2048,
    lng: 55.2708,
    type: 'Joaillerie',
    materials: ['Marqueterie papier', 'Feuille d\'or', 'Laiton brossé', 'Plâtre d\'art'],
    year: 2023,
    description: 'Décor monumental en marqueterie de papier texturé blanc et or pour le salon haute joaillerie du Flagship Cartier de Dubaï. Une œuvre architecturale florale ciselée manuellement dans nos ateliers parisiens.',
    image: '/images/cartier_dubai_1781350376882.jpg',
    isMaisonDeLuxe: true
  },
  {
    id: '2',
    name: 'Coqui',
    client: 'Collectionneur Privé',
    city: 'Paris',
    country: 'France',
    lat: 48.8566,
    lng: 2.3522,
    type: 'Résidentiel',
    materials: ['Laque de Chine', 'Paille dorée', 'Or fin 24K', 'Chêne noir'],
    year: 2024,
    description: 'Mobilier d\'art et table basse sculpturale sur mesure. Une réinterprétation contemporaine de la marqueterie de paille teintée de pigments précieux et scellée sous une laque de Chine polie miroir.',
    image: '/images/coqui_table_1781350361327.jpg',
    isMaisonDeLuxe: false
  },
  {
    id: '3',
    name: 'Akillis Dubaï',
    client: 'Maison Akillis',
    city: 'Dubaï',
    country: 'Émirats Arabes Unis',
    lat: 25.1054,
    lng: 55.1508, // Slightly altered coordinate to differentiate Akillis from Cartier on the Dubaï dot group
    type: 'Joaillerie',
    materials: ['Métaux brossés foncés', 'Nacre de goudron', 'Lumière LED intégrée', 'Acier noirci'],
    year: 2024,
    description: 'Agencement de joaillerie de luxe et habillage des présentoirs inspirés de l\'univers rock-géométrique. Un travail sophistiqué sur les angles facettés et les incisions métalliques sombres en contraste lumineux.',
    image: '/images/akillis_dubai_1781350388914.jpg',
    isMaisonDeLuxe: true
  },
  {
    id: '4',
    name: 'Superyacht Sirena',
    client: 'Armateur Privé / Yachting Club',
    city: 'Monaco',
    country: 'Monaco',
    lat: 43.7384,
    lng: 7.4246,
    type: 'Yacht',
    materials: ['Sycomore ondé', 'Cuir de parchemin', 'Bronze patiné', 'Nacre'],
    year: 2025,
    description: 'Aménagement d\'exception du grand salon panoramique d\'un superyacht de 85m. Panneaux muraux articulant sycomore ondé et parchemin d\'art véritable, rythmés par des inserts en bronze d\'art patiné à la main.',
    image: '/images/yacht_sirena_1781350401086.jpg',
    isMaisonDeLuxe: false
  },
  {
    id: '5',
    name: 'Hôtel Amazonia',
    client: 'The London Reserve Palace',
    city: 'Londres',
    country: 'Royaume-Uni',
    lat: 51.5074,
    lng: -0.1278,
    type: 'Hôtellerie',
    materials: ['Ébène du Gabon', 'Bronze d\'art coulé', 'Noyer d\'Amérique cannelé', 'Ambre'],
    year: 2022,
    description: 'Conception et fabrication du mobilier de prestige pour la suite présidentielle d\'un palace londonien historique, comprenant la console de réception monumentale et une série de tables d\'art hybrides.',
    image: '/images/amazonia_hotel_1781350417614.jpg',
    isMaisonDeLuxe: false
  },
  {
    id: '6',
    name: 'Appartement Place des Vosges',
    client: 'Esthète & Collectionneur d\'Art',
    city: 'Paris',
    country: 'France',
    lat: 48.8550, // Custom coordinate for separate Vosges cluster item
    lng: 2.3650,
    type: 'Résidentiel',
    materials: ['Enduit de chaux sculpté', 'Feuille d\'argent bruni', 'Pigments d\'ocre', 'Gesso'],
    year: 2023,
    description: 'Création d\'un écran mural monumental en relief continu, sculpté directement in-situ dans le plâtre frais et rehaussé d\'une feuille d\'argent bruni simulant les ondulations d\'un fleuve céleste.',
    image: '/images/appt_vosges_1781350430926.jpg',
    isMaisonDeLuxe: false
  },
  {
    id: '7',
    name: 'Louis Vuitton Ginza',
    client: 'Maison Louis Vuitton',
    city: 'Tokyo',
    country: 'Japon',
    lat: 35.6762,
    lng: 139.7651,
    type: 'Joaillerie', // Falls into Retail/Joaillerie sector category
    materials: ['Paille d\'indigo naturel', 'Vernis miroir', 'Incrustations laiton', 'Bois laqué'],
    year: 2025,
    description: 'Façonnage d\'un salon VIP complet habillé d\'une marqueterie de paille teintée aux pigments millénaires d\'indigo naturel s\'orientant de manière cinétique par rapport à la lumière nippone.',
    image: '/images/lv_tokyo_1781350446581.jpg',
    isMaisonDeLuxe: true
  },
  {
    id: '8',
    name: 'Suite Concorde - Palace de Crillon',
    client: 'Hôtel d\'Exception',
    city: 'Paris',
    country: 'France',
    lat: 48.8675, // Concorde / Palace
    lng: 2.3218,
    type: 'Hôtellerie',
    materials: ['Stuc marbre d\'art', 'Feuille d\'or 24K', 'Ébène macassar', 'Nacre blanche'],
    year: 2025,
    description: 'Restauration des fresques murales en stuc de marbre et création d\'un ensemble d\'armoires de bar d\'art en ébène de Macassar rehaussé de nacre et d\'un réseau de filets d\'or fin.',
    image: '/images/appt_vosges_1781350430926.jpg', // Reusing elegant Vosges texture for Paris hotel suite
    isMaisonDeLuxe: true
  },
  {
    id: '9',
    name: 'Chaumet Place Vendôme',
    client: 'Maison Chaumet',
    city: 'Paris',
    country: 'France',
    lat: 48.8672,
    lng: 2.3294,
    type: 'Joaillerie',
    materials: ['Marqueterie de paille d\'or', 'Laque mate', 'Laiton brossé', 'Plâtre d\'art'],
    year: 2023,
    description: 'Conception d\'un décor monumental d\'épis de blé en marqueterie de paille dorée pour le salon historique de la Maison Chaumet, Place Vendôme. Un travail d\'agencement joaillier d\'une finesse incomparable.',
    image: '/images/chaumet_vendome_1781351091759.jpg',
    isMaisonDeLuxe: true
  },
  {
    id: '10',
    name: 'Guerlain Champs-Élysées',
    client: 'Maison Guerlain',
    city: 'Paris',
    country: 'France',
    lat: 48.8718,
    lng: 2.3015,
    type: 'Joaillerie',
    materials: ['Laque de Chine noire', 'Poudre d\'or 24K', 'Bronze d\'art', 'Stuc sculpté'],
    year: 2024,
    description: 'Panneaux décoratifs monumentaux associant laque de Chine noire profonde et projections d\'or fin 24 carats imitant le vol d\'abeilles de prestige pour l\'agencement de la Maison de Beauté historique Guerlain.',
    image: '/images/guerlain_champs_1781351107096.jpg',
    isMaisonDeLuxe: true
  },
  {
    id: '11',
    name: 'Boucheron Place Vendôme',
    client: 'Maison Boucheron',
    city: 'Paris',
    country: 'France',
    lat: 48.8665,
    lng: 2.3288,
    type: 'Joaillerie',
    materials: ['Marqueterie de paille bleutée', 'Inserts de laiton poli', 'Stuc sculpté', 'Bronze d\'art'],
    year: 2025,
    description: 'Habillage mural cinétique en marqueterie de paille teintée aux nuances azur et cobalt pour le salon d\'apparat de Boucheron, vibrant au rythme des variations de lumières naturelles de la Place Vendôme.',
    image: '/images/boucheron_vendome_1781351122729.jpg',
    isMaisonDeLuxe: true
  },
  {
    id: '12',
    name: 'Villa Cap d\'Antibes',
    client: 'Propriétaire Privé',
    city: 'Cannes',
    country: 'France',
    lat: 43.5513,
    lng: 7.0128,
    type: 'Résidentiel',
    materials: ['Stuc marbre blanc', 'Nacre de Polynésie', 'Sycomore ondé', 'Feuille d\'or blanc'],
    year: 2025,
    description: 'Décor majestueux du hall d\'entrée d\'une bastide d\'exception au Cap d\'Antibes. Les murs de stuc de marbre blanc marient d\'infimes insertions de nacre fine et d\'or blanc pour des reflets changeants.',
    image: '/images/villa_cannes_1781351138149.jpg',
    isMaisonDeLuxe: false
  }
];
