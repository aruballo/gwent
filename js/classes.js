var gwent = gwent || {};


class Card {
	constructor(name){
		this.name = name;
	}
}

class CombatCard extends Card {
	constructor(name, position, score, ability){
		super(name);
		this.position = position;
		this.score = score;
		this.ability = ability; 
	}
}

class LeaderCard extends Card {
	constructor(name, ability){
		super(name);
		this.ability = ability; 
	}
}

class WeatherCard extends Card {
	constructor(name, affectedPosition, penalty){
		super(name);
		this.affectedPosition = affectedPosition;
		this.penalty = penalty;
	}
}

class SpecialCard extends Card {
	constructor(name, ability){
		super(name);
		this.ability = ability;
	}
}

class Deck {
	constructor(type, cards){
		this.type = type;
		this.cards = cards; 
	}

	drawCard(i){
		var cardArray = [];
		while(i > 0){
			cardArray.push(cards.pop);
		}
		return cardArray;
	}
}

class MonsterDeck extends Deck{
	constructor(cards){
		super("Monster", cards);
	}
}

class NorthernDeck extends Deck{
    constructor(cards){
		super("Northern", cards);
	}	
}

class NilfgaardianDeck extends Deck{
	constructor(cards){
		super("Nilfgaardian", cards);
	}
}

class ScoiataelDeck extends Deck{
	constructor(cards){
		super("Scoiatael", cards);
	}
}

class SkelligeDeck extends Deck{
	constructor(cards){
		super("Skellige", cards);
	}
}

class PlayerBoard {
	constructor(deck){
		this.score = 0;
		this.leader = '';
		this.seige = new Array(10);
		this.ranged = new Array(10);
		this.melee = new Array(10);
		this.discardPile = new Array();
	}
}