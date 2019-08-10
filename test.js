const { createStore } = require('redux');
const reducer = require('./reducer');
const { addCount, minusCount } = require('./actions');

const store = createStore(reducer);

// This will run every state changed
store.subscribe(() => {
	console.log('State Changed' + JSON.stringify(store.getState()));
});

// Execute Add
store.dispatch(
  addCount({ value: 5 }),
);

// Execute Minus
store.dispatch(
  minusCount({ value: 1 }),
);
