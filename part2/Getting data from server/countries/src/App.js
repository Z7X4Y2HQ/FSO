import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState();
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  return (
    <div>
      <div>
        filter shown with <input value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div>
        {countries
          .filter((e) => e.name.official.toUpperCase().includes(search.toUpperCase()))
          .map((e) => (
            <div key={e.flag}>{e.name.official}</div>
          ))}
      </div>
    </div>
  );
};
export default App;
