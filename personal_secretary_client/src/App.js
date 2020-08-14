import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  BrowserRouter as Router,
  withRouter,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import './App.css';
import Layout from './components/shared/Layout.jsx'
import Homepage from './components/routes/Homepage.jsx'
import History from './components/routes/History.jsx'
import NewSpendCreate from './components/routes/NewSpendCreate.jsx'
import NewIncomeCreate from './components/routes/NewIncomeCreate.jsx'
import HasLogged from './components/routes/HasLogged'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [spendings, setSpendings]= useState([])
  const [incomes, setIncomes]= useState([])
  const [dailySpend, setDailySpend]= useState(0)
  const [dailyIncome, setDailyIncome]= useState(0)
  const [monthlySpend, setMonthlySpend]= useState(0)
  const [monthlyIncome, setMonthlyIncome]= useState(0)
  //Today's date for daily calculation
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); 
  let yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd ;
  let thisMonth = yyyy + '-' + mm

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(`http://localhost:3000/incomes`);
        console.log("Incomes - useEffect - response", response);
        setIncomes(incomes.push(...response.data));
        console.log('incomes,', incomes)
        setDailyIncome(dailyAmount(incomes,today))
        setMonthlyIncome(dailyAmount(incomes,thisMonth))
      } catch (err) {
        console.error(err);
      }
    };  
    makeAPICall();
  }, [])

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios(`http://localhost:3000/spends`);
        console.log("spending - useEffect - response", response);
        setSpendings(spendings.push(...response.data));
        console.log('spends,', spendings)
        setDailySpend(dailyAmount(spendings,today))
        setMonthlySpend(dailyAmount(spendings,thisMonth))
      } catch (err) {
        console.error(err);
      }
    };  
    makeAPICall();
  }, [])
  console.log('daily spends outside API,', dailySpend)
  function dailyAmount(arr, date){
    let amount=0
    if(date.length==10){
      arr.forEach(i=>{
      if(i.created_at.toString().slice(0,10)==today) amount+=parseFloat(i.amount)
    })} else if(date.length==7){
      arr.forEach(i=>{
        console.log(typeof i.amount)
        if(i.created_at.toString().slice(0,7)==thisMonth) amount+=parseFloat(i.amount)
    })}   
    return amount
  }

// spendings? dailyAmount(spendings) : console.log("hi")

  return (
    <div className="App">
      <Layout>
      <Route
          path="/"
          exact
          render={(routerProps) => (
            <Homepage
              {...routerProps}
              dailyIncome={dailyIncome}
              dailySpend={dailySpend}
              monthlyIncome={monthlyIncome}
              monthlySpend={monthlySpend}
            />
          )}
        />
        {/* <Route
          path="/"
          exact
          render={(routerProps) => (
            <History
              {...routerProps}
            />
          )}
        /> */}
        <Route
          path="/logSpent"
          exact
          render={(routerProps) => (
            <NewSpendCreate
              {...routerProps}
            />
          )}
        />
        <Route
          path="/logReceived"
          exact
          render={(routerProps) => (
            <NewIncomeCreate
              {...routerProps}
            />
          )}
        />
        <Route path='/entryreceived'component={HasLogged}/>
      </Layout>
    </div>
  );
}

export default App;
