const initialState = {
	listOrder: [],
	token: null,
	errorMsg: "",
};

const orderReducer = (state = initialState, action) => {
	switch (action.type) {
		case "CREATE_ORDER": {
			console.log(action);
			console.log(state);
			return {
				...state,
				listOrder: action.payload,
			};
		}
		case "GET_ORDER": {
			return {
				...state,
				listGetOrder: action.payload,
			};
		}
		case "GET_SEAT_ORDER": {
			return {
				...state,
				seatOrder: action.payload,
			};
		}
		default: {
			return {
				...state,
			};
		}
	}
};

export default orderReducer;
