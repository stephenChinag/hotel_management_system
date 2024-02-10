// SignUp.tsx

import React, { useState } from "react";
import { redirect, useNavigate } from "react-router-dom";

interface SignUpProps {
  onRoleChange: (role: "customer" | "vendor") => void;
}

const SignUp: React.FC<SignUpProps> = ({ onRoleChange }) => {
  const [isCustomer, setIsCustomer] = useState(true);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false); // New loading state
  const navigate = useNavigate();

  const handleRoleChange = () => {
    setIsCustomer(!isCustomer);
    onRoleChange(!isCustomer ? "customer" : "vendor");
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSignUp = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://swoppiapp.onrender.com/swoppiApp/v1/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
            userType: isCustomer ? "CUSTOMER" : "VENDOR",
          }),
        }
      );

      if (response.ok) {
        setLoading(false);
        // Handle successful signup, maybe redirect or show a success message
        console.log("Signup successful");
        navigate("/Login");
      } else {
        // Handle signup failure, maybe show an error message
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
        <h2 className="text-2xl font-bold mb-4">
          {isCustomer ? "Customer" : "Vendor"} Sign Up
        </h2>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 p-2 w-full"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="border border-gray-300 p-2 w-full"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
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
              id="password"
              className="border border-gray-300 p-2 w-full"
              placeholder="Enter your password"
              value={password}
              onChange={handlePasswordChange}
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
            type="button"
            onClick={handleSignUp}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-all duration-300"
            disabled={loading} // Disable the button when loading
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
