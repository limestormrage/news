import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { counterActions } from "../model/slice/counterSlice";

export const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(getCounterValue);
  const increment = () => {
    dispatch(counterActions.increment());
  };

  const decrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid="counter-value">{counterValue}</h1>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Button onClick={increment} data-testid="increment-button">
        increment
      </Button>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <Button onClick={decrement} data-testid="decrement-button">
        decrement
      </Button>
    </div>
  );
};
