import React, {useState} from "react";
import './Weather.css';
import axios from 'axios';
import WeatherInfo from './WeatherInfo';

export default function Weather(props){
    const [weatherData, setWeatherData]=useState({ready:false});
    const [city, setCity]=useState(props.defaultCity);
    function handleResponse(response){
        console.log(response);
        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            city: response.data.name,
            iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
            description: response.data.weather[0].main,
            condition: response.data.weather[0].description,
            date: new Date(response.data.dt*1000)
        })
    }
    function search(){
    const apiKey="4a26ac7808aaa734610b976e82bd1916";
    let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function handleCityChange(event){
        setCity(event.target.value);
    }
    if (weatherData.ready){
return <div className="weather">
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
<input type="search" placeholder="Enter a city..." className="form-control" autoFocus="on" onChange={handleCityChange}/>
                </div>
<div className="col-3">
<input type="submit" value="Search" className="btn btn-primary w-100"/>
</div>
            
            </div>
            
        </form>
        <WeatherInfo data={weatherData}/>
        
    </div>;
    } else{
        search();
    return "loading...";
    }
    
    
}