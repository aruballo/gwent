import { combineReducers } from 'redux';
import deckSelectionPageReducers from '../Reducers/DeckSelectionPageReducers.js';
import finalizedDeckPageReducers from '../Reducers/FinalizedDeckPageReducers.js';

const rootReducer = combineReducers({
  deckSelectionPageReducers,
  finalizedDeckPageReducers
});

export default rootReducer;