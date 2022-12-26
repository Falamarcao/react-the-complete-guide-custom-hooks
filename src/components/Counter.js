import useCounter from "../hooks/useCounter";
import Card from "./Card";

const Counter = (props) => {
  const counter = useCounter(props.number);

  return <Card>{counter}</Card>;
};

export default Counter;
