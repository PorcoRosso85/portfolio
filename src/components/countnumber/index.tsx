import React, { useState, useEffect } from "react";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // 何らかの処理でカウント値を設定
    setCount(0);
  }, []);

  if (count === null) return <p>Loading...</p>;

  return (
    <div className="app">
      <p>count: {count}</p>
      <button onClick={() => setCount(count + 1)}>increase</button>
      <button onClick={() => setCount(count - 1)}>decrease</button>
    </div>
  );
};

export default App;
