var gwent = gwent || {};


class card {
	constructor(name){
		this.name = name;
	},

	get name(){
		return this.name;
	}
}

class combatCard extends card {
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

class leaderCard extends card {
	constructor(name, ability){
		super(name);
		this.ability = ability; 
	},

	get ability(){
		return this.ability;
	}	
}

class weatherCard extends card {
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

class specialCard extends card {
	constructor(name, ability){
		super(name);
		this.ability = ability;
	},

	get ability(){
		return this.ability;
	}
}

