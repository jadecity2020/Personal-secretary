import React from 'react'
import "./HistoryLog.css";
import {Link} from "react-router-dom";

const HistoryLog=({spends, incomes})=>{
    console.log('props',spends)
    console.log(incomes)
    let totalLogs=spends
    if(!totalLogs.includes(incomes[0]))totalLogs.push(...incomes)
    console.log('total2',totalLogs)
    let sortedLog=totalLogs.sort(sortByDate)
    console.log(sortedLog)

    function sortByDate (a,b){
        const first= a.created_at
        const second= b.created_at
        let comparison=0;
        first > second? comparison=-1:comparison=1
        return comparison
    }

    let displayLogs=sortedLog.map(e=>{
        console.log(e)
        let displayCategory=e.category
        if(!e.category)displayCategory='Received'
        console.log(e)
        return(
        <div className='history-log-container'>
            <p className='history-date'>{e.created_at.slice(0,10)}</p>
            <p className='history-category'>{displayCategory}</p>
            <p className='history-amount'>${parseFloat(e.amount).toFixed(2)}</p>
        </div>
        )
    })
    console.log(displayLogs)
    return(
        <>
        <div><Link to='/history/Charts'><p className='title'>View Monthly Spending Charts</p></Link></div>
        <div className='history-log-total-container'> 
        <div className='history-log-container'>
            <p className='history-date title'>Date</p>
            <p className='history-category title'>Category</p>
            <p className='history-amount title'>Amount</p>
        </div>
            {displayLogs}
        </div>
        </>
    )
}

export default HistoryLog