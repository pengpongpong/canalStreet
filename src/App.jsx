import "./App.sass";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Food from "./components/food/Food"
import Retail from "./components/retail/Retail"
import Community from "./components/community/community";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          {" "}
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/food",
      element: (
        <>
          <Navbar />
          <Food />
        </>
      ),
    },
    {
      path: "/retail",
      element: (
        <>
          <Navbar />
          <Retail />
        </>
      ),
    },
    {
      path: "/community",
      element: (
        <>
          <Navbar />
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
