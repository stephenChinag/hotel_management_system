// // api-client.ts

import toast from "react-hot-toast";
import { RegisterFormData } from "./pages/Register";

import { SignInFormData } from "./pages/Login";

export const register = async (formData: RegisterFormData): Promise<void> => {
  try {
    const response = await fetch(
      "http://13.48.114.201/api/registerandupdate_user/",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    // if (!response.ok) {
    //   const errorData = await response.json();
    //   throw new Error(errorData.message);
    // }
    if (response.ok) {
      //  Registration successful, you can navigate to the login page or perform any other action
    } else {
      //       // Registration failed
      const errorData = await response.json();
      console.error(errorData); // Log the error for debugging
      toast.error("Failed to create user. Please try again later.");
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const login = async (formData: SignInFormData): Promise<void> => {
  try {
    const response = await fetch("http://13.48.114.201/api/token/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message);
    }

    const responseData = await response.json();
    const token = responseData.access;
    localStorage.setItem("token", token);
    // localStorage.setItem("accessToken", responseData.access);
    // localStorage.setItem("refreshToken", responseData.refresh);
    // console.log(responseData.refresh, responseData.access);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// export const refreshAccessToken = async (): Promise<void> => {
//   const refreshToken = localStorage.getItem("refreshToken");

//   try {
//     const response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ refreshToken }),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.message);
//     }

//     const responseData = await response.json();
//     localStorage.setItem("accessToken", responseData.access);
//   } catch (error: any) {
//     throw new Error(error.message);
//   }
// };
export const getAccessToken = async (): Promise<string | null> => {
  return localStorage.getItem("accessToken");
};
