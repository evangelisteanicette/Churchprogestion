export type UserRole = "admin" | "manager" | "member" | "viewer";

export type AppUser = {
  id: string;
  email: string;
  phone?: string;
  full_name: string;
  avatar_url?: string;
  role: UserRole;
  church_id: string;
  created_at: string;
};

export type Church = {
  id: string;
  name: string;
  address: string;
  city: string;
  country: string;
  phone?: string;
  email?: string;
  logo_url?: string;
  created_at: string;
};

export type Notification = {
  id: string;
  user_id: string;
  title: string;
  message: string;
  type: "info" | "warning" | "success" | "error";
  read: boolean;
  created_at: string;
};

export type PaginationParams = {
  page: number;
  limit: number;
};

export type ApiResponse<T> = {
  data: T | null;
  error: string | null;
  count?: number;
};
