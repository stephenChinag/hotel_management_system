import { redirect } from "react-router-dom";

export function getAuthToken() {
  const token = localStorage.getItem("token");
  return token;
}

export function checkAuthToken() {
  const token = getAuthToken();

  if (!token) {
    return redirect("/registe");
  }
}
