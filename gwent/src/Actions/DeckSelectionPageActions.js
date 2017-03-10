import gwentCards from '../deckCards.js';

export const deckCardClick = (id, checked, state, dispatch) => {
	// Neutral Cards start at ID value of
  // 171
  let currentDeck = [];
  let action = {};

  if(id >= 171){
    currentDeck = state.baseDeckState.neutralDeckCards.slice();
    action.type = "NEUTRAL_DECK_CARD_CLICK";
  }
  else{
    currentDeck = state.baseDeckState.baseDeckCards.slice();
    action.type = "BASE_DECK_CARD_CLICK";
  }
  
  let cardIndex = currentDeck.findIndex((el)=>{
    return el.id === id;
  });

  currentDeck[cardIndex].checked = checked;
  action.deck = currentDeck;

  dispatch(updateDeckStatsOnCardClick(currentDeck[cardIndex], state.deckStatsState));

  return action;
}

export const toggleLeaderSelection = (state) => {
	let action = {};

	action.type = "TOGGLE_LEADER_SELECTION";
	action.showLeaderSelection = !state.showLeaderSelection;

	return action;
}

export const handleLeaderClick = (id, state, dispatch) => {
	let updatedLeaderCards = state.leaderCards.slice();
  let leaderChoice = {};
  let action = {};

  action.type = "LEADER_CLICK";

  for(let i = 0; i < updatedLeaderCards.length; i++){
    if(updatedLeaderCards[i].id === id){
      updatedLeaderCards[i].checked = true;
      leaderChoice = updatedLeaderCards[i];
    }
    else{
      updatedLeaderCards[i].checked = false;
    }
  }

  action.leaderChoice = leaderChoice;
  action.leaderCards = updatedLeaderCards;
  
  dispatch(toggleLeaderSelection(state));
  return action;
}

export const updateDeckStatsOnCardClick = (card, state) => {
	let action = {};
  let incrementValue = 0;
  let cardScore = card.score;

  action.type = "UPDATE_DECK_STATS";
  action.totalUnitCards = state.totalUnitCards;
  action.totalCardStrength = state.totalCardStrength;
  action.totalHeroCards = state.totalHeroCards;
  action.totalSpecialCards = state.totalSpecialCards

  if(card.checked === false){
    incrementValue = -1;
    cardScore *= -1;
  }
  else{
    incrementValue = 1; 
  }

  action.totalCards = state.totalCards + incrementValue;

  if(card.type === "CombatCard"){
    action.totalUnitCards = state.totalUnitCards + incrementValue;
    action.totalCardStrength = state.totalCardStrength + cardScore;

    if(card.ability.toLowerCase().indexOf("hero") > -1){
      action.totalHeroCards = state.totalHeroCards + incrementValue;
    }
  }
  else if(card.type === "SpecialCard" || card.type === "WeatherCard"){
    action.totalSpecialCards = state.totalSpecialCards + incrementValue;
  }

  return action;
}

export const setDeckStats = (statsType) => {
	let action = {}

	action.type = "UPDATE_DECK_STATS";

	action.totalCards = gwentCards[statsType].totalCards + gwentCards.neutralStats.totalCards;
  action.totalUnitCards = gwentCards[statsType].totalUnitCards + gwentCards.neutralStats.totalUnitCards;
  action.totalSpecialCards = gwentCards[statsType].totalSpecialCards + gwentCards.neutralStats.totalSpecialCards;
  action.totalCardStrength = gwentCards[statsType].totalCardStrength + gwentCards.neutralStats.totalCardStrength;
  action.totalHeroCards = gwentCards[statsType].totalHeroCards + gwentCards.neutralStats.totalHeroCards;	

  return action;
}

export const handleBaseDeckSelection = (chosenDeck, dispatch) => {
	let action = {};
  action.baseDeck = chosenDeck;
	action.baseDeckFullName = "";
  action.baseDeckCards = [];
  action.neutralDeckCards = [];
  action.cardType = "";
  action.type = "BASE_DECK_SELECTION";

  if(chosenDeck === "northern"){
    action.baseDeckFullName = "Northern Realms";
    action.leaderType = "northernLeaders";
    action.cardType = "northernCards";
    action.statsType = "northernStats";
  }
  else if(chosenDeck === "nilfgaard"){
    action.baseDeckFullName = "Nilfgaardian Empire";
    action.leaderType = "nilfgaardLeaders";
    action.cardType = "nilfgaardCards";
    action.statsType = "nilfgaardStats";
  }
  else if(chosenDeck === "monsters"){
    action.baseDeckFullName = "Monsters";
    action.leaderType = "monstersLeaders";
    action.cardType = "monstersCards";
    action.statsType = "monstersStats";
  }
  else if(chosenDeck === "scoiatael"){
    action.baseDeckFullName = "Scoia'tael";
    action.leaderType = "scoiataelLeaders";
    action.cardType = "scoiataelCards";
    action.statsType = "scoiataelStats";
  }

  gwentCards[action.cardType].map((object) => addCardToDeckArray(object, action.baseDeckCards, true));
  gwentCards.neutralCards.map((object) => addCardToDeckArray(object, action.neutralDeckCards, true));

  dispatch(handleBaseDeckLeaders(action.leaderType));
  dispatch(setDeckStats(action.statsType));

  return action;	
}

export const handleBaseDeckLeaders = (leaderType) => {
	let action = {};
	action.leaderCards = [];
  action.leaderChoice = "";
  action.type = "GET_BASE_DECK_LEADERS";

	gwentCards[leaderType].map((object)=> addCardToDeckArray(object, action.leaderCards, false));
	action.leaderCards[0].checked = true;
	action.leaderChoice = action.leaderCards[0];

	return action;
}

export const baseDeckFilterSelection = (filter) => {
  let action = {};
  action.type = "BASE_DECK_FILTER_SELECTION";
  action.baseDeckFilter = filter;
  return action;
}

export const neutralDeckFilterSelection = (filter) => {
  let action = {};
  action.type = "NEUTRAL_DECK_FILTER_SELECTION";
  action.neutralDeckFilter = filter;
  return action;
}

const addCardToDeckArray = (card, deckArray, defaultCheckedValue) => {
  let newCard = card;
  newCard.checked = defaultCheckedValue;
  newCard.key = newCard.id;
  deckArray.push(newCard);
}