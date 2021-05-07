import http from "../../helpers/http";

export const showTime = (date, location, movie) => {
  return async (dispatch) => {
    try {
      const data = new URLSearchParams();
      data.append("date", date);
      data.append("location", location);
      data.append("movie", movie);
      const response = await http().get(`showtimes?${data.toString()}`);
      dispatch({
        type: "GET_SHOWTIME",
        payload: response.data.results,
        message: response.data.message,
      });
    } catch (err) {
      const { message } = err.response.data;
      dispatch({
        type: "SET_SHOWTIME_MESSAGE",
        payload: message,
      });
    }
  };
};

export const movieTime = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "SET_SHOWTIME_MESSAGE",
      });
      const response = await http().get(`movieShowtime/${id}`);
      dispatch({
        type: "MOVIE_SHOWTIME",
        payload: response.data.results,
        message: response.data.message,
      });
    } catch (err) {
      const { message } = err.response.data;
      dispatch({
        type: "SET_SHOWTIME_MESSAGE",
        payload: message,
      });
    }
  };
};
