import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Store from "./components/pages/Store.jsx";

import Mac from "./components/pages/Mac.jsx";
import IPad from "./components/pages/IPad.jsx";
import IPhone from "./components/pages/IPhone.jsx";
import Watch from "./components/pages/Watch.jsx";
import AirPods from "./components/pages/AirPods.jsx";
import TvHome from "./components/pages/TVHome.jsx";
import Entertainment from "./components/pages/Entertainment.jsx";
import Accessories from "./components/pages/Accessories.jsx";
import Support from "./components/pages/Support.jsx";

import PrivacyPolicy from "./components/pages/PrivacyPolicy.jsx";
import TermsofUse from "./components/pages/TermsofUse.jsx";
import SalesPolicy from "./components/pages/SalesPolicy.jsx";
import Legal from "./components/pages/Legal.jsx";
import SiteMap from "./components/pages/SiteMap.jsx";

import Switch from "./components/pages/Switch.jsx";
import Specs from "./components/pages/Specs.jsx";
import Iphone16Pro from "./components/pages/Iphone16Pro.jsx";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Store",
    element: <Store />,
  },
  ,
  {
    path: "/Mac",
    element: <Mac />,
  },
  {
    path: "/IPad",
    element: <IPad />,
  },
  {
    path: "/IPhone",
    element: <IPhone />,
  },
  {
    path: "/Watch",
    element: <Watch />,
  },
  {
    path: "/AirPods",
    element: <AirPods />,
  },
  {
    path: "/Tv&Home",
    element: <TvHome />,
  },
  {
    path: "/Entertainment",
    element: <Entertainment />,
  },
  {
    path: "/Accessories",
    element: <Accessories />,
  },
  {
    path: "/Support",
    element: <Support />,
  },
  {
    path: "/Privacy Policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "/Terms of Use",
    element: <TermsofUse />,
  },
  {
    path: "/Sales Policy",
    element: <SalesPolicy />,
  },
  {
    path: "/Legal",
    element: <Legal />,
  },
  {
    path: "/Site Map",
    element: <SiteMap />,
  },
  {
    path: "/Switch",
    element: <Switch />,
  },
  {
    path: "/Specs",
    element: <Specs />,
  },
  {
    path: "/Iphone16Pro",
    element: <Iphone16Pro />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
