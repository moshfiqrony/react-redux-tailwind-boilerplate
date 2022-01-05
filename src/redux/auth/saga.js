import { all, fork, put, takeEvery } from "redux-saga/effects";
import { LOGIN_USER, LOGOUT_USER } from "../../constants/actionTypes";
import { loginUserSuccess, logoutUserSuccess } from "./actions";

function* loginUserDemo({ payload }) {
  localStorage.setItem('auth_token', 'moshfiqrony')
  yield put(loginUserSuccess('moshfiqrony'))
}

function* logoutUserDemo({ payload }) {
  localStorage.clear();
  yield put(logoutUserSuccess())
}

export function* watchLoginUser() {
  yield takeEvery(LOGIN_USER, loginUserDemo);
}

export function* watchLogoutUser() {
  yield takeEvery(LOGOUT_USER, logoutUserDemo);
}

export default function* rootSaga() {
  yield all([
    fork(watchLoginUser),
    fork(watchLogoutUser),
  ]);
}
