import "bootstrap/dist/css/bootstrap.min.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import About from "./About.tsx";
import App from "./App.tsx";
import Contact from "./Contact.tsx";
import Home from "./Home.tsx";
import Categories from "./categories/index.tsx";
import "./index.css";
import Recepies from "./recepies/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/recepies", element: <Recepies /> },
      { path: "/categories", element: <Categories /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
