import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import  gwentClasses from './classes.js';
import  gwentCards from './deckCards.js';

class SelectionPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      baseDeckSelected: "",
      baseDeckName: "",
      baseDeckCards: [],
      neutralDeckCards: [],
      leaderCard: []
    };
    this.handleBaseDeckSelection = this.handleBaseDeckSelection.bind(this);
  }

  handleBaseDeckSelection(val){
    this.setState((prevState, props) => {

      let deckName = "";
      let leaderCards = [];
      let baseCards = [];
      let neutralCards = [];

      if(val === "northern"){
        deckName = "Northern Realms";
        gwentCards.northernLeaders.map((object, index)=>{
          leaderCards.push(<LeaderTableRow key={index} name={object.name} ability={object.ability}/>);
        });
        gwentCards.northernCards.map((object, index)=>{
          baseCards.push(<BaseDeckTableRow key={index} name={object.name} type={object.type} score={object.score} position={object.position} ability={object.ability}/>);
        });
      }
      else if(val === "nilfgaard"){
        deckName = "Nilfgaardian Empire";
        gwentCards.nilfgaardLeaders.map((object, index)=>{
          leaderCards.push(<LeaderTableRow key={index} name={object.name} ability={object.ability}/>);
        });
        gwentCards.nilfgaardCards.map((object, index)=>{
          baseCards.push(<BaseDeckTableRow key={index} name={object.name} type={object.type} score={object.score} position={object.position} ability={object.ability}/>);
        });
      }
      else if(val === "monsters"){
        deckName = "Monsters";
        gwentCards.monsterCards.map((object, index)=>{
          baseCards.push(<BaseDeckTableRow key={index} name={object.name} type={object.type} score={object.score} position={object.position} ability={object.ability}/>);
        });
      }
      else if(val === "scoiatael"){
        deckName = "Scoia'tel";
        gwentCards.scoiataelLeaders.map((object, index)=>{
          leaderCards.push(<LeaderTableRow key={index} name={object.name} ability={object.ability}/>);
        });
        gwentCards.scoiataelCards.map((object, index)=>{
          baseCards.push(<BaseDeckTableRow key={index} name={object.name} type={object.type} score={object.score} position={object.position} ability={object.ability}/>);
        });
      }

      gwentCards.neutralCards.map((object, index)=>{
        neutralCards.push(<BaseDeckTableRow key={index} name={object.name} type={object.type} score={object.score} position={object.position} ability={object.ability}/>);
      });

      return {
        baseDeckSelected: val,
        baseDeckName: deckName,
        baseDeckCards: baseCards,
        leaderCards: leaderCards,
        neutralDeckCards: neutralCards
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <h1> Gwent Card Game </h1>
        </div>
        <SelectionOptions onChange={this.handleBaseDeckSelection} value={this.state.baseDeckSelected}/>
        <div className={this.state.baseDeckName === "" ? "DeckChoicesAndStats Hidden":"DeckChoicesAndStats"}>
          <BaseDeckChoices baseDeckName={this.state.baseDeckName} baseDeckSelected={this.state.baseDeckSelected} baseDeckCards={this.state.baseDeckCards} leaderCards={this.state.leaderCards}/>
          <DeckStats/>
          <NeutralDeckChoices neutralDeckCards={this.state.neutralDeckCards}/>
        </div>
      </div>
    );
  }
}

class SelectionOptions extends Component {
  render() {
    return(
      <div className="SelectionOptions">
        <div className="SelectionDropdown">
          <label for="SelectionDropdownEl">Base Deck</label><br/>
          <select id="SelectionDropdownEl" onChange={(event) => this.props.onChange(event.target.value)} value={this.props.value}>
            <option value=""></option>
            <option value="northern">Northern Realms</option>
            <option value="nilfgaard">Nilfgaardian Empire</option>
            <option value="monsters">Monsters</option>
            <option value="scoiatael">Scoia'Tael</option>
          </select>
        </div>
      </div>
    );
  }
}

class BaseDeckChoices extends Component{
  render(){
    
    return(
      <div className="BaseDeckTableDiv">
        <h2>{this.props.baseDeckName}</h2>
        <table className="pure-table pure-table-bordered">
          <thead>
            <tr>
              <th> </th>
              <th> Leader Name </th>
              <th> Ability </th>
            </tr>
          </thead>
          <tbody>
            {this.props.leaderCards}
          </tbody>
        </table>
        <table className="pure-table pure-table-bordered">
          <thead>
            <tr>
              <th> </th>
              <th> Card Name </th>
              <th> Card Type </th>
              <th> Card Position </th>
              <th> Card Score </th>
              <th> Card Ability </th>
            </tr>
          </thead>
          <tbody>
            {this.props.baseDeckCards}
          </tbody>
        </table>
      </div>
    )
  }
}

class DeckStats extends Component {
  render(){
    return(
      <div className="DeckStats">
        <h2> Deck Stats </h2>
      </div>
    )
  }
}

class NeutralDeckChoices extends Component {
  render(){
    return (
      <div className="NeutralDeckTableDiv">
        <h2> Neutral Deck Choices </h2>
        <table className="pure-table pure-table-bordered">
          <thead>
            <tr>
              <th> </th>
              <th> Card Name </th>
              <th> Card Type </th>
              <th> Card Position </th>
              <th> Card Score </th>
              <th> Card Ability </th>
            </tr>
          </thead>
          <tbody>
            {this.props.neutralDeckCards}
          </tbody>
        </table>
      </div>
    )
  }
}

class LeaderTableRow extends Component {
  render(){
    return(
      <tr>
        <td> <input type="radio" name="Leader" value={this.props.name}/></td>
        <td> {this.props.name} </td>
        <td> {this.props.ability} </td>
      </tr>
    )
  }
}

class BaseDeckTableRow extends Component {
  render(){
    return(
      <tr>
        <td> <input type="checkbox"/></td>
        <td> {this.props.name} </td>
        <td> {this.props.type} </td>
        <td> {this.props.position} </td>
        <td> {this.props.score} </td>
        <td> {this.props.ability} </td>
      </tr>
    )
  }
}

export default SelectionPage;
