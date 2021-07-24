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

  const handlePin = (event) => {
    setPin(event.target.value)
  }

  const handleCenters = (center) => {
    setCenters(center)
  }


  const search = () => {
    
    axios.get(`${url}pincode=${pin}&date=${date}`)
    .then( (response) =>response?.data.centers ? setCenters(response.data.centers) : null )
    

  }

  const handleClick = (event) => {
    event.preventDefault();
    search();
  }


  return (
    <div className="App">
      <Search 
        handlePin = {handlePin}
        handleCenters = {handleCenters}
        handleClick = {handleClick}
        pin = {pin}
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
