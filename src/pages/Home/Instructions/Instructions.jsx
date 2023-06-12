import { Link } from "react-router-dom";
import img1 from "../../../assets/img/inst1.jpg";
import img2 from "../../../assets/img/inst2.jpg";
const Instructions = () => {
  return (
    <div className="flex justify-between items-center overflow-clip">
      <div className="w-1/2">
        <div className="flex flex-col gap-4 mb-8">
          <p className="text-sm text-purple-600 ">Introductions</p>
          <h1 className="text-4xl font-semibold ">
            Start Learning With Global <br /> Speak Now
          </h1>
          <p className="text-gray-400 text-sm">
            There are many variations of passages of lorem ipsum available but
            the majority have suffered alteration in some form by injected
            humour or randomised words which {"don't"} look.
          </p>
        </div>
        <div className="flex ">
          <div className="flex gap-4 items-center">
            <img className="w-20 h-20 bg-gray-400" src="" alt="" />
            <p className="w-1/2 font-semibold">
              Start Learining form our experts trainer
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <img className="w-20 h-20 bg-gray-400" src="" alt="" />
            <p className="w-1/2 font-semibold">Talk with people fluency</p>
          </div>
        </div>
        <Link
          to="/allcourses"
          className="w-52 rounded-md bg-purple-700 mt-10 px-4 py-[14px] text-xs tracking-widest font-bold flex justify-center items-center text-white uppercase cursor-pointer"
        >
          View All Course
        </Link>
      </div>
      <div className="relative ">
        <img
          className="img rounded-lg h-[550px] hover:scale-110 transition-all ease-linear duration-1000"
          src={img1}
          alt=""
        />
        <img
          className="absolute bottom-0 -left-10 h-52 rounded-lg hover:scale-110 transition-all ease-linear duration-1000"
          src={img2}
          alt=""
        />
      </div>
    </div>
  );
};

export default Instructions;
