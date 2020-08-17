import React, { useEffect, useState } from 'react'
import { Chart } from "react-google-charts";
import axios from 'axios'

const HistoryCharts=(props)=>{
    const [spendings, setSpendings]= useState([])
    const [dailySpendings, setDailySpendings]= useState([])
    const [monthlySpendings, setMonthlySpendings]= useState([])
    const [grocery,setGrocery]=useState(0)
    const [gas,setGas]=useState(0)
    const [food,setFood]=useState(0)
    const [other,setOther]=useState(0)
    //Setting today's date
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); 
    let yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd ; //slice(0,10)
    let thisMonth = yyyy + '-' + mm //slice(0,7)
    useEffect(() => {
        const makeAPICall = async () => {
          try {
            const response = await axios(`http://localhost:3000/spends`);
          //   console.log("spending - useEffect - response", response);
            setSpendings(spendings.push(...response.data));
            console.log('spends,', spendings)
            // setDailySpendings(dailySpendings.push(...generateSpendingArr(spendings,today)))
            setMonthlySpendings(monthlySpendings.push(...generateSpendingArr(spendings,thisMonth)))
            console.log('monthly,', monthlySpendings)
            setGrocery(categoryTotal(monthlySpendings,'Grocery'))
            setGas(categoryTotal(monthlySpendings,'Gas/Transportation'))
            setFood(categoryTotal(monthlySpendings,'Food/Restaurants'))
            setOther(categoryTotal(monthlySpendings,'Other'))
          } catch (err) {
            console.error(err);
          }
        };  
        makeAPICall();
      }, []) 
    function generateSpendingArr(arr, date){
        let retArray=[]
        if(date.length==10){
          arr.forEach(i=>{
          if(i.created_at.toString().slice(0,10)==date) retArray.push(i)
        })} else if(date.length==7){
          arr.forEach(i=>{
            if(i.created_at.toString().slice(0,7)==date) retArray.push(i)
        })}   
        return retArray
      }

      function categoryTotal (arr, string){
        let total=0
        arr.forEach(e=>{
            if(e.category==string) total+=parseFloat(e.amount)
        })
        return total
      }
    return (
        <Chart
        width={'500px'}
        height={'300px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
            ['Money Spent', 'Percentage'],
            ['Grocery', grocery],
            ['Gas/Transportation', gas],
            ['Food/Restaurants', food],
            ['Other', other],
        ]}
        options={{
            title: 'My Monthly Spending',
        }}
        rootProps={{ 'data-testid': '1' }}
        />
    )
}


export default HistoryCharts