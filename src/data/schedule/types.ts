export interface User {
  avatar: any | null;
  avatar_url: any | null;
  created_at: Date;
  email: string;
  id: string;
  name: string;
  updated_at: Date;
}

export interface UserAppointment {
  id: string;
  cooperator_id: string;
  user_id: string;
  date: Date;
  created_at: Date;
  updated_at: Date;
  procedure_id: string;
  canceled_at: Date | null;
  user: User;
}
