var gwent = gwent || {};

gwent.start = function(){
	var currentCards = new Array();

	gwent.northernCards.forEach(function(card){
		if(card.type == "CombatCard"){
			var thisCard = new CombatCard(card.name, card.position, card.score, card.ability);
		}
		else if(card.type == "LeaderCard"){
			var thisCard = new LeaderCard(card.name, card.ability);
		}

		currentCards.push(thisCard);
	});
	
	gwent.currentDeck = new Deck("Northern", currentCards);
}