import { useState, FormEvent, ChangeEvent } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const inputStyles =
    "border border-gray-300 sm:text-sm text-black rounded-lg block w-full p-2.5 focus:outline-none";

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch("http://13.48.114.201/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        // Assuming the token is returned in the response data
        const token = data.token;
        // Store the token in localStorage or session storage for future use
        localStorage.setItem("token", token);
        // Redirect or navigate to the desired page
        toast.success(" login succesfull");
        navigate("/");
      } else {
        // Login failed
        const errorData = await response.json();
        toast.error(errorData.detail);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="container mx-auto">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
        <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
          Login
        </h1>
        <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            required
            className={inputStyles}
            onChange={handleInputChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className={inputStyles}
            onChange={handleInputChange}
          />

          <button
            type="submit"
            className="w-full bg-tertiary-dark focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Log In
          </button>
        </form>
        <button className="text-blue-700 underline">Sign Up</button>
      </div>
    </section>
  );
};

export default Login;
