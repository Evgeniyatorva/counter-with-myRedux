export default class Store {
	constructor(reducer, state) {
		this._reducer = reducer;
		this._state = state;
		this._callback = [];
	}

	get state() {
		return this._state.count;
	}

	update(action) {
		this._state = this._reducer(this._state, action);
		this._callback.forEach((callback) => callback());
	}

	subscribe(func) {
		this._callback.push(func);
	}
}
