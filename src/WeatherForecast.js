import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast(){
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