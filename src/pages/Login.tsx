// Login.tsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

interface LoginProps {
  onRoleChange: (role: "customer" | "vendor") => void;
}

const Login: React.FC<LoginProps> = ({ onRoleChange }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [isCustomer, setIsCustomer] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleRoleChange = () => {
    setIsCustomer(!isCustomer);
    onRoleChange(!isCustomer ? "customer" : "vendor");
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  const handleLogin = async () => {
    try {
      setLoading(true);

      const response = await fetch(
        "https://swoppiapp.onrender.com/swoppiApp/v1/auth/signIn",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      if (response.ok) {
        console.log("Login successful");
        navigate("/");
        // history.push("/dashboard"); // Redirect to dashboard or any desired page after successful login
      } else {
        console.error("Login failed");
        toast("Invalid User Name and password");
      }
    } catch (error) {
      console.error("Error during login:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
        <ToastContainer />
        <h2 className="text-2xl font-bold mb-4">
          {isCustomer ? "Customer" : "Vendor"} Login
        </h2>
        <form>
          {/* Your login form fields go here */}
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className="border border-gray-300 p-2 w-full"
              placeholder="Enter your Email"
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              onChange={handlePasswordChange}
              id="password"
              className="border border-gray-300 p-2 w-full"
              placeholder="Enter your password"
            />
          </div>
          {/* Radio buttons for role selection */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Select Role:
            </label>
            <div className="flex">
              <label className="flex items-center mr-4">
                <input
                  type="radio"
                  value="customer"
                  checked={isCustomer}
                  onChange={handleRoleChange}
                  className="mr-2"
                />
                Customer
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  value="vendor"
                  checked={!isCustomer}
                  onChange={handleRoleChange}
                  className="mr-2"
                />
                Vendor
              </label>
            </div>
          </div>
          <button
            type="submit"
            onClick={handleLogin}
            disabled={loading}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-all duration-300"
          >
            {loading ? "Loging In..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
