import {call, fork, put, select, takeLatest, all} from 'redux-saga/effects';
import {NavigationActions} from 'react-navigation';

import {ACTION_TYPES} from './actions';
import {API, AUTH_STORAGE_KEY} from './api';
import {SELECTORS} from './selectors';

import {
  ACTION_TYPES as APP_ACTION_TYPES,
  ACTIONS as APP_ACTIONS,
} from 'app/common/actions';
import {forgetItem, getItem, setItem} from 'common/storage';
import I18n from 'common/locale';
import {PUSH_TOKEN_KEY} from 'app/common/reducer';

function* login(action) {
  try {
    const state = yield select();
    const token = SELECTORS.getAuthToken(state);
    const pushTokenStorageKey = yield call(getItem, PUSH_TOKEN_KEY);

    const params = {
      ...action.credentials,
      pushtoken: pushTokenStorageKey,
    };

    const response = yield call(API.login, params, token);

    yield put({type: ACTION_TYPES.LOGIN_SUCCESS, payload: response.data});
    yield call(setItem, AUTH_STORAGE_KEY, response.data.api_token);

    // yield put({
    //   type: AUTH_ACTION_TYPES.SYNC_USER_TO_SOCKET,
    // });

    yield put(NavigationActions.back());
  } catch (error) {
    yield put({type: ACTION_TYPES.LOGIN_FAILURE, error});
    yield put(APP_ACTIONS.setNotification(error, 'error'));
  }
}

function* register(action) {
  try {
    const response = yield call(API.register, action.params);
    yield put({type: ACTION_TYPES.REGISTER_SUCCESS, payload: response.data});

    yield put(
      APP_ACTIONS.setNotification(I18n.t('registration_success'), 'success'),
    );
    yield put(NavigationActions.back());
  } catch (error) {
    yield put({type: ACTION_TYPES.REGISTER_FAILURE, error});
    yield put({
      type: APP_ACTION_TYPES.SET_NOTIFICATION,
      payload: {
        message: error,
        messageType: 'error',
      },
    });
  }
}

function* forgotPassword(action) {
  try {
    const emailPattern = /(.+)@(.+){2,}\.(.+){2,}/;

    if (!emailPattern.test(action.params.email)) {
      return yield put(APP_ACTIONS.setNotification('Invalid Email', 'error'));
    }

    const response = yield call(API.forgotPassword, action.params);

    yield put({
      type: ACTION_TYPES.FORGOT_PASSWORD_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put(APP_ACTIONS.setNotification(error, 'error'));
    yield put({type: ACTION_TYPES.FORGOT_PASSWORD_FAILURE, error});
  }
}

function* recoverPassword(action) {
  try {
    const response = yield call(API.recoverPassword, action.params);
    yield put({
      type: ACTION_TYPES.RECOVER_PASSWORD_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    yield put(APP_ACTIONS.setNotification(error, 'error'));
    yield put({type: ACTION_TYPES.RECOVER_PASSWORD_FAILURE, error});
  }
}

function* updatePassword(action) {
  try {
    const response = yield call(API.updatePassword, action.params);

    if (action.params.password !== action.params.password_confirmation) {
      return yield put(
        APP_ACTIONS.setNotification('Password does not match', 'error'),
      );
    }

    yield put({
      type: ACTION_TYPES.PASSWORD_UPDATE_SUCCESS,
      payload: response.data,
    });

    yield put(NavigationActions.back(null));
  } catch (error) {
    yield put(APP_ACTIONS.setNotification(error, 'error'));
    yield put({type: ACTION_TYPES.PASSWORD_UPDATE_FAILURE, error});
  }
}

function* logout() {
  yield call(forgetItem, AUTH_STORAGE_KEY);
}

// Monitoring Sagas
function* loginMonitor() {
  yield takeLatest(ACTION_TYPES.LOGIN_REQUEST, login);
}

function* logoutMonitor() {
  yield takeLatest(ACTION_TYPES.LOGOUT, logout);
}

function* registerMonitor() {
  yield takeLatest(ACTION_TYPES.REGISTER_REQUEST, register);
}

function* forgotPasswordMonitor() {
  yield takeLatest(ACTION_TYPES.FORGOT_PASSWORD_REQUEST, forgotPassword);
}

function* recoverPasswordMonitor() {
  yield takeLatest(ACTION_TYPES.RECOVER_PASSWORD_REQUEST, recoverPassword);
}
function* passwordUpdateMonitor() {
  yield takeLatest(ACTION_TYPES.PASSWORD_UPDATE_REQUEST, updatePassword);
}

const AUTH_SAGA = all([
  fork(loginMonitor),
  fork(logoutMonitor),
  fork(registerMonitor),
  fork(recoverPasswordMonitor),
  fork(forgotPasswordMonitor),
  fork(passwordUpdateMonitor),
]);

export default AUTH_SAGA;
