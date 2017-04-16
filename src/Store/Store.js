import { createStore } from 'redux';
import rootReducer from '../Reducers/index.js';

const store  = createStore(rootReducer);

export default store;