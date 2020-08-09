import sharedState from "./stateModels/shared";

const sharedReducer = (state = sharedState, action) => {
  switch (action.type) {
    default:
      return {
        ...state,
      };
  }
};

export default sharedReducer;
