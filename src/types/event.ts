export type EventType =
  | "croisade"
  | "conference"
  | "retraite"
  | "campagne"
  | "culte"
  | "seminaire"
  | "autre";

export type EventStatus =
  | "planifie"
  | "en_cours"
  | "termine"
  | "annule";

export type Event = {
  id: string;
  church_id: string;
  name: string;
  type: EventType;
  status: EventStatus;
  location: string;
  city: string;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
  responsible_id: string;
  budget_previsionnel: number;
  budget_reel: number;
  description?: string;
  created_at: string;
  updated_at: string;
};

export type Authorization = {
  id: string;
  event_id: string;
  type: "prefecture" | "mairie" | "police" | "gendarmerie" | "autre";
  label: string;
  status: "pending" | "obtained" | "refused";
  request_date?: string;
  obtain_date?: string;
  notes?: string;
};

export type Communication = {
  id: string;
  event_id: string;
  channel: "radio" | "tv" | "reseaux_sociaux" | "affichage" | "porte_a_porte" | "autre";
  description: string;
  responsible?: string;
  status: "planifie" | "en_cours" | "fait";
  date?: string;
};

export type Invitation = {
  id: string;
  event_id: string;
  category: "artiste" | "pasteur" | "autorite" | "autre";
  name: string;
  church_or_org?: string;
  contact?: string;
  status: "invite" | "confirme" | "present" | "absent";
  notes?: string;
};

export type SecurityAgent = {
  id: string;
  event_id: string;
  name: string;
  role: "securite" | "medical" | "police" | "gendarmerie" | "autre";
  contact?: string;
  zone?: string;
};

export type Equipment = {
  id: string;
  event_id: string;
  category: "sonorisation" | "podium" | "eclairage" | "transport" | "autre";
  name: string;
  quantity: number;
  provider?: string;
  cost?: number;
  status: "planifie" | "reserve" | "livre" | "retourne";
};

export type MediaCoverage = {
  id: string;
  event_id: string;
  type: "photo" | "video" | "live" | "autre";
  responsible?: string;
  platform?: string;
  notes?: string;
};

export type DailyScheduleItem = {
  id: string;
  event_id: string;
  day_number: number;
  start_time: string;
  end_time: string;
  activity: string;
  responsible?: string;
  location?: string;
  notes?: string;
  order_index: number;
};
