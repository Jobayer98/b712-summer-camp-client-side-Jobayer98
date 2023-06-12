import Container from "../../../components/shared/Container";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const PopularIns = () => {
  return (
    <Container>
      <div className="my-20">
        <h1 className="text-center text-4xl mb-6 font-bold">
          Meet the Instructors
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center gap-10">
          <div className="w-80 shadow border-[1px] flex flex-col gap-6 items-center rounded-md py-8">
            <img
              className="w-40 h-40 rounded-full"
              src="https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="text-center w-[70%] flex flex-col gap-1">
              <h1 className="font-bold">Instructor Name</h1>
              <p className="text-sm text-gray-400">
                There are many varia of passages the free ipsum lorem
              </p>
              <div className="flex gap-1 items-center justify-center">
                <BsStarFill className="text-yellow-500" />
                <BsStarFill className="text-yellow-500" />
                <BsStarFill className="text-yellow-500" />
                <BsStarFill className="text-yellow-500" />
                <BsStarHalf className="text-yellow-500" />
                <span className="text-sm text-gray-600">4.5</span>
              </div>
            </div>
            <div className="w-[90%] text-center py-2 rounded-lg bg-gray-200 text-xs text-gray-500 flex justify-between items-center px-4">
              <span> 3 courses</span>
              <div className="flex gap-2">
                <FaFacebookF />
                <FaLinkedinIn />
                <FaTwitter />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PopularIns;
