import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
//import Api from '../api/api';
import { sendAlarmCoords } from '../api/api';
import axios from 'axios';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* sendAlarm(action) {
  try {
    const user = yield call(sendAlarmCoords, {
      "alert": {
        "message": "from saga",
        "latitude": 40,
        "longitude": 40,
        "unique_wristo_id": "14"
      }
    });
    console.log("user111", user);
    yield put({ type: "ADD_ALARM", payload: user.data });
  } catch (e) {
    console.log("hello error");
  }
}

function* mySaga() {
  yield takeEvery("ALARM_BUTTON_CLICK", sendAlarm);
}

function* mySaga() {
  yield takeLatest("ALARM_BUTTON_CLICK", sendAlarm);
}

export default mySaga;

//axios.post, 'https://wristo-platform-backend-stg.herokuapp.com/api/v1/alerts', {"alert": { "message": "from saga", "latitude": 40, "longitude": 40,"unique_wristo_id": "14"}}