import React, {useState, useEffect} from 'react'
import axios from 'axios'
import HistoryLog from './HistoryLog'


const History =(props)=>{
    console.log(props)
    const [spends, setSpends]= useState([])
    const [incomes, setIncomes]= useState([])
    useEffect(() => {
        const makeAPICall = async () => {
          try {
            const response = await axios(`http://localhost:3000/incomes`);
            console.log("Incomes - useEffect - response", response);
            setIncomes(response.data);
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
            setSpends(response.data);

          } catch (err) {
            console.error(err);
          }
        };  
        makeAPICall();
      }, [])

    return(
        <>
            <HistoryLog
            spends={spends}
            incomes={incomes}
            />
            <h2>hello</h2>
        </>
    )
}
export default History