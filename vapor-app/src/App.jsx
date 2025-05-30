import HomePage from "./pages/HomePage.jsx";
import NotFoudPage from "./pages/NotFoundPage.jsx";
import Manga from "./pages/MangaPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import Register from "./pages/Register.jsx";
import Navbar from "./components/NavBar.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./styles/Global.css";
import SearchbarAndProfile from "./components/SearchbarAndProfile.jsx";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="html-page">
          <Navbar />
          <div className="page-content">
            <SearchbarAndProfile />
            <Outlet />
          </div>
        </div>
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
