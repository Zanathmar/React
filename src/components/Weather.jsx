//  in src/pages/
import React, { useEffect } from "react";
import ForecastDetails from "../components/ForecastDetails";
import ForecastTab from "../components/ForecastTab";
 
function Weather() {
  const apiUrl = "https://api.bmkg.go.id/publik/prakiraan-cuaca?adm4={kode_wilayah_tingkat_iv}";
  // const [weather, setWeather] = useState(null);
  // const [location, setLocation] = useState(null);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch(`${apiUrl}?adm4=32.01.05.2004`);
  //       const data = await response.json();
  //       if (!response.ok) {
  //         throw new Error(data.message);
  //       }
  //       setWeather(data.data[0].cuaca);
  //       setLocation(data.lokasi);
  //       } catch (error) {
  //       setError(error.message);
  //       console.error(error.message);

  //     }
  // }}, []);

  return (
    <React.Fragment>
      <section className="weather">
        <h1>Weather in Desa, Kecamatan, Kota, Provinsi</h1>
        <span>Current Date</span>
        <div className="current-weather">
          <img src="https://openweathermap.org/img/wn/01d@2x.png" alt="" />
          <span className="weather-desc">
            Weather Description (Berawan, etc)
          </span>
          <strong>24°C</strong>
        </div>
      </section>
      <section className="forecast">
        <h2>Forecast</h2>
        <div className="forecast-container">
          <ForecastTab
            onClick={() => {}}
            imgSrc="https://openweathermap.org/img/wn/01d@2x.png"
            day="Today"
            minTemp={18}
            maxTemp={24}
          />
          <ForecastTab
            onClick={() => {}}
            imgSrc="https://openweathermap.org/img/wn/01d@2x.png"
            day="Tomorrow"
            minTemp={18}
            maxTemp={24}
          />
          <ForecastTab
            onClick={() => {}}
            imgSrc="https://openweathermap.org/img/wn/01d@2x.png"
            day="Sunday"
            minTemp={18}
            maxTemp={24}
          />
        </div>
        <div className="divider"></div>
        <div className="forecast-details-container">
          <ForecastDetails />
          <ForecastDetails />
          <ForecastDetails />
          <ForecastDetails />
          <ForecastDetails />
          <ForecastDetails />
          <ForecastDetails />
          <ForecastDetails />
          <ForecastDetails />
        </div>
      </section>
    </React.Fragment>
  );
}
export default Weather;