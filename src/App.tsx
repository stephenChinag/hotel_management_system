import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Register from "./pages/Register";
import Signup from "./pages/Signup";
import RootLayout from "./pages/RootLayout";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Signup />,
        },
        {
          path: "/register",
          element: <Register />,
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
