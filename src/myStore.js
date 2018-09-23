import Store from './myRedux/createStore';
import reducer from './myRedux/reducer';

let number = { count: 0};

let myStore = new Store(reducer, number);

export default myStore