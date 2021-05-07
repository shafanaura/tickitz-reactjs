import http from "../../helpers/http";

export const login = (email, password) => {
  return async (dispatch) => {
    const params = new URLSearchParams();
    params.append("email", email);
    params.append("password", password);
    try {
      const response = await http().post(`auth/login`, params);
      localStorage.setItem("token", response.data.token);
      dispatch({
        type: "LOGIN",
        payload: response.data.token,
        message: response.data.message,
      });
    } catch (err) {
      const { message } = err.response.data;
      dispatch({
        type: "SET_AUTH_MESSAGE",
        payload: message,
      });
    }
  };
};

export const register = (email, password) => {
  return async (dispatch) => {
    const params = new URLSearchParams();
    params.append("email", email);
    params.append("password", password);
    try {
      const response = await http().post(`auth/register`, params);
      dispatch({
        type: "REGISTER",
        message: response.data.message,
      });
    } catch (err) {
      const { message } = err.response.data;
      dispatch({
        type: "SET_AUTH_MESSAGE",
        payload: message,
      });
    }
  };
};

export const autoLogin = (payload) => ({
  type: "LOGIN",
  payload,
});
