import { useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createTodo, jokeCreater } from "./Components";    // this one also
import { createCounter } from "./Components"; // importing states that being used in functions
import { shallow } from "zustand/shallow"

const useStore = create(
  persist(    // this one is middleware, bro bcs his role is saving everything in localStorage
       (set, get) => ({
      ...createCounter(set, get),   //connecting them to useStore so it would work
      ...createTodo(set, get),
      ...jokeCreater(set, get),
      
  }), 
  {
      name: "app-storage"      // Name of folder or smt, that stores each state from components.js inside it 
    }
));

function StateManagment() {
//every function wrapped inside stateManagment (also it works as a main function that being rendered)
// and as a main, everything inside also being rendered (idk for who i typing this, bcs this is basics of react)

// counter
function Counter() {
  const count = useStore((state) => state.count)
  const increase = useStore((state) => state.increase)
  const decrease = useStore((state) => state.decrease)
  const reset = useStore((state) => state.reset)

  return (
    <div>
      <h2>
        count is {count};
      </h2>
      <button onClick={increase}>
       Increase
      </button>
      <button onClick={decrease}>
        Decrease
      </button>
      <button onClick={reset}>
        Reset
      </button>
    </div>
  )
}
// end of counter

// to-do list
function TodoList() {
  const todos = useStore((state) => state.todos)
  const addTodo = useStore((state) => state.addTodo)
  const removeTodo = useStore((state) => state.removeTodo)
  const toggleTodo = useStore((state) => state.toggleTodo)
  const [text, setText] = useState();
  const filter = useStore((state) => state.filter)
  const setFilter = useStore((state) => state.setFilter)

  const filteredTodos = todos.filter((t) => {
    if (filter === "Undo") return !t.completed;
    if (filter === "Complete") return t.completed;
    return true;
  })

// IN to-do list i made filter

  function AddFilter() {
    if (text.trim() ===  "") {
      return;
    } else {
    addTodo(text); 
    setText("");
    }
  }
// End of to-do list FILTER

  return (
    <div>
      {/* To-do list */}
      <ul>
        {filteredTodos.map((t) => (
          <li key={t.id}>
          <span style={{ textDecoration: t.completed ? "line-through" : "none" }}>
           {t.text}
          </span>
          <button onClick={() => toggleTodo(t.id)}>
           {t.completed ? "Undo" : "Complete"}
          </button>
          <button onClick={() => removeTodo(t.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={AddFilter} >Add to-do task</button>
      <input type="text" placeholder="Type your task here." onChange={(e) => setText(e.target.value)}  />
      {/* end of to-do list */}
      {/* this one is for filter */}
      <h3>there's also a filter</h3>
      <div>
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Undo")}>Undo</button>
        <button onClick={() => setFilter("Complete")}>Complete</button>
      </div>
      {/* end of filter */}
    </div>
  )
}

// end of to-do list

function JokeCreator() {
  const loading = useStore((s) => s.loading);
  const error = useStore((s) => s.error);
  const fetch = useStore((s) => s.fetch);
  const data = useStore((s) => s.data);
  console.log(data)
  shallow
 
  


  return (
    <div>
        <div>
        {loading && <p>Loading joke...</p>}
        {error && <p>{error}</p>}
        {data && (
      <div>
        <p>{data.setup}</p>
        <p><b>{data.delivery}</b></p>
      </div>
      )}
        </div>
        <button onClick={fetch}>Generate joke</button>
    </div>
  )
}

 return (
<div>
  <div>
    <h1>Welcome!</h1>
    <h2>This is a mini-project with other mini-tasks that operating states by Zustand</h2>
    <Counter />
  </div>
  <div>
    <TodoList />
    <p>Originally i made Theme function for only this page, buuut i though making it for every page (global) would be better</p>
    <JokeCreator />
  </div>
</div>
 )

}

export default StateManagment;