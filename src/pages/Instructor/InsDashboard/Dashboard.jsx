import Container from "../../../components/shared/Container";
import axios from "axios";
import { useContext, useRef } from "react";
import AuthContext from "../../../context/AuthContext";
import { toast } from "react-hot-toast";

const notify = () => toast.success("Course added");

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const courseName = useRef();
  const image = useRef();
  const instructorName = useRef();
  const availableSeats = useRef();
  const price = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const instructorName = form.instructorName.value;
    const availableSeats = parseFloat(form.availableSeats.value);
    const price = parseFloat(form.price.value);

    const course = {
      name,
      image,
      email: user.email,
      instructorName,
      availableSeats,
      price,
    };
    axios
      .post(
        "https://b7a12-summer-camp-server-side-jobayer981.vercel.app/add-class",
        course
      )
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          notify();
        }
      });
  };

  return (
    <Container>
      <h1 className="text-center bg-purple-300 mt-12 text-3xl">
        Add a new Course
      </h1>
      <div className=" flex justify-center">
        <form onSubmit={handleSubmit} className="max-w-md">
          <div className="md:flex md:items-center mb-2">
            <div className="md:w-1/3">
              <label
                className="block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="class-name"
              >
                Course Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                id="inline-full-name"
                type="text"
                name="name"
                ref={courseName}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-2">
            <div className="md:w-1/3">
              <label
                className="block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="img"
              >
                Course image
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                id=""
                type="url"
                placeholder="http://example.com"
                name="image"
                ref={image}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-2">
            <div className="md:w-1/3">
              <label
                className="block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="insName"
              >
                Instructor Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                id=""
                type=""
                defaultValue={user.displayName || "annonymus"}
                readOnly
                name="instructorName"
                ref={instructorName}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-2">
            <div className="md:w-1/3">
              <label
                className="block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="email"
              >
                Email
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                id=""
                type="email"
                defaultValue={user.email}
                readOnly
                name="email"
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-2">
            <div className="md:w-1/3">
              <label
                className="block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="seat"
              >
                Available Seat
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                id=""
                type="number"
                min="0"
                placeholder=""
                name="availableSeats"
                ref={availableSeats}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-2">
            <div className="md:w-1/3">
              <label
                className="block text-gray-600 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor=""
              >
                Price
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
                id=""
                type="number"
                placeholder="$99"
                min="1"
                name="price"
                ref={price}
              />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3 text-right">
              <button
                className="shadow bg-purple-700 hover:bg-purple-600 focus:shadow-outline focus:outline-none text-white font-bold  px-4 rounded"
                type="submit"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Dashboard;
