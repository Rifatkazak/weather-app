import React,{useEffect, useState} from 'react'
import {createContext} from "react"
import {locations} from "../location/Location";
// import axios from "axios"


const WeatherContext = createContext();

export const WeatherProvider= ({children})=>{
    const [lat, setLat] = useState(0)
    const [lon, setLon] = useState(0)
    // const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=weekly&appid=a03f5795b168886ec75b7203ed0a4e3c`
    
    const latLonChange = (lat, lon) => {
        console.log(lat)
        setLon(lon)
        setLat(lat)
        console.log(lat,lon)
    }
    const values = {locations, latLonChange}


    useEffect(() => {
        console.log(lat,lon)
    }, [locations])
     
    return (
        <WeatherContext.Provider value={values}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherContext
