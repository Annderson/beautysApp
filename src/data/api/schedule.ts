import {UserAppointment, User} from '@data/schedule/types';
import {MakeSchedule} from '@data/schedule/action';

import endpoint from './endpoint';

export interface UserResponse {
  avatar: any | null;
  avatar_url: any | null;
  created_at: string;
  email: string;
  id: string;
  name: string;
  updated_at: string;
}

export interface UserAppointmentResponse {
  id: string;
  cooperator_id: string;
  user_id: string;
  date: string;
  created_at: string;
  updated_at: string;
  procedure_id: string;
  canceled_at: string | null;
  user: UserResponse;
}

interface CancelSchedule {
  cooperator_id: string;
  date: string;
}

const decodeUser = ({created_at, updated_at, ...res}: UserResponse): User => ({
  ...res,
  created_at: new Date(created_at),
  updated_at: new Date(updated_at),
});

const decodeSchedule = ({
  canceled_at,
  created_at,
  date,
  updated_at,
  user,
  ...res
}: UserAppointmentResponse): UserAppointment => ({
  ...res,
  canceled_at: canceled_at ? new Date(canceled_at) : null,
  created_at: new Date(created_at),
  date: new Date(date),
  updated_at: new Date(updated_at),
  user: decodeUser(user),
});

const getSchedule = async (): Promise<UserAppointment[]> => {
  const response = await endpoint.get('/appointments/me');
  await getAllSchedule(6, 12, 2021);
  return response.data.map(
    (item: UserAppointmentResponse): UserAppointment => decodeSchedule(item),
  );
};

const getAllSchedule = async (
  day: number,
  month: number,
  year: number,
): Promise<UserAppointment[]> => {
  const response = await endpoint.get(
    `/appointments?day=${day}&month=${month}&year=${year}`,
  );
  return response.data.map(
    (item: UserAppointmentResponse): UserAppointment => decodeSchedule(item),
  );
};

const getCooperatorSchedule = async (
  cooperator_id: string,
  day: number,
  month: number,
  year: number,
): Promise<UserAppointment[]> => {
  const response = await endpoint.get(
    `/appointments/${cooperator_id}?day=${day}&month=${month}&year=${year}`,
  );
  return response.data.map(
    (item: UserAppointmentResponse): UserAppointment => decodeSchedule(item),
  );
};

const postMakeSchedule = async (makeSchedule: MakeSchedule): Promise<void> => {
  await endpoint.post('/appointments', makeSchedule);
};

const deleteSchedule = async (cancelSchedule: any): Promise<void> => {
  await endpoint.delete('/appointments/me', {
    data: {
      cooperator_id: cancelSchedule.cooperator_id,
      date: cancelSchedule.date,
    },
  });
};

export default {
  deleteSchedule,
  getAllSchedule,
  getSchedule,
  getCooperatorSchedule,
  postMakeSchedule,
};
