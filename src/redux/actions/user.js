import http from "../../helpers/http";

export const getUser = (token) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "SET_USER_MESSAGE",
        payload: "",
        message: "",
      });
      const response = await http(token).get("user");
      dispatch({
        type: "GET_USER",
        payload: response.data.results,
        message: response.data.message,
      });
    } catch (err) {
      const { message } = err.response.data;
      dispatch({
        type: "SET_USER_MESSAGE",
        payload: message,
      });
    }
  };
};
