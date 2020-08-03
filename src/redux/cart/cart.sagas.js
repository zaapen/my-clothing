import { takeLatest, put, call, all } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';
import { clearCart } from './cart.actions';

export function* clearCarOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCarOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
