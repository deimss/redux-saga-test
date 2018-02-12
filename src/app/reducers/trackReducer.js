const TrackReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TRACK":
      state = [...state, action.payload];
      break;
    case "DELETE_TRACK":
      state = action.payload;
      break;
  }
  return state;
};

export default TrackReducer;
