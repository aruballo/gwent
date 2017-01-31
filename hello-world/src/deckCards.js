var gwentCards = {};

gwentCards.northernLeaders = [
	{
		name: "Foltest, King of Temeria",
		type: "LeaderCard",
		ability: "Impenetrable Fog",
		id: 1
	},
	{
		name: "Foltest, Lord Commander of the North",
		type: "LeaderCard",
		ability: "Clear Weather",
		id: 2
	},
	{
		name: "Foltest, the Steel Forged",
		type: "LeaderCard",
		ability: "Siege Scorch",
		id: 3
	}
];

gwentCards.northernCards = [
	{
		name: "Vernon Roche",
		type: "CombatCard",
		position: "Melee",
		score: 10,
		ability: "Hero",
		id: 4
	},
	{
		name: "John Natalis",
		type: "CombatCard",
		position: "Melee",
		score: 10,
		ability: "Hero",
		id: 5
	},
	{
		name: "Esterad Thyssen",
		type: "CombatCard",
		position: "Melee",
		score: 10,
		ability: "Hero",
		id: 6
	},
	{
		name: "Philippa Eilhart",
		type: "CombatCard",
		position: "Ranged",
		score: 10,
		ability: "Hero", 
		id: 7
	},
	{
		name: "Thaler",
		type: "CombatCard",
		position: "Siege",
		score: 1,
		ability: "Spy",
		id: 8
	},
	{
		name: "Redanian Foot Soldier",
		type: "CombatCard",
		position: "Melee",
		score: 1,
		ability: "",
		id: 9
	},
	{
		name: "Redanian Foot Soldier",
		type: "CombatCard",
		position: "Melee",
		score: 1,
		ability: "",
		id: 10
	},
	{
		name: "Poor Fucking Infantry",
		type: "CombatCard",
		position: "Melee",
		score: 1,
		ability: "Tight Bond",
		id: 11
	},
	{
		name: "Poor Fucking Infantry",
		type: "CombatCard",
		position: "Melee",
		score: 1,
		ability: "Tight Bond",
		id: 12
	},
	{
		name: "Poor Fucking Infantry",
		type: "CombatCard",
		position: "Melee",
		score: 1,
		ability: "Tight Bond",
		id: 13
	},
	{
		name: "Kaedweni Siege Expert",
		type: "CombatCard",
		position: "Siege",
		score: 1,
		ability: 'Morale',
		id: 14
	},
	{
		name: "Kaedweni Siege Expert",
		type: "CombatCard",
		position: "Siege",
		score: 1,
		ability: 'Morale',
		id: 15
	},
	{
		name: "Kaedweni Siege Expert",
		type: "CombatCard",
		position: "Siege",
		score: 1,
		ability: 'Morale',
		id: 16
	},
	{
		name: "Yarpen Zigrin",
		type: "CombatCard",
		position: "Melee",
		score: 2,
		ability: "",
		id: 17		
	},
	{
		name: "Sigismund Dijkstra",
		type: "CombatCard",
		position: "Melee",
		score: 4,
		ability: "Spy",
		id: 18
	},
	{
		name: "Sheldon Skaggs",
		type: "CombatCard",
		position: "Ranged",
		score: 4,
		ability: "",
		id: 19
	},
	{
		name: "Blue Stripes Commando",
		type: "CombatCard",
		position: "Melee",
		score: 4,
		ability: "Tight Bond",
		id: 20
	},
	{
		name: "Blue Stripes Commando",
		type: "CombatCard",
		position: "Melee",
		score: 4,
		ability: "Tight Bond",
		id: 21
	},
	{
		name: "Blue Stripes Commando",
		type: "CombatCard",
		position: "Melee",
		score: 4,
		ability: "Tight Bond",
		id: 22
	},
	{
		name: "Sabrina Gevissig",
		type: "CombatCard",
		position: "Ranged",
		score: 4,
		ability: "",
		id: 23
	},
	{
		name: "Ves",
		type: "CombatCard",
		position: "Melee",
		score: 5,
		ability: "",
		id: 24
	},
	{
		name: "Siegfried of Denesle",
		type: "CombatCard",
		position: "Melee",
		score: 5,
		ability: "",
		id: 25
	},
	{
		name: "Prince Stennis",
		type: "CombatCard",
		position: "Melee",
		score: 5,
		ability: "Spy",
		id: 26
	},
	{
		name: "Crinfrid Reavers Dragon Hunter",
		type: "CombatCard",
		position: "Ranged",
		score: 5,
		ability: "Tight Bond",
		id: 27
	},
	{
		name: "Crinfrid Reavers Dragon Hunter",
		type: "CombatCard",
		position: "Ranged",
		score: 5,
		ability: "Tight Bond",
		id: 28
	},
	{
		name: "Crinfrid Reavers Dragon Hunter",
		type: "CombatCard",
		position: "Ranged",
		score: 5,
		ability: "Tight Bond",
		id: 29
	},
	{
		name: "Keira Metz",
		type: "CombatCard",
		position: "Ranged",
		score: 5,
		ability: "",
		id: 30		
	},
	{
		name: "Dun Banner Medic",
		type: "CombatCard",
		position: "Siege",
		score: 5,
		ability: "Medic",
		id: 31
	},
	{
		name: "Sile de Tansarville",
		type: "CombatCard",
		position: "Ranged",
		score: 5,
		ability: "",
		id: 32
	},
	{
		name: "Siege Tower",
		type: "CombatCard",
		position: "Siege",
		score: 6,
		ability: "",
		id: 33
	},
	{
		name: "Dethmold",
		type: "CombatCard",
		position: "Ranged",
		score: 6,
		ability: "",
		id: 34
	},
	{
		name: "Trebuchet",
		type: "CombatCard",
		position: "Siege",
		score: 6,
		ability: "",
		id: 35
	},
	{
		name: "Trebuchet",
		type: "CombatCard",
		position: "Siege",
		score: 6,
		ability: "",
		id: 36
	},
	{
		name: "Ballista",
		type: "CombatCard",
		position: "Siege",
		score: 6,
		ability: "",
		id: 37
	},
	{
		name: "Ballista",
		type: "CombatCard",
		position: "Siege",
		score: 6,
		ability: "",
		id: 38
	},
	{
		name: "Catapult",
		type: "CombatCard",
		position: "Siege",
		score: 8,
		ability: "Tight Bond",
		id: 39
	},
	{
		name: "Catapult",
		type: "CombatCard",
		position: "Siege",
		score: 8,
		ability: "Tight Bond",
		id: 40
	}
];

gwentCards.northernStats = {
	totalCards: 37,
	totalUnitCards: 37,
	totalSpecialCards: 0,
	totalCardStrength: 172,
	totalHeroCards: 4
}

gwentCards.nilfgaardLeaders = [
	{
		name: "The Relentless",
		type: "LeaderCard",
		ability: "Draw from Enemy Discard",
		id: 41
	},
	{
		name: "The White Flame Dancing on the Graves of His Foes",
		type: "LeaderCard",
		ability: "Cancel Leader",
		id: 42
	},
	{
		name: "His Imperial Majesty",
		type: "LeaderCard",
		ability: "Rain",
		id: 43
	},
	{
		name: "The Emperor of Nilfgaard",
		type: "LeaderCard",
		ability: "Look at 3 cards",
		id: 44
	}
];

gwentCards.nilfgaardCards = [
	{
		name: "Letho of Gulet",
		type: "CombatCard",
		position: "Melee",
		score: 10,
		ability: "Hero",
		id: 45
	},
	{
		name: "Menno Coehoorn",
		type: "CombatCard",
		position: "Melee",
		score: 10,
		ability: "Hero",
		id: 46
	},
	{
		name: "Morvran Voorhis",
		type: "CombatCard",
		position: "Siege",
		score: 10,
		ability: "Hero",
		id: 47
	},
	{
		name: "Tibor Eggebracht",
		type: "CombatCard",
		position: "Ranged",
		score: 2,
		ability: "",
		id: 48
	},
	{
		name: "Albrich",
		type: "CombatCard",
		position: "Ranged",
		score: 2,
		ability: "",
		id: 49
	},
	{
		name: "Albrich",
		type: "CombatCard",
		position: "Ranged",
		score: 2,
		ability: "",
		id: 50
	},
	{
		name: "Assire var Anahid",
		type: "CombatCard",
		position: "Ranged",
		score: 6,
		ability: "",
		id: 51
	},
	{
		name: "Cynthia",
		type: "CombatCard",
		position: "Ranged",
		score: 4,
		ability: "",
		id: 52
	},
	{
		name: "Fringilla Vigo",
		type: "CombatCard",
		position: "Ranged",
		score: 6,
		ability: "",
		id: 53
	},
	{
		name: "Morteisen",
		type: "CombatCard",
		position: "Melee",
		score: 3,
		ability: "",
		id: 54
	},
	{
		name: "Rainfarn",
		type: "CombatCard",
		position: "Melee",
		score: 4,
		ability: "",
		id: 55
	},
	{
		name: "Renauld aep Matsen",
		type: "CombatCard",
		position: "Ranged",
		score: 5,
		ability: "",
		id: 56
	},
	{
		name: "Rotten Mangoel",
		type: "CombatCard",
		position: "Siege",
		score: 3,
		ability: "",
		id: 57
	},
	{
		name: "Shilard Fitz-Oesterlen",
		type: "CombatCard",
		position: "Melee",
		score: 7,
		ability: "Spy",
		id: 58
	},
	{
		name: "Stefan Skellen",
		type: "CombatCard",
		position: "Melee",
		score: 9,
		ability: "Spy",
		id: 59
	},
	{
		name: "Sweers",
		type: "CombatCard",
		position: "Ranged",
		score: 2,
		ability: "",
		id: 60
	},
	{
		name: "Vanhemar",
		type: "CombatCard",
		position: "Ranged",
		score: 4,
		ability: "",
		id: 61
	},
	{
		name: "Vattier de Rideaux",
		type: "CombatCard",
		position: "Melee",
		score: 4,
		ability: "Spy",
		id: 62
	},
	{
		name: "Vreemde",
		type: "CombatCard",
		position: "Melee",
		score: 2,
		ability: "",
		id: 63
	},
	{
		name: "Cahir Mawr Dyffryn aep Ceallach",
		type: "CombatCard",
		position: "Melee",
		score: 6,
		ability: "",
		id: 64
	},
	{
		name: "Puttkammer",
		type: "CombatCard",
		position: "Ranged",
		score: 3,
		ability: "",
		id: 65
	},
	{
		name: "Archer Support",
		type: "CombatCard",
		position: "Ranged",
		score: 1,
		ability: "Medic",
		id: 66
	},
	{
		name: "Archer Support",
		type: "CombatCard",
		position: "Ranged",
		score: 1,
		ability: "Medic",
		id: 67
	},
	{
		name: "Black Infantry Archer",
		type: "CombatCard",
		position: "Ranged",
		score: 10,
		ability: "",
		id: 68
	},
	{
		name: "Black Infantry Archer",
		type: "CombatCard",
		position: "Ranged",
		score: 10,
		ability: "",
		id: 69
	},
	{
		name: "Siege Support",
		type: "CombatCard",
		position: "Siege",
		score: 0,
		ability: "Medic",
		id: 70
	},
	{
		name: "Heavy Zerrikanian Fire Scorpion",
		type: "CombatCard",
		position: "Siege",
		score: 10,
		ability: "",
		id: 71
	},
	{
		name: "Zerrikanian Fire Scorpion",
		type: "CombatCard",
		position: "Siege",
		score: 5,
		ability: "",
		id: 72
	},
	{
		name: "Impera Brigade",
		type: "CombatCard",
		position: "Melee",
		score: 3,
		ability: "Tight Bond",
		id: 73
	},
	{
		name: "Impera Brigade",
		type: "CombatCard",
		position: "Melee",
		score: 3,
		ability: "Tight Bond",
		id: 74
	},
	{
		name: "Impera Brigade",
		type: "CombatCard",
		position: "Melee",
		score: 3,
		ability: "Tight Bond",
		id: 75
	},
	{
		name: "Impera Brigade",
		type: "CombatCard",
		position: "Melee",
		score: 3,
		ability: "Tight Bond",
		id: 76
	},
	{
		name: "Nausicaa Cavalry Brigade",
		type: "CombatCard",
		position: "Melee",
		score: 2,
		ability: "Tight Bond",
		id: 77
	},
	{
		name: "Nausicaa Cavalry Brigade",
		type: "CombatCard",
		position: "Melee",
		score: 2,
		ability: "Tight Bond",
		id: 78
	},
	{
		name: "Nausicaa Cavalry Brigade",
		type: "CombatCard",
		position: "Melee",
		score: 2,
		ability: "Tight Bond",
		id: 79
	},
	{
		name: "Combat Engineer",
		type: "CombatCard",
		position: "Siege",
		score: 6,
		ability: "",
		id: 80
	},
	{
		name: "Young Emissary",
		type: "CombatCard",
		position: "Melee",
		score: 5,
		ability: "Tight Bond",
		id: 81
	},
	{
		name: "Young Emissary",
		type: "CombatCard",
		position: "Melee",
		score: 5,
		ability: "Tight Bond",
		id: 82
	}
];

gwentCards.nilfgaardStats = {
	totalCards: 38,
	totalUnitCards: 38,
	totalSpecialCards: 0,
	totalCardStrength: 183,
	totalHeroCards: 4
}

gwentCards.scoiataelLeaders = [
	{
		name: "Queen of Dol Blathanna",
		type: "LeaderCard",
		ability: "Scorch Melee",
		id: 83
	},
	{
		name: "The Beautiful",
		type: "LeaderCard",
		ability: "Horn Ranged",
		id: 84
	},
	{
		name: "Daisy of the Valley",
		type: "LeaderCard",
		ability: "Draw 1 Card",
		id: 85
	},
	{
		name: "Pureblood Elf",
		type: "LeaderCard",
		ability: "Frost",
		id: 86
	}
];

gwentCards.scoiataelCards = [	
	{
		name: "Eithne",
		type: "CombatCard",
		position: "Ranged",
		score: 10,
		ability: "Hero",
		id: 87
	},
	{
		name: "Saskia/Saesenthessis",
		type: "CombatCard",
		position: "Ranged",
		score: 10,
		ability: "Hero",
		id: 88
	},
	{
		name: "Isengrim Faoiltiarna",
		type: "CombatCard",
		position: "Melee",
		score: 10,
		ability: "Morale",
		id: 89
	},
	{
		name: "Iorveth",
		type: "CombatCard",
		position: "Ranged",
		score: 10,
		ability: "Hero",
		id: 90
	},
	{
		name: "Dennis Cramer",
		type: "CombatCard",
		position: "Melee",
		score: 6,
		ability: "",
		id: 91
	},
	{
		name: "Milva",
		type: "CombatCard",
		position: "Ranged",
		score: 10,
		ability: "Morale",
		id: 92
	},
	{
		name: "Ida Emean",
		type: "CombatCard",
		position: "Ranged",
		score: 6,
		ability: "",
		id: 93
	},
	{
		name: "Filavandrel",
		type: "CombatCard",
		position: "Ranged",
		score: 6,
		ability: "Agile",
		id: 94
	},
	{
		name: "Yaevinn",
		type: "CombatCard",
		position: "Melee",
		score: 6,
		ability: "Agile",
		id: 95
	},
	{
		name: "Toruviel",
		type: "CombatCard",
		position: "Ranged",
		score: 2,
		ability: "",
		id: 96
	},
	{
		name: "Riordain",
		type: "CombatCard",
		position: "Ranged",
		score: 1,
		ability: "",
		id: 97
	},
	{
		name: "Ciaran aep Easnillien",
		type: "CombatCard",
		position: "Ranged",
		score: 3,
		ability: "Agile",
		id: 98
	},
	{
		name: "Barclay Els",
		type: "CombatCard",
		position: "Melee",
		score: 6,
		ability: "Agile",
		id: 99
	},
	{
		name: "Hav'caaren Medic",
		type: "CombatCard",
		position: "Ranged",
		score: 0,
		ability: "Medic",
		id: 100
	},
	{
		name: "Hav'caaren Medic",
		type: "CombatCard",
		position: "Ranged",
		score: 0,
		ability: "Medic",
		id: 101
	},
	{
		name: "Vrihedd Brigade",
		type: "CombatCard",
		position: "Melee",
		score: 5,
		ability: "Agile",
		id: 102
	},
	{
		name: "Vrihedd Brigade",
		type: "CombatCard",
		position: "Melee",
		score: 5,
		ability: "Agile",
		id: 103
	},
	{
		name: "Dol Blathanna Scout",
		type: "CombatCard",
		position: "Melee",
		score: 6,
		ability: "Agile",
		id: 104
	},
	{
		name: "Dol Blathanna Scout",
		type: "CombatCard",
		position: "Melee",
		score: 6,
		ability: "Agile",
		id: 105
	},
	{
		name: "Dol Blathanna Scout",
		type: "CombatCard",
		position: "Melee",
		score: 6,
		ability: "Agile",
		id: 106
	},
	{
		name: "Dwarf Skirmisher",
		type: "CombatCard",
		position: "Melee",
		score: 3,
		ability: "Muster",
		id: 107
	},
	{
		name: "Dwarf Skirmisher",
		type: "CombatCard",
		position: "Melee",
		score: 3,
		ability: "Muster",
		id: 108
	},
	{
		name: "Dwarf Skirmisher",
		type: "CombatCard",
		position: "Melee",
		score: 3,
		ability: "Muster",
		id: 109
	},
	{
		name: "Mahakaman Defenders",
		type: "CombatCard",
		position: "Melee",
		score: 5,
		ability: "",
		id: 110
	},
	{
		name: "Mahakaman Defenders",
		type: "CombatCard",
		position: "Melee",
		score: 5,
		ability: "",
		id: 111
	},
	{
		name: "Mahakaman Defenders",
		type: "CombatCard",
		position: "Melee",
		score: 5,
		ability: "",
		id: 112
	},
	{
		name: "Mahakaman Defenders",
		type: "CombatCard",
		position: "Melee",
		score: 5,
		ability: "",
		id: 113
	},
	{
		name: "Mahakaman Defenders",
		type: "CombatCard",
		position: "Melee",
		score: 5,
		ability: "",
		id: 114
	},
	{
		name: "Elf Skirmisher",
		type: "CombatCard",
		position: "Ranged",
		score: 2,
		ability: "Muster",
		id: 115
	},
	{
		name: "Elf Skirmisher",
		type: "CombatCard",
		position: "Ranged",
		score: 2,
		ability: "Muster",
		id: 116
	},
	{
		name: "Elf Skirmisher",
		type: "CombatCard",
		position: "Ranged",
		score: 2,
		ability: "Muster",
		id: 117
	},
	{
		name: "Vrihedd Cadet",
		type: "CombatCard",
		position: "Ranged",
		score: 4,
		ability: "",
		id: 118
	},
	{
		name: "Dol Blathanna Archer",
		type: "CombatCard",
		position: "Ranged",
		score: 4,
		ability: "",
		id: 119
	},
	{
		name: "Hav'caaren Medic",
		type: "CombatCard",
		position: "Melee",
		score: 5,
		ability: "Muster",
		id: 120
	},
	{
		name: "Hav'caaren Medic",
		type: "CombatCard",
		position: "Melee",
		score: 5,
		ability: "Muster",
		id: 121
	},
	{
		name: "Hav'caaren Medic",
		type: "CombatCard",
		position: "Melee",
		score: 5,
		ability: "Muster",
		id: 122
	}
];

gwentCards.scoiataelStats = {
	totalCards: 37,
	totalUnitCards: 37,
	totalSpecialCards: 0,
	totalCardStrength: 177,
	totalHeroCards: 3
}

gwentCards.monstersLeaders = [
	{
		name: "Destroyer of Worlds",
		type: "LeaderCard",
		ability: "Draw 1 Card from Discard",
		id: 123
	},
	{
		name: "Bringer of Death",
		type: "LeaderCard",
		ability: "Discard 2 Draw 1",
		id: 124
	},
	{
		name: "King of the Wild Hunt",
		type: "LeaderCard",
		ability: "Horn Melee",
		id: 125
	},
	{
		name: "Commander of the Red Riders",
		type: "LeaderCard",
		ability: "Pick Any Weather",
		id: 126
	}
];

gwentCards.monstersCards = [
	{
		name: "Draug",
		type: "CombatCard",
		position: "Melee",
		score: 10,
		ability: "Hero",
		id: 127
	},
	{
		name: "Kayran",
		type: "CombatCard",
		position: "Ranged",
		score: 8,
		ability: "Hero,Morale",
		id: 128
	},
	{
		name: "Imlerith",
		type: "CombatCard",
		position: "Melee",
		score: 10,
		ability: "Hero",
		id: 129
	},
	{
		name: "Leshen",
		type: "CombatCard",
		position: "Ranged",
		score: 10,
		ability: "Hero",
		id: 130
	},
	{
		name: "Forktail",
		type: "CombatCard",
		position: "Melee",
		score: 5,
		ability: "",
		id: 131
	},
	{
		name: "Earth Elemental",
		type: "CombatCard",
		position: "Siege",
		score: 6,
		ability: "",
		id: 132
	},
	{
		name: "Fiend",
		type: "CombatCard",
		position: "Melee",
		score: 6,
		ability: "",
		id: 133
	},
	{
		name: "Plague Maiden",
		type: "CombatCard",
		position: "Melee",
		score: 5,
		ability: "",
		id: 134
	},
	{
		name: "Griffin",
		type: "CombatCard",
		position: "Melee",
		score: 5,
		ability: "",
		id: 135
	},
	{
		name: "Werewolf",
		type: "CombatCard",
		position: "Melee",
		score: 5,
		ability: "",
		id: 136
	},
	{
		name: "Botchling",
		type: "CombatCard",
		position: "Melee",
		score: 4,
		ability: "",
		id: 137
	},
	{
		name: "Frightener",
		type: "CombatCard",
		position: "Melee",
		score: 5,
		ability: "",
		id: 138
	},
	{
		name: "Ice Giant",
		type: "CombatCard",
		position: "Siege",
		score: 5,
		ability: "",
		id: 139
	},
	{
		name: "Endrega",
		type: "CombatCard",
		position: "Ranged",
		score: 2,
		ability: "",
		id: 140
	},
	{
		name: "Harpy",
		type: "CombatCard",
		position: "Ranged",
		score: 2,
		ability: "Agile",
		id: 141
	},
	{
		name: "Cockatrice",
		type: "CombatCard",
		position: "Ranged",
		score: 2,
		ability: "",
		id: 142
	},
	{
		name: "Gargoyle",
		type: "CombatCard",
		position: "Ranged",
		score: 2,
		ability: "",
		id: 143
	},
	{
		name: "Celaeno Harpy",
		type: "CombatCard",
		position: "Ranged",
		score: 2,
		ability: "",
		id: 144
	},
	{
		name: "Grave Hag",
		type: "CombatCard",
		position: "Ranged",
		score: 5,
		ability: "",
		id: 145
	},
	{
		name: "Fire Elemental",
		type: "CombatCard",
		position: "Siege",
		score: 6,
		ability: "",
		id: 146
	},
	{
		name: "Foglet",
		type: "CombatCard",
		position: "Melee",
		score: 2,
		ability: "",
		id: 147
	},
	{
		name: "Wyvern",
		type: "CombatCard",
		position: "Ranged",
		score: 2,
		ability: "",
		id: 148
	},
	{
		name: "Arachas Behemoth",
		type: "CombatCard",
		position: "Siege",
		score: 6,
		ability: "Muster",
		id: 149
	},
	{
		name: "Arachas",
		type: "CombatCard",
		position: "Melee",
		score: 4,
		ability: "Muster",
		id: 150
	},
	{
		name: "Arachas",
		type: "CombatCard",
		position: "Melee",
		score: 4,
		ability: "Muster",
		id: 151
	},
	{
		name: "Arachas",
		type: "CombatCard",
		position: "Melee",
		score: 4,
		ability: "Muster",
		id: 152
	},
	{
		name: "Nekker",
		type: "CombatCard",
		position: "Melee",
		score: 2,
		ability: "Muster",
		id: 153
	},
	{
		name: "Nekker",
		type: "CombatCard",
		position: "Melee",
		score: 2,
		ability: "Muster",
		id: 154
	},
	{
		name: "Nekker",
		type: "CombatCard",
		position: "Melee",
		score: 2,
		ability: "Muster",
		id: 155
	},
	{
		name: "Vampire: Ekimmara",
		type: "CombatCard",
		position: "Melee",
		score: 4,
		ability: "Muster",
		id: 156
	},
	{
		name: "Vampire: Fleder",
		type: "CombatCard",
		position: "Melee",
		score: 4,
		ability: "Muster",
		id: 157
	},
	{
		name: "Vampire: Garkain",
		type: "CombatCard",
		position: "Melee",
		score: 4,
		ability: "Muster",
		id: 158
	},
	{
		name: "Vampire: Bruxa",
		type: "CombatCard",
		position: "Melee",
		score: 4,
		ability: "Muster",
		id: 159
	},
	{
		name: "Ghoul",
		type: "CombatCard",
		position: "Melee",
		score: 1,
		ability: "Muster",
		id: 160
	},
	{
		name: "Ghoul",
		type: "CombatCard",
		position: "Melee",
		score: 1,
		ability: "Muster",
		id: 161
	},
	{
		name: "Ghoul",
		type: "CombatCard",
		position: "Melee",
		score: 1,
		ability: "Muster",
		id: 162
	},
	{
		name: "Crone: Brewess",
		type: "CombatCard",
		position: "Melee",
		score: 6,
		ability: "",
		id: 163
	},
	{
		name: "Crone: Weavess",
		type: "CombatCard",
		position: "Melee",
		score: 6,
		ability: "",
		id: 164
	},
	{
		name: "Crone: Whispess",
		type: "CombatCard",
		position: "Melee",
		score: 6,
		ability: "",
		id: 165
	}
];

gwentCards.monsterStats = {
	totalCards: 40,
	totalUnitCards: 40,
	totalSpecialCards: 0,
	totalCardStrength: 185,
	totalHeroCards: 4
}

gwentCards.neutralCards = [
	{
		name: "Decoy",
		type: "SpecialCard",
		ability: "Decoy",
		id: 166
	},
	{
		name: "Decoy",
		type: "SpecialCard",
		ability: "Decoy",
		id: 167
	},
	{
		name: "Decoy",
		type: "SpecialCard",
		ability: "Decoy",
		id: 168
	},
	{
		name: "Commander's Horn",
		type: "SpecialCard",
		ability: "Horn",
		id: 169
	},
	{
		name: "Commander's Horn",
		type: "SpecialCard",
		ability: "Horn",
		id: 170
	},
	{
		name: "Commander's Horn",
		type: "SpecialCard",
		ability: "Horn",
		id: 171
	},
	{
		name: "Scorch",
		type: "SpecialCard",
		ability: "Scorch",
		id: 172
	},
	{
		name: "Scorch",
		type: "SpecialCard",
		ability: "Scorch",
		id: 173
	},
	{
		name: "Scorch",
		type: "SpecialCard",
		ability: "Scorch",
		id: 174
	},
	{
		name: "Biting Frost",
		type: "WeatherCard",
		affectedPosition: "Melee",
		id: 175
	},
	{
		name: "Biting Frost",
		type: "WeatherCard",
		affectedPosition: "Melee",
		id: 176
	},
	{
		name: "Biting Frost",
		type: "WeatherCard",
		affectedPosition: "Melee",
		id: 177
	},
	{
		name: "Impenetrable Fog",
		type: "WeatherCard",
		affectedPosition: "Ranged",
		id: 178
	},
	{
		name: "Impenetrable Fog",
		type: "WeatherCard",
		affectedPosition: "Ranged",
		id: 179
	},
	{
		name: "Impenetrable Fog",
		type: "WeatherCard",
		affectedPosition: "Ranged",
		id: 180
	},
	{
		name: "Torrential Rain",
		type: "WeatherCard",
		affectedPosition: "Siege",
		id: 181
	},
	{
		name: "Torrential Rain",
		type: "WeatherCard",
		affectedPosition: "Siege",
		id: 182
	},
	{
		name: "Torrential Rain",
		type: "WeatherCard",
		affectedPosition: "Siege",
		id: 183
	},
	{
		name: "Clear Weather",
		type: "WeatherCard",
		affectedPosition: "None",
		id: 184
	},
	{
		name: "Clear Weather",
		type: "WeatherCard",
		affectedPosition: "None",
		id: 185
	},
	{
		name: "Clear Weather",
		type: "WeatherCard",
		affectedPosition: "None",
		id: 186
	},
	{
		name: "Vesemir",
		type: "CombatCard",
		position: "Melee",
		score: 6,
		ability: "",
		id: 187
	},
	{
		name: "Yennefer of Vengerberg",
		type: "CombatCard",
		position: "Ranged",
		score: 7,
		ability: "Hero,Medic",
		id: 188
	},
	{
		name: "Cirilla Fiona Elen Rianno",
		type: "CombatCard",
		position: "Melee",
		score: 15,
		ability: "Hero",
		id: 189
	},
	{
		name: "Triss Merigold",
		type: "CombatCard",
		position: "Melee",
		score: 7,
		ability: "Hero",
		id: 190
	},
	{
		name: "Dandelion",
		type: "CombatCard",
		position: "Melee",
		score: 2,
		ability: "Morale",
		id: 191
	},
	{
		name: "Geralt of Rivia",
		type: "CombatCard",
		position: "Melee",
		score: 15,
		ability: "Hero",
		id: 192
	},
	{
		name: "Zoltan Chivay",
		type: "CombatCard",
		position: "Melee",
		score: 5,
		ability: "",
		id: 193
	},
	{
		name: "Emiel Regis Rohellec Terzieff",
		type: "CombatCard",
		position: "Melee",
		score: 5,
		ability: "",
		id: 194
	},
	{
		name: "Villentretenmerth",
		type: "CombatCard",
		position: "Melee",
		score: 7,
		ability: "Scorch",
		id: 195
	},
	{
		name: "Avallac'h",
		type: "CombatCard",
		position: "Melee",
		score: 0,
		ability: "Spy,Hero",
		id: 196
	}
];

gwentCards.neutralStats = {
	totalCards: 31,
	totalUnitCards: 10,
	totalSpecialCards: 21,
	totalCardStrength: 69,
	totalHeroCards: 5
}

export default gwentCards;