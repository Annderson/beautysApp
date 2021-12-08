import {Cooperator} from '@data/cooperator/types';
import endpoint from './endpoint';

export interface CooperatorResponse {
  id: string;
  name: string;
  phone: string;
  email: string;
  avatar: any | null;
  avatar_url: any | null;
  created_at: string;
  updated_at: string;
  procedure_id: string;
  estab_id: string;
}

const decodeCooperator = ({
  created_at,
  updated_at,
  ...res
}: CooperatorResponse): Cooperator => ({
  ...res,
  created_at: new Date(created_at),
  updated_at: new Date(updated_at),
});

const getCooperator = async (): Promise<Cooperator[]> => {
  const response = await endpoint.get('/cooperator');
  const list = response.data.map(
    (item: CooperatorResponse): Cooperator => decodeCooperator(item),
  );

  return list;
};

export default {
  getCooperator,
};
