
import { combineReducers } from 'redux';

const initialBaseDeckState = {
	baseDeck: "",
	baseDeckFullName: "",
	baseDeckCards: [], 
	neutralDeckCards: [],
	baseDeckFilter: "All",
	neutralDeckFilter: "All"
};

const initialLeaderDeckState = {
	leaderChoice: [],
	leaderCards: [],
	showLeaderSelection: false
};

const initialDeckStatsState = {
	totalCards: 0,
	totalUnitCards: 0,
	totalSpecialCards: 0,
	totalCardStrength: 0,
	totalHeroCards: 0,
	specialLimit: true,
	unitMinimum: true
};

const baseDeckReducer = (state = initialBaseDeckState, action) => {
	switch(action.type){
		case "BASE_DECK_CARD_CLICK":
			return Object.assign({}, state, {
				baseDeckCards: action.deck
			});	

		case "BASE_DECK_SELECTION":
			return Object.assign({}, state, {
				baseDeck: action.baseDeck,
				baseDeckCards: action.baseDeckCards,
				neutralDeckCards: action.neutralDeckCards,
				baseDeckFullName: action.baseDeckFullName
			});	

		case "NEUTRAL_DECK_CARD_CLICK":
			return Object.assign({}, state, {
				neutralDeckCards: action.deck
			});	

		case "BASE_DECK_FILTER_SELECTION":
			return Object.assign({}, state, {
				baseDeckFilter: action.baseDeckFilter
			});

		case "NEUTRAL_DECK_FILTER_SELECTION":
			return Object.assign({}, state, {
				neutralDeckFilter: action.neutralDeckFilter
			});		

		case "GENERATE_DECK":
			return state;	

		default:
			return state;
	}
}

const leaderDeckReducer = (state = initialLeaderDeckState, action) => {
	switch(action.type){
		case "TOGGLE_LEADER_SELECTION":
			return Object.assign({}, state, {
				showLeaderSelection: action.showLeaderSelection
			});
		case "GET_BASE_DECK_LEADERS":
			return Object.assign({}, state, {
				leaderChoice: action.leaderChoice,
				leaderCards: action.leaderCards
			});
		case "LEADER_CLICK":
			return Object.assign({}, state, {
				leaderChoice: action.leaderChoice,
				leaderCards: action.leaderCards
			});

		default:
			return state;
	}
}

const deckStatsReducer = (state = initialDeckStatsState, action) => {
	switch(action.type){
		case "UPDATE_DECK_STATS":
			return Object.assign({}, state, {
				totalCards: action.totalCards,
				totalUnitCards: action.totalUnitCards,
				totalSpecialCards: action.totalSpecialCards,
				totalCardStrength: action.totalCardStrength,
				totalHeroCards: action.totalHeroCards,
				unitMinimum: action.unitMinimum,
				specialLimit: action.specialLimit
			});

		default:
			return state;
	}
}

const deckSelectionPageReducers = combineReducers({
	baseDeckState: baseDeckReducer,
	leaderDeckState: leaderDeckReducer, 
	deckStatsState: deckStatsReducer
});

export default deckSelectionPageReducers;