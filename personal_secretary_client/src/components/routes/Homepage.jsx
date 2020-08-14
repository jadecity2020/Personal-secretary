import React from 'react'
import {Link} from "react-router-dom";

const Homepage =(props)=>{
    console.log(props)
    return(
        <>
        <div>
            <h2>Spendings Today: <span>{props.dailySpend.toFixed(2)}</span></h2>
            <h2>Incomes Today: <span>{props.dailyIncome.toFixed(2)}</span></h2>
            <h2>Spendings this month: <span>{props.monthlySpend.toFixed(2)}</span></h2>
            <h2>Incomes this month: <span>{props.monthlyIncome.toFixed(2)}</span></h2>
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