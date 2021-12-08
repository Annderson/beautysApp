import axios, {AxiosRequestConfig} from 'axios';

const instanceAxios = axios.create({
  baseURL: 'http://192.168.1.254:3333',
  timeout: 2000,
  headers: {
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
  responseType: 'json',
});

let tokenInterceptor: number | undefined;

const removeTokenInterceptor = (): void => {
  if (tokenInterceptor !== undefined) {
    instanceAxios.interceptors.request.eject(tokenInterceptor);
    tokenInterceptor = undefined;
  }
};

const createTokenInterceptor = (token: string): void => {
  if (tokenInterceptor !== undefined) {
    removeTokenInterceptor();
  }

  tokenInterceptor = instanceAxios.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const newConfig = {...config};
      newConfig.headers.Authorization = `Bearer ${token}`;
      return newConfig;
    },
  );
};

export default {
  get: instanceAxios.get,
  post: instanceAxios.post,
  put: instanceAxios.put,
  delete: instanceAxios.delete,
  createTokenInterceptor,
};
