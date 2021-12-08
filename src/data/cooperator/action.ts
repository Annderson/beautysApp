import {Cooperator} from './types';

export enum Types {
  getCooperator = 'GET_COOPERATOR',
  setCooperator = 'SET_COOPERATOR',
}

export interface CooperatorRequest {
  type: Types;
}

export interface CooperatorResponse {
  cooperators: Cooperator[];
  cooperatorsMap: any;
  type: Types;
}

export const Actions = {
  getCooperator: (): CooperatorRequest => ({
    type: Types.getCooperator,
  }),
  setCooperator: (
    cooperators: Cooperator[],
    cooperatorsMap: any,
  ): CooperatorResponse => ({
    cooperators,
    cooperatorsMap,
    type: Types.setCooperator,
  }),
};
