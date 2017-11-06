import APP_SAGA from 'app/common/sagas';
import AUTH_SAGA from 'auth/common/sagas';
import {all} from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([APP_SAGA, AUTH_SAGA]);
}
