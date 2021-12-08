import {Credentials, UserInfo, UserState} from '@data/user/reducer';
import {UpdateUserAccount, UserAccount} from '@data/user/action';

import endpoint from './endpoint';

export interface UserInfoResponse {
  avatar: any | null;
  avatar_url: any | null;
  created_at: string;
  email: string;
  id: string;
  name: string;
  updated_at: string;
}

const decodeUserInfo = ({
  created_at,
  updated_at,
  ...res
}: UserInfoResponse): UserInfo => ({
  ...res,
  created_at: new Date(created_at),
  updated_at: new Date(updated_at),
});

const login = async (credentials: Credentials): Promise<UserState> => {
  const response = await endpoint.post('/sessionsclient', credentials);
  endpoint.createTokenInterceptor(response.data.token);
  return {
    token: response.data.token,
    userInfo: decodeUserInfo(response.data.user_client),
  };
};

const registerUser = async (userAccount: UserAccount): Promise<void> => {
  await endpoint.post('/usersclient', userAccount);
};

const updateUser = async (userUpdate: UpdateUserAccount): Promise<UserInfo> => {
  const res = await endpoint.put('/profileclient', userUpdate);
  return decodeUserInfo(res.data);
};

export default {
  login,
  registerUser,
  updateUser,
};
