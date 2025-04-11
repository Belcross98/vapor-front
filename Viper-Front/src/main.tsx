import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.tsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import NotFoudPage from "./pages/NotFoundPage.tsx";
import Manga from "./pages/MangaPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import Register from "./components/Register.tsx";
import Navbar from "./components/NavBar.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    children: [
      { path: "/", element: <App /> },
      { path: "*", element: <NotFoudPage /> },
      { path: "/Manga/:id", element: <Manga /> },
      { path: "/About", element: <AboutPage /> },
      { path: "/Login", element: <LoginPage /> },
      { path: "/Register", element: <Register /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
