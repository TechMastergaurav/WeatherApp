 import { useState } from "react";
import {SearchBox} from "./SearchBox"
 import InfoBox from "./infobox";

export default function WeatherApp(){
    const[WeatherInfo,SetWeatherInfo] = useState({
         
            city : "Delhi",
            feelslike : 24.84,
            temp: 25.05,
            tempMin :25.05,
            tempMax :25.05,
            humidity:20,
            Weather : "haze"
    
        
    })
    let updateInfo = (newInfo)=>{
        SetWeatherInfo(newInfo);
    }
    return (
        <div style={{textAlign:"center"}}>
            <h1>Weather App</h1>
            <SearchBox updateInfo = {updateInfo}/>
            <InfoBox info={WeatherInfo}/>

        </div>

    )
}