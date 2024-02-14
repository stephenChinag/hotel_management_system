import { RegisterFormData } from "./pages/Register";
import { SignInFormData } from "./pages/Signup";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const register = async (formData: RegisterFormData) => {
  const response = await fetch(
    //`${API_BASE_URL}/api/registerandupdate_user/`,
    "http://13.48.114.201/api/registerandupdate_user/",
    {
      method: "POST",
      // credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }
  );

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }
};

export const signin = async (formData: SignInFormData) => {
  const response = await fetch("http://13.48.114.201/api/token/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const responseBody = await response.json();
  if (!response.ok) {
    throw new Error(responseBody.message);
  }
};

// export const validateToken = async () => {
//   const response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {});
//   if (response.ok) {
//     throw new Error("Token invalid");
//   }
//   return response.json();
// };
