import {Types} from './action';
import {TypeNotification} from './types';

export interface Notification {
  duration?: number;
  message: string;
  title?: string;
  type: TypeNotification;
}

export interface NotificationState {
  notification: Notification | null;
}

const initialStates: NotificationState = {
  notification: null,
};

export default function (state = initialStates, {type, notification}: any) {
  switch (type) {
    case Types.hide:
      return initialStates;
    case Types.show:
      return {
        ...state,
        notification,
      };
    default:
      return state;
  }
}
