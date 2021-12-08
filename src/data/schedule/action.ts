import {UserAppointment} from './types';

export enum Types {
  cancelSchedule = 'CANCEL_SCHEDULE',
  getAllSchedule = 'GET_ALL_SCHEDULE',
  getCooperatorsSchedule = 'GET_COOPERATORS_SCHEDULE',
  getSchedule = 'GET_SCHEDULE',
  setSchedule = 'SET_SCHEDULE',
  setAllSchedule = 'SET_ALL_SCHEDULE',
  setCooperatorsSchedule = 'SET_COOPERATORS_SCHEDULE',
  makeSchedule = 'MAKE_SCHEDULE',
}

export interface MakeSchedule {
  cooperator_id: string;
  user_id: string;
  procedure_id: string;
  date: string;
}

export interface MakeScheduleRequest {
  makeSchedule: MakeSchedule;
  type: Types;
}

export interface ScheduleRequest {
  type: Types;
}

export interface AllScheduleRequest {
  day: number;
  month: number;
  year: number;
  type: Types;
}

export interface CooperatorsScheduleRequest {
  cooperator_id: string;
  day: number;
  month: number;
  year: number;
  type: Types;
}

export interface CooperatorsScheduleResponse {
  cooperatorsSchedule: UserAppointment[];
  type: Types;
}

export interface ScheduleCancelRequest {
  cooperator_id: string;
  date: Date;
  type: Types;
}

export interface ScheduleResponse {
  schedules: UserAppointment[];
  type: Types;
}

export const Actions = {
  cancelSchedule: (
    cooperator_id: string,
    date: Date,
  ): ScheduleCancelRequest => ({
    cooperator_id,
    date,
    type: Types.cancelSchedule,
  }),
  getCooperatorsSchedule: (
    cooperator_id: string,
    day: number,
    month: number,
    year: number,
  ): CooperatorsScheduleRequest => ({
    cooperator_id,
    day,
    month,
    year,
    type: Types.getCooperatorsSchedule,
  }),
  getSchedule: (): ScheduleRequest => ({
    type: Types.getSchedule,
  }),
  postMakeSchedule: (makeSchedule: MakeSchedule): MakeScheduleRequest => ({
    makeSchedule,
    type: Types.makeSchedule,
  }),
  setSchedule: (listSchedule: UserAppointment[]): ScheduleResponse => ({
    schedules: listSchedule,
    type: Types.setSchedule,
  }),
  setCooperatorsSchedule: (
    cooperatorsSchedule: UserAppointment[],
  ): CooperatorsScheduleResponse => ({
    cooperatorsSchedule,
    type: Types.setCooperatorsSchedule,
  }),
};
