import {Types} from './action';
import {Procedure} from './types';

export interface ProcedureState {
  isLoading: boolean;
  procedures: Procedure[];
  proceduresMap: any | null;
}

const initialStates: ProcedureState = {
  isLoading: false,
  procedures: [],
  proceduresMap: null,
};

export default function (state = initialStates, actions: any) {
  switch (actions.type) {
    case Types.setProcedure:
      const {procedures, proceduresMap} = actions;
      return {
        ...state,
        procedures,
        proceduresMap,
      };
    default:
      return state;
  }
}
