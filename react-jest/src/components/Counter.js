import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 data-testid="header">Jest Test</h1>
      <h3 data-testid="total">{count}</h3>
      <input
        data-testid="input"
        type="text"
        value={count}
        onChange={(e) => setCount(e.target.value)}
      />
      <button data-testid="button" className="btn">
        Enter Here
      </button>
    </div>
  );
}

export default Counter;
