import RenderCountry from "./RenderCountry.js";
import { useState } from "react";

const RenderCountries = ({ searchValue, filterHook }) => {
  const [currentCountry, setCurrentCountry] = useState(null);

  if (currentCountry) {
    return <RenderCountry country={currentCountry} />;
  }

  let countries = filterHook(searchValue);

  if (countries.length === 1) {
    setCurrentCountry(countries[0]);
  }

  if (countries.length <= 10) {
    return (
      <div>
        <ul>
          {countries.map((country) => (
            <li key={country.name.common}>
              {country.name.common}
              <button
                value={country}
                onClick={() => setCurrentCountry(country)}
              >
                Show
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  } else {
    return <div>Too many results! Try specifying more!</div>;
  }
};

export default RenderCountries;
