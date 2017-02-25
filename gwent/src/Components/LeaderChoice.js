import React, { Component, PropTypes } from 'react';
import '../../node_modules/fixed-data-table/dist/fixed-data-table.css'
import '../Styles/TableStyling.css'
import '../Styles/LeaderChoice.css';
import '../Styles/index.css';

class LeaderChoice extends Component {
  render(){
    if(typeof this.props.leader === "undefined"){
      return null;
    }

    return(
      <div>
        <h4>Leader</h4>
        <img 
          src={this.props.path + this.props.leader.image} 
          className="LeaderImg"
          onClick={this.props.onClick}
        />
      </div>
    )
  }
}

export default LeaderChoice;