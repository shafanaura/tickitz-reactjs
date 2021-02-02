const initialState = {
	token: null,
	errorMsg: "",
};

const genreReducer = (state = initialState, action) => {
	switch (action.type) {
		case "CREATE_GENRE": {
			return {
				...state,
				token: action.payload,
			};
		}
		case "SET_CREATE_GENRE_MESSAGE": {
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

export default genreReducer;
