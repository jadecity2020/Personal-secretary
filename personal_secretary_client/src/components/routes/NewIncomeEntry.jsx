import React from "react";



const NewIncomeEntry = ({ incomeInput, handleSpendSubmit, handleSpendChange}) => {
    // console.log(incomeInput)
  return (
      <div>
    <form className="NewIdeaForm" onSubmit={handleSpendSubmit}>
      <div className="Idea-Create-Div-box">
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
      <div className="Idea-create-buttons">
        <button className="submit" type="submit">
                Submit
        </button>
      </div>
    </form>
 
    </div>
  );
};
export default NewIncomeEntry;
