import { createStore } from 'redux';
import deckSelectionPageReducers from '../Reducers/DeckSelectionPageReducers.js';

const store  = createStore(deckSelectionPageReducers);

export default store;