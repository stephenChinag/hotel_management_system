import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1> H1</h1>
      <Outlet />
    </div>
  );
}
