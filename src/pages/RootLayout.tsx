import { Outlet } from "react-router-dom";
import Layout from "../layout/Layout";

export default function MainNavigation() {
  return (
    <>
      <Layout />
      <Outlet />
    </>
  );
}
