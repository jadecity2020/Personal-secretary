import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import axios from 'axios'
import "./Homepage.css";


const Homepage =(props)=>{
    // console.log(props)
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
        //   console.log("Incomes - useEffect - response", response);
          setIncomes(incomes.push(...response.data));
        //   console.log('incomes,', incomes)
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
        //   console.log("spending - useEffect - response", response);
          setSpendings(spendings.push(...response.data));
        //   console.log('spends,', spendings)
          setDailySpend(dailyAmount(spendings,today))
          setMonthlySpend(dailyAmount(spendings,thisMonth))
        } catch (err) {
          console.error(err);
        }
      };  
      makeAPICall();
    }, [])
    // console.log('daily spends outside API,', dailySpend)
    function dailyAmount(arr, date){
      let amount=0
      if(date.length==10){
        arr.forEach(i=>{
        if(i.created_at.toString().slice(0,10)==today) amount+=parseFloat(i.amount)
      })} else if(date.length==7){
        arr.forEach(i=>{
          if(i.created_at.toString().slice(0,7)==thisMonth) amount+=parseFloat(i.amount)
      })}   
      return amount
    }
    return(
        <>
        <div>
            <h2>Spendings Today: <span>{dailySpend.toFixed(2)}</span></h2>
            <h2>Incomes Today: <span>{dailyIncome.toFixed(2)}</span></h2>
            <h2>Spendings this month: <span>{monthlySpend.toFixed(2)}</span></h2>
            <h2>Incomes this month: <span>{monthlyIncome.toFixed(2)}</span></h2>
        </div>

        <div>
            <h2>New Entry: I have -</h2>
            <h3><Link to='/logSpent'>Spent Money</Link></h3>
            <h3><Link to='/logReceived'>Received Money</Link></h3>
        </div>
        </>
    )
}
export default Homepage