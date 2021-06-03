import React, {useState} from "react";
import './Weather.css';
import axios from 'axios';

export default function Weather(){
    const [ready, setReady]=useState(false);
    const [temperature, setTemperature]=useState(null);
    function handleResponse(response){
        setTemperature(response.data.main.temp);
        setReady(true);
    }
    if (ready){
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
        <h1>Hilo</h1>
        <ul>
            <li>
                Wednesday, 14:30
            </li>
            <li>
                Mostly sunny
            </li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
                <div className="clearfix">
<img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="mostly sunny" className="float-left"/>
<span className="temperature">{Math.round(temperature)}</span><span className="unit">ºF/ºC</span>
                </div>
                
            </div>
            <div className="col-6">
                <ul>
                    <li>
                        Precipitation: 15%
                    </li>
                    <li>
                        Humidity: 86%
                    </li>
                    <li>
                        Wind: 15mph 
                    </li>
                </ul>
            </div>
        </div>
    </div>;
    } else{
    const apiKey="4a26ac7808aaa734610b976e82bd1916";
    let city="Hilo";
    let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return "loading...";
    }
    
    
}