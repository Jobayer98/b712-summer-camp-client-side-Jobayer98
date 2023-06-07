import { Link } from "react-router-dom";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <div className="drop_down cursor-pointer">
      <div className="relative">
        <img
          className="w-10 h-10 rounded-full"
          src="https://images.unsplash.com/photo-1682687220208-22d7a2543e88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
        />
      </div>
      <div className="dropdown_list bg-white absolute right-8 hidden mt-1">
        <div className="py-4 flex flex-col gap-4">
          <div className="flex justify-between items-center gap-2 px-8">
            <img
              className="w-16 h-16 rounded-full"
              src="https://images.unsplash.com/photo-1682687220208-22d7a2543e88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div>
              <h2 className="text-xl text-black font-semibold">Rashed Khan</h2>
              <p className="text-sm">rashed@gmail.com</p>
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-2 py-2 px-8">
            <Link className="hover:text-orange-700">My Learning</Link>
            <Link className="hover:text-orange-700">Notification</Link>
            <Link className="hover:text-orange-700">Message</Link>
          </div>
          <hr />
          <div className="flex flex-col gap-2 py-2 px-8">
            <Link className="hover:text-orange-700">Profile</Link>
            <Link className="hover:text-orange-700">Logout</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
