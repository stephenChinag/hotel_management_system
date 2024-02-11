import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Layout from "./layout/Layout";

export default function App() {
  const router = createBrowserRouter([{ path: "/", element: <Layout /> }]);

  return <RouterProvider router={router} />;
}
