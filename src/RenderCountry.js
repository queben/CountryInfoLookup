import Weather from "./Weather";

const RenderCountry = ({ country }) => {

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>
        Capital: {country.capital}
        <br />
        Area: {country.area}
        <br />
      </p>
      <h3>Languages:</h3>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt={country.flags.alt} />

      <Weather country={country} />
    </div>
  );
};

export default RenderCountry;
