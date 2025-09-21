import { useState, useEffect, useRef} from "react";

function Rendering() {
  const [count, setCount] = useState(0);
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
  ];
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const divRef = useRef(null);
  const firstname = useInput("David", "first name");
  const lastname = useInput("Doakes", "last name");


function useInput(InitialValue, placeholder) {
  const [value, setValue] = useState(InitialValue)

    function handlechange(e) {
      setValue(e.target.value);
    }

  return  {
    value,
    onChange: handlechange,
    placeholder: `Type ${placeholder} here.`
  }
}


  useEffect(() => {
    console.log("Starting timer.");
    const interval = setInterval(() => setCount(arbuzposkidke => arbuzposkidke + 1), 2000);

    return () => {
      console.log("Clearing timer.");
      clearInterval(interval);
    };
  }, []);

  
 function handleMouseMove(e) {
    setPos({ x: e.clientX, y: e.clientY });
 }

 const handleClick = () => {
  divRef.current.textContent = "Hello from useRef!";
  divRef.current.focus();
 }

 function Comp({ name }) {
   return <h2>Hello, {name}, this is a HOC test.</h2>
 }

 function CompOverride(WrappedComponent) {
   return function(props) {
    const newProps = {...props, name: "Overridden"}
    return <WrappedComponent {...newProps} />
   }
 }

 const CompOverrideText = CompOverride(Comp)

  return ( 
  <>
{/* Lists and keys */}
    <h1>Time: {count}</h1>; 
    <ul>
      {users.map(user => (
        <p key={user.id}>{user.name}, {user.id}</p>
      ))}
    </ul>
{/* Render props */}
    <div style={{ height: "200px", border: "1px solid black" }}
         onMouseMove={handleMouseMove}>
      <p>Mouse position: {pos.x}, {pos.y}</p>
    </div>
{/* Refs */}
    <div>
      <div ref={divRef}>
       Something in div...
    </div>
      <button onClick={handleClick}>Change and focus</button>
    </div>
{/* Events */}
    <input 
      placeholder="Print, check console => f12" 
      type="text" 
      onChange={() => console.log("Something changed here...")}
      onFocus={() => console.log("Focus!")} 
      onBlur={() => console.log("Lost focus.")} 
    />
{/* HOC => (High Order Components) */}
   <Comp name="Alice" />
   <CompOverrideText name="Bob" />
{/* Custom Hook -s */}
   <label>
    First name:  
    <input
     {...firstname}
     />
   </label>
   <label>
    Last name:  
    <input
    {...lastname}
     />
   </label>
 <p>Good morning, {firstname.value || "First name" } {lastname.value || "First name"}</p>
 </>
  )
  
}

export default Rendering