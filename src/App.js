import React from 'react';
import Counter from "./components/Counter";

function App() {
  return (
    <React.Fragment>
      <Counter number={1} />
      <Counter number={-1} />
      <Counter number={10} />
      <Counter number={-10} />
    </React.Fragment>
  );
}

export default App;
