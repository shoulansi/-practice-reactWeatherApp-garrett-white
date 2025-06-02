import { Link } from "react-router-dom";

const cities = ["NewYork", "London", "Tokyo"];

export default function CityList() {
  return (
    <div>
      <h1>Select a City</h1>
      <ul>
        {cities.map((city) => (
          <li key={city}>
            <Link to={`/forecast/${city}`}>{city}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}