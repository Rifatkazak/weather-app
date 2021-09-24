import React, {useContext} from 'react'
import WeatherContext from '../context/WeatherContext'
import styles from "../styles.module.css"

function Card() {
    
    const { daily} = useContext(WeatherContext)
    
    const getTime = (time) => {
        var myDate = new Date( time *1000)
        return myDate.toGMTString().slice(0,16)
    }
    return (
        <div className = {styles.card}>
           {daily.map((i,index) => (
               <div key={index} className={styles.day} >
                   <div>{getTime(i.date)}</div>
                   <div><img src={`http://openweathermap.org/img/w/${i.icon}.png`} alt={i.weather}/></div>
                   <div>{i.weather}</div>
                   <div>{Math.floor(i.max - 273.15)}°C / {Math.floor(i.min - 273.15)}°C</div>
               </div>
           ))}
        </div>
    )
}

export default Card
