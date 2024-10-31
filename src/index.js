import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import CV from "./pages/CV/CV";
import Publications from "./pages/Publications/Publications";
import CommunityEngagement from "./pages/CommunityEngagement/CommunityEngagement";
import ContactMe from "./pages/ContactMe/ContactMe";

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/smendiola-cv",
    element: <CV />,
  },
  {
    path: "/publications",
    element: <Publications />
  },
  {
    path: "/community-engagement",
    element: <CommunityEngagement />,
  },
  {
    path: "/contact-me",
    element: <ContactMe />,
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
