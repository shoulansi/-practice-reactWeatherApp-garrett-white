import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

export default function CityForecast() {
  const { cityName } = useParams();//gets city from the url!
  const [forecast, setForecast] = useState(null);
  const detailsRef = useRef(null);

const weatherData = {
  NewYork: {
    summary: "Sunny, 25°C",
    details: "Clear skies throughout the day with mild temperatures.",
  },
  London: {
    summary: "Cloudy, 18°C",
    details: "Overcast with occasional light rain in the afternoon.",
  },
  Tokyo: {
    summary: "Rainy, 22°C",
    details: "Continuous rain expected throughout the day.",
  },
};

  useEffect(() => {
    setForecast(weatherData[cityName]);//basically useeffect is waiting for the code to change then setforecast changes the state based on what the data is
  }, [cityName]);

  const scroll = () => {
    if (detailsRef.current) { //scrolls way far down, pretty far, really far.
       detailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <h1>{cityName} Forecast</h1>

      {forecast && (
        <div>
          <p>{forecast.summary}</p>
          <button onClick={scroll}>View Details</button>
          <a href="/"><button>Back To Home</button></a>

          <div style={{ height: "1000000px" }}></div>

          <div ref={detailsRef}>
            <h2>Details</h2>
            <p>{forecast.details}</p>
          </div>
        </div>
      )}
    </div>
  );
}
//forecast && checks to make sure the data has loaded and is not null!
//sorry for that button lol i was curious... key value pairs filling in dynamic data. simple html fun things.

//its actually quite fun coming back to these lessons after, obviously I won't do that all the time but it's pretty nice having a way better understanding of...
//... things and knowing what to do instead of being confused lol. But last project turned in! woohoooooo