import React, { Component, PropTypes } from 'react';
import {Table, Column} from 'fixed-data-table';
import CustomCell from '../Components/CustomCell.jsx'
import '../../node_modules/fixed-data-table/dist/fixed-data-table.css'
import '../Styles/DeckChoices.css';
import '../Styles/index.css';

class DeckChoices extends Component{
  render(){
    const arrayOfColumns = [];
    const numberOfColumns = this.props.numberOfColumns;

    for(let i = 0; i < numberOfColumns; i++){
      arrayOfColumns.push(
        <Column 
          cell={
            <CustomCell 
              data={this.props.deckCards} 
              path="/cards/" 
              numberOfColumns={numberOfColumns} 
              offset={i} 
              type="DeckCell" 
              onChange={this.props.onRowClick}
            />
          }
          width={this.props.cellWidth}
          key={i}
        />
      );
    }

    return(
      <div className="DeckTableDiv">
        <h2>{this.props.label}</h2>
        <Table 
          rowsCount={Math.ceil(this.props.deckCards.length/this.props.numberOfColumns)} 
          rowHeight={this.props.rowHeight} 
          maxHeight={this.props.maxHeight} 
          width={this.props.width} 
          headerHeight={0}
        >
         {arrayOfColumns}
        </Table>
      </div>
    )
  }
}

export default DeckChoices;