import appReducer from '../reducer';
import {ACTION_TYPES} from '../actions';

const initialState = {
  bootstrapped: false,
  booted: false,
};

describe('App Component Store', () => {
  test('should return the initial state', () => {
    expect(appReducer(initialState, {type: 'UNDEFINED'})).toEqual(initialState);
  });

  test('app bootstraps', () => {
    expect(
      appReducer(initialState, {type: ACTION_TYPES.BOOT_SUCCESS}),
    ).toEqual({
      booted: true,
      bootstrapped: false,
      selectedCountry: 'Kuwait',
    });
  });
});
