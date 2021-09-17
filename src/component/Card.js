import React, {useContext} from 'react'
import WeatherContext from '../context/WeatherContext'
import styles from "../styles.module.css"

function Card() {
    
    const {locations, daily} = useContext(WeatherContext)
    

    return (
        <div className = {styles.card}>
           {daily.map((i,index) => (
               <div key={index} className={styles.day}>
                   <div><img src={`http://openweathermap.org/img/w/${i.icon}.png`} /></div>
                   <div>{i.weather}</div>
                   <div>{i.max}F/{i.min}F</div>
               </div>
           ))}
        </div>
    )
}

export default Card
