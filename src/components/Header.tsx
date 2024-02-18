import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { Link, useNavigate, useRouteLoaderData } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const logOutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    setIsLoggedIn(false);
    return navigate("/login");
  };

  return (
    <header className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between">
      <div className="flex items-center w-full md:2/3">
        <Link to="/" className="font-black text-tertiary-dark">
          Mike Hotel Booking Project
        </Link>
        <ul className="flex items-center ml-5">
          <li className="flex items-center">
            <Link to="/auth">
              <FaUserCircle className="cursor-pointer" />
            </Link>
          </li>
          <li className="ml-2">
            <MdDarkMode className="cursor-pointer" />
          </li>
        </ul>
      </div>
      <ul className="flex items-center justify-between w-full md:w-1/3 mt-4">
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link to="/rooms">Rooms</Link>
        </li>
        <li className="hover:-translate-y-2 duration-500 transition-all">
          <Link to="/">Contact</Link>
        </li>

        {isLoggedIn ? (
          <li className="hover:-translate-y-2 duration-500 transition-all">
            <button onClick={logOutHandler}> Log Out</button>
          </li>
        ) : (
          <li className="hover:-translate-y-2 duration-500 transition-all">
            <Link to="/login"> Log In</Link>
          </li>
        )}

        {/* { token && <li className="hover:-translate-y-2 duration-500 transition-all">
          <button onClick={logOutHandler}> Log Out</button>
        </li>} */}
      </ul>
    </header>
  );
};

export default Header;
