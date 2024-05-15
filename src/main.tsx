import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./HomePage.tsx";
import "./global.scss";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./NotFoundPage.tsx";
import PrivacyPolicy from "./PrivacyPolicy.tsx";
import TagManager from 'react-gtm-module';

//ROUTING
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
    errorElement: <NotFoundPage />,
  },
]);

//GOOGLE TAG MANAGER
const GTM = {
  gtmId: 'GTM-KLD8ZGP'
}
TagManager.initialize(GTM);


//MAIN APP
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <main className="klcleary-portfolio page">
      <RouterProvider router={router} />
    </main>
    <Footer />
  </React.StrictMode>
);
