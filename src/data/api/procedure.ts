import {Procedure} from '@data/procedure/types';
import endpoint from './endpoint';

export interface ProcedureResponse {
  id: string;
  name: string;
  price: string;
  created_at: string;
  updated_at: string;
}

const decodeProcedure = ({
  created_at,
  updated_at,
  ...res
}: ProcedureResponse): Procedure => ({
  ...res,
  created_at: new Date(created_at),
  updated_at: new Date(updated_at),
});

const getProcedure = async (): Promise<Procedure[]> => {
  const response = await endpoint.get('/procedure');
  const list = response.data.map(
    (item: ProcedureResponse): Procedure => decodeProcedure(item),
  );

  return list;
};

export default {
  getProcedure,
};
