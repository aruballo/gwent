import React, { Component, PropTypes } from 'react';
import {Cell} from 'fixed-data-table';
import '../Styles/CustomCell.css';

class CustomCell extends Component {
  render(){
    const {rowIndex, data, offset, numberOfColumns, path, onChange} = this.props;

    if(typeof data[rowIndex * numberOfColumns + offset] === "undefined"){
      return null;
    }

    return(
      <Cell>
        <img 
          className={data[rowIndex * numberOfColumns + offset].checked === true ? "DeckImageCellImg ImageCellImgHighlight" : "DeckImageCellImg" } 
          src={path + data[rowIndex * numberOfColumns + offset].image}
          alt={data[rowIndex * numberOfColumns + offset].name}
          onClick={() => document.getElementById("Checkbox" + data[rowIndex * numberOfColumns + offset].id).click()}
        />
        <input
          id={"Checkbox" + data[rowIndex * numberOfColumns + offset].id} 
          className="Hidden"
          type="checkbox" 
          checked={data[rowIndex * numberOfColumns + offset].checked} 
          onChange={(event) => {
            onChange(data[rowIndex * numberOfColumns + offset].id, event.target.checked)
          }}
        />
      </Cell>
    );
  }
}

export default CustomCell;