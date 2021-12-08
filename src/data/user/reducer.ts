import {Types} from './action';

export interface Credentials {
  email: string;
  password: string;
}

export interface UserInfo {
  avatar: any | null;
  avatar_url: any | null;
  created_at: Date;
  email: string;
  id: string;
  name: string;
  updated_at: Date;
}

export interface UserState {
  token: string | null;
  userInfo: UserInfo | null;
}

const initialStates: UserState = {
  token: null,
  userInfo: null,
};

export default function (state = initialStates, actions: any) {
  switch (actions.type) {
    case Types.logout:
      return initialStates;
    case Types.setUserToken:
      const {token, userInfo} = actions;
      return {
        ...state,
        token,
        userInfo,
      };
    case Types.setUpdateUser:
      const {updateUserInfo} = actions;
      return {
        ...state,
        userInfo: updateUserInfo,
      };
    default:
      return state;
  }
}
