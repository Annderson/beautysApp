import {Establishment} from './types';

export enum Types {
  getEstablishment = 'GET_ESTABLISHMENT',
  setEstablishment = 'SET_ESTABLISHMENT',
  setLoading = 'SET_LOADING',
}

export interface EstablishmentRequest {
  type: Types;
}

export interface EstablishmentResponse {
  type: Types;
  establishments: Establishment[];
  establishmentsMap: any;
}

export interface SetIsLoading {
  type: Types;
  isLoading: boolean;
}

export const Actions = {
  getEstablishment: (): EstablishmentRequest => ({
    type: Types.getEstablishment,
  }),
  setEstablishment: (
    list: Establishment[],
    establishmentsMap: any,
  ): EstablishmentResponse => ({
    type: Types.setEstablishment,
    establishments: list,
    establishmentsMap,
  }),
  setLoading: (isLoading: boolean): SetIsLoading => ({
    type: Types.setLoading,
    isLoading,
  }),
};
