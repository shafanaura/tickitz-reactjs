const initialState = {
	showtimes: [],
	details: {},
	token: null,
	errorMsg: "",
};

const showtimeReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_SHOWTIME": {
			return {
				...state,
				showtimes: action.payload,
			};
		}
		default: {
			return {
				...state,
			};
		}
	}
};

export default showtimeReducer;
