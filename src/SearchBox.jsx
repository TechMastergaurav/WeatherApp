import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { useState } from 'react';
import { set } from 'zod';
export  function SearchBox ({updateInfo}){
    let[city,SetCity] = useState("")
    let[error,setError] = useState(false)
    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "729ac0505e4c8c76c6ee7aa82d181c31"
    
    let getWeatherInfo = async() =>{
        try{
   let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
   let jsonresponse = await response.json();
  
   let result = {
        city:city,
      temp:jsonresponse.main.temp,
      tempMin : jsonresponse.main.temp_min,
      tempMax : jsonresponse.main.temp_max,
      humidity : jsonresponse.main.humidity,
      feelsLike : jsonresponse.main.feels_like,
      weather : jsonresponse.weather[0].description

   };
   console.log(result);
   return result;
 } catch(err){
throw err
 }
};
   
    let HandleChange = (e)=>{
    SetCity(e.target.value);
    }
    let HandleSumbit = async(e)=>{
        try{
        e.preventDefault();
        console.log(city);
        SetCity("");
       let newInfo =  await getWeatherInfo();
       updateInfo(newInfo)
        } catch (err){
            setError(true)
        }
    }
    return (<div className='SearchBox'>
     
        <form onSubmit={HandleSumbit}>
        <TextField id="City" label="City Name" variant="outlined" required  value={city} onChange={HandleChange} />
        <br></br>
        <br />
        <Button type = "submit" variant="contained" >
  Search
</Button>
{error && <p style={{color:"red"}}>No such place exits in our API</p>}

        </form>
    </div>
    )
}