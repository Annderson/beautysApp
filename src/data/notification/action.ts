import {Notification} from './reducer';

export enum Types {
  show = 'SHOW',
  hide = 'HIDE',
}

export interface HideNotificationAction {
  type: Types;
}

export interface ShowNotificationAction {
  notification: Notification;
  type: Types;
}

export const Actions = {
  hideNotification: (): HideNotificationAction => ({
    type: Types.hide,
  }),
  showNotification: (notification: Notification): ShowNotificationAction => ({
    notification,
    type: Types.show,
  }),
};
