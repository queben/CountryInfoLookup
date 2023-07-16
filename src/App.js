import "./App.css";
import { useEffect, useState } from "react";
import countriesAPI from "./services/countriesAPI";
import RenderCountries from "./RenderCountries";

function App() {
  const [countries, setCountries] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const [foundCountries, setFoundCountries] = useState(null);

  useEffect(() => {
    countriesAPI
      .getCountries()
      .then((allCountries) => setCountries(allCountries))
      .catch((error) => console.log(error));
  }, []);

  if (!countries) {
    return null;
  }

  const filterCountries = (name) => {
    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(name)
    );

    return filteredCountries;
  };

  const handleChange = (event) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  if (foundCountries) {
    console.log(foundCountries.map((country) => country.name.common));
  }

  return (
    <div>
      <form>
        Find countries <input value={searchValue} onChange={handleChange} />
      </form>
      {searchValue === "" ? (
        ""
      ) : (
        <RenderCountries
          searchValue={searchValue}
          filterHook={filterCountries}
        />
      )}
    </div>
  );
}

export default App;
