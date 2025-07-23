import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import About from "./About.tsx";
import App from "./App.tsx";
import Contact from "./Contact.tsx";
import Home from "./Home.tsx";
import Categories from "./categories/index.tsx";
import { belarusianRecipes } from "./data.ts";
import "./index.css";
import Recepie from "./recepies/Recepie.tsx";
import Recepies from "./recepies/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "/recepies",
        children: [
          { index: true, element: <Recepies /> },
          {
            path: ":id",
            element: <Recepie />,
            loader: ({ params }) => {
              return belarusianRecipes.find(
                (recipe) => recipe.id === Number(params.id),
              );
            },
          },
        ],
      },
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
