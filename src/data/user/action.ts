import {Credentials, UserInfo, UserState} from './reducer';

export enum Types {
  login = 'LOGIN',
  logout = 'LOGOUT',
  registerUser = 'REGISTER_USER',
  setUpdateUser = 'SET_UPDATE_USER',
  setUserToken = 'SET_USER_TOKEN',
  updateUser = 'UPDATE_USER',
  tryToLogin = 'LOGIN/TRY_LOGIN',
}

export interface TryLoginRequest {
  type: Types;
}

export interface LogoutResponse {
  type: Types;
}

export interface UserAccount {
  email: string;
  name: string;
  password: string;
}

export interface UpdateUserAccount {
  email: string;
  name: string;
  password: string;
  old_password: string;
}

export interface UpdateUserRequest {
  updateUser: UpdateUserAccount;
  type: Types;
}

export interface RegisterUserRequest {
  userAccount: UserAccount;
  type: Types;
}

export interface UserTokenResponse {
  type: Types;
  token: string | null;
  userInfo: UserInfo | null;
}

export interface UpdateUserResponse {
  type: Types;
  updateUserInfo: UserInfo | null;
}

export interface LoginRequest {
  type: Types;
  credentials: Credentials;
}

export const Actions = {
  login: (credentials: Credentials): LoginRequest => ({
    type: Types.login,
    credentials,
  }),
  logout: (): LogoutResponse => ({
    type: Types.logout,
  }),
  registerUser: (userAccount: UserAccount): RegisterUserRequest => ({
    userAccount,
    type: Types.registerUser,
  }),
  updateUser: (updateUser: UpdateUserAccount): UpdateUserRequest => ({
    updateUser,
    type: Types.updateUser,
  }),
  setUpdateUser: (updateUserInfo: UserInfo): UpdateUserResponse => ({
    updateUserInfo,
    type: Types.setUpdateUser,
  }),
  setUser: (user: UserState): UserTokenResponse => ({
    type: Types.setUserToken,
    token: user.token,
    userInfo: user.userInfo,
  }),
  tryToLogin: (): TryLoginRequest => ({
    type: Types.tryToLogin,
  }),
};
