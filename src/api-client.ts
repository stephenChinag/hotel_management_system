import { RegisterFormData } from "./pages/Register";
import { SignInFormData } from "./pages/Signup";

export const register = async (formData: RegisterFormData) => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  try {
    const response = await fetch(
      //`${API_BASE_URL}/api/registerandupdate_user/`,
      "http://13.48.114.201/api/registerandupdate_user/",
      {
        method: "POST",
        // credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(formData),
      }
    );

    const responseBody = await response.json();
  } catch (error) {
    throw new Error(error.message);
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
  localStorage.setItem("accessToken", responseBody.access_token);
  localStorage.setItem("refreshToken", responseBody.refresh_token);
};

const refeshAccessToken = async (refreshToken: string) => {
  const response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ refresh_token: refreshToken }),
  });
  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }
  localStorage.setItem("accessToken", responseBody.access_token);
};

// export const validateToken = async () => {
//   const response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {});
//   if (response.ok) {
//     throw new Error("Token invalid");
//   }
//   return response.json();
// };
