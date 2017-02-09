import React from 'react';
import ReactDOM from 'react-dom';
import DeckSelectionPage from './DeckSelectionPage';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import {mount} from 'enzyme';

import  gwentCards from './deckCards.js';

it('renders without crashing', () => {
	const tree = renderer.create(<DeckSelectionPage/>).toJSON();
	expect(tree).toMatchSnapshot();
});

it('default state values when first rendered', () => {
	const deckSelectionPage = shallow(<DeckSelectionPage/>);

    expect(deckSelectionPage.state('baseDeckSelected')).toEqual('');
    expect(deckSelectionPage.state('baseDeckName')).toEqual("");
    expect(deckSelectionPage.state('baseDeckCards')).toEqual([]);
    expect(deckSelectionPage.state('neutralDeckCards')).toEqual([]);
    expect(deckSelectionPage.state('leaderCards')).toEqual([]);
    expect(deckSelectionPage.state('totalCards')).toEqual(0);
    expect(deckSelectionPage.state('totalUnitCards')).toEqual(0);
    expect(deckSelectionPage.state('totalSpecialCards')).toEqual(0);
    expect(deckSelectionPage.state('totalCardStrength')).toEqual(0);
    expect(deckSelectionPage.state('totalHeroCards')).toEqual(0);
});

it('addToDeckArray functions properly', () => {
	const enzymeWrapper = mount(<DeckSelectionPage/>);
	const component = enzymeWrapper.instance();
	const card = {
		name: "Vernon Roche",
		type: "CombatCard",
		position: "Melee",
		score: 10,
		ability: "Hero",
		id: 4
	};

	let deckArray = [];

	component.addCardToDeckArray(card, deckArray, "false");

	expect(deckArray).toEqual([
		{
			name: "Vernon Roche",
			type: "CombatCard",
			position: "Melee",
			score: 10,
			ability: "Hero",
			id: 4,
			checked: "false",
			key: 4
		}
	]);

	deckArray = [];

	component.addCardToDeckArray(card, deckArray, "true");

	expect(deckArray).toEqual([
		{
		name: "Vernon Roche",
		type: "CombatCard",
		position: "Melee",
		score: 10,
		ability: "Hero",
		id: 4,
		checked: "true",
		key: 4
		}
	]);
});

it('northern deck is created correctly', () => {
	const enzymeWrapper = mount(<DeckSelectionPage/>);
	const component = enzymeWrapper.instance();

	let neutralCards = []; 
	gwentCards.neutralCards.map((object) => component.addCardToDeckArray(object, neutralCards, "true"));

	let northernCards = [];
	gwentCards.northernCards.map((object) => component.addCardToDeckArray(object, northernCards, "true"));

	let leaderCards = [];
	gwentCards.northernLeaders.map((object) => component.addCardToDeckArray(object, leaderCards, "true"));

	component.handleBaseDeckSelection("northern");
	expect(enzymeWrapper.state('baseDeckSelected')).toEqual('northern');
    expect(enzymeWrapper.state('baseDeckName')).toEqual("Northern Realms");
    expect(enzymeWrapper.state('baseDeckCards')).toEqual(northernCards);
    expect(enzymeWrapper.state('neutralDeckCards')).toEqual(neutralCards);
    expect(enzymeWrapper.state('leaderCards')).toEqual(leaderCards);
    expect(enzymeWrapper.state('totalCards')).toEqual(68);
    expect(enzymeWrapper.state('totalUnitCards')).toEqual(47);
    expect(enzymeWrapper.state('totalSpecialCards')).toEqual(21);
    expect(enzymeWrapper.state('totalCardStrength')).toEqual(241);
    expect(enzymeWrapper.state('totalHeroCards')).toEqual(9);
});

it('nilfgaard deck is created correctly', () => {
	const enzymeWrapper = mount(<DeckSelectionPage/>);
	const component = enzymeWrapper.instance();

	let neutralCards = []; 
	gwentCards.neutralCards.map((object) => component.addCardToDeckArray(object, neutralCards, "true"));

	let nilfgaardCards = [];
	gwentCards.nilfgaardCards.map((object) => component.addCardToDeckArray(object, nilfgaardCards, "true"));

	let leaderCards = [];
	gwentCards.nilfgaardLeaders.map((object) => component.addCardToDeckArray(object, leaderCards, "true"));

	component.handleBaseDeckSelection("nilfgaard");
	expect(enzymeWrapper.state('baseDeckSelected')).toEqual('nilfgaard');
    expect(enzymeWrapper.state('baseDeckName')).toEqual("Nilfgaardian Empire");
    expect(enzymeWrapper.state('baseDeckCards')).toEqual(nilfgaardCards);
    expect(enzymeWrapper.state('neutralDeckCards')).toEqual(neutralCards);
    expect(enzymeWrapper.state('leaderCards')).toEqual(leaderCards);
    expect(enzymeWrapper.state('totalCards')).toEqual(69);
    expect(enzymeWrapper.state('totalUnitCards')).toEqual(48);
    expect(enzymeWrapper.state('totalSpecialCards')).toEqual(21);
    expect(enzymeWrapper.state('totalCardStrength')).toEqual(252);
    expect(enzymeWrapper.state('totalHeroCards')).toEqual(9);
});

it('scoiatael deck is created correctly', () => {
	const enzymeWrapper = mount(<DeckSelectionPage/>);
	const component = enzymeWrapper.instance();

	let neutralCards = []; 
	gwentCards.neutralCards.map((object) => component.addCardToDeckArray(object, neutralCards, "true"));

	let scoiataelCards = [];
	gwentCards.scoiataelCards.map((object) => component.addCardToDeckArray(object, scoiataelCards, "true"));

	let leaderCards = [];
	gwentCards.scoiataelLeaders.map((object) => component.addCardToDeckArray(object, leaderCards, "true"));

	component.handleBaseDeckSelection("scoiatael");
	expect(enzymeWrapper.state('baseDeckSelected')).toEqual('scoiatael');
    expect(enzymeWrapper.state('baseDeckName')).toEqual("Scoia'tael");
    expect(enzymeWrapper.state('baseDeckCards')).toEqual(scoiataelCards);
    expect(enzymeWrapper.state('neutralDeckCards')).toEqual(neutralCards);
    expect(enzymeWrapper.state('leaderCards')).toEqual(leaderCards);
    expect(enzymeWrapper.state('totalCards')).toEqual(68);
    expect(enzymeWrapper.state('totalUnitCards')).toEqual(47);
    expect(enzymeWrapper.state('totalSpecialCards')).toEqual(21);
    expect(enzymeWrapper.state('totalCardStrength')).toEqual(246);
    expect(enzymeWrapper.state('totalHeroCards')).toEqual(8);
});

it('monsters deck is created correctly', () => {
	const enzymeWrapper = mount(<DeckSelectionPage/>);
	const component = enzymeWrapper.instance();

	let neutralCards = []; 
	gwentCards.neutralCards.map((object) => component.addCardToDeckArray(object, neutralCards, "true"));

	let monstersCards = [];
	gwentCards.monstersCards.map((object) => component.addCardToDeckArray(object, monstersCards, "true"));

	let leaderCards = [];
	gwentCards.monstersLeaders.map((object) => component.addCardToDeckArray(object, leaderCards, "true"));

	component.handleBaseDeckSelection("monsters");
	expect(enzymeWrapper.state('baseDeckSelected')).toEqual("monsters");
    expect(enzymeWrapper.state('baseDeckName')).toEqual("Monsters");
    expect(enzymeWrapper.state('baseDeckCards')).toEqual(monstersCards);
    expect(enzymeWrapper.state('neutralDeckCards')).toEqual(neutralCards);
    expect(enzymeWrapper.state('leaderCards')).toEqual(leaderCards);
    expect(enzymeWrapper.state('totalCards')).toEqual(71);
    expect(enzymeWrapper.state('totalUnitCards')).toEqual(50);
    expect(enzymeWrapper.state('totalSpecialCards')).toEqual(21);
    expect(enzymeWrapper.state('totalCardStrength')).toEqual(254);
    expect(enzymeWrapper.state('totalHeroCards')).toEqual(9);
});

it('row click correctly updates checked status for card in deck array', () => {
	const enzymeWrapper = mount(<DeckSelectionPage/>);
	const component = enzymeWrapper.instance();

	component.handleBaseDeckSelection("nilfgaard");

	component.handleRowClick(51, "false");
	expect(enzymeWrapper.state('baseDeckCards')[6].checked).toEqual("false");

	component.handleRowClick(51, "true");
	expect(enzymeWrapper.state('baseDeckCards')[6].checked).toEqual("true");

	component.handleRowClick(167, "false");
	expect(enzymeWrapper.state('neutralDeckCards')[1].checked).toEqual("false");

	component.handleRowClick(167, "true");
	expect(enzymeWrapper.state('neutralDeckCards')[1].checked).toEqual("true");
});

it('leader click correctly updates status for leader cards array', () => {
	const enzymeWrapper = mount(<DeckSelectionPage/>);
	const component = enzymeWrapper.instance();

	component.handleBaseDeckSelection("monsters");

	component.handleLeaderClick(123);
	expect(enzymeWrapper.state('leaderCards')[0].checked).toEqual(true);
	expect(enzymeWrapper.state('leaderCards')[1].checked).toEqual(false);
	expect(enzymeWrapper.state('leaderCards')[2].checked).toEqual(false);
	expect(enzymeWrapper.state('leaderCards')[3].checked).toEqual(false);

	component.handleLeaderClick(124);
	expect(enzymeWrapper.state('leaderCards')[0].checked).toEqual(false);
	expect(enzymeWrapper.state('leaderCards')[1].checked).toEqual(true);
	expect(enzymeWrapper.state('leaderCards')[2].checked).toEqual(false);
	expect(enzymeWrapper.state('leaderCards')[3].checked).toEqual(false);

	component.handleLeaderClick(125);
	expect(enzymeWrapper.state('leaderCards')[0].checked).toEqual(false);
	expect(enzymeWrapper.state('leaderCards')[1].checked).toEqual(false);
	expect(enzymeWrapper.state('leaderCards')[2].checked).toEqual(true);
	expect(enzymeWrapper.state('leaderCards')[3].checked).toEqual(false);

	component.handleLeaderClick(126);
	expect(enzymeWrapper.state('leaderCards')[0].checked).toEqual(false);
	expect(enzymeWrapper.state('leaderCards')[1].checked).toEqual(false);
	expect(enzymeWrapper.state('leaderCards')[2].checked).toEqual(false);
	expect(enzymeWrapper.state('leaderCards')[3].checked).toEqual(true);
});

it('stats update correctly when a row is clicked', () => {
	const enzymeWrapper = mount(<DeckSelectionPage/>);
	const component = enzymeWrapper.instance();

	component.handleBaseDeckSelection("scoiatael");

	for(let i = 0; i < enzymeWrapper.state("baseDeckCards").length; i++){

		let currentCard = enzymeWrapper.state("baseDeckCards")[i];
		let totalCards = enzymeWrapper.state("totalCards");
		let totalUnitCards = enzymeWrapper.state("totalUnitCards");
		let totalSpecialCards = enzymeWrapper.state("totalSpecialCards");
		let totalCardStrength = enzymeWrapper.state("totalCardStrength");
		let totalHeroCards = enzymeWrapper.state("totalHeroCards");

		component.handleRowClick(currentCard.id, false);

		expect(enzymeWrapper.state("totalCards")).toEqual(totalCards - 1);
		expect(enzymeWrapper.state("totalUnitCards")).toEqual(totalUnitCards - 1);
		expect(enzymeWrapper.state("totalCardStrength")).toEqual(totalCardStrength - currentCard.score);

		if(currentCard.ability.indexOf("Hero") > -1){
			expect(enzymeWrapper.state("totalHeroCards")).toEqual(totalHeroCards - 1);			
		}
	}

});
