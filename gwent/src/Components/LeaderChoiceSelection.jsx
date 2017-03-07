import React, { Component } from 'react'
import LeaderChoice from './LeaderChoice.jsx'
import '../Styles/LeaderChoiceSelection.css'

class LeaderChoiceSelection extends Component {
  render(){
  	if(typeof this.props.leaders === "undefined"){
  		return null;
  	}

  	const leaders = this.props.leaders;
  	const leaderItems = [];

  	leaders.map((object)=>{ 
  		leaderItems.push(
  			<div key={object.id} className="LeaderChoiceDiv">
  				<span className="LeaderName"><h4>{object.name}</h4></span>
  				<img 
         		  src={this.props.path + object.image} 
              alt={object.name}
          		className="LeaderChoiceImg"
          		onClick={() => this.props.onClick(object.id)}
        		/>
        		<h5>{object.ability}</h5>
  			</div>
  		);
  	});

	return(
	  <div>
	  	<div className="BackgroundMask">
	  	</div>
      	<div className="LeaderChoices">
		  {leaderItems}
	  	</div>
	  </div>
	)
  }
}

export default LeaderChoiceSelection;