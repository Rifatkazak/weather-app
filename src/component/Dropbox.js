import React from 'react';
import {useContext,} from "react"
import WeatherContext from '../context/WeatherContext';
// import { locations } from '../location/Location';
import styles from "../styles.module.css"


function Dropbox() {


    const {location, setLoca, setAdd, add, addCity} = useContext(WeatherContext) 
    const handleChange = (e) => {
        setLoca(e.target.value);
      }
   

    return (
        <div className={styles.addform}>
            <div className={styles.dropbox}>
                <select style={{width:"150px"}} className={styles.option} name="location" id="location" onChange={handleChange} >
                    {location.map((item,index) =>
                    <option key={index} value={item.lat} name = {item.name}   >
                            {item.name}
    
                        </option>
                )}
            </select>
            </div>
            <form onSubmit={addCity} className={styles.addcontainer}>
                <input type="text"  name="name" value={add} placeholder="Add your city" className ={styles.addinput}
                onChange={(e) =>setAdd(e.target.value)}
                />
                <button  className ={styles.addbtn}>ADD</button>
            </form>
        </div>
    )
                }
            

export default Dropbox
