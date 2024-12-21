import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    let [city, setCity] = useState('');
    let [error,setError] = useState(false);

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "4c7fd39899cd9ade537a01721fa5f201";

    let fetchWeatherInfo = async () => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&units=metric&appid=${API_KEY}`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity, // Changed property name
                tempFeelsLike: jsonResponse.main.feels_like,
                tempWeather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        }catch(err){
            throw err;
        
    }
}

    let handleChange = (evt) => {
        setCity(evt.target.value);
    }

    let handleSubmit = async (evt) => {
        try{
            evt.preventDefault();
            let newInfo = await fetchWeatherInfo();
            updateInfo(newInfo);
            setCity('');
        }catch(err){
            setError(true);
        }
        
    }

    return (
        <div className='search-box'>
            <h3>Search for Weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField id="city" label="City Name" variant="outlined" required onChange={handleChange} value={city} />
                <br /> <br />
                <Button variant="contained" type='submit'>
                    Search
                </Button>
                {error && <p style={{color:"red"}}>City not found</p>}
            </form>
        </div>
    );
}