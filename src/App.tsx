import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Register from "./pages/Register";
import Signup from "./pages/Signup";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <p> Home Page</p>
        </Layout>
      ),
    },
    {
      path: "/search",
      element: (
        <Layout>
          <p> Search Page</p>
        </Layout>
      ),
    },
    {
      path: "/register",
      element: (
        <Layout>
          <Register />
        </Layout>
      ),
    },
    {
      path: "/sign-in",
      element: (
        <Layout>
          <Signup />
        </Layout>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
