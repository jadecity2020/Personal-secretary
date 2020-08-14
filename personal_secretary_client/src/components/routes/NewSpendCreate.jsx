import React, { useState } from "react";
import axios from "axios";
import NewSpendEntry from "./NewSpendEntry";


const NewEntryCreate = (props) => {
  console.log('spending props', props)
  const [spendInput, setSpendInput] = useState({ category: "", amount: ''});
  const [incomeInput, setIncomeInput] = useState({amount:''});
  const [category, setCategory] = useState('');
  const [time, setTime] = useState()
  
  const handleSpendChange = (event) => {
    console.log("event", event.target.name, event.target.value);
    setSpendInput({
      ...spendInput,
      [event.target.name]: event.target.value
    });
  };
  const handleSelect = (event) =>{
    console.log('onselect',event)
    setCategory(event)
    setSpendInput({
        ...spendInput,
        category: event
      });
 
  }
  const handleSpendSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");
    console.log(spendInput)
    axios({
      url: `http://localhost:3000/spends/`,
      method: "POST",
      data: spendInput,
    })
      .then((res) => {
        console.log(res)
          setSpendInput({ createdItem: res.data.idea })
          props.history.push('/entryreceived')
        })
      .catch(console.error);
  };

  return (
    <div className="Logged-views">
        <NewSpendEntry
          spendInput={spendInput}
          handleSpendChange={handleSpendChange}
          handleSpendSubmit={handleSpendSubmit}
          handleSelect={handleSelect}
        />
    </div>
  );
};
export default NewEntryCreate;
