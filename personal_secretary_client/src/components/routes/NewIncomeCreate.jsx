import React, { useState } from "react";
import axios from "axios";
import NewIncomeEntry from "./NewIncomeEntry";
import Redirect from 'react-router-dom'


const NewIncomeCreate = (props) => {
  const [incomeInput, setIncomeInput] = useState({amount:''});
  const handleSpendChange = (event) => {
    // console.log("event", event.target.name, event.target.value);
    setIncomeInput({
      ...incomeInput,
      [event.target.name]: event.target.value
    });
  };
  const handleSpendSubmit = (event) => {
    event.preventDefault();
    // console.log("handleSubmit");
    axios({
      url: `http://localhost:3000/incomes/`,
      method: "POST",
      data: incomeInput,
    })
      .then((res) => {
        // console.log(res)
          setIncomeInput({ createdItem: res.data.idea })
          props.history.push('/')
        })
      .catch(console.error);
  };

  return (
    <div className="Logged-views">
        <NewIncomeEntry
          incomeInput={incomeInput}
          handleSpendChange={handleSpendChange}
          handleSpendSubmit={handleSpendSubmit}
        />
    </div>
  );
};
export default NewIncomeCreate;
