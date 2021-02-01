const initialState = {
	token: null,
	errorMsg: "",
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case "LOGIN": {
			return {
				...state,
				token: action.payload,
			};
		}
		case "SET_LOGIN_MESSAGE": {
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

export default authReducer;
