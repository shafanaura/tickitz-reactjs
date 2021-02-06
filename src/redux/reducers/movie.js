const initialState = {
	movies: [],
	details: {},
	token: null,
	errorMsg: "",
};

const movieReducer = (state = initialState, action) => {
	switch (action.type) {
		case "CREATE_MOVIE": {
			return {
				...state,
				token: action.payload,
			};
		}
		case "SET_CREATE_MOVIE_MESSAGE": {
			return {
				...state,
				errorMsg: action.payload,
			};
		}
		case "GET_ALL_MOVIE": {
			return {
				...state,
				movies: action.payload,
			};
		}
		case "GET_MOVIE_DETAIL": {
			return {
				...state,
				details: action.payload,
			};
		}
		default: {
			return {
				...state,
			};
		}
	}
};

export default movieReducer;
