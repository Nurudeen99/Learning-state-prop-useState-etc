import { createContext, useState } from "react";

export const globalCountContext = createContext();
export const globalIncrementContext = createContext();
export const globalDecrementContext = createContext();
export const globalSetCountContext = createContext();
export const globalMultiplication = createContext();
export const globalMultiply = createContext();
export const globalSetMultiply = createContext();
export const globalDefault = createContext()

const Countcontext = ({ children }) => {
  const [multiply, setMultiply] = useState(0);
  const multiplication = () => {
    setMultiply(multiply + 100);
  };
  
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setMultiply(multiply - multiply);
  };

  return (
    <>
      <globalCountContext.Provider value={count}>
        <globalIncrementContext.Provider value={increment}>
          <globalDecrementContext.Provider value={decrement}>
            <globalSetCountContext.Provider value={setCount}>
              <globalMultiply.Provider value={multiply}>
                <globalMultiplication.Provider value={multiplication}>
                  <globalSetMultiply.Provider value={setMultiply}>
                    <globalDefault.Provider value={reset}>{children}</globalDefault.Provider>
                    </globalSetMultiply.Provider>
                </globalMultiplication.Provider>
              </globalMultiply.Provider>
            </globalSetCountContext.Provider>
          </globalDecrementContext.Provider>
        </globalIncrementContext.Provider>
      </globalCountContext.Provider>
    </>
  );
};

export default Countcontext;
