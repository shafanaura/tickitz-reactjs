import http from "../../helpers/http";

export const getShowTime = (date, location, movie) => {
	return async (dispatch) => {
		const data = new URLSearchParams();
		data.append("date", date);
		data.append("location", location);
		data.append("movie", movie);
		const response = await http().get(`showtimes?${data.toString()}`);
		dispatch({
			type: "GET_SHOWTIME",
			payload: response.data.results,
		});
		dispatch({
			type: "TOGGLE_SHOWTIME_LOADING",
		});
	};
};
