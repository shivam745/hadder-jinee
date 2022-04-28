const initialState = 0;

export const numCount = (state = initialState, action) => {
  switch (action.type) {
    case "ADDITION":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
