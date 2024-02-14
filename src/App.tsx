import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Register from "./pages/Register";

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
  ]);

  return <RouterProvider router={router} />;
}
