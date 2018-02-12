const setAlarm = (state = { lat: 0, lon: 0 }, action) => {
  switch (action.type) {
    case "ADD_ALARM":
      state = {
        ...state,
        result: action.payload
      };
      break;
  }
  return state;
};

export default setAlarm;
