import { useState, useEffect } from "react";

const useCounter = (foward = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (foward ? prevCounter + 1 : prevCounter - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return counter;
};

export default useCounter;
