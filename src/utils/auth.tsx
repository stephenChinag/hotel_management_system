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

export function getExpirationDate() {
  const stroedexperationDate = localStorage.getItem("expiration");
  //   const ExpirationDate = new Date(stroedexperationDate)

  if (stroedexperationDate !== null) {
    const expirationDate = new Date(stroedexperationDate);
    return expirationDate;
  } else {
    return;
  }
}
