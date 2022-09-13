import { useState } from "react";

const Button = ({ clickHandler, title }) => {
  return <button onClick={clickHandler}>{title}</button>;
};

const StatisticLine = ({ feedback, total }) => {
  return (
    <tr>
      <td>{feedback}</td>
      <td>{total}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const sum = good + neutral + bad;
  const avg = (good - bad) / sum;
  const positive = (good / sum) * 100;

  if (good == 0 && neutral == 0 && bad == 0) {
    return <p>No Feedback given</p>;
  } else {
    return (
      <>
        <table>
          <tbody>
            <StatisticLine feedback="Good" total={good} />
            <StatisticLine feedback="Neutral" total={neutral} />
            <StatisticLine feedback="Bad" total={bad} />
            <tr>
              <td>All</td>
              <td>{sum}</td>
            </tr>
            <tr>
              <td>Average</td>
              <td>{avg}</td>
            </tr>
            <tr>
              <td>Positive</td>
              <td>{positive} %</td>
            </tr>
          </tbody>
        </table>
        <p></p>
      </>
    );
  }
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h2>Give Feedback</h2>
      <Button clickHandler={() => setGood(good + 1)} title="Good" />
      <Button clickHandler={() => setNeutral(neutral + 1)} title="Neutral" />
      <Button clickHandler={() => setBad(bad + 1)} title="Bad" />
      <h2>Statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
