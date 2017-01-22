import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';
import  gwentClasses from './classes.js';
import  gwentCards from './deckCards.js';

console.log(gwentCards);

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
        <div className="NeutralDeckChoices">
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

class BaseDeckChoicesAndStats extends Component{
  render(){
    let currentRows = [];

    if(this.props.basicDeckSelected === "northern"){
      gwentCards.northernCards.map((object, index)=>{
        currentRows.push(<BasicDeckTablerow key={index} name={object.name} type={object.type} score={object.score}/>);
      })
    }

    else if(this.props.basicDeckSelected === "nilfgaard"){
      gwentCards.nilfgaardCards.map((object, index)=>{
        currentRows.push(<BasicDeckTablerow key={index} name={object.name} type={object.type} score={object.score}/>);
      })
    }
    else if(this.props.basicDeckSelected === "monsters"){
      gwentCards.monsterCards.map((object, index)=>{
        currentRows.push(<BasicDeckTablerow key={index} name={object.name} type={object.type} score={object.score}/>);
      })
    }
    else if(this.props.basicDeckSelected === "scoiatael"){
      gwentCards.scoiataelCards.map((object, index)=>{
        currentRows.push(<BasicDeckTablerow key={index} name={object.name} type={object.type} score={object.score}/>);
      })
    }
    else{

    }
  
    return(
      <div className="BaseDeckChoicesAndStats">
        <div>
          <h2>{this.props.basicDeckName}</h2>
          <table>
            <thead>
              <tr>
                <th> Card Name </th>
                <th> Card Type </th>
                <th> Card Score </th>
              </tr>
            </thead>
            <tbody>
              {currentRows}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

class BasicDeckTablerow extends Component {
  render(){
    return(
      <tr>
        <td> {this.props.name} </td>
        <td> {this.props.type} </td>
        <td> {this.props.score} </td>
      </tr>
    )
  }
}

export default SelectionPage;
