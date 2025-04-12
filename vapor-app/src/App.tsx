import HomePage from "./pages/HomePage";
import NotFoudPage from "./pages/NotFoundPage.tsx";
import Manga from "./pages/MangaPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import Register from "./pages/Register.tsx";
import Navbar from "./components/NavBar.tsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

function App() {
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
        { path: "/", element: <HomePage /> },
        { path: "*", element: <NotFoudPage /> },
        { path: "/Manga/:id", element: <Manga /> },
        { path: "/About", element: <AboutPage /> },
        {
          path: "/Login",
          element: <LoginPage />,
        },
        { path: "/Register", element: <Register /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
