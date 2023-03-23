import "./App.sass";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Food from "./components/food/Food"
import Retail from "./components/retail/Retail"
import Community from "./components/community/Community";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar backgroundColor="#fff" homeClass={true} />
          <Home />
        </>
      ),
    },
    {
      path: "/food",
      element: (
        <>
          <Navbar backgroundColor="#5ea3ec" foodClass={true} />
          <Food />
        </>
      ),
    },
    {
      path: "/retail",
      element: (
        <>
          <Navbar backgroundColor="#f64444" retailClass={true}/>
          <Retail />
        </>
      ),
    },
    {
      path: "/community",
      element: (
        <>
          <Navbar backgroundColor="#ffb400" communityClass={true}/>
          <Community />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
