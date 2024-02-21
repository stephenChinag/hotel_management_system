import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../api-client";

const Header = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const logOutHandler = () => {
    logout();
    // setIsLoggedIn(false);
    navigate("/login");
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

        {token ? (
          <>
            <Link to="/my-bookings"> My Bookings</Link>
            <Link to="/my-hotels"> My Hotels</Link>

            <li className="hover:-translate-y-2 duration-500 transition-all">
              <button onClick={logOutHandler}>Log Out</button>
            </li>
          </>
        ) : (
          <li className="hover:-translate-y-2 duration-500 transition-all">
            <Link to="/login">Log In</Link>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
