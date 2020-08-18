import React from "react";
import {Link} from 'react-router-dom'


const NewIncomeEntry = ({ incomeInput, handleSpendSubmit, handleSpendChange}) => {
    // console.log(incomeInput)
  return (
      <div>
    <form className="IncomeForm" onSubmit={handleSpendSubmit}>
      <div className="Income-Div-box">
        <label>Amount Received: </label>
        <input
          className="Description-input"
          placeholder="25.99"
          value={incomeInput.amount}
          name="amount"
          onChange={handleSpendChange}
        />
        <br />
      </div>
      <div className="Income-buttons">
        <button className="submit" type="submit">
                Submit
        </button>
        <Link to='/'>
          <button className="cancel">Cancel</button>
        </Link>
      </div>
    </form>
 
    </div>
  );
};
export default NewIncomeEntry;
