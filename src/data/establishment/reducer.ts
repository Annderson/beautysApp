import {Types} from './action';
import {Establishment} from './types';

export interface EstablishmentState {
  isLoading: boolean;
  establishments: Establishment[];
  establishmentsMap: any | null;
}

const initialStates: EstablishmentState = {
  isLoading: false,
  establishments: [],
  establishmentsMap: null,
};

export default function (state = initialStates, actions: any) {
  switch (actions.type) {
    case Types.setEstablishment:
      const {establishments, establishmentsMap} = actions;
      return {
        ...state,
        establishments,
        establishmentsMap,
      };
    case Types.setLoading:
      const {isLoading} = actions;
      return {
        ...state,
        isLoading,
      };

    default:
      return state;
  }
}
