import { useState, useEffect } from "react";
import Display from "./components/Display";
import Search from "./components/Search";
import axios from "axios";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setLoading(false);
      setCountries(response.data);
    });
  }, []);

  return (
    <div>
      <h2>Find Countries</h2>
      <Search setSearch={setSearch} search={search} />
      {loading ? (
        <img className="img" src={require("./loader.png")}></img>
      ) : (
        <Display countries={countries} search={search} />
      )}
    </div>
  );
};

export default App;
