import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";

import Login from "./pages/Login";
import Register from "./pages/Register";
import EditText from "./pages/edit";
import { checkAuthToken } from "./utils/auth";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      id: "root",
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
        {
          path: "edit",
          element: <EditText />,
          loader: checkAuthToken,
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
