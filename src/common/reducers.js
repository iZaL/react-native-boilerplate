import appReducer from 'app/common/reducer';
import authReducer from 'auth/common/reducer';
import {combineReducers} from 'redux';
import Navigator from 'common/navigator';

const navReducer = (state, action) => {
  const newState = Navigator.router.getStateForAction(action, state);
  return newState || state;
};

const rootReducer = combineReducers({
  navigation: navReducer,
  appReducer,
  authReducer,
});

export default rootReducer;
