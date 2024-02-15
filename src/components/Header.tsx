import { Link } from "react-router-dom";

type HeaderProps = {
  isLoggedIn: boolean;
};

const Header: React.FC<HeaderProps> = ({ isLoggedIn }) => {
  return (
    <div className="bg-blue-800 py-6 ">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/"> Mike Hotel Project </Link>
        </span>
        <span className="flex space-x-2">
          {isLoggedIn ? (
            <Link
              to="/sign-out"
              className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100"
            >
              Sign Out
            </Link>
          ) : (
            <Link
              to="/sign-in"
              className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100"
            >
              Sign In
            </Link>
          )}
          <Link
            to="/home"
            className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100"
          >
            Home
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
