import Container from "../../../components/shared/Container";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import useFetch from "../../../hooks/useFetch";

const PopularIns = () => {
  const [data] = useFetch(
    "https://b7a12-summer-camp-server-side-jobayer981-jobayer98.vercel.app/instructors"
  );

  const popularIns = data.filter((item) => item.classesTaken >= 2);
  return (
    <Container>
      <div className="my-20 flex flex-col items-center">
        <h1 className="text-center text-4xl mb-6 font-bold">
          Popular Instructors
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {popularIns.map((item) => (
            <div key={item._id}>
              <div className="w-80 shadow border-[1px] flex flex-col gap-6 items-center rounded-md py-8">
                <img
                  className="w-40 h-40 rounded-full"
                  src={item.image}
                  alt=""
                />
                <div className="text-center w-[70%] flex flex-col gap-1">
                  <h1 className="font-bold">{item.name}</h1>
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
                  <span>3</span>
                  <div className="flex gap-2">
                    <FaFacebookF />
                    <FaLinkedinIn />
                    <FaTwitter />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default PopularIns;
