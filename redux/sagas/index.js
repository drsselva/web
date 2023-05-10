import { put, takeEvery, all, take } from 'redux-saga/effects';
import axios from 'axios';
import Helper from '../../Helper/helper.js';

const backendAPI = Helper.backendAPI();

const delay = (ms) => new Promise((res) => setTimeout(res, ms));



function* loginUsers(data) {
  try {
    yield put({ type: 'SET_LOGIN' });
    const response = yield Helper.GetData(backendAPI );
    yield put({ type: 'SET_LOGIN_SUCCESS', data: response });
  } catch (e) {
    yield put({ type: 'SET_LOGIN_SUCCESS', error: '' });
  }
}

function* signupUsers(data) {
  try {
    yield put({ type: 'SET_SIGNUP' });
    const response = yield Helper.PostData(backendAPI + 'createUser', data.payload);
    yield put({ type: 'SET_SIGNUP_SUCCESS', data: response });
  } catch (e) {
    yield put({ type: 'SET_SIGNUP_SUCCESS', error: '' });
  }
}


function* actionWatcher() {

  yield takeEvery("SIGNUP_REQUEST", signupUsers);

  yield takeEvery("LOGIN_REQUEST", loginUsers);



}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
