import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from "./pages/Signup";
import RootLayout from "./pages/RootLayout";

export default function App() {
  const router = createBrowserRouter([{ path: "/", element: <RootLayout /> }]);

  return <RouterProvider router={router} />;
}
