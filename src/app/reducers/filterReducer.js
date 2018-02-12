const filter = (state = [], action) => {
  switch (action.type) {
    case "FILTER_LIST":
      state = action.payload;
      break;
  }
  return state;
};

export default filter;
