import http from "../../helpers/http";

export const login = (email, password) => {
	return async (dispatch) => {
		const params = new URLSearchParams();
		params.append("email", email);
		params.append("password", password);
		try {
			dispatch({
				type: "SET_LOGIN_MESSAGE",
				payload: "",
			});
			const results = await http().post(`auth/login`, params);
			localStorage.setItem("token", results.data.token);
			dispatch({
				type: "LOGIN",
				payload: results.data.token,
			});
		} catch (err) {
			const { message } = err.response.data;
			dispatch({
				type: "SET_LOGIN_MESSAGE",
				payload: message,
			});
		}
	};
};

export const autoLogin = (payload) => {
	return (dispatch) => {
		dispatch({
			type: "LOGIN",
			payload,
		});
	};
};
