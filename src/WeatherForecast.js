import axios from "axios";
import React, {useState} from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(props){
    let [loaded, setLoaded]=useState(false);
    let [forecast, setForecast]=useState(null);
    function handleResponse(response){
        setForecast(response.data.daily);
        setLoaded(true);
    }
    if (loaded){
        return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
        <div className="WeatherForecast-day">{forecast[0].dt}</div> {forecast[0].weather[0].icon}
        <div className="WeatherForecast-temperature"><span className="WeatherForecast-temperature-max">{forecast[0].temp.max}º</span>/<span className="WeatherForecast-temperature-min">{forecast[0].temp.min}º</span>
                        </div> 
                </div>
            </div>
        </div>)
    }
   else{
   let apiKey="4a26ac7808aaa734610b976e82bd1916";
    let longitude=props.coordinates.lon;
    let latitude=props.coordinates.lat;
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return null;
   }
}