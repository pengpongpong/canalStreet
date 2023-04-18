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
import CommunityRadio from "./pages/community/CommunityRadio";
import CommunityRadioVendor from "./pages/community/CommunityRadioVendor";

export async function getVendorData() {
  return fetch("/src/data/data.json")
}


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar homeClass />
          <Home bgColor="#fff"/>
        </>
      ),
      loader: getVendorData
    },
    {
      path: "/policy",
      element: (
        <>
          <Navbar homeClass />
          <Policy bgColor="#fff"/>
        </>
      )
    },
    {
      path: "/food",
      element: (
        <>
          <Navbar foodClass />
          <Food bgColor="#5ea3ec"/>
        </>
      ),
      loader: getVendorData
    },
    {
      path: "food/:id",
      element: (
        <>
          <Navbar foodClass />
          <FoodVendor bgColor="#5ea3ec"/>
        </>
      ),
      loader: getVendorData
    },
    {
      path: "/retail",
      element: (
        <>
          <Navbar retailClass />
          <Retail bgColor="#f64444"/>
        </>
      ),
      loader: getVendorData
    },
    {
      path: "retail/:id",
      element: (
        <>
          <Navbar retailClass />
          <RetailVendor bgColor="#5ea3ec"/>
        </>
      ),
      loader: getVendorData
    },
    {
      path: "/community",
      element: (
        <>
          <Navbar communityClass />
          <Community bgColor="#ffb400"/>
        </>
      ),
      loader: getVendorData
    },
    {
      path: "/community/event",
      element: (
        <>
          <Navbar communityClass />
          <CommunityEvents bgColor="#ffb400"/>
        </>
      ),
      loader: getVendorData
    },
    {
      path: "/community/event/:id",
      element: (
        <>
          <Navbar communityClass />
          <CommunityEventVendor bgColor="#ffb400"/>
        </>
      ),
      loader: getVendorData
    },
    {
      path: "/community/feature",
      element: (
        <>
          <Navbar communityClass />
          <CommunityFeatures bgColor="#ffb400"/>
        </>
      ),
      loader: getVendorData
    },
    {
      path: "/community/feature/:id",
      element: (
        <>
          <Navbar communityClass />
          <CommunityFeaturesVendor bgColor="#ffb400"/>
        </>
      ),
      loader: getVendorData
    },
    {
      path: "/community/radio",
      element: (
        <>
          <Navbar communityClass />
          <CommunityRadio bgColor="#ffb400"/>
        </>
      ),
      loader: getVendorData
    },
    {
      path: "/community/radio/:id",
      element: (
        <>
          <Navbar communityClass />
          <CommunityRadioVendor bgColor="#ffb400"/>
        </>
      ),
      loader: getVendorData
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
