import React, { Component } from 'react';
import DeckSelectionPageContainer from './DeckSelectionPageContainer.js';

class MainContainer extends Component {
	constructor(props){
		super(props);
		this.generateDeck = this.generateDeck.bind(this);
		this.state = { 
			deck: []
		};
	}

	generateDeck(parameterObject){
		const baseDeckCards = parameterObject.baseDeckCards;
		const neutralDeckCards = parameterObject.neutralDeckCards;
		const leaderCards = parameterObject.leaderCards;
		let generatedDeck = [];

		for(let i = 0; i < leaderCards.length; i++){
			if(leaderCards[i].checked === true){
				generatedDeck.push(leaderCards[i]);
			}
		}

		for(let i = 0; i < baseDeckCards.length; i++){
			if(baseDeckCards[i].checked === true){
				generatedDeck.push(baseDeckCards[i]);
			}
		}

		for(let i = 0; i < neutralDeckCards.length; i++){
			if(neutralDeckCards[i].checked === true){
				generatedDeck.push(neutralDeckCards[i]);
			}
		}

		this.setState({
			deck: generatedDeck
		});
	}

	render(){
		return(
			<DeckSelectionPageContainer generateDeck={this.generateDeck}/>
		);
	}
}

export default MainContainer;