import http from "../../helpers/http";

export const genre = (name) => {
	return async (dispatch) => {
		const params = new URLSearchParams();
		params.append("name", name);
		try {
			dispatch({
				type: "SET_CREATE_GENRE_MESSAGE",
				payload: "",
			});
			const results = await http().post(`genres`, params);
			localStorage.setItem("token", results.data.token);
			dispatch({
				type: "CREATE_GENRE",
				payload: results.data.token,
			});
		} catch (err) {
			const { message } = err.response.data;
			dispatch({
				type: "SET_CREATE_GENRE_MESSAGE",
				payload: message,
			});
		}
	};
};
