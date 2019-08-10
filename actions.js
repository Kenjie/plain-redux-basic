const types = require('./constants');

const addCount = (data) => ({
	type: types.ADD,
	payload: data,
});

const minusCount = (data) => ({
	type: types.MINUS,
	payload: data,
});

module.exports = {
	addCount,
	minusCount,
};
