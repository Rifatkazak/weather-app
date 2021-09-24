
import Card from './component/Card';
import Dropbox from './component/Dropbox';
import {WeatherProvider} from './context/WeatherContext';
import styles from "./styles.module.css"




function App() {
  return (
    <WeatherProvider className ={styles.app}>
      <h2 className ={styles.header}>Weather Forecast</h2>
      <Dropbox/>
      <Card/>
      
    </WeatherProvider>
  );
}

export default App;
