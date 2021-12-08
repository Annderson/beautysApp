import endpoint from '@data/api/endpoint';

export const getToken = (state: any) => state.user.token;

export const setTokenInterceptor = (token: string) =>
  endpoint.createTokenInterceptor(token);
