var gwentClasses = {};

gwentClasses.Card = class {
	constructor(name){
		this.name = name;
	}
}

gwentClasses.CombatCard = class extends gwentClasses.Card {
	constructor(name, position, score, ability){
		super(name);
		this.position = position;
		this.score = score;
		this.ability = ability; 
	}
}

gwentClasses.LeaderCard = class extends gwentClasses.Card {
	constructor(name, ability){
		super(name);
		this.ability = ability; 
	}
}

gwentClasses.WeatherCard = class extends gwentClasses.Card {
	constructor(name, affectedPosition, penalty){
		super(name);
		this.affectedPosition = affectedPosition;
		this.penalty = penalty;
	}
}

gwentClasses.SpecialCard = class extends gwentClasses.Card {
	constructor(name, ability){
		super(name);
		this.ability = ability;
	}
}

gwentClasses.Deck = class {
	constructor(type, cards){
		this.type = type;
		this.cards = cards; 
	}

	drawCard(i){
		var cardArray = [];
		while(i > 0){
			cardArray.push(this.cards.pop);
		}
		return cardArray;
	}
}

gwentClasses.MonsterDeck = class extends gwentClasses.Deck{
	constructor(cards){
		super("Monster", cards);
	}
}

gwentClasses.NorthernDeck = class extends gwentClasses.Deck{
    constructor(cards){
		super("Northern", cards);
	}	
}

gwentClasses.NilfGaardDeck = class extends gwentClasses.Deck{
	constructor(cards){
		super("Nilfgaardian", cards);
	}
}

gwentClasses.ScoiataelDeck = class extends gwentClasses.Deck{
	constructor(cards){
		super("Scoiatael", cards);
	}
}

gwentClasses.SkelligeDeck = class extends gwentClasses.Deck{
	constructor(cards){
		super("Skellige", cards);
	}
}

gwentClasses.Playerboard = class {
	constructor(deck){
		this.score = 0;
		this.leader = '';
		this.seige = new Array(10);
		this.ranged = new Array(10);
		this.melee = new Array(10);
		this.discardPile = new Array();
	}
}

export default gwentClasses;