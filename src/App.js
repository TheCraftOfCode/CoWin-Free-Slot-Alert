import axios from 'axios';
import {useEffect, useState } from 'react';
import './App.css';
import Search from "./components/Search"
import Slots from './components/Slots';

function App() {

  const url = 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?'

  useEffect(() => {
    let today = new Date();
    setDate(`${today.getDate()}-${today.getMonth() < 9 ? 0 : null}${today.getMonth() + 1}-${today.getFullYear()}`)
  }, [])


  const [pin, setPin] = useState();
  const [centers,setCenters] = useState();
  const [date,setDate] = useState();
  const [isSearching,setIsSearching] = useState(false);


  const handlePin = (event) => {
    setPin(event.target.value)
  }

  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const handleClick = async (event) => {
    event.preventDefault();
    setIsSearching(true)
    while(true) 
    {
      const response = await axios.get(`${url}pincode=${pin}&date=${date}`)
      setCenters(response.data.centers)
      if(response.data.centers.length !== 0)
      { 
        setIsSearching(false)
        return
      }
      else await sleep(10000)
    }
  }


  return (
    <div className="App">

      <Search 
        handlePin = {handlePin}
        handleClick = {handleClick}
        pin = {pin}
        isSearching = {isSearching}
        />

        <div>How to use this ?</div>
        <div>Enter your pincode, hit search and carry on with your work. The app will keep seaching and when it finds a slot, it will alert you with a beep</div>
        <br />
        
        {centers ? 
          centers.length > 0 ? <Slots centers = {centers} /> : <h1>No Slots yet. Searching...</h1>
          : null
        }
        
    </div>
  );
}

export default App;
