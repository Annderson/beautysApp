import {Types} from './action';
import {UserAppointment} from './types';

export interface UserAppointmentState {
  cooperatorsSchedule: UserAppointment[];
  isLoading: boolean;
  schedules: UserAppointment[];
}

const initialStates: UserAppointmentState = {
  cooperatorsSchedule: [],
  isLoading: false,
  schedules: [],
};

export default function (state = initialStates, actions: any) {
  switch (actions.type) {
    case Types.setSchedule:
      const {schedules} = actions;
      return {
        ...state,
        schedules,
      };
    case Types.setCooperatorsSchedule:
      const {cooperatorsSchedule} = actions;
      return {
        ...state,
        cooperatorsSchedule,
      };
    default:
      return state;
  }
}
