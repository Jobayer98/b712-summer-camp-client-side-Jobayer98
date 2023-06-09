//external module
import { BsSearch } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";

// internal module
import Search from "./Search";
import { Link } from "react-router-dom";
import Dashboard from "./UserDashboard/Dashboard";
import Category from "./Category/Category";

const Header = () => {
  const isLogin = true;
  const role = "student";
  return (
    <header>
      <div className="flex justify-between items-center gap-8 px-8 py-4 shadow-lg max-w-[1920px] mx-auto">
        <div className="w-[30%] flex items-center gap-12">
          <Link to="/">logo</Link>
          <Category />
        </div>
        <div className="w-[30%] relative">
          <BsSearch className="absolute top-[10px] left-3" />
          <Search />
        </div>
        <div className="w-[40%] flex justify-end items-center gap-16">
          {isLogin ? (
            <>
              {role === "instructor" ? (
                <>
                  <Link to="myclasses">My Classes</Link>
                </>
              ) : (
                <>
                  {" "}
                  <Link to="mycourses">My Learning</Link>
                  <Link to="/my-selected-classes">
                    <HiOutlineShoppingCart className="text-2xl cursor-pointer" />
                  </Link>
                </>
              )}
              <Dashboard />
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
