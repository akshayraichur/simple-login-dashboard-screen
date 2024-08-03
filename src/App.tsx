import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";

import Home from "./screens/Home";
import LoginPage from "./screens/LoginPage";
import ErrorPage from "./screens/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return (
    <div className="font-inter">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
