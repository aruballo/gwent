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
      basicDeckSelected: "",
      basicDeckName: ""
    };
    this.handleBasicDeckSelection = this.handleBasicDeckSelection.bind(this);
  }

  handleBasicDeckSelection(val){
    this.setState((prevState, props) => {

      let deckName = "";

      if(val === "northern"){
        deckName = "Northern Realms";
      }
      else if(val === "nilfgaard"){
        deckName = "Nilfgaardian Empire";
      }
      else if(val === "monsters"){
        deckName = "Monsters";
      }
      else if(val === "scoiatael"){
        deckName = "Scoia'tel";
      }

      return {
        basicDeckSelected: val,
        basicDeckName: deckName
      }
    });
  }

  render() {
    return (
      <div className="App">
        <div className="Header">
          <h1> Gwent Card Game </h1>
        </div>
        <SelectionOptions onChange={this.handleBasicDeckSelection} value={this.state.basicDeckSelected}/>
        <BaseDeckChoicesAndStats basicDeckName={this.state.basicDeckName} basicDeckSelected={this.state.basicDeckSelected}/>
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

class BaseDeckChoicesAndStats extends Component{
  render(){
    let currentCards = [];
    let currentLeaders = [];
    let currentNeutralCards = [];


    if(this.props.basicDeckSelected === "northern"){
      gwentCards.northernLeaders.map((object, index)=>{
        currentLeaders.push(<LeaderTableRow key={index} name={object.name} ability={object.ability}/>);
      });
      gwentCards.northernCards.map((object, index)=>{
        currentCards.push(<BasicDeckTableRow key={index} name={object.name} type={object.type} score={object.score} position={object.position}/>);
      });
    }

    else if(this.props.basicDeckSelected === "nilfgaard"){
      gwentCards.nilfgaardLeaders.map((object, index)=>{
        currentLeaders.push(<LeaderTableRow key={index} name={object.name} ability={object.ability}/>);
      });
      gwentCards.nilfgaardCards.map((object, index)=>{
        currentCards.push(<BasicDeckTableRow key={index} name={object.name} type={object.type} score={object.score} position={object.position}/>);
      });
    }
    else if(this.props.basicDeckSelected === "monsters"){
      gwentCards.monsterCards.map((object, index)=>{
        currentCards.push(<BasicDeckTableRow key={index} name={object.name} type={object.type} score={object.score} position={object.position}/>);
      });
    }
    else if(this.props.basicDeckSelected === "scoiatael"){
      gwentCards.scoiataelLeaders.map((object, index)=>{
        currentLeaders.push(<LeaderTableRow key={index} name={object.name} ability={object.ability}/>);
      });
      gwentCards.scoiataelCards.map((object, index)=>{
        currentCards.push(<BasicDeckTableRow key={index} name={object.name} type={object.type} score={object.score} position={object.position}/>);
      });
    }

    gwentCards.neutralCards.map((object, index)=>{
      currentNeutralCards.push(<NeutralDeckTableRow key={index} name={object.name} type={object.type} score={object.score} position={object.position}/>);
    });
    
    return(
      <div className="BaseDeckChoicesAndStats">
        <div>
          <h2>{this.props.basicDeckName}</h2>
          <table className="pure-table pure-table-bordered">
            <thead>
              <tr>
                <th> </th>
                <th> Leader Name </th>
                <th> Ability </th>
              </tr>
            </thead>
            <tbody>
              {currentLeaders}
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
              </tr>
            </thead>
            <tbody>
              {currentCards}
            </tbody>
          </table>
        </div>
        <div className="DeckStats">
        </div>
        <div className="NeutralDeckChoices">
          <h2> Neutral Deck Choices </h2>
          <table className="pure-table pure-table-bordered">
            <thead>
              <tr>
                <th> </th>
                <th> Leader Name </th>
                <th> Ability </th>
              </tr>
            </thead>
            <tbody>
              {currentNeutralCards}
            </tbody>
          </table>
        </div>
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

class BasicDeckTableRow extends Component {
  render(){
    return(
      <tr>
        <td> <input type="checkbox"/></td>
        <td> {this.props.name} </td>
        <td> {this.props.type} </td>
        <td> {this.props.position} </td>
        <td> {this.props.score} </td>
      </tr>
    )
  }
}

class NeutralDeckTableRow extends Component {
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
