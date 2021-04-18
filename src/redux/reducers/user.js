const initialState = {
  data: {},
  detail: {},
  message: "",
  errorMsg: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER": {
      return {
        ...state,
        data: action.payload,
        message: action.message,
      };
    }
    case "UPDATE_USER": {
      return {
        ...state,
        detail: action.payload,
        message: action.message,
      };
    }
    case "SET_USER_MESSAGE": {
      return {
        ...state,
        errorMsg: action.payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default userReducer;
