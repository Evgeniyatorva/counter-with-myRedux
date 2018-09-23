export default function myReducer (state = {count: 0}, action) {
	if (action.type === 'UP') {
		return { ...state, count: state.count + action.amount }
	} else if (action.type === 'DOWN') {
		return { ...state, count: state.count - action.amount }
	} else if (action.type === 'RESET') {
		return { ...state, count: 0 }
	} else {
        return state
    }
}