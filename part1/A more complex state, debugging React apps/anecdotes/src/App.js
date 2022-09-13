import { useState } from "react";

const App = () => {
  const [selected, setSelected] = useState(0);
  const [vote, setVote] = useState(new Uint8Array(7));

  console.log("Vote: ", vote[selected]);
  console.log("Selected", selected);
  console.log("Array", vote);

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  let highest = 0;
  let highestIndex = 0;
  vote.forEach((e, i) => {
    if (e > highest) {
      highest = e;
      highestIndex = i;
    }
  });
  console.log("Index:", highestIndex);

  return (
    <>
      <h2>Anecdote of the day</h2>
      <div>{anecdotes[selected]}</div>
      <div>Has {vote[selected]} votes</div>
      <button
        onClick={() => {
          let copy = [...vote];
          copy[selected]++;
          setVote(copy);
        }}
      >
        Vote
      </button>
      <button onClick={() => setSelected(Math.floor(0 + Math.random() * 7))}>next Anecdote</button>
      <h2>Anecdote with most votes</h2>
      <div>{anecdotes[highestIndex]}</div>
    </>
  );
};

export default App;
