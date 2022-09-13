import { useState } from "react";

const Log = (props) => {
  if (props.allClicks.length === 0) {
    return <p>Log Empty, Click some buttons!</p>;
  }
  return <p>Click log: {props.allClicks.join(" ")}</p>;
};

const Button = ({ handleClick, title }) => {
  return <button onClick={handleClick}>{title}</button>;
};

function App() {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    setClicks({ ...clicks, left: clicks.left + 1 });
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    setClicks({ ...clicks, right: clicks.right + 1 });
  };

  return (
    <>
      <div>
        <p style={{ paddingLeft: 12 }}>
          {clicks.left} <span style={{ paddingLeft: 26 }}>{clicks.right}</span>
        </p>
        <Button handleClick={handleLeftClick} title="Left" />
        <Button handleClick={handleRightClick} title="Right" />
        <Log allClicks={allClicks} />
      </div>
    </>
  );
}

export default App;
