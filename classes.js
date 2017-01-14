var gwent = gwent || {};


class Card {
	constructor(name){
		this.name = name;
	},

	get name(){
		return this.name;
	}
}

class CombatCard extends Card {
	constructor(name, position, score, ability){
		super(name);
		this.position = position;
		this.score = score;
		this.ability = ability; 
	},

	get position(){
		return this.position;
	},

	get score(){
		return this.score();
	},

	get ability(){
		return this.ability;
	}
}

class LeaderCard extends Card {
	constructor(name, ability){
		super(name);
		this.ability = ability; 
	},

	get ability(){
		return this.ability;
	}	
}

class WeatherCard extends Card {
	constructor(name, affectedPosition, penalty){
		super(name);
		this.affectedPosition = affectedPosition;
		this.penalty = penalty;
	},

	get affectedPosition(){
		return this.affectedPosition;
	},

	get penalty(){
		return this.penalty;
	}
}

class SpecialCard extends Card {
	constructor(name, ability){
		super(name);
		this.ability = ability;
	},

	get ability(){
		return this.ability;
	}
}

class Deck {
	constructor(type, cards){
		this.type = type;
		this.cards = cards; 
	},

	get type(){
		return type;
	},

	get cards(){
		return cards; 
	},

	get drawHand(){
		return;
	}

	function drawCard(var i){
		let cardArray = [];
		while(i > 0){
			cardArray.push(cards.pop);
		}
		return cardArray;
	}
}

class MonsterDeck extends Deck{
	constructor(type, cards){
		super("Monster", cards);
	}
}

class NorthernDeck extends Deck{
    constructor(type, cards){
		super("Northern", cards);
	}	
}

class NilfgaardianDeck extends Deck{
	constructor(type, cards){
		super("Nilfgaardian", cards);
	}
}

class ScoiataelDeck extends Deck{
	constructor(type, cards){
		super("Scoiatael", cards);
	}
}

class SkelligeDeck extends Deck{
	constructor(type, cards){
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