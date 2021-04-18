import http from "../../helpers/http";

export const userDetail = (token) => {
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

export const updateUser = (token, data) => {
  return async (dispatch) => {
    const params = new FormData();
    if (data.firstName) {
      params.append(data.firstName);
    }
    if (data.lastName) {
      params.append(data.lastName);
    }
    if (data.phoneNumber) {
      params.append(data.phoneNumber);
    }
    if (data.picture) {
      params.append(data.picture);
    }
    if (data.email) {
      params.append(data.email);
    }
    if (data.password) {
      params.append(data.password);
    }
    try {
      dispatch({
        type: "SET_USER_MESSAGE",
        message: "",
      });
      const response = await http(token).patch("user", params);
      dispatch({
        type: "UPDATE_USER",
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
