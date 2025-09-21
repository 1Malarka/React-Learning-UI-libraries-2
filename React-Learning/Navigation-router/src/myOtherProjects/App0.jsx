import { useEffect, useState, useRef } from "react";

function Image() {
  return (
    <img src="https://i.imgur.com/MK3eW3As.jpg" alt="A women"></img>
    
  );
}

function App() {
  const containerRef = useRef(null);
  const [count, setCount] = useState(() => {
  const saved = localStorage.getItem("savedCount");
  return saved !== null ? Number(saved) : 0;
});

  function MyComponent(props) {
  return (
    <div>
      {props.isLoggedIn ? (
        <p>Welcome, user!</p>
      ) : (
        <p>Please log in.</p>
      )}
    </div>
  );
}

function UserStatus ({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h2>Welcome</h2> : <h2>Login</h2>}
    </div>
  )
}

 

  const saveCount = () => {
    localStorage.setItem("savedCount", count)
  }

  const resetCount = () => {
    setCount(0);
    localStorage.removeItem("savedCount");
  }

  const name = "alice";

  function renderThing() {
    const element = document.createElement("div");
    const elementtwo = document.createElement("h3");
    element.textContent = "Something in the div";
    elementtwo.textContent = "I know that looks weird, buut, i actually understand something about how jsx works, and that html-familiar syntax";
    if (containerRef.current) {
      containerRef.current.appendChild(element);
      containerRef.current.appendChild(elementtwo);
    }
  }

  return (
    <div>
      <h1>My first component in React!</h1>
      <button onClick={renderThing}>Render something...</button>
      <MyComponent isLoggedIn={true} />
      <UserStatus isLoggedIn={true} />
      <p>Hello, world!</p>
      <p>Hello, {name}</p>
      <button onClick={() => setCount(count + 1)} >There are even a counter {count}</button>
      <button onClick={saveCount}>Save count</button>
      <button onClick={resetCount}>Reset count</button>
      <Image />
      <Image />
      <div ref={containerRef}></div>
    </div>
    
  );
}

export default App;
