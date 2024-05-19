import { create } from "zustand";

type CounterStore = {
  count: number;
  increment: () => void;
  incrementAsync: () => Promise<void>;
  decrement: () => void;
};

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increment: () => {
    set((state) => ({
      count: state.count + 1,
    }));
  },
  incrementAsync: async () => {
    // mock api
    const res = await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(res);
    set((state) => ({ count: state.count + 1 }));
  },
  decrement: () => {
    set((state) => ({
      count: state.count - 1,
    }));
  },
}));
