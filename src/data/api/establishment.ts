import {Establishment} from '@data/establishment/types';
import endpoint from './endpoint';

/*
export const list = [
  {
    id: '1',
    image: 'salao1',
    name: '2beauty',
    address: 'Rua Teste 1',
    number: '12',
    cep: '13089-345',
    city: 'Sumare',
    cooperators: ['1', '2', '3'],
    procedures: ['1', '2', '4', '5'],
  },
  {
    id: '2',
    image: 'salao2',
    name: 'Acqua Hair',
    address: 'Rua Teste 2',
    number: '123',
    cep: '13089-345',
    city: 'Campinas',
    cooperators: ['1', '2', '3'],
    procedures: ['1', '2', '4', '5'],
  },
  {
    id: '3',
    image: 'salao3',
    name: 'Afrodite',
    address: 'Rua Teste 3',
    number: '42',
    cep: '13089-345',
    city: 'Campinas',
    cooperators: ['1', '2', '3'],
    procedures: ['1', '2', '4', '5'],
  },
  {
    id: '4',
    image: 'salao4',
    name: 'Stillu´s Hair',
    address: 'Rua Teste 4',
    number: '753',
    cep: '13089-345',
    city: 'Campinas',
    cooperators: ['1', '2', '3'],
    procedures: ['1', '2', '4', '5'],
  },
  {
    id: '6',
    image: 'salao6',
    name: 'Beleza da hora',
    address: 'Rua Teste 6',
    number: '753',
    cep: '13089-345',
    city: 'Campinas',
    cooperators: ['1', '2', '3'],
    procedures: ['1', '2', '4', '5'],
  },
  {
    id: '5',
    image: 'salao5',
    name: 'Capricho',
    address: 'Rua Teste 5',
    number: '324',
    cep: '13089-345',
    city: 'Valinhos',
    cooperators: ['1', '2', '3'],
    procedures: ['1', '2', '4', '5'],
  },
];
*/

export interface EstablishmentResponse {
  id: string;
  cnpj: string;
  nomeFantasia: string;
  razaoSocial: string;
  phone: string;
  cep: string;
  endereco: string;
  cidade: string;
  uf: string;
  created_at: Date;
  updated_at: Date;
  favorite: boolean;
}

const decodeEstablishment = ({
  created_at,
  updated_at,
  ...res
}: EstablishmentResponse): Establishment => ({
  ...res,
  created_at: new Date(created_at),
  updated_at: new Date(updated_at),
});

const getEstablishment = async (): Promise<any[]> => {
  const response = await endpoint.get('/establishment');
  const list = response.data.map(
    (item: EstablishmentResponse): Establishment => decodeEstablishment(item),
  );

  return list;
};

export default {
  getEstablishment,
};
