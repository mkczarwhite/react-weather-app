import axios from "axios";
import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(){
    function handleResponse(response){
        console.log(response.data);

    }
    let apiKey="4a26ac7808aaa734610b976e82bd1916";
    let longitude=40.7;
    let latitude=74;
    let apiUrl=`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return (
        <div className="WeatherForecast">
            <div className="row">
                <div className="col">
                    <div className="WeatherForecast-day">Thu</div> Icon
                    <div className="WeatherForecast-temperature"><span className="WeatherForecast-temperature-max">83º</span>/<span className="WeatherForecast-temperature-min">74º</span>
                        </div> 
                </div>
            </div>
        </div>
    )
}