import "./App.sass";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Food from "./pages/food/Food"
import Retail from "./pages/retail/Retail"
import Community from "./pages/community/Community";
import Policy from "./pages/policy/Policy";
import FoodVendor from "./pages/foodVendor/FoodVendor"
import RetailVendor from "./pages/retailVendor/RetailVendor";

export async function getVendorData() {
  return fetch("/src/data/data.json")
}


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
      path: "/policy",
      element: (
        <>
          <Navbar backgroundColor="#fff" homeClass={true} />
          <Policy />
        </>
      )
    },
    {
      path: "/food",
      element: (
        <>
          <Navbar backgroundColor="#5ea3ec" foodClass={true} />
          <Food />
        </>
      ),
      loader: getVendorData
    },
    {
      path: "food/:id",
      element: (
        <>
          <Navbar backgroundColor="#5ea3ec" foodClass={true} />
          <FoodVendor />
        </>
      ),
      loader: getVendorData
    },
    {
      path: "/retail",
      element: (
        <>
          <Navbar backgroundColor="#f64444" retailClass={true} />
          <Retail />
        </>
      ),
      loader: getVendorData
    },
    {
      path: "retail/:id",
      element: (
        <>
          <Navbar backgroundColor="#5ea3ec" retailClass={true} />
          <RetailVendor />
        </>
      ),
      loader: getVendorData
    },
    {
      path: "/community",
      element: (
        <>
          <Navbar backgroundColor="#ffb400" communityClass={true} />
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
