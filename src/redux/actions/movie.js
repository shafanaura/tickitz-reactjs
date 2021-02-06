import http from "../../helpers/http";

export const movie = (title) => {
	return async (dispatch) => {
		const params = new URLSearchParams();
		params.append("title", title);
		try {
			dispatch({
				type: "SET_CREATE_MOVIE_MESSAGE",
				payload: "",
			});
			const results = await http(this.props.auth.token).post(`movies`, params);
			localStorage.setItem("token", results.data.token);
			dispatch({
				type: "CREATE_MOVIE",
				payload: results.data.token,
			});
		} catch (err) {
			const { message } = err.response.data;
			dispatch({
				type: "SET_CREATE_MOVIE_MESSAGE",
				payload: message,
			});
		}
	};
};

export const getAllMovie = () => {
	return async (dispatch) => {
		const response = await http().get(`movies`);
		dispatch({
			type: "GET_ALL_MOVIE",
			payload: response.data.results,
		});
		dispatch({
			type: "TOGGLE_MOVIE_LOADING",
		});
	};
};

export const getMovieDetail = (id) => {
	return async (dispatch) => {
		const response = await http().get(`movies/${id}`);
		dispatch({
			type: "GET_MOVIE_DETAIL",
			payload: response.data.results,
		});
		dispatch({
			type: "TOGGLE_MOVIE_LOADING",
		});
	};
};
