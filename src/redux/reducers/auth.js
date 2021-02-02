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
		case "CREATE_MOVIE": {
			const task = [...state.task];
			task.push({
				title: action.payload.title,
			});
			return {
				...state,
				task,
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
