import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";

import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <p> Wrong route</p>,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "auth",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
