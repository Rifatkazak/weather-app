import React,{useEffect, useState} from 'react'
import {createContext} from "react"
import {locations} from "../location/Location";
import axios from "axios"
import styles from "../styles.module.css"

const WeatherContext = createContext();

export const WeatherProvider= ({children})=>{
  
    const [loca,setLoca] = useState([])
    const [daily, setDaily] = useState([])
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${loca.slice(0,9)}&lon=${loca.slice(10,20)}&exclude=weekly&appid=a03f5795b168886ec75b7203ed0a4e3c`
    
    
     console.log(loca.slice(10,20))
        // setLon(konum[0])
        // setLat(konum[1])
        // console.log(lat,lon)
    
    const values = {locations,setLoca,daily}


    useEffect(() => {
        axios.get(url)
        .then(res => setDaily(res.data.daily.map(df => {
            return {
                min : df.temp.min,
                max :  df.temp.max,
                weather : df.weather[0].description,
                icon:df.weather[0].icon
            }
        })))
        
        //.then(res)
        
    }, [loca])
    console.log(daily)
    return (
        <WeatherContext.Provider value={values} className={styles.app}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherContext
