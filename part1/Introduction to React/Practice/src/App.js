const App = () => {
  console.log("パンツ見せて😏");
  const num = Math.floor(Math.random() * (99 - 0 + 1)) + 0;

  const Text = (props) => {
    return (
      <div>
        <span>{props.text}</span>
        <span>{props.num}</span>
      </div>
    );
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>おはようみんな！</p>
        <p>
          <span style={{ color: num > 50 ? "green" : "red" }}>{num}</span> ベエンズ
          {num < 50 ? <span> ：（</span> : <span> ：）</span>}
        </p>
      </div>
      <ul>
        <li>ひとつ</li>
        <li>ふたつ</li>
        <li>
          <Text text="こんにちは世界" />
        </li>
        <li>
          <Text text={Math.floor(num / 2) + 3} />
        </li>
      </ul>
    </>
  );
};

export default App;
