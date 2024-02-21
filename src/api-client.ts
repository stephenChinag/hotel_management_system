// // api-client.ts

import toast from "react-hot-toast";
import { RegisterFormData } from "./pages/Register";

import { SignInFormData } from "./pages/Login";
import { useState } from "react";

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
    const refreshToken = responseData.refresh;
    localStorage.setItem("token", token);
    localStorage.setItem("refreshToken", refreshToken);
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem("expiration", expiration.toDateString());
    console.log(expiration);
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const logout = (): void => {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
  localStorage.removeItem("expiration");
};
