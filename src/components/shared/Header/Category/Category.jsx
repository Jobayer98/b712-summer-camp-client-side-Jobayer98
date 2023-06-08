import { Link } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa";
import "./Category.css";

const Category = () => {
  return (
    <div className="relative category py-3 cursor-pointer">
      Category
      <div className="absolute invisible flex flex-col gap-2 bg-white mt-3 px-4 py-4  shadow-md border category_list w-[220px] h-72">
        <div className="flex justify-between sub_category relative">
          <Link className=" hover:text-orange-700 flex-1">English</Link>
          <FaAngleRight />
          <div className="sub_category_list invisible absolute flex flex-col gap-2 -right-[154px] -top-[17px] bg-white pl-4 pr-12 py-4 shadow-md border h-72 border-l-0">
            <Link>Singapore</Link>
            <Link>Austrilia</Link>
            <Link>Bahamas</Link>
            <Link>UK</Link>
            <Link>US</Link>
          </div>
        </div>
        <div className="flex justify-between sub_category relative">
          <Link className=" hover:text-orange-700 flex-1">French</Link>
          <FaAngleRight />
        </div>
        <div className="flex justify-between sub_category relative">
          <Link className=" hover:text-orange-700 flex-1">Arabic</Link>
          <FaAngleRight />

          <div className="sub_category_list invisible absolute flex flex-col gap-2 -right-[156px] -top-[81px] bg-white pl-4 pr-12 py-4 shadow-md border h-72 border-l-0">
            <Link>Saudi Arab</Link>
            <Link>Iran</Link>
            <Link>Iraq</Link>
            <Link>Qatar</Link>
            <Link>UAE</Link>
          </div>
        </div>
        <div className="flex justify-between sub_category relative">
          <Link className=" hover:text-orange-700 flex-1">Portuguese</Link>
          <FaAngleRight />
        </div>
        <div className="flex justify-between sub_category relative">
          <Link className=" hover:text-orange-700 flex-1">German</Link>
          <FaAngleRight />
        </div>
        <div className="flex justify-between sub_category relative">
          <Link className=" hover:text-orange-700 flex-1">Hindi</Link>
          <FaAngleRight />
        </div>
        <div className="flex justify-between sub_category relative">
          <Link className=" hover:text-orange-700 flex-1">Urdu</Link>
          <FaAngleRight />
        </div>
      </div>
    </div>
  );
};

export default Category;
