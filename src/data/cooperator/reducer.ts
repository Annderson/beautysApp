import {Types} from './action';
import {Cooperator} from './types';

export interface CooperatorState {
  isLoading: boolean;
  cooperators: Cooperator[];
  cooperatorsMap: any | null;
}

const initialStates: CooperatorState = {
  isLoading: false,
  cooperators: [],
  cooperatorsMap: null,
};

export default function (state = initialStates, actions: any) {
  switch (actions.type) {
    case Types.setCooperator:
      const {cooperators, cooperatorsMap} = actions;
      return {
        ...state,
        cooperators,
        cooperatorsMap,
      };
    default:
      return state;
  }
}
