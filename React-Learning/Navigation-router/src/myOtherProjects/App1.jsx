import { useState, useEffect, useRef, createContext, useContext, useReducer, useCallback, useMemo } from 'react'

function App() {
  const [count, setCount] = useState(1)
  const [seconds, setSeconds] = useState(0)
  const inputRef = useRef();
  const ThemeContext = createContext("light");
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer (reducer, initialState)
  const [number, setNumber] = useState(3)   // change number in useState(that one) for smt else, 
                                            // it would calculate number in square

  function bigCalc(n) {
    console.log("Calculating...")
    return n*n;
  }

  

  useEffect(() => {
    const interval = setInterval(() => setSeconds(s => s + 1), 1000);

    return () => clearInterval(interval);
  }, []);

  function Child() {
    const theme = useContext(ThemeContext);
    return <h1>Theme: {theme}</h1>;
  }   

  function reducer(state, action) {
    switch(action.type){
      case "INCREMENT" : 
        console.log("increased number by 1")
        return { count: state.count + 1}
      case "DECREMENT" :
        console.log("decreased number by 1")
        return { count: state.count - 1}
      case "RESET" :
        console.log("reseted")
        return { count: 0}
      default:
        return state;
    }
  }

 const increment = useCallback(() => {
    setCount(c => c * 2);
  }, []);

  const result = useMemo(() => bigCalc(number), [number] )

  return (
    <>
      <div>
       <h1>Count: {state.count}</h1>
       <button onClick={() => dispatch({type: "INCREMENT"})}>Increase</button>
       <button onClick={() => dispatch({type: "DECREMENT"})}>Decrease</button>
       <button onClick={() => dispatch({type: "RESET"})}>Reset</button>
      </div>
      <div>
        <p>Count: {count} (useCallback example)</p>
        <button onClick={increment}>Increment by 2</button>
      </div>
      <div>
      <input
       type="number"
       value={number}
       onChange={e => setNumber(Number(e.target.value))}
      />
      <p>Result = {result}</p>
      </div>
      <h1>
        Timer: {seconds}
      </h1>
      <input ref={inputRef} placeholder="Type here..." />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>

      <ThemeContext.Provider value="dark">
      <Child />
     </ThemeContext.Provider>
    </>
  )
}

export default App
