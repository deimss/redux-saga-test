export function addAlarm(data) {
  return {
    type: "ADD_ALARM",
    payload: data
  }
}
export function clickAlarmButton(coords){
	return {
		type: "ALARM_BUTTON_CLICK",
		payload: coords
	}
}