import { useState } from "react";

const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear();
    return yearNow - props.age;
  };
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

const Banans = ({ count }) => {
  return <p>{count} banans</p>;
};

const Button = ({ onClick, title, color }) => {
  return (
    <button
      style={{
        paddingRight: 18,
        marginRight: 18,
        paddingLeft: 18,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: color,
        borderWidth: 0,
        fontSize: 17,
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

const App = () => {
  const name = "Peter";
  const age = 10;
  const [count, setCount] = useState(0);
  const countInc = () => {
    setCount(count + 1);
  };
  const countDec = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <Banans count={count} />
      <Button onClick={countInc} title="Increment Counter" color="aqua" />
      <Button onClick={countDec} title="Decrement Counter" color="orange" />
      <Button onClick={reset} title="Reset Counter" color="red" />
    </div>
  );
};

export default App;
