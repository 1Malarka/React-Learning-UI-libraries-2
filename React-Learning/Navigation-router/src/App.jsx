import { createBrowserRouter, RouterProvider, Outlet, Link  } from "react-router-dom";
import { create } from "zustand";

import App0 from "./myOtherProjects/App0";
import App1 from "./myOtherProjects/App1";
import App2 from "./myOtherProjects/App2";
import App3 from "./myOtherProjects/App3";
import App4 from "./myOtherProjects/App4";

const useStore = create((set) => ({
  theme: "light",   // theme (fr ong???)
    toggleTheme: () =>
      set((state) => ({
      theme: state.theme === "light" ? "dark" : "light"
    })),
}))

function ThemeToggle() {
const theme = useStore((state) => state.theme)
const toggleTheme = useStore((state) => state.toggleTheme)

  if (theme == "light") {
    document.body.className = "lightTheme"
  } else {
    document.body.className = "blackTheme"
  }

  return (
    <button className="ThemeButton" onClick={toggleTheme}>{theme}</button>
  )
}

function Layout() {
  return (
    <div>
      <header>
        <h2 className="Navbarh2">Super App</h2>
        <div className="Links"> 
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/App0">App1</Link> |{" "}
          <Link to="/App1">App2</Link> |{" "}
          <Link to="/App2">App3</Link> |{" "}
          <Link to="/App3">App4</Link> |{" "}
          <Link to="/App4">App5</Link>
          <ThemeToggle />
        </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
      </footer>
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <h3>Welcome!</h3> },
      { path: "/App0", element: <App0 /> },
      { path: "/App1", element: <App1 /> },
      { path: "/App2", element: <App2 /> },
      { path: "/App3", element: <App3 /> },
      { path: "/App4", element: <App4 /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
