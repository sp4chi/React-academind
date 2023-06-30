import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store";
import classes from "./Counter.module.css";

const Counter = () => {
  //updating state / dispatching action
  const dispatch = useDispatch();

  //getting the state from store
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const toggleCounterHandler = () => {
    dispatch(actions.toggle());
  };

  const incrementHandler = () => {
    dispatch(actions.increase(1));
  };

  const decrementHandler = () => {
    dispatch(actions.decrease(1));
  };

  const increaseHandler = () => {
    dispatch(actions.increase(5));
  };

  const decreaseHandler = () => {
    dispatch(actions.decrease(5));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decreaseHandler}>Decrement by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
