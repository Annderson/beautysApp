export interface Establishment {
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
