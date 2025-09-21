import { useState, createContext, useContext, useRef } from "react";

const AppContext = createContext();

function App() {
const [user, setUser] = useState("Guest");
let inputValue = useRef(null);

function UserProfile() {
  const [user] = useContext(AppContext);
  console.log(user)
  if (user === "Guest") {
    return <h1>Please log in!</h1>
  }
  return <h1>Oooh, hello {user}, haven't seen for a while!</h1>;
}

function ChangeName() {
  if (inputValue.current.value === "") {
    alert("Check console log (F12)")
    console.log("Can't set nothing to name!")
    return
  }
  const newName = inputValue.current.value;
  setUser(newName);
  console.log("Change name to ", newName);
  inputValue.current.value = "";
}

function CheckLogin() {
  const [user] = useContext(AppContext)
  if (user == 'Guest') {
    return <h3>You can log in below.</h3>
  } else {
  return <h3>Your name is too boring? Change it!</h3>
  }
}

function GotSomething() {
  const [user] = useContext(AppContext)
  if (user != 'Guest') {
    return <div><h3>Got something to do on a different account?</h3><button onClick={logOut}>Logout</button></div>
  } else {
  return null;  
  }
}

function logOut(){
  setUser("Guest")
}

return (
  <>
  <AppContext.Provider value={[user, setUser]}>
    <div>
      <h1>Hello a fellow {user}! </h1>
      <UserProfile />
      <CheckLogin />
      <button onClick={ChangeName}>Change your name.</button>
      <input 
      type="text"
      placeholder="Write new name here."
      ref={inputValue}
      />
      <GotSomething />
    </div>
  </AppContext.Provider>
  </>
)
}

export default App;