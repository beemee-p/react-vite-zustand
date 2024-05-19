import "./App.css";
import Header from "./components/Header";
import "./scss/main.scss";
import { useCounterStore } from "./store";

function App() {
  const count = useCounterStore((state) => state.count);

  return (
    <>
      <Header />
      <OtherComponent count={count} />
    </>
  );
}

const OtherComponent = ({ count }: { count: number }) => {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <div>
      <div>{count}</div>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

export default App;
