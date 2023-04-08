import "./App.sass";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Food from "./pages/food/Food"
import Retail from "./pages/retail/Retail"
import Community from "./pages/community/Community";
import Policy from "./pages/policy/Policy";
import FoodVendor from "./pages/food/FoodVendor"
import RetailVendor from "./pages/retail/RetailVendor";
import CommunityEvents from "./pages/community/CommunityEvents";
import CommunityEventVendor from "./pages/community/CommunityEventVendor";
import CommunityFeatures from "./pages/community/CommunityFeatures";
import CommunityFeaturesVendor from "./pages/community/CommunityFeaturesVendor";

export async function getVendorData() {
  return fetch("/src/data/data.json")
}


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar backgroundColor="#fff" homeClass />
          <Home />
        </>
      ),
      loader: getVendorData
    },
    {
      path: "/policy",
      element: (
        <>
          <Navbar backgroundColor="#fff" homeClass />
          <Policy />
        </>
      )
    },
    {
      path: "/food",
      element: (
        <>
          <Navbar backgroundColor="#5ea3ec" foodClass />
          <Food />
        </>
      ),
      loader: getVendorData
    },
    {
      path: "food/:id",
      element: (
        <>
          <Navbar backgroundColor="#5ea3ec" foodClass />
          <FoodVendor />
        </>
      ),
      loader: getVendorData
    },
    {
      path: "/retail",
      element: (
        <>
          <Navbar backgroundColor="#f64444" retailClass />
          <Retail />
        </>
      ),
      loader: getVendorData
    },
    {
      path: "retail/:id",
      element: (
        <>
          <Navbar backgroundColor="#5ea3ec" retailClass />
          <RetailVendor />
        </>
      ),
      loader: getVendorData
    },
    {
      path: "/community",
      element: (
        <>
          <Navbar backgroundColor="#ffb400" communityClass />
          <Community />
        </>
      ),
      loader: getVendorData
    },
    {
      path: "/community/event",
      element: (
        <>
          <Navbar backgroundColor="#ffb400" communityClass />
          <CommunityEvents />
        </>
      ),
      loader: getVendorData
    },
    {
      path: "/community/event/:id",
      element: (
        <>
          <Navbar backgroundColor="#ffb400" communityClass />
          <CommunityEventVendor />
        </>
      ),
      loader: getVendorData
    },
    {
      path: "/community/feature",
      element: (
        <>
          <Navbar backgroundColor="#ffb400" communityClass />
          <CommunityFeatures />
        </>
      ),
      loader: getVendorData
    },
    {
      path: "/community/feature/:id",
      element: (
        <>
          <Navbar backgroundColor="#ffb400" communityClass />
          <CommunityFeaturesVendor />
        </>
      ),
      loader: getVendorData
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
