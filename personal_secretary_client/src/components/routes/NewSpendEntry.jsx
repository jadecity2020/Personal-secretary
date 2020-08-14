import React from "react";
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import {Link} from 'react-router-dom'


const NewSpendEntry = ({ spendInput, handleSpendSubmit, handleSpendChange, handleSelect}) => {
    console.log(spendInput)
  return (
      <div>
        <DropdownButton id="dropdown-item-button" title="Select Category" value={spendInput.category} name='category' onSelect={handleSelect}>
        {/* <Dropdown.ItemText>Select Category</Dropdown.ItemText> */}
        <Dropdown.Item eventKey="Grocery">Grocery</Dropdown.Item>
        <Dropdown.Item eventKey="Gas/Transportation">Gas/Transportation</Dropdown.Item>
        <Dropdown.Item eventKey="Food/Restaurants">Food/Restaurants</Dropdown.Item>
        {/* <Dropdown.Item as="button">Food/Restaurants</Dropdown.Item> */}
        <Dropdown.Item eventKey="Other">Other</Dropdown.Item>
    </DropdownButton>

    <form className="NewIdeaForm" onSubmit={handleSpendSubmit}>
      <div className="Idea-Create-Div-box">
        <label>Category: </label>
        <input
          className="Title-input"
          placeholder="Category"
          value={spendInput.category}
          name="category"
          onChange={handleSpendChange}
        />
        <br />
        <label>Amount: </label>
        <input
          className="Description-input"
          placeholder="25.99"
          value={spendInput.amount}
          name="amount"
          onChange={handleSpendChange}
        />
        <br />
      </div>
      <div className="Idea-create-buttons">
        <button className="submit" type="submit">
                Submit
        </button>
      </div>
    </form>
 
    </div>
  );
};
export default NewSpendEntry;
