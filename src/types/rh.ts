export type WorkerRole =
  | "coordinateur"
  | "intercesseur"
  | "louange"
  | "accueil"
  | "securite"
  | "medical"
  | "media"
  | "logistique"
  | "conducteur"
  | "volontaire"
  | "autre";

export type WorkerStatus = "actif" | "inactif" | "disponible" | "occupe";

export type Worker = {
  id: string;
  church_id: string;
  full_name: string;
  phone: string;
  email?: string;
  role: WorkerRole;
  status: WorkerStatus;
  skills?: string[];
  availability?: string;
  notes?: string;
  created_at: string;
};

export type Assignment = {
  id: string;
  worker_id: string;
  event_id: string;
  role: WorkerRole;
  zone?: string;
  shift_start?: string;
  shift_end?: string;
  status: "assigne" | "confirme" | "present" | "absent";
  notes?: string;
};

export type MobilizationGroup = {
  id: string;
  event_id: string;
  name: string;
  category: "femmes" | "jeunes" | "intercesseurs" | "volontaires" | "conducteurs" | "autre";
  leader?: string;
  contact?: string;
  members_count: number;
  notes?: string;
};
