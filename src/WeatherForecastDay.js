import React from "react";

export default function WeatherForecastDay (props){
    function maxTemperature(){
        let temperature= Math.round(props.data.temp.max);
        return `${temperature}`;
    }

    function minTemperature(){
        let temperature= Math.round(props.data.temp.min);
        return `${temperature}`;
    }

    function day (){
        let date=new Date(props.data.dt*1000);
        let day= date.getDay();
        let days =["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        return days[day];
    }

    return (
    <div className="WeatherForecast-day">
   <div className="WeatherForecast-day">{day()}</div> 
   <div className="WeatherForecast-icon">
    {props.data.weather[0].icon}
   </div> 
        <div className="WeatherForecast-temperature">
            <span className="WeatherForecast-temperature-max">{maxTemperature()}º</span>
        /<span className="WeatherForecast-temperature-min">{minTemperature()}º</span>
                        </div>
    </div>
  )
}