/* eslint-disable no-plusplus */
function rentabilite_brute_calculation(
  loyer: number,
  cout_achat: number,
  travaux?: number,
  frais_mobilier?: number,
  frais_agence?: number
): number {
  return (
    Math.round(
      (loyer * 12 * 10000) /
        (cout_achat + (travaux ?? 0) + (frais_agence ?? 0) + (frais_mobilier ?? 0))
    ) / 100
  );
}
function rentabilite_nette_calculation(
  loyer: number,
  cout_achat: number,
  taxe_fonciere: number,
  charge_copro: number,
  assurance_gli: number,
  assurance_pno: number,
  cfe: number,
  travaux?: number,
  frais_comptable?: number,
  frais_mobilier?: number,
  frais_agence?: number
): number {
  return (
    Math.round(
      ((loyer * 12 -
        taxe_fonciere -
        charge_copro -
        assurance_gli -
        assurance_pno -
        cfe -
        (frais_comptable ?? 0)) *
        10000) /
        (cout_achat + (travaux ?? 0) + (frais_agence ?? 0) + (frais_mobilier ?? 0))
    ) / 100
  );
}

function create_final_projects(projects_drafts: IProjet[]) {
  const result: IProjet[] = [];
  for (let index: number = 0; index < projects_drafts.length; index++) {
    const element = projects_drafts[index];
    element.rentabilite_brute = rentabilite_brute_calculation(
      element.loyer_mensuel,
      element.prix_achat,
      element.cout_travaux,
      element.cout_mobilier,
      element.frais_agence
    );
    element.rentabilite_nette = rentabilite_nette_calculation(
      element.loyer_mensuel,
      element.prix_achat,
      element.taxe_fonciere,
      element.charge_copro,
      element.assurance_gli,
      element.assurance_pno,
      element.cfe,
      element.cout_travaux,
      element.frais_comptable,
      element.cout_mobilier,
      element.frais_agence
    );
    result.push(element);
  }
  return result;
}

export interface IProjet {
  id: number;
  title: string;
  description: string;
  fullAddress: string;
  type_habitation: string;
  superficie: number;
  particularites: string;
  etage: number;
  prix_achat: number;
  frais_agence: number;
  cout_notaire: number;
  cout_mobilier: number;
  cout_travaux: number;
  frais_banque: number;
  frais_banque_garantie: number;
  montant_pret: number;
  taux_interet: number;
  duree_pret: number;
  taux_assurance: number;
  loyer_mensuel: number;
  taxe_fonciere: number;
  charge_copro: number;
  frais_comptable: number;
  assurance_pno: number;
  assurance_gli: number;
  cfe: number;
  autres_charges: number;
  chauffage: 'electrique' | 'gaz';
  dpe: string;
  ges: string;
  duree_projet_apres_signature: number;
  formule_choisie: string;
  images_apres: IImages;
  images_avant: IImages;
  rentabilite_brute: number;
  rentabilite_nette: number;
}

interface IImages {
  entree?: string[];
  salon: string[];
  cuisine?: string[];
  salle_de_bain: string[];
  toilettes?: string[];
  chambre1?: string[];
  chambre2?: string[];
  chambre3?: string[];
  balcon?: string[];
  buanderie?: string[];
}

const projects_drafts: IProjet[] = [
  {
    id: 0,
    rentabilite_nette: 0,
    rentabilite_brute: 0,
    title: 'Rénovation complète',
    description: 'Bien avec cachet, une belle vue, calme et balcon',
    fullAddress: '83 rue de Rouffach, 68200, Mulhouse',
    type_habitation: 'T3',
    superficie: 57,
    particularites: 'balcon',
    etage: 3,
    prix_achat: 57000,
    frais_agence: 0,
    cout_notaire: 5622,
    cout_mobilier: 2396,
    cout_travaux: 6240,
    frais_banque: 666,
    frais_banque_garantie: 1160,
    montant_pret: 62402,
    taux_interet: 3.13,
    duree_pret: 20,
    taux_assurance: 0.14,
    loyer_mensuel: 695,
    taxe_fonciere: 482,
    charge_copro: 450,
    frais_comptable: 300,
    assurance_pno: 146,
    assurance_gli: 240,
    cfe: 223,
    autres_charges: 0,
    chauffage: 'electrique',
    dpe: 'E',
    ges: 'C',
    duree_projet_apres_signature: 25,
    formule_choisie: 'starter',
    images_apres: {
      salon: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/t8ejawllyxwtewueabki.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/evps3jpojby3lipavqtm.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676695/Immobilier/83%20rue%20de%20rouffach/ezjm0jhlqx0hh38kzeq0.webp',
      ],
      entree: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/zsknaapk9jfue0znrbee.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676695/Immobilier/83%20rue%20de%20rouffach/gfgbj2ezn8eubkf7yu03.webp',
      ],
      salle_de_bain: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/yemaamre2qh4anafrqtz.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676695/Immobilier/83%20rue%20de%20rouffach/bdquneqvqmujrrc95xg3.webp',
      ],
      balcon: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/t6clslzg1kb9dldhxkxf.webp',
      ],
      chambre1: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/djdfo82m8gzi6qyp4jfq.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/mmfcsnewt6wclxrogqzf.webp',
      ],
      chambre2: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/vf2n9lc6uytfbgc1dzyg.webp',
      ],
      buanderie: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/g08bggnycpgljb6moypg.webp',
      ],
      cuisine: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/fulazqalpkzxadhpvcf8.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/ne67xgiax5r2lhycs6xe.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/fyxezmbhpwizwdf8wirf.webp',
      ],
    },
    images_avant: {
      salon: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/t8ejawllyxwtewueabki.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/evps3jpojby3lipavqtm.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676695/Immobilier/83%20rue%20de%20rouffach/ezjm0jhlqx0hh38kzeq0.webp',
      ],
      entree: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/zsknaapk9jfue0znrbee.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676695/Immobilier/83%20rue%20de%20rouffach/gfgbj2ezn8eubkf7yu03.webp',
      ],
      salle_de_bain: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/yemaamre2qh4anafrqtz.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676695/Immobilier/83%20rue%20de%20rouffach/bdquneqvqmujrrc95xg3.webp',
      ],
      balcon: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/t6clslzg1kb9dldhxkxf.webp',
      ],
      chambre1: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/djdfo82m8gzi6qyp4jfq.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/mmfcsnewt6wclxrogqzf.webp',
      ],
      chambre2: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/vf2n9lc6uytfbgc1dzyg.webp',
      ],
      buanderie: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/g08bggnycpgljb6moypg.webp',
      ],
      cuisine: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/fulazqalpkzxadhpvcf8.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/ne67xgiax5r2lhycs6xe.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/fyxezmbhpwizwdf8wirf.webp',
      ],
    },
  },
  {
    id: 1,
    rentabilite_brute: 0,
    rentabilite_nette: 0,
    title: 'Rénovation complète',
    description: 'Bien avec cachet, une belle vue, calme et balcon',
    fullAddress: '83 rue de Rouffach, 68200, Mulhouse',
    type_habitation: 'T3',
    superficie: 57,
    particularites: 'balcon',
    etage: 3,
    prix_achat: 57000,
    frais_agence: 0,
    cout_notaire: 5622,
    cout_mobilier: 2396,
    cout_travaux: 6240,
    frais_banque: 666,
    frais_banque_garantie: 1160,
    montant_pret: 62402,
    taux_interet: 3.13,
    duree_pret: 20,
    taux_assurance: 0.14,
    loyer_mensuel: 695,
    taxe_fonciere: 482,
    charge_copro: 450,
    frais_comptable: 300,
    assurance_pno: 146,
    assurance_gli: 240,
    cfe: 223,
    autres_charges: 0,
    chauffage: 'electrique',
    dpe: 'E',
    ges: 'C',
    duree_projet_apres_signature: 25,
    formule_choisie: 'starter',
    images_apres: {
      salon: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/t8ejawllyxwtewueabki.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/evps3jpojby3lipavqtm.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676695/Immobilier/83%20rue%20de%20rouffach/ezjm0jhlqx0hh38kzeq0.webp',
      ],
      entree: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/zsknaapk9jfue0znrbee.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676695/Immobilier/83%20rue%20de%20rouffach/gfgbj2ezn8eubkf7yu03.webp',
      ],
      salle_de_bain: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/yemaamre2qh4anafrqtz.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676695/Immobilier/83%20rue%20de%20rouffach/bdquneqvqmujrrc95xg3.webp',
      ],
      balcon: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/t6clslzg1kb9dldhxkxf.webp',
      ],
      chambre1: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/djdfo82m8gzi6qyp4jfq.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/mmfcsnewt6wclxrogqzf.webp',
      ],
      chambre2: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/vf2n9lc6uytfbgc1dzyg.webp',
      ],
      buanderie: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/g08bggnycpgljb6moypg.webp',
      ],
      cuisine: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/fulazqalpkzxadhpvcf8.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/ne67xgiax5r2lhycs6xe.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/fyxezmbhpwizwdf8wirf.webp',
      ],
    },
    images_avant: {
      salon: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/t8ejawllyxwtewueabki.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/evps3jpojby3lipavqtm.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676695/Immobilier/83%20rue%20de%20rouffach/ezjm0jhlqx0hh38kzeq0.webp',
      ],
      entree: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/zsknaapk9jfue0znrbee.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676695/Immobilier/83%20rue%20de%20rouffach/gfgbj2ezn8eubkf7yu03.webp',
      ],
      salle_de_bain: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/yemaamre2qh4anafrqtz.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676695/Immobilier/83%20rue%20de%20rouffach/bdquneqvqmujrrc95xg3.webp',
      ],
      balcon: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/t6clslzg1kb9dldhxkxf.webp',
      ],
      chambre1: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/djdfo82m8gzi6qyp4jfq.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/mmfcsnewt6wclxrogqzf.webp',
      ],
      chambre2: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/vf2n9lc6uytfbgc1dzyg.webp',
      ],
      buanderie: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/g08bggnycpgljb6moypg.webp',
      ],
      cuisine: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/fulazqalpkzxadhpvcf8.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/ne67xgiax5r2lhycs6xe.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/fyxezmbhpwizwdf8wirf.webp',
      ],
    },
  },
  {
    id: 2,
    rentabilite_brute: 0,
    rentabilite_nette: 0,
    title: 'Rénovation complète',
    description: 'Bien avec cachet, une belle vue, calme et balcon',
    fullAddress: '83 rue de Rouffach, 68200, Mulhouse',
    type_habitation: 'T3',
    superficie: 57,
    particularites: 'balcon',
    etage: 3,
    prix_achat: 57000,
    frais_agence: 0,
    cout_notaire: 5622,
    cout_mobilier: 2396,
    cout_travaux: 6240,
    frais_banque: 666,
    frais_banque_garantie: 1160,
    montant_pret: 62402,
    taux_interet: 3.13,
    duree_pret: 20,
    taux_assurance: 0.14,
    loyer_mensuel: 695,
    taxe_fonciere: 482,
    charge_copro: 450,
    frais_comptable: 300,
    assurance_pno: 146,
    assurance_gli: 240,
    cfe: 223,
    autres_charges: 0,
    chauffage: 'electrique',
    dpe: 'E',
    ges: 'C',
    duree_projet_apres_signature: 25,
    formule_choisie: 'starter',
    images_apres: {
      salon: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/t8ejawllyxwtewueabki.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/evps3jpojby3lipavqtm.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676695/Immobilier/83%20rue%20de%20rouffach/ezjm0jhlqx0hh38kzeq0.webp',
      ],
      entree: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/zsknaapk9jfue0znrbee.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676695/Immobilier/83%20rue%20de%20rouffach/gfgbj2ezn8eubkf7yu03.webp',
      ],
      salle_de_bain: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/yemaamre2qh4anafrqtz.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676695/Immobilier/83%20rue%20de%20rouffach/bdquneqvqmujrrc95xg3.webp',
      ],
      balcon: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/t6clslzg1kb9dldhxkxf.webp',
      ],
      chambre1: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/djdfo82m8gzi6qyp4jfq.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/mmfcsnewt6wclxrogqzf.webp',
      ],
      chambre2: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/vf2n9lc6uytfbgc1dzyg.webp',
      ],
      buanderie: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/g08bggnycpgljb6moypg.webp',
      ],
      cuisine: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/fulazqalpkzxadhpvcf8.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/ne67xgiax5r2lhycs6xe.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/fyxezmbhpwizwdf8wirf.webp',
      ],
    },
    images_avant: {
      salon: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/t8ejawllyxwtewueabki.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/evps3jpojby3lipavqtm.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676695/Immobilier/83%20rue%20de%20rouffach/ezjm0jhlqx0hh38kzeq0.webp',
      ],
      entree: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/zsknaapk9jfue0znrbee.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676695/Immobilier/83%20rue%20de%20rouffach/gfgbj2ezn8eubkf7yu03.webp',
      ],
      salle_de_bain: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/yemaamre2qh4anafrqtz.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676695/Immobilier/83%20rue%20de%20rouffach/bdquneqvqmujrrc95xg3.webp',
      ],
      balcon: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/t6clslzg1kb9dldhxkxf.webp',
      ],
      chambre1: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/djdfo82m8gzi6qyp4jfq.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/mmfcsnewt6wclxrogqzf.webp',
      ],
      chambre2: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/vf2n9lc6uytfbgc1dzyg.webp',
      ],
      buanderie: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/g08bggnycpgljb6moypg.webp',
      ],
      cuisine: [
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/fulazqalpkzxadhpvcf8.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/ne67xgiax5r2lhycs6xe.webp',
        'https://res.cloudinary.com/dx96rdxwk/image/upload/v1700676696/Immobilier/83%20rue%20de%20rouffach/fyxezmbhpwizwdf8wirf.webp',
      ],
    },
  },
];

export const projects: IProjet[] = create_final_projects(projects_drafts);

export const _projectProfitability = [11.1, 10.1, 9.1, 11.2, 11.2];

export const _projectTotalCost = [11.1, 10.1, 9.1, 11.2, 9.9];
export const _projectOurCost = [11.1, 10.1, 9.1, 11.2, 9.9];
export const _projectRentPrice = [11.1, 10.1, 9.1, 11.2, 9.9];
export const _projectDuration = [25, 45, 10, 20, 40];
export const _projectFormulaChosen = ['starter', 'basic', 'starter', 'starter', 'premium'];
