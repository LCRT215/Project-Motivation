import React, { useState, useEffect } from "react";

const useFetch = url => {
  const [weather, setWeather] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchWeather() {
      const response = await fetch(url);
      const data = await response.json();

      console.log(`data:`, weather);
      setWeather(data.message);
      // setLoading(false);
    }
    fetchWeather();
  }, []);

  console.log(`weather info:`, weather);
  return { weather };
};

function Weather() {
  const { weather } = useFetch(
    "https://us-weather-by-city.p.rapidapi.com/getweather?city=San%20Francisco&state=CA",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "us-weather-by-city.p.rapidapi.com",
        "x-rapidapi-key": "d8763a37bfmsh415bc30aafacf6dp17f3bcjsn3740fb7a58c3"
      }
    }
  );
  return (
    <div className="Weather">
      <h1> weather</h1>
      <div> {weather}</div>
    </div>
  );
}

export default Weather;
