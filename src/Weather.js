import React, {useState} from "react";
import './Weather.css';
import axios from 'axios';

export default function Weather(props){
    const [weatherData, setWeatherData]=useState({ready:false});
    function handleResponse(response){
        console.log(response);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            city: response.data.name,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            description: response.data.weather[0].main,
            condition: response.data.weather[0].description,
            date: "Wednesday, 14:30"
        })
    }
    if (weatherData.ready){
return <div className="weather">
        <form>
            <div className="row">
                <div className="col-9">
<input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on"/>
                </div>
<div className="col-3">
<input type="submit" value="Search" className="btn btn-primary w-100"/>
</div>
            
            </div>
            
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
            <li>
                {weatherData.date}
            </li>
            <li className="text-capitalize">
                {weatherData.condition}
            </li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <div className="clearfix">
<img src={weatherData.iconUrl} alt={weatherData.description} className="float-left"/>
<span className="temperature">{Math.round(weatherData.temperature)}</span><span className="unit">ºF/ºC</span>
                </div>
                
            </div>
            <div className="col-6">
                <ul>
                    <li>
                        Humidity: {Math.round(weatherData.humidity)}%
                    </li>
                    <li>
                        Wind: {Math.round(weatherData.wind)}mph 
                    </li>
                </ul>
            </div>
        </div>
    </div>;
    } else{
    const apiKey="4a26ac7808aaa734610b976e82bd1916";
    let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return "loading...";
    }
    
    
}