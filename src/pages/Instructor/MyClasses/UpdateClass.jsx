import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useForm } from "react-hook-form";
import Container from "../../../components/shared/Container";
import axios from "axios";

const UpdateClass = () => {
  const { id } = useParams();
  const { register, handleSubmit } = useForm();
  const [data] = useFetch(`http://localhost:3000/myclasses/${id}`);
  const { name, email, instructorName, availableSeats, price, image } = data;

  const onSubmit = (data) => {
    axios
      .put(`http://localhost:3000/myclasses/${id}`, data)
      .then((res) => console.log(res.data))
      .catch((e) => console.log(e));
  };
  return (
    <Container>
      <div className=" flex justify-center my-16">
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md">
          <div className="md:flex md:items-center mb-6">
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
                defaultValue={name}
                {...register("name", { required: true })}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
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
                defaultValue={image}
                name="image"
                {...register("image", { required: true })}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
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
                defaultValue={instructorName}
                name="instructorName"
                {...register("instructorName", { required: true })}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
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
                defaultValue={email}
                name="email"
                {...register("email", { required: true })}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
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
                defaultValue={availableSeats}
                {...register("availableSeats", { required: true })}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
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
                defaultValue={price}
                {...register("price", { required: true })}
              />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3 text-right">
              <button
                className="shadow bg-orange-700 hover:bg-orange-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default UpdateClass;
