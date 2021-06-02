import React from "react";
import './Weather.css';

export default function Weather(){
    return <div className="weather">
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
        </div>
    </div>;
}