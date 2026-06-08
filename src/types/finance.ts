export type TransactionType = "recette" | "depense";

export type TransactionCategory =
  | "don"
  | "offrande"
  | "collecte"
  | "sponsor"
  | "vente"
  | "location"
  | "communication"
  | "transport"
  | "hebergement"
  | "restauration"
  | "sonorisation"
  | "decoration"
  | "impression"
  | "honoraires"
  | "securite"
  | "autre";

export type Transaction = {
  id: string;
  church_id: string;
  event_id?: string;
  type: TransactionType;
  category: TransactionCategory;
  label: string;
  amount: number;
  date: string;
  payment_method: "especes" | "mobile_money" | "virement" | "cheque" | "autre";
  responsible?: string;
  receipt_url?: string;
  notes?: string;
  created_at: string;
};

export type Budget = {
  id: string;
  event_id: string;
  category: TransactionCategory;
  label: string;
  previsionnel: number;
  reel: number;
  notes?: string;
};

export type FinanceSummary = {
  total_recettes: number;
  total_depenses: number;
  solde: number;
  previsionnel_recettes: number;
  previsionnel_depenses: number;
  ecart: number;
};
