import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import "./scss/main.scss";
import { useCounterStore } from "./store";

function setCount() {
  // call count in hook
  // const count = useCounterStore.getState().count;
  useCounterStore.setState({ count: 1 });
}
function App() {
  const count = useCounterStore((state) => state.count);

  useEffect(() => {
    setCount();
  }, []);

  return (
    <>
      <Header />
      <OtherComponent count={count} />
    </>
  );
}

const OtherComponent = ({ count }: { count: number }) => {
  const increment = useCounterStore((state) => state.increment);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>+</button>
      <button onClick={incrementAsync}>1초후 +</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default App;
