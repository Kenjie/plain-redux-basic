const types = require('./constants');

const initialState = {
  count: 0,
};

// Mutate the state
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case types.ADD:
			return {
				...state,
				count: state.count + action.payload.value,
			}
		case types.MINUS:
			return {
				...state,
				count: state.count - action.payload.value,
			}
		default: 
			return state;
	}
};

module.exports = reducer;
