const initialState = {
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
		default: {
			return {
				...state,
			};
		}
	}
};

export default movieReducer;
