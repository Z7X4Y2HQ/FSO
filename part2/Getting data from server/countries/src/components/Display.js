import React, { useState, useEffect } from "react";
import axios from "axios";

const SingleInfo = ({ data }) => {
  const [weather, setWeather] = useState([]);

  return data.map((e) => {
    return (
      <div key={e.flag}>
        <h1>{e.name.common}</h1>
        <p>
          capital {e.capital} <br /> area {e.area}
        </p>
        <h3>Languages</h3>
        <ul>
          {Object.values(e.languages).map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
        <img style={{ width: 200 }} src={e.flags.png}></img> <br />
      </div>
    );
  });
};

const Info = ({ data }) => {
  const [show, setShow] = useState(true);
  const [clicked, setClicked] = useState();

  return (
    <>
      {data.map((e) => {
        return (
          <div key={e.flag}>
            {e.name.common}{" "}
            <button
              onClick={() => {
                setShow(false);
                setClicked(e.name.common);
              }}
            >
              Show
            </button>
          </div>
        );
      })}
      {!show &&
        data
          .filter((e) => {
            if (e.name.common == clicked) {
              return e;
            }
          })
          .map((e) => {
            return (
              <div key={e.flag}>
                <h1>{e.name.common}</h1>
                <p>
                  capital {e.capital} <br /> area {e.area}
                </p>
                <h3>Languages</h3>
                <ul>
                  {Object.values(e.languages).map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
                <img style={{ width: 200 }} src={e.flags.png}></img> <br />
              </div>
            );
          })}
    </>
  );
};

const Display = ({ countries, search }) => {
  let data = countries.filter((e) => e.name.common.toUpperCase().includes(search.toUpperCase()));

  const [show, setShow] = useState(true);

  const func = () => {
    if (data.length == 1) {
      return <SingleInfo data={data} />;
    } else if (data.length < 10) {
      return <Info data={data} />;
    } else {
      return <div>Too many matches, specify another filter</div>;
    }
  };

  return <div>{func()}</div>;
};
export default Display;
