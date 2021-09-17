import React from 'react';
import {useContext,} from "react"
import WeatherContext from '../context/WeatherContext';

function Dropbox() {

    const {locations, latLonChange} = useContext(WeatherContext) 

   

    return (
        <div>
            <select style={{width:"300px"}}  id="location" onChange={(e) => latLonChange(e.target.value)}>
                {locations.map((item,index) =>
                 <option key={index} value={item.loca} name = {item.name}   >
                            {item.name}
    
                        </option>
                )}
            </select>
        </div>
    )
}

export default Dropbox
