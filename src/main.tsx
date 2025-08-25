import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import About from "./About.tsx";
import App from "./App.tsx";
import Contact from "./Contact.tsx";
import Home from "./Home.tsx";
import CategoryPage from "./categories/Category.tsx";
import Categories from "./categories/index.tsx";
import { belarusianRecipes } from "./data.ts";
import { categories } from "./data.ts";
import "./index.css";
import Recepie from "./recepies/Recepie.tsx";
import Recepies from "./recepies/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () =>
          belarusianRecipes
            .sort((a, b) => a.name.localeCompare(b.name))
            .slice(0, 3),
      },
      {
        path: "/recepies",
        children: [
          {
            index: true,
            element: <Recepies />,
            loader: () =>
              belarusianRecipes.sort((a, b) => a.name.localeCompare(b.name)),
          },
          {
            path: ":id",
            element: <Recepie />,
            loader: ({ params }) => {
              const recipe = belarusianRecipes.find(
                (recipe) => recipe.id === Number(params.id),
              );
              if (!recipe) {
                throw new Response("Not Found", { status: 404 });
              }
              return recipe;
            },
          },
        ],
      },
      {
        path: "/categories",
        element: <Categories />,
        loader: () => categories.sort((a, b) => a.name.localeCompare(b.name)),
      },
      {
        path: "/categories/:id",
        element: <CategoryPage />,
        loader: ({ params }) => {
          const category = categories.find((c) => c.id === Number(params.id));
          const recipes = belarusianRecipes
            .filter((r) => r.category.id === Number(params.id))
            .sort((a, b) => a.name.localeCompare(b.name));
          if (!category) {
            throw new Response("Not Found", { status: 404 });
          }
          return { category, recipes };
        },
      },
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
