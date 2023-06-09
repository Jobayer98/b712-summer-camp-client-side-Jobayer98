import { Link, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { useContext } from "react";
import AuthContext from "../../../../context/AuthContext";
const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  const role = "student";
  return (
    <div className="drop_down cursor-pointer">
      <div className="relative">
        <img className="w-10 h-10 rounded-full" src={user.photoURL} />
      </div>
      <div className="dropdown_list bg-white shadow absolute right-8 invisible mt-1 z-10">
        <div className="py-4 flex flex-col gap-4">
          <div className="flex justify-between items-center gap-2 px-8">
            <img
              className="w-16 h-16 rounded-full"
              src={user.photoURL}
              alt={user.displayName}
            />
            <div>
              <h2 className="text-xl text-black font-semibold">
                {user.displayName}
              </h2>
              <p className="text-sm">{user.email}</p>
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-2 py-2 px-8">
            {role === "instructor" ? (
              <Link to="/myclasses" className="hover:text-orange-700">
                My Classes
              </Link>
            ) : (
              <Link to="/mycourses" className="hover:text-orange-700">
                My Learning
              </Link>
            )}
            <Link className="hover:text-orange-700">Notification</Link>
            <Link className="hover:text-orange-700">Message</Link>
          </div>
          <hr />
          <div className="flex flex-col items-start gap-2 py-2 px-8">
            <Link className="hover:text-orange-700">Profile</Link>
            <button onClick={handleLogout} className="hover:text-orange-700">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
