import React, { useState } from "react";

const Info = ({ filter }) => {
  return filter.map((e) => (
    <div key={e.flag}>
      <h1>{e.name.common}</h1>
      <p>
        {e.capital} <br /> {e.area}
      </p>
      <h3>Languages</h3>
      <ul>
        {Object.values(e.languages).map((e) => (
          <li key={e}>{e}</li>
        ))}
      </ul>
      <img style={{ width: 200 }} src={e.flags.png}></img>
    </div>
  ));
};

const Display = ({ countries, search }) => {
  let filter = countries.filter((e) => e.name.common.toUpperCase().includes(search.toUpperCase()));
  const [show, setShow] = useState(true);
  console.log(show);
  const func = () => {
    if (filter.length == 1) {
      return <Info filter={filter} />;
    } else if (filter.length < 10) {
      return filter.map((e) => (
        <>
          {show && (
            <div key={e.flag}>
              {e.name.common} <button onClick={() => setShow(false)}>Show</button>
            </div>
          )}
          {!show && (
            <>
              <button onClick={() => setShow(true)}>Hide</button>
              <Info filter={filter} />
            </>
          )}
        </>
      ));
    } else {
      return <div>Too many matches, specify another filter</div>;
    }
  };

  return <div>{func()}</div>;
};
export default Display;
