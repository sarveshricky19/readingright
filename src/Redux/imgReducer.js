

const intialState = {
  images: []
};

export const img = (state = intialState, action) => {
  switch (action.type) {
    case "imgFetch":
      return {
        ...state,
        images: action.payload
      };
    default:
      return {
        ...state
      };
  }
};
