import React from "react";
import './Weather.css';

export default function Weather(){
    return <div className="weather">
        <form>
            <div className="row">
                <div className="col-9">
<input type="search" placeholder="Enter a city..." className="form-control"/>
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
        <div className="row">
            <div className="col-6">
                <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="mostly sunny"/>
                80ºF
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
}