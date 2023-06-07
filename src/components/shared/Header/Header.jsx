//external module
import { BsSearch } from "react-icons/bs";

// internal module
import Container from "../Container";
import Search from "./Search";
import { Link } from "react-router-dom";
import Dashboard from "./UserDashboard/Dashboard";

const Header = () => {
  return (
    <header>
      <Container>
        <div className="flex justify-between items-center gap-8 p-6">
          <div className="w-[10%]">logo</div>
          <div className="w-[40%] relative">
            <BsSearch className="absolute top-[10px] left-3" />
            <Search />
          </div>
          <div className="w-[50%] flex justify-between items-center">
            <Link to="myclasses">My Learning</Link>
            <Dashboard />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
