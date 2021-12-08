import {Procedure} from './types';

export enum Types {
  getProcedure = 'GET_PROCEDURE',
  setProcedure = 'SET_PROCEDURE',
}

export interface ProcedureRequest {
  type: Types;
}

export interface ProcedureResponse {
  procedures: Procedure[];
  proceduresMap: any;
  type: Types;
}

export const Actions = {
  getProcedure: (): ProcedureRequest => ({
    type: Types.getProcedure,
  }),
  setProcedure: (
    procedures: Procedure[],
    proceduresMap: any,
  ): ProcedureResponse => ({
    procedures,
    proceduresMap,
    type: Types.setProcedure,
  }),
};
