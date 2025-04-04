import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoudPage from "./components/NotFoundPage.tsx";
import Manga from "./components/MangaPage.tsx";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "*", element: <NotFoudPage /> },
  { path: "/Manga/:id", element: <Manga /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
