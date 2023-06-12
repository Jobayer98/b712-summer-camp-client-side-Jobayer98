//external module
import { BsSearch } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";

// internal module
import Search from "./Search";
import { Link } from "react-router-dom";
import Dashboard from "./UserDashboard/Dashboard";
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import useCart from "../../../hooks/useCart";
import logo from "../../../assets/languages.png";
import Category from "../Header/Category/Category";

const Header = () => {
  const { user, role } = useContext(AuthContext);
  console.log(role);
  const [data] = useCart();
  return (
    <header>
      <div className="flex justify-between items-center gap-8 px-8 py-4 shadow-lg max-w-[1920px] mx-auto">
        <div className="w-[20%] flex items-center gap-8">
          <Link
            to="/"
            className="text-xl font-bold font-['cursive'] flex items-center gap-2"
          >
            <img className="h-5" src={logo} alt="logo" />
            GlobalSpeak
          </Link>
          <Category />
        </div>
        <div className="w-[30%] relative hidden lg:block">
          <BsSearch className="absolute top-[20px] left-3" />
          <Search />
        </div>
        <div className="w-[50%] flex justify-end items-center gap-4">
          {user && role === "admin" && (
            <Link to="/manage-users">Manage Users</Link>
          )}
          <Link to="/allcourses">Courses</Link>
          <Link to="/instructors">Instructors</Link>

          {user ? (
            <>
              {role === "student" && (
                <div className="relative mr-4">
                  <Link to="/my-selected-classes ">
                    <HiOutlineShoppingCart className="text-2xl cursor-pointer" />
                    <span className="absolute bottom-4 -right-4 rounded-full bg-purple-700 px-2 pt-[1px] flex justify-center items-center text-white">
                      {data?.length || 0}
                    </span>
                  </Link>
                </div>
              )}
              <Dashboard role={role} />
            </>
          ) : (
            <div className="flex justify-center gap-2">
              <Link
                to="/login"
                className="border-[1px] border-black px-4 py-[6px] flex justify-center items-center font-semibold"
              >
                <span> Log in</span>
              </Link>
              <Link
                to="/signup"
                className=" px-4 py-2 flex justify-center items-center font-semibold bg-black text-white"
              >
                <span>Sign up </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
