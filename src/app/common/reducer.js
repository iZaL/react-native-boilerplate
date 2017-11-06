import {ACTION_TYPES} from './actions';

export const COUNTRY_KEY = 'COUNTRY_KEY';
export const BOOTSTRAPPED_STORAGE_KEY = 'BOOTSTRAPPED';
export const LANGUAGE_STORAGE_KEY = 'APP_LOCALE';
export const PUSH_TOKEN_KEY = 'PUSH_TOKEN_KEY';

const initialState = {
  bootstrapped: false,
  booted: false,
  notifications: {
    message: null,
    messageType: null,
  },
  language: 'ar',
};

export default function appReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ACTION_TYPES.BOOTSTRAPPED:
      return {...state, bootstrapped: action.value};
    case ACTION_TYPES.BOOT_REQUEST:
      return {...state, booted: false};
    case ACTION_TYPES.BOOT_SUCCESS:
      return {...state, booted: true};
    case ACTION_TYPES.SET_NOTIFICATION:
      return {
        ...state,
        notifications: {
          ...state.notifications,
          message: action.payload.message,
          messageType: action.payload.messageType,
        },
      };
    case ACTION_TYPES.DISMISS_NOTIFICATION:
      return {
        ...state,
        notifications: {
          ...state.notifications,
          message: null,
          type: null,
        },
      };
    case ACTION_TYPES.SET_LANGUAGE_SUCCESS:
      return {
        ...state,
        language: action.language,
      };
    default:
      return state;
  }
}
