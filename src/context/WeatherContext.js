import React,{useEffect, useState, useMemo} from 'react'
import {createContext} from "react"
import {locations} from "../location/Location";
import axios from "axios"
import styles from "../styles.module.css"

const WeatherContext = createContext();

export const WeatherProvider= ({children})=>{
    const [lati, setLat] = useState({})
    const [location,setLocation] = useState(locations)
    const [add, setAdd] = useState("")
    const [loca,setLoca] = useState([])
    const [daily, setDaily] = useState([])
    const api_key ="a03f5795b168886ec75b7203ed0a4e3c" //process.env.API_KEY
    
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${loca.slice(0,7)}&lon=${loca.slice(8,18)}&exclude=weekly&appid=${api_key}`
    
    
     const addCity =(e) => {
         e.preventDefault()
         console.log(add)   
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${add}&appid=${api_key}`)
        .then(res => setLat(res.data.coord))
        // .then(res => setLocation([...location, {name : `${add}`, lat:[`${res.coord.lat},${res.data.coord.lon}`]}]))
        console.log(lati)
        setLocation([...locations, {name : `${add}`, lat:[`${lati.lat}`, `${lati.lon}`]}])
        console.log(location)
    };

    const values = {location,setLoca,daily,setAdd, add,addCity}

    useEffect( () => {
        axios.get(url)
        .then(res => setDaily(res.data.daily.map(df => {
            return {
                min : df.temp.min,
                max :  df.temp.max,
                weather : df.weather[0].description,
                icon:df.weather[0].icon,
                date : df.dt
            }
        })))
        
        //.then(res)
        
    }, [loca]);
    
    return (
        <WeatherContext.Provider value={values} className={styles.app}>
            {children}
        </WeatherContext.Provider>
    )
}

export default WeatherContext ;
